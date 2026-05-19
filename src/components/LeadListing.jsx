import React from 'react';

const LeadListing = () => {
  const leads = [
    { id: 1, name: 'Alice Johnson', phone: '+1 555-0101', source: 'Facebook', status: 'New', assigned: 'Alex Sales', date: 'Oct 24, 2023', hot: true },
    { id: 2, name: 'Bob Smith', phone: '+1 555-0102', source: 'Google Ads', status: 'Contacted', assigned: 'Sam Rivera', date: 'Oct 23, 2023', hot: false },
    { id: 3, name: 'Charlie Davis', phone: '+1 555-0103', source: 'Website', status: 'Interested', assigned: 'Alex Sales', date: 'Oct 22, 2023', hot: true },
    { id: 4, name: 'Diana Prince', phone: '+1 555-0104', source: 'Offline Event', status: 'Not Interested', assigned: 'Unassigned', date: 'Oct 21, 2023', hot: false },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'New': return 'status-new';
      case 'Contacted': return 'status-contacted';
      case 'Interested': return 'status-interested';
      case 'Not Interested': return 'status-not-interested';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lead Listing</h1>
        <button className="btn-primary">Add New Lead</button>
      </div>

      <div className="card p-6 flex flex-col gap-4">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex gap-4 flex-1">
            <input type="text" placeholder="Search leads by name or phone..." className="input-field max-w-sm" />
            <select className="input-field max-w-[200px]">
              <option>All Statuses</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Interested</option>
              <option>Not Interested</option>
            </select>
            <select className="input-field max-w-[200px]">
              <option>All Sources</option>
              <option>Facebook</option>
              <option>Google Ads</option>
              <option>Website</option>
              <option>Offline Event</option>
            </select>
          </div>
          <button className="btn-secondary">Export CSV</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E2E8F0] text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                <th className="p-4">Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Source</th>
                <th className="p-4">Status</th>
                <th className="p-4">Assigned</th>
                <th className="p-4">Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id} className={`border-b border-[#E2E8F0] hover:bg-gray-50 ${lead.hot ? 'border-l-4 border-l-warning' : 'border-l-4 border-l-transparent'}`}>
                  <td className="p-4">
                    <div className="font-medium text-on-surface flex items-center gap-2">
                      {lead.name}
                      {lead.hot && <span className="text-xs text-warning" title="Hot Lead">🔥</span>}
                    </div>
                  </td>
                  <td className="p-4 text-on-surface-variant">{lead.phone}</td>
                  <td className="p-4 text-on-surface-variant">{lead.source}</td>
                  <td className="p-4">
                    <span className={`status-badge ${getStatusClass(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant">{lead.assigned}</td>
                  <td className="p-4 text-on-surface-variant">{lead.date}</td>
                  <td className="p-4 flex gap-2">
                    <button className="btn-secondary px-3 py-1 text-sm text-primary border-primary/30 hover:bg-blue-50">Call</button>
                    <button className="btn-secondary px-3 py-1 text-sm">Email</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="flex justify-between items-center mt-4 text-sm text-on-surface-variant">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-2">
            <button className="btn-secondary px-3 py-1 text-sm disabled:opacity-50" disabled>Prev</button>
            <button className="btn-secondary px-3 py-1 text-sm disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadListing;
