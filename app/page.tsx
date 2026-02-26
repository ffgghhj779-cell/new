'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Search, 
  MessageSquareText, 
  Settings, 
  Activity, 
  Users, 
  TrendingUp, 
  AlertCircle,
  Play,
  Pause,
  Plus,
  Trash2
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const mockChartData = [
  { name: 'Mon', comments: 12, engagement: 45 },
  { name: 'Tue', comments: 19, engagement: 62 },
  { name: 'Wed', comments: 15, engagement: 58 },
  { name: 'Thu', comments: 22, engagement: 81 },
  { name: 'Fri', comments: 18, engagement: 70 },
  { name: 'Sat', comments: 8, engagement: 35 },
  { name: 'Sun', comments: 10, engagement: 40 },
];

const mockKeywords = [
  { id: 1, term: 'AI automation', active: true, matches: 145 },
  { id: 2, term: 'B2B marketing', active: true, matches: 89 },
  { id: 3, term: 'growth hacking', active: false, matches: 34 },
  { id: 4, term: 'SaaS sales', active: true, matches: 210 },
];

const mockComments = [
  { id: 1, text: 'Great insights! I completely agree with your point on scaling.', category: 'General Agreement' },
  { id: 2, text: 'This is a fascinating perspective. Have you considered how AI impacts this?', category: 'Question/AI' },
  { id: 3, text: 'Thanks for sharing this framework. Definitely saving it for later.', category: 'Appreciation' },
];

const mockLogs = [
  { id: 1, time: '10:42 AM', action: 'Commented on post by Sarah J.', status: 'Success' },
  { id: 2, time: '10:15 AM', action: 'Searched keyword "AI automation"', status: 'Found 12 posts' },
  { id: 3, time: '09:30 AM', action: 'Rate limit pause (15 mins)', status: 'System' },
  { id: 4, time: '09:12 AM', action: 'Commented on post by Mike T.', status: 'Success' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [systemActive, setSystemActive] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Comments Today</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">24 / 50</h3>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <MessageSquareText size={20} />
                  </div>
                </div>
                <div className="mt-4 w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Posts Scanned</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">1,204</h3>
                  </div>
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    <Search size={20} />
                  </div>
                </div>
                <p className="text-sm text-emerald-600 font-medium mt-4 flex items-center">
                  <TrendingUp size={16} className="mr-1" /> +12% from yesterday
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Profile Views</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">342</h3>
                  </div>
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <Users size={20} />
                  </div>
                </div>
                <p className="text-sm text-emerald-600 font-medium mt-4 flex items-center">
                  <TrendingUp size={16} className="mr-1" /> +5% this week
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">System Status</p>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">
                      {systemActive ? 'Running smoothly' : 'Paused'}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-lg ${systemActive ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    <Activity size={20} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    {systemActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${systemActive ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  </span>
                  <span className="text-sm text-slate-600">{systemActive ? 'Active' : 'Standby'}</span>
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm lg:col-span-2">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Activity Overview</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockChartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                      <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} />
                      <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={10} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Line yAxisId="left" type="monotone" dataKey="comments" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} name="Comments Made" />
                      <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} name="Engagement Received" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {mockLogs.map((log) => (
                    <div key={log.id} className="flex items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{log.action}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-slate-500">{log.time}</span>
                          <span className="mx-2 text-slate-300">•</span>
                          <span className={`text-xs font-medium ${
                            log.status === 'Success' ? 'text-emerald-600' : 
                            log.status === 'System' ? 'text-amber-600' : 'text-blue-600'
                          }`}>{log.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                  View Full Log
                </button>
              </div>
            </div>
          </div>
        );
      case 'keywords':
        return (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Target Keywords</h3>
                <p className="text-sm text-slate-500 mt-1">Manage the keywords the system searches for.</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                <Plus size={16} className="mr-2" /> Add Keyword
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Keyword</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Matches (7d)</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mockKeywords.map((kw) => (
                    <tr key={kw.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{kw.term}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          kw.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                        }`}>
                          {kw.active ? 'Active' : 'Paused'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{kw.matches}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-red-600 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'comments':
        return (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Comment Bank</h3>
                <p className="text-sm text-slate-500 mt-1">Pre-written comments the system will use.</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                <Plus size={16} className="mr-2" /> Add Comment
              </button>
            </div>
            <div className="p-6 space-y-4">
              {mockComments.map((comment) => (
                <div key={comment.id} className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {comment.category}
                    </span>
                    <button className="text-slate-400 hover:text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-slate-700">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden max-w-3xl">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Automation Settings</h3>
              <p className="text-sm text-slate-500 mt-1">Configure limits and safety thresholds.</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">Daily Limits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Max Comments per Day</label>
                    <input type="number" defaultValue={50} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Max Profile Views per Day</label>
                    <input type="number" defaultValue={100} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">Filtering Thresholds</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Minimum Likes on Post</label>
                    <input type="number" defaultValue={10} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Minimum Comments on Post</label>
                    <input type="number" defaultValue={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">Timing & Delays</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Min Delay Between Actions (mins)</label>
                    <input type="number" defaultValue={15} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Max Delay Between Actions (mins)</label>
                    <input type="number" defaultValue={45} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 flex items-center">
                  <AlertCircle size={14} className="mr-1 text-amber-500" />
                  Randomizing delays helps mimic human behavior and prevents account restrictions.
                </p>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Activity size={20} />
            </div>
            Linqin<span className="text-slate-900">.ai</span> Clone
          </div>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard size={18} className="mr-3" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('keywords')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'keywords' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Search size={18} className="mr-3" /> Keywords
          </button>
          <button 
            onClick={() => setActiveTab('comments')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'comments' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquareText size={18} className="mr-3" /> Comment Bank
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Settings size={18} className="mr-3" /> Settings
          </button>
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Master Switch</p>
            <button 
              onClick={() => setSystemActive(!systemActive)}
              className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                systemActive 
                  ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' 
                  : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              {systemActive ? (
                <><Pause size={16} className="mr-2" /> Pause System</>
              ) : (
                <><Play size={16} className="mr-2" /> Start System</>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 capitalize">
            {activeTab.replace('-', ' ')}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Account Connected
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
              JD
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
