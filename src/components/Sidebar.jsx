import React from 'react';

const Sidebar = ({ currentScreen, setCurrentScreen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'listing', label: 'Lead Listing', icon: '📋' },
    { id: 'details', label: 'Lead Details', icon: '👤' },
    { id: 'management', label: 'Management', icon: '⚙️' },
    { id: 'dashboard', label: 'Business Dashboard', icon: '📊' },
  ];

  return (
    <aside className="fixed left-0 top-0 w-sidebar h-screen bg-surface border-r border-[#E2E8F0] flex flex-col">
      <div className="p-6 flex items-center gap-3 border-b border-[#E2E8F0]">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold">
          AP
        </div>
        <span className="font-bold text-lg text-on-surface">AutoLead Pro</span>
      </div>
      
      <nav className="flex-1 p-4 flex flex-col gap-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
              currentScreen === item.id 
                ? 'bg-blue-50 text-primary' 
                : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      
      <div className="p-6 border-t border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="text-sm font-medium text-on-surface">Alex Sales</div>
            <div className="text-xs text-on-surface-variant">Sales Manager</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
