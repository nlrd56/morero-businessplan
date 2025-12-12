// Market Data Service - Flexible data source integration
// Supports multiple data providers since ONS API was decommissioned

import Papa from 'papaparse';

export interface MarketDataPoint {
  date: string;
  value: number;
  label: string;
  unit: string;
  source: string;
}

export interface MarketData {
  newWorkOrders: MarketDataPoint[];
  marketGrowth: MarketDataPoint[];
  lastUpdated: string;
  dataSource: string;
}

// Data source types
export type DataSource = 'manual' | 'csv' | 'api' | 'mock' | 'excel';

// Configuration for different data sources
export interface DataSourceConfig {
  type: DataSource;
  name: string;
  enabled: boolean;
  priority: number; // Higher number = higher priority
}

// Base data provider interface
export interface DataProvider {
  name: string;
  enabled: boolean;
  fetchNewWorkOrders(): Promise<MarketDataPoint[]>;
  fetchMarketGrowth(): Promise<MarketDataPoint[]>;
  isAvailable(): Promise<boolean>;
}

// Simple CSV Parser (no external dependencies)
function parseCSV(csvText: string): any[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  
  // Parse headers
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  // Parse data rows
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Simple CSV parsing (handles basic cases)
    const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
    const row: any = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    data.push(row);
  }
  
  return data;
}

// CSV Data Provider
class CSVDataProvider implements DataProvider {
  name = 'CSV Data';
  enabled = true;
  private csvData: { period: string; newWork: number; growth: number; date: string }[] = [];

  async isAvailable(): Promise<boolean> {
    try {
      await this.loadCSVData();
      return this.csvData.length > 0;
    } catch (error) {
      console.error('CSVDataProvider: Error checking availability:', error);
      return false;
    }
  }

  private async loadCSVData(): Promise<void> {
    if (this.csvData.length > 0) {
      console.log('CSVDataProvider: Data already loaded, returning cached data');
      return;
    }

    try {
      console.log('CSVDataProvider: Loading CSV data from bulletindataset7.csv...');
      
      const response = await fetch('/bulletindataset7.csv');
      if (!response.ok) {
        throw new Error(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
      }
      
      const csvText = await response.text();
      console.log('CSVDataProvider: CSV content loaded, length:', csvText.length);
      
      const parsedData = parseCSV(csvText);
      console.log('CSVDataProvider: Parsed CSV data:', parsedData);
      
      // Extract data from CSV rows
      this.csvData = parsedData.map((row, index) => {
        console.log(`CSVDataProvider: Processing row ${index}:`, row);
        
        // Find the correct columns by matching headers
        const period = row['Time period'] || row['time period'] || row['Time Period'];
        const newWorkStr = row['All new work'] || row['all new work'] || row['All New Work'];
        const growthStr = row['Period on period growths (%)'] || row['period on period growths (%)'] || row['Growth (%)'];
        
        console.log(`CSVDataProvider: Extracted values - period: "${period}", newWork: "${newWorkStr}", growth: "${growthStr}"`);
        
        // Parse numbers, handling commas and percentage signs
        const newWork = Number((newWorkStr || '').toString().replace(/,/g, ''));
        const growth = parseFloat((growthStr || '').toString().replace('%', '').replace(/,/g, ''));
        
        // Parse date from period (e.g., "Oct to Dec 2023" -> "2023-12-31")
        let date = '';
        if (period) {
          const rangeMatch = period.match(/([A-Za-z]+) to ([A-Za-z]+) (\d{4})/);
          if (rangeMatch) {
            const [, , endMonth, yearStr] = rangeMatch;
            const monthMap: { [key: string]: number } = {
              'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
              'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
            };
            const endMonthNum = monthMap[endMonth.toLowerCase()];
            if (endMonthNum !== undefined) {
              date = new Date(parseInt(yearStr), endMonthNum, 1).toISOString().split('T')[0];
            }
          }
        }
        
        return {
          period: period || '',
          newWork: isNaN(newWork) ? 0 : newWork,
          growth: isNaN(growth) ? 0 : growth,
          date: date
        };
      }).filter(row => row.period && (row.newWork > 0 || row.growth !== 0));
      
      console.log('CSVDataProvider: Processed data:', this.csvData);
      
      // Sort by date and take last 6 quarters
      this.csvData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      this.csvData = this.csvData.slice(-6);
      
      console.log('CSVDataProvider: Final filtered data (last 6 quarters):', this.csvData);
      
    } catch (error) {
      console.error('CSVDataProvider: Error loading CSV data:', error);
      throw error;
    }
  }

  async fetchNewWorkOrders(): Promise<MarketDataPoint[]> {
    await this.loadCSVData();
    
    return this.csvData.map(item => ({
      date: item.date,
      value: item.newWork,
      label: 'New Work Orders',
      unit: '£ million',
      source: 'CSV Data'
    }));
  }

  async fetchMarketGrowth(): Promise<MarketDataPoint[]> {
    await this.loadCSVData();
    
    return this.csvData.map(item => ({
      date: item.date,
      value: item.growth,
      label: 'Market Growth Rate',
      unit: '%',
      source: 'CSV Data'
    }));
  }
}

// Main market data service
export class MarketDataService {
  private static instance: MarketDataService;
  private providers: DataProvider[] = [];
  private cachedData: MarketData | null = null;
  private lastUpdate: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private constructor() {
    // Only use CSV provider
    this.providers = [new CSVDataProvider()];
  }

