import React from 'react';

const LeadManagement = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Workflow Management</h1>
        <button className="btn-primary">Create New Rule</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Rules & Workload */}
        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <h2 className="text-lg font-bold mb-4">Auto-Assignment Rules</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 border border-[#E2E8F0] rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <div className="font-semibold text-sm">Website Leads Router</div>
                  <div className="text-xs text-on-surface-variant mt-1">If Source = 'Website' → Auto assign to available agent (Round Robin)</div>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked/>
                  <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                </div>
              </div>

              <div className="p-4 border border-[#E2E8F0] rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-semibold text-sm">High-Value Facebook Leads</div>
                  <div className="text-xs text-on-surface-variant mt-1">If Source = 'Facebook' AND HasPhone = True → Assign to 'Senior Sales Team'</div>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300"/>
                  <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold mb-4">Team Workload Distribution</h2>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Alex Sales (Senior)</span>
                  <span className="text-on-surface-variant">24 Active Leads</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="text-xs text-warning mt-1 text-right">Near Capacity</div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Sam Rivera</span>
                  <span className="text-on-surface-variant">12 Active Leads</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
                <div className="text-xs text-success mt-1 text-right">Available</div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Jamie Lee</span>
                  <span className="text-on-surface-variant">18 Active Leads</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <div className="text-xs text-on-surface-variant mt-1 text-right">Optimal Load</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bulk Actions & Reminders */}
        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <h2 className="text-lg font-bold mb-4">Bulk Update Leads</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-primary">
                Select criteria to update multiple leads simultaneously. This action cannot be undone.
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">1. Select Target Leads</label>
                <div className="grid grid-cols-2 gap-3">
                  <select className="input-field">
                    <option>Status: New</option>
                    <option>Status: Contacted</option>
                  </select>
                  <select className="input-field">
                    <option>Older than 7 days</option>
                    <option>Older than 30 days</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <label className="text-sm font-semibold">2. Action to Perform</label>
                <select className="input-field">
                  <option>Change Status To: Not Interested</option>
                  <option>Re-assign To: Sam Rivera</option>
                </select>
              </div>

              <button className="btn-primary mt-2">Execute Bulk Update (14 Leads)</button>
            </div>
          </div>

          <div className="card p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Follow-up Reminders</h2>
              <span className="status-badge bg-red-100 text-red-800">3 Overdue</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="p-3 border-l-4 border-l-danger bg-white border border-[#E2E8F0] shadow-sm rounded flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold">Call John Doe</div>
                  <div className="text-xs text-danger mt-0.5">Overdue by 2 hours</div>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">View Lead</button>
              </div>
              
              <div className="p-3 border-l-4 border-l-warning bg-white border border-[#E2E8F0] shadow-sm rounded flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold">Send Quote to Emma</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">Today at 4:00 PM</div>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">View Lead</button>
              </div>
              
              <div className="p-3 border-l-4 border-l-gray-300 bg-white border border-[#E2E8F0] shadow-sm rounded flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold">Follow up with Mark</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">Tomorrow morning</div>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">View Lead</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;
