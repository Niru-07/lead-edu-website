import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between p-4 fixed h-full">
        <div>
          <div className="pb-6 border-b border-slate-700 mb-6">
            <h1 className="text-xl font-bold tracking-wide">Lead Edu Admin</h1>
            <p className="text-xs text-slate-400 mt-1">Management Portal</p>
          </div>
          <nav className="space-y-2">
            <Link href="/admin" className="block px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              Overview
            </Link>
            <Link href="/admin/leads" className="block px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition">
              Leads
            </Link>
          </nav>
        </div>
        <div className="pt-4 border-t border-slate-700">
          <Link href="/" className="block text-center text-sm text-slate-400 hover:text-white transition">
            ← Back to Main Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-64 flex flex-col h-full">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-semibold text-lg">Dashboard</h2>
          <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center font-bold text-sm text-slate-700">
            A
          </div>
        </header>
        <main className="p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}