import React from 'react';

const BusinessDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Business Dashboard</h1>
        <div className="flex gap-2">
          <select className="input-field">
            <option>Last 30 Days</option>
            <option>This Month</option>
            <option>This Quarter</option>
          </select>
          <button className="btn-secondary">Export Report</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 border-l-4 border-l-primary">
          <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Total Leads</div>
          <div className="text-3xl font-bold text-on-surface">1,284</div>
          <div className="text-xs text-success mt-2 font-medium flex items-center gap-1">
            <span>↑ 12%</span> vs last period
          </div>
        </div>
        
        <div className="card p-6 border-l-4 border-l-success">
          <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Conversion Rate</div>
          <div className="text-3xl font-bold text-on-surface">18.5%</div>
          <div className="text-xs text-success mt-2 font-medium flex items-center gap-1">
            <span>↑ 2.1%</span> vs last period
          </div>
        </div>
        
        <div className="card p-6 border-l-4 border-l-warning">
          <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Avg Response Time</div>
          <div className="text-3xl font-bold text-on-surface">42m</div>
          <div className="text-xs text-danger mt-2 font-medium flex items-center gap-1">
            <span>↓ 5m</span> vs last period
          </div>
        </div>
        
        <div className="card p-6 border-l-4 border-l-gray-400">
          <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Lost Leads</div>
          <div className="text-3xl font-bold text-on-surface">142</div>
          <div className="text-xs text-success mt-2 font-medium flex items-center gap-1">
            <span>↓ 8%</span> vs last period
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card p-6 min-h-[300px] flex flex-col">
            <h2 className="text-lg font-bold mb-6">Lead Sources Breakdown</h2>
            <div className="flex-1 flex items-end gap-4 border-b border-[#E2E8F0] pb-2 relative">
              {/* Mock Bar Chart */}
              <div className="flex-1 flex flex-col items-center justify-end gap-2 group">
                <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">450</div>
                <div className="w-16 bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-600" style={{height: '80%'}}></div>
                <div className="text-xs font-medium text-on-surface-variant mt-2">Facebook</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-end gap-2 group">
                <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">320</div>
                <div className="w-16 bg-green-500 rounded-t-sm transition-all duration-500 hover:bg-green-600" style={{height: '60%'}}></div>
                <div className="text-xs font-medium text-on-surface-variant mt-2">Google Ads</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-end gap-2 group">
                <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">280</div>
                <div className="w-16 bg-purple-500 rounded-t-sm transition-all duration-500 hover:bg-purple-600" style={{height: '50%'}}></div>
                <div className="text-xs font-medium text-on-surface-variant mt-2">Website</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-end gap-2 group">
                <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">110</div>
                <div className="w-16 bg-orange-500 rounded-t-sm transition-all duration-500 hover:bg-orange-600" style={{height: '30%'}}></div>
                <div className="text-xs font-medium text-on-surface-variant mt-2">Offline</div>
              </div>
              
              {/* Y-axis lines */}
              <div className="absolute top-0 w-full border-t border-dashed border-[#E2E8F0] -z-10"></div>
              <div className="absolute top-1/3 w-full border-t border-dashed border-[#E2E8F0] -z-10"></div>
              <div className="absolute top-2/3 w-full border-t border-dashed border-[#E2E8F0] -z-10"></div>
            </div>
          </div>
          
          <div className="card p-6">
             <h2 className="text-lg font-bold mb-4">Status Distribution</h2>
             <div className="flex items-center gap-6">
                {/* Accurate Doughnut Chart (CSS conic-gradient implementation) */}
                <div 
                  className="w-40 h-40 rounded-full relative flex items-center justify-center"
                  style={{
                    background: 'conic-gradient(#2563eb 0% 45%, #facc15 45% 70%, #10b981 70% 90%, #ef4444 90% 100%)'
                  }}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center absolute z-10">
                    <span className="font-bold text-xl">1.2K</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-full"></div> New</div>
                    <div className="font-bold">45%</div>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-400 rounded-full"></div> Contacted</div>
                    <div className="font-bold">25%</div>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-success rounded-full"></div> Converted</div>
                    <div className="font-bold">20%</div>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-danger rounded-full"></div> Lost</div>
                    <div className="font-bold">10%</div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="card p-6">
          <h2 className="text-lg font-bold mb-6">Sales Leaderboard</h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-600 text-sm">1</div>
              <div className="flex-1">
                <div className="text-sm font-bold">Alex Sales</div>
                <div className="text-xs text-on-surface-variant">42 Conversions</div>
              </div>
              <div className="text-sm font-bold text-success">24% CR</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-sm">2</div>
              <div className="flex-1">
                <div className="text-sm font-bold">Sam Rivera</div>
                <div className="text-xs text-on-surface-variant">38 Conversions</div>
              </div>
              <div className="text-sm font-bold text-success">21% CR</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">3</div>
              <div className="flex-1">
                <div className="text-sm font-bold">Jamie Lee</div>
                <div className="text-xs text-on-surface-variant">31 Conversions</div>
              </div>
              <div className="text-sm font-bold text-success">18% CR</div>
            </div>
            
            <div className="flex items-center gap-4 mt-2">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-400 text-sm">4</div>
              <div className="flex-1">
                <div className="text-sm font-bold">Jordan Smith</div>
                <div className="text-xs text-on-surface-variant">25 Conversions</div>
              </div>
              <div className="text-sm font-bold text-success">15% CR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
