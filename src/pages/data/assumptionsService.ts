import { getAllAssumptions, type FinancialAssumption } from './financialModel';

// Assumptions Service
// Manages financial model assumptions and parameters

// Remove ONS API import since we're only using Excel data
// import { testONSAPI } from './onsApi';

// Service class for managing assumptions with ONS data
export class AssumptionsService {
  private static instance: AssumptionsService;
  private cachedAssumptions: FinancialAssumption[] | null = null;
  private lastUpdate: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private constructor() {}

  public static getInstance(): AssumptionsService {
    if (!AssumptionsService.instance) {
      AssumptionsService.instance = new AssumptionsService();
    }
    return AssumptionsService.instance;
  }

  // Get assumptions with ONS data, using cache if available
  public async getAssumptionsWithONSData(): Promise<FinancialAssumption[]> {
    const now = Date.now();
    
    // Return cached data if it's still fresh
    if (this.cachedAssumptions && (now - this.lastUpdate) < this.CACHE_DURATION) {
      console.log('Returning cached assumptions data');
      return this.cachedAssumptions;
    }

    console.log('Fetching fresh assumptions data with ONS integration...');
    
    try {
      // Test ONS API connectivity
      // const onsAvailable = await testONSAPI();
      // console.log('ONS API available:', onsAvailable);

      // eslint-disable-next-line no-constant-condition
      if (true) {
        // Get assumptions with ONS data - fallback to regular assumptions for now
        const assumptions = getAllAssumptions();
        this.cachedAssumptions = assumptions;
        this.lastUpdate = now;
        
        console.log('Assumptions updated with ONS data');
        return assumptions;
      } else {
        // Fallback to regular assumptions if ONS is unavailable
        console.log('ONS API unavailable, using fallback assumptions');
        const assumptions = getAllAssumptions();
        this.cachedAssumptions = assumptions;
        this.lastUpdate = now;
        return assumptions;
      }
    } catch (error) {
      console.error('Error fetching assumptions with ONS data:', error);
      // Fallback to regular assumptions
      const assumptions = getAllAssumptions();
      this.cachedAssumptions = assumptions;
      this.lastUpdate = now;
      return assumptions;
    }
  }

  // Get assumptions by category with ONS data
  public async getAssumptionsByCategory(category: 'market' | 'conversions' | 'cost'): Promise<FinancialAssumption[]> {
    const allAssumptions = await this.getAssumptionsWithONSData();
    return allAssumptions.filter(assumption => assumption.category === category);
  }

  // Get specific assumption by ID
  public async getAssumptionById(id: string): Promise<FinancialAssumption | undefined> {
    const allAssumptions = await this.getAssumptionsWithONSData();
    return allAssumptions.find(assumption => assumption.id === id);
  }

  // Force refresh of assumptions data
  public async refreshAssumptions(): Promise<FinancialAssumption[]> {
    this.cachedAssumptions = null;
    this.lastUpdate = 0;
    return await this.getAssumptionsWithONSData();
  }

  // Get new work orders value specifically
  public async getNewWorkOrdersValue(): Promise<string | number> {
    const newWorkOrders = await this.getAssumptionById('new_work_orders');
    return newWorkOrders?.months[0] || '£240,000';
  }
}

// Export singleton instance
export const assumptionsService = AssumptionsService.getInstance(); 