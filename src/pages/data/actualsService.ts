// Actuals Service
// Manages actual financial data and historical performance

import { marketDataService } from './marketDataService';

export interface ActualsDataPoint {
  date: string;
  value: number;
  label: string;
  unit: string;
}

export interface MarketActuals {
  newWorkOrders: ActualsDataPoint[];
  marketGrowth: ActualsDataPoint[];
  lastUpdated: string;
}

export class ActualsService {
  private static instance: ActualsService;
  private cachedActuals: MarketActuals | null = null;
  private lastUpdate: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private constructor() {}

  public static getInstance(): ActualsService {
    if (!ActualsService.instance) {
      ActualsService.instance = new ActualsService();
    }
    return ActualsService.instance;
  }

  // Get actuals data from market data service
  public async getMarketActuals(): Promise<MarketActuals> {
    const now = Date.now();
    
    // Return cached data if it's still fresh
    if (this.cachedActuals && (now - this.lastUpdate) < this.CACHE_DURATION) {
      console.log('Returning cached actuals data');
      return this.cachedActuals;
    }

    console.log('Fetching fresh actuals data from market data service...');
    
    try {
      // Get data from market data service (which uses Excel)
      const marketData = await marketDataService.getMarketData();
      
      console.log('Market data received:', marketData);
      console.log('New work orders count:', marketData.newWorkOrders?.length || 0);
      console.log('Market growth count:', marketData.marketGrowth?.length || 0);

      const actuals: MarketActuals = {
        newWorkOrders: marketData.newWorkOrders,
        marketGrowth: marketData.marketGrowth,
        lastUpdated: new Date().toISOString()
      };

      this.cachedActuals = actuals;
      this.lastUpdate = now;
      
      console.log('Final actuals data:', actuals);
      return actuals;
    } catch (error) {
      console.error('Error fetching actuals data:', error);
      throw error;
    }
  }

  // Get latest actuals values
  public async getLatestActuals(): Promise<{
    newWorkOrders: number;
    marketGrowth: number;
  }> {
    const actuals = await this.getMarketActuals();
    
    const latestNewWorkOrders = actuals.newWorkOrders.length > 0 
      ? actuals.newWorkOrders[actuals.newWorkOrders.length - 1].value 
      : 0;
    
    const latestMarketGrowth = actuals.marketGrowth.length > 0 
      ? actuals.marketGrowth[actuals.marketGrowth.length - 1].value 
      : 0;
    
    return {
      newWorkOrders: latestNewWorkOrders,
      marketGrowth: latestMarketGrowth
    };
  }

  // Force refresh of actuals data
  public async refreshActuals(): Promise<MarketActuals> {
    this.cachedActuals = null;
    this.lastUpdate = 0;
    return await this.getMarketActuals();
  }
}

// Export singleton instance
export const actualsService = ActualsService.getInstance(); 