  static getInstance(): MarketDataService {
    if (!MarketDataService.instance) {
      MarketDataService.instance = new MarketDataService();
    }
    return MarketDataService.instance;
  }

  // Get market data from the best available source
  async getMarketData(): Promise<MarketData> {
    const now = Date.now();
    
    // Return cached data if it's still fresh
    if (this.cachedData && (now - this.lastUpdate) < this.CACHE_DURATION) {
      console.log('MarketDataService: Returning cached data');
      return this.cachedData;
    }

    console.log('MarketDataService: Loading fresh market data...');
    
    // Find available provider
    const availableProvider = this.providers.find(provider => provider.enabled);
    
    if (!availableProvider) {
      throw new Error('No data providers available');
    }

    console.log(`MarketDataService: Using provider: ${availableProvider.name}`);

    try {
      const [newWorkOrders, marketGrowth] = await Promise.all([
        availableProvider.fetchNewWorkOrders(),
        availableProvider.fetchMarketGrowth()
      ]);

      this.cachedData = {
        newWorkOrders,
        marketGrowth,
        lastUpdated: new Date().toISOString(),
        dataSource: availableProvider.name
      };

      this.lastUpdate = now;
      
      console.log('MarketDataService: Data loaded successfully:', this.cachedData);
      
      return this.cachedData;
    } catch (error) {
      console.error('MarketDataService: Error loading market data:', error);
      throw error;
    }
  }

  // Get available data sources
  getAvailableProviders(): DataProvider[] {
    return this.providers.filter(p => p.enabled);
  }

  // Enable/disable providers
  setProviderEnabled(providerName: string, enabled: boolean): void {
    const provider = this.providers.find(p => p.name === providerName);
    if (provider) {
      provider.enabled = enabled;
      // Clear cache to force refresh
      this.cachedData = null;
      this.lastUpdate = 0;
    }
  }

  // Force refresh
  async refresh(): Promise<MarketData> {
    this.cachedData = null;
    this.lastUpdate = 0;
    return await this.getMarketData();
  }
}

// Export singleton instance
export const marketDataService = MarketDataService.getInstance();

export const getQuarterlyData = async (): Promise<QuarterlyData[]> => {
  try {
    const response = await fetch('/bulletindataset7.csv');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    const result = Papa.parse(csvText, { header: true });
    
    if (result.errors.length > 0) {
      console.error('CSV parsing errors:', result.errors);
    }
    
    const data = result.data as any[];
    
    // Transform the data to match our expected format
    const transformedData: QuarterlyData[] = data.map((row: any) => {
      // Extract quarter from the first column (assuming it's named something like "Quarter" or "Period")
      const quarterKey = Object.keys(row)[0];
      const quarter = row[quarterKey];
      
      // Extract all numeric values for the quarters
      const quarters: { [key: string]: number } = {};
      
      Object.keys(row).forEach(key => {
        if (key !== quarterKey) {
          const value = parseFloat(row[key]);
          if (!isNaN(value)) {
            quarters[key] = value;
          }
        }
      });
      
      return {
        quarter,
        ...quarters
      };
    }).filter(item => item.quarter && Object.keys(item).length > 1);
    
    return transformedData;
  } catch (error) {
    console.error('Error loading quarterly data:', error);
    return [];
  }
};

export const getMonthlyData = async (): Promise<MonthlyData[]> => {
  try {
    const response = await fetch('/bulletindataset7.csv');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    const result = Papa.parse(csvText, { header: true });
    
    if (result.errors.length > 0) {
      console.error('CSV parsing errors:', result.errors);
    }
    
    const data = result.data as any[];
    
    // Transform the data to monthly format
    const transformedData: MonthlyData[] = data.map((row: any) => {
      const quarterKey = Object.keys(row)[0];
      const quarter = row[quarterKey];
      
      // For now, we'll use the quarter as the month since we don't have monthly breakdown
      // In a real scenario, you'd want to distribute quarterly data across months
      const month = quarter;
      
      const monthlyValues: { [key: string]: number } = {};
      
      Object.keys(row).forEach(key => {
        if (key !== quarterKey) {
          const value = parseFloat(row[key]);
          if (!isNaN(value)) {
            // Distribute quarterly value across months (simple division by 3)
            monthlyValues[key] = value / 3;
          }
        }
      });
      
      return {
        month,
        ...monthlyValues
      };
    }).filter(item => item.month && Object.keys(item).length > 1);
    
    return transformedData;
  } catch (error) {
    console.error('Error loading monthly data:', error);
    return [];
  }
};

export interface QuarterlyData {
  quarter: string;
  [key: string]: number | string;
}

export interface MonthlyData {
  month: string;
  [key: string]: number | string;
} 