// Directus API Service for fetching ONS data
// Base URL: https://api.morero.io

export interface ONSDataRecord {
  id: string;
  date: string;
  new_work_orders: number;
  growth_rate: number;
  period: string;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface DirectusResponse<T> {
  data: T[];
  meta?: {
    total_count?: number;
    filter_count?: number;
  };
}

class DirectusApiService {
  private baseUrl = 'https://api.morero.io';

  /**
   * Fetch ONS data from Directus API
   */
  async fetchONSData(): Promise<ONSDataRecord[]> {
    try {
      console.log('Fetching ONS data from Directus API...');
      
      const response = await fetch(`${this.baseUrl}/items/onsdata`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: DirectusResponse<ONSDataRecord> = await response.json();
      
      console.log('ONS data received:', result.data);
      
      return result.data || [];
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }

  /**
   * Fetch ONS data with optional filtering
   */
  async fetchONSDataWithFilter(filter?: Record<string, any>): Promise<ONSDataRecord[]> {
    try {
      console.log('Fetching ONS data with filter:', filter);
      
      let url = `${this.baseUrl}/items/onsdata`;
      
      if (filter) {
        const params = new URLSearchParams();
        Object.entries(filter).forEach(([key, value]) => {
          params.append(`filter[${key}][_eq]`, value.toString());
        });
        url += `?${params.toString()}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: DirectusResponse<ONSDataRecord> = await response.json();
      
      console.log('Filtered ONS data received:', result.data);
      
      return result.data || [];
    } catch (error) {
      console.error('API fetch error with filter:', error);
      throw error;
    }
  }

  /**
   * Fetch latest ONS data (most recent records)
   */
  async fetchLatestONSData(limit: number = 6): Promise<ONSDataRecord[]> {
    try {
      console.log(`Fetching latest ${limit} ONS data records...`);
      
      const url = `${this.baseUrl}/items/onsdata?sort=-date&limit=${limit}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: DirectusResponse<ONSDataRecord> = await response.json();
      
      console.log('Latest ONS data received:', result.data);
      
      return result.data || [];
    } catch (error) {
      console.error('API fetch error for latest data:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const directusApiService = new DirectusApiService();

// Export default for convenience
export default directusApiService; 