import React from 'react';

export default function AdminDashboard() {
  const stats = [
    { name: 'Total Leads', value: '48', change: '+12% this week' },
    { name: 'Active Programs', value: '6', change: 'Consulting & Analytics' },
    { name: 'Pending Follow-ups', value: '9', change: 'Requires attention' },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{stat.name}</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
            <p className="text-xs text-emerald-600 mt-1 font-medium">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-900">Recent Inquiries</h3>
          <button className="text-sm text-slate-600 hover:text-slate-900 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                <th className="p-4 pl-6">Student Name</th>
                <th className="p-4">Service Track</th>
                <th className="p-4">Date Received</th>
                <th className="p-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr>
                <td className="p-4 pl-6 font-medium text-slate-900">Rohan Sharma</td>
                <td className="p-4 text-slate-600">Higher Education Consulting</td>
                <td className="p-4 text-slate-500">May 20, 2026</td>
                <td className="p-4 pr-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    New
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 pl-6 font-medium text-slate-900">Ananya Rao</td>
                <td className="p-4 text-slate-600">BBA Curriculum Alignment</td>
                <td className="p-4 text-slate-500">May 18, 2026</td>
                <td className="p-4 pr-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    In Progress
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}