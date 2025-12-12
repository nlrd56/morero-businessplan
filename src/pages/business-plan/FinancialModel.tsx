export const title = "Financial Model";
export const lastUpdated = "23/05/2025 14:30";

import { useState } from 'react';

export default function FinancialModel() {
  const [activeTab, setActiveTab] = useState('assumptions');

  const tabs = [
    { key: 'assumptions', label: 'Assumptions' },
    { key: 'funnel', label: 'Marketing Funnel' },
    { key: 'actuals', label: 'Actuals' },
    { key: 'costs', label: 'Costs' },
    { key: 'revenue', label: 'Revenue/Income' },
  ];

  const tabData = {
    assumptions: {
      granularity: '1/month',
      purpose: 'Inputs/drivers, scenarios',
      description: 'Key financial drivers and assumptions that feed into the model'
    },
    funnel: {
      granularity: '1/month',
      purpose: 'Target funnel maths & planned budget',
      description: 'Marketing funnel targets and budget allocation'
    },
    actuals: {
      granularity: '1/month',
      purpose: 'Track actual volumes and outcomes',
      description: 'Real performance data compared to targets'
    },
    costs: {
      granularity: '1/month, per type',
      purpose: 'Track spend in detail (planned and actual)',
      description: 'Detailed cost tracking by category and type'
    },
    revenue: {
      granularity: '1/month',
      purpose: 'Track revenue forecasts and outcomes',
      description: 'Revenue projections and actual performance'
    }
  };

  return (
    <div>     
      {/* Tab Navigation */}
      <div className="flex mb-0">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 text-sm transition-colors select-none
              ${activeTab === tab.key
                ? 'bg-[#35353A] text-orange-500 rounded-t-lg shadow-sm z-10 border-transparent'
                : 'text-gray-300 hover:text-white border border-white/20'}
              ${index === 0 ? 'ml-0' : '-ml-2'}
              relative
            `}
            style={{
              borderTopLeftRadius: activeTab === tab.key ? '16px' : undefined,
              borderTopRightRadius: activeTab === tab.key ? '16px' : undefined,
              background: activeTab === tab.key ? '#35353A' : 'transparent',
              zIndex: activeTab === tab.key ? 2 : 1,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area visually connected to active tab */}
      <div className="rounded-t-none rounded-b-lg p-6 mt-0 bg-[#232323]" style={{marginTop: '-2px'}}>
        {activeTab && (
          <div>
            {/* Table Header */}
            <table className="w-full mb-6">
              <tbody>
                <tr>
                  <td className="w-1/3 text-gray-400 font-medium">Table</td>
                  <td className="w-1/3 text-gray-400 font-medium">Record Granularity</td>
                  <td className="w-1/3 text-gray-400 font-medium">Key Purpose</td>
                </tr>
                <tr>
                  <td className="text-white font-medium">{tabs.find(t => t.key === activeTab)?.label}</td>
                  <td className="text-white">{tabData[activeTab as keyof typeof tabData].granularity}</td>
                  <td className="text-white">{tabData[activeTab as keyof typeof tabData].purpose}</td>
                </tr>
              </tbody>
            </table>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-white font-medium mb-2">Description</h3>
              <p className="text-gray-300">{tabData[activeTab as keyof typeof tabData].description}</p>
            </div>

            {/* Content Area */}
            <div className="p-4 min-h-[400px]">
              <div className="text-gray-400 text-center py-8">
                {activeTab === 'assumptions' && (
                  <div>
                    <h4 className="text-white mb-4">Financial Assumptions</h4>
                    <p>Growth rates, conversion rates, pricing assumptions, and scenario planning</p>
                  </div>
                )}
                {activeTab === 'funnel' && (
                  <div>
                    <h4 className="text-white mb-4">Marketing Funnel</h4>
                    <p>Lead generation targets, conversion rates, and budget allocation across channels</p>
                  </div>
                )}
                {activeTab === 'actuals' && (
                  <div>
                    <h4 className="text-white mb-4">Actual Performance</h4>
                    <p>Real data tracking against targets and forecasts</p>
                  </div>
                )}
                {activeTab === 'costs' && (
                  <div>
                    <h4 className="text-white mb-4">Cost Management</h4>
                    <p>Detailed cost tracking by category, planned vs actual spend</p>
                  </div>
                )}
                {activeTab === 'revenue' && (
                  <div>
                    <h4 className="text-white mb-4">Revenue Tracking</h4>
                    <p>Revenue forecasts, actual performance, and variance analysis</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 