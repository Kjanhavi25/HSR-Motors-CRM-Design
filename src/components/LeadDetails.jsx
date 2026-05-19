import React from 'react';

const LeadDetails = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary">← Back</button>
          <h1 className="text-2xl font-bold">Lead Details</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">Mark Lost</button>
          <button className="btn-primary bg-success hover:bg-green-600">Convert Lead</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Customer Profile */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-4 border-b border-[#E2E8F0] pb-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-primary text-2xl font-bold">
                AJ
              </div>
              <div>
                <h2 className="text-xl font-bold">Alice Johnson</h2>
                <div className="text-sm text-on-surface-variant mt-1 flex items-center gap-2">
                  <span className="status-badge status-new">New</span>
                  <span className="text-warning">🔥 Hot Lead</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Contact Info</div>
                <div className="text-sm text-on-surface">alice.j@example.com</div>
                <div className="text-sm text-on-surface mt-1">+1 555-0101</div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Lead Source</div>
                <div className="text-sm text-on-surface flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1877F2]"></span> Facebook Ads
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Assigned To</div>
                <div className="text-sm text-on-surface">Alex Sales</div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="btn-secondary w-full flex justify-center items-center gap-2">
                📞 Click to Call
              </button>
              <button className="btn-secondary w-full flex justify-center items-center gap-2">
                ✉️ Send Email
              </button>
              <button className="btn-secondary w-full flex justify-center items-center gap-2">
                📅 Schedule Follow-up
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline and Notes */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card p-6 flex flex-col h-full">
            <div className="border-b border-[#E2E8F0] pb-4 mb-4 flex gap-6">
              <button className="font-bold text-primary border-b-2 border-primary pb-4 -mb-[17px]">Activity Timeline</button>
              <button className="font-bold text-on-surface-variant hover:text-on-surface pb-4">Notes</button>
              <button className="font-bold text-on-surface-variant hover:text-on-surface pb-4">Communication</button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              <div className="relative pl-6 border-l-2 border-[#E2E8F0] ml-3 flex flex-col gap-8 pb-4">
                <div className="relative">
                  <div className="absolute -left-[31px] bg-white border-2 border-primary w-4 h-4 rounded-full mt-1"></div>
                  <div className="text-sm font-bold">Note Added</div>
                  <div className="text-xs text-on-surface-variant mb-2">Today at 10:45 AM by Alex Sales</div>
                  <div className="bg-gray-50 p-3 rounded border border-[#E2E8F0] text-sm">
                    Customer is looking for a family SUV. Prefers hybrid models. Scheduled a test drive for this weekend.
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] bg-white border-2 border-warning w-4 h-4 rounded-full mt-1"></div>
                  <div className="text-sm font-bold">Status Changed: Contacted</div>
                  <div className="text-xs text-on-surface-variant">Today at 10:42 AM by Alex Sales</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] bg-white border-2 border-success w-4 h-4 rounded-full mt-1"></div>
                  <div className="text-sm font-bold">Call Logged: Outbound</div>
                  <div className="text-xs text-on-surface-variant mb-2">Today at 10:30 AM by Alex Sales</div>
                  <div className="bg-gray-50 p-3 rounded border border-[#E2E8F0] text-sm">
                    Duration: 12m 4s. Outcome: Connected.
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] bg-white border-2 border-gray-300 w-4 h-4 rounded-full mt-1"></div>
                  <div className="text-sm font-bold">Lead Created</div>
                  <div className="text-xs text-on-surface-variant">Yesterday at 4:15 PM via Facebook Integration</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
              <textarea 
                className="input-field min-h-[100px] mb-3" 
                placeholder="Add a note or log an activity..."
              ></textarea>
              <div className="flex justify-end">
                <button className="btn-primary">Add Note</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
