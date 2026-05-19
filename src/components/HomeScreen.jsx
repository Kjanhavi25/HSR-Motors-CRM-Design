import React from 'react';

const HomeScreen = ({ setCurrentScreen }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Section */}
      <div className="bg-primary text-white rounded-xl p-8 flex flex-col md:flex-row justify-between items-center shadow-sm">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome to AutoLead Pro</h1>
          <p className="text-blue-100 text-lg">Hello Alex, here's what's happening with your leads today.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <button 
            onClick={() => setCurrentScreen('listing')}
            className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
          >
            Go to Leads
          </button>
        </div>
      </div>

      {/* Quick Overview */}
      <div>
        <h2 className="text-xl font-bold mb-4">Your Daily Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 flex flex-col gap-2">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center text-2xl mb-2">
              🔥
            </div>
            <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Hot Leads to Call</div>
            <div className="text-3xl font-bold">12</div>
          </div>
          
          <div className="card p-6 flex flex-col gap-2">
            <div className="w-12 h-12 bg-yellow-100 text-warning rounded-full flex items-center justify-center text-2xl mb-2">
              📅
            </div>
            <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Follow-ups Today</div>
            <div className="text-3xl font-bold">8</div>
          </div>
          
          <div className="card p-6 flex flex-col gap-2">
            <div className="w-12 h-12 bg-green-100 text-success rounded-full flex items-center justify-center text-2xl mb-2">
              🏆
            </div>
            <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Conversions This Week</div>
            <div className="text-3xl font-bold">5</div>
          </div>
        </div>
      </div>

      {/* Quick Actions & Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setCurrentScreen('listing')}
              className="flex items-center gap-3 p-4 border border-[#E2E8F0] rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">➕</div>
              <div>
                <div className="font-bold">Add a New Lead</div>
                <div className="text-xs text-on-surface-variant">Manually enter lead information</div>
              </div>
            </button>
            <button 
              onClick={() => setCurrentScreen('management')}
              className="flex items-center gap-3 p-4 border border-[#E2E8F0] rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">⚙️</div>
              <div>
                <div className="font-bold">Manage Rules</div>
                <div className="text-xs text-on-surface-variant">Update auto-assignment workflows</div>
              </div>
            </button>
            <button 
              onClick={() => setCurrentScreen('dashboard')}
              className="flex items-center gap-3 p-4 border border-[#E2E8F0] rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">📊</div>
              <div>
                <div className="font-bold">View Analytics</div>
                <div className="text-xs text-on-surface-variant">Check dealership performance</div>
              </div>
            </button>
          </div>
        </div>

        <div className="card p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Leads</h2>
            <button 
              onClick={() => setCurrentScreen('listing')}
              className="text-sm font-bold text-primary hover:underline"
            >
              View All
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold">AJ</div>
                <div>
                  <div className="font-bold text-sm">Alice Johnson</div>
                  <div className="text-xs text-on-surface-variant">Facebook Ads • 2h ago</div>
                </div>
              </div>
              <span className="status-badge status-new">New</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold">BS</div>
                <div>
                  <div className="font-bold text-sm">Bob Smith</div>
                  <div className="text-xs text-on-surface-variant">Google Ads • 4h ago</div>
                </div>
              </div>
              <span className="status-badge status-contacted">Contacted</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 text-success flex items-center justify-center font-bold">CD</div>
                <div>
                  <div className="font-bold text-sm">Charlie Davis</div>
                  <div className="text-xs text-on-surface-variant">Website • 1d ago</div>
                </div>
              </div>
              <span className="status-badge status-interested">Interested</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
