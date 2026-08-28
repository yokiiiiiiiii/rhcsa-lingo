import React from 'react';
import { useStats } from '../hooks/useStats';
import { ArrowLeft } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface AnalyticsProps {
  onBack: () => void;
}

export default function Analytics({ onBack }: AnalyticsProps) {
  const { stats } = useStats();

  const data = Object.entries(stats.categoryStats).map(([name, stat]) => {
    return {
      name,
      value: stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0,
      total: stat.total,
      correct: stat.correct,
    };
  }).filter(d => d.total > 0);

  const COLORS = ['#00FF9D', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444', '#10B981', '#6366F1'];

  return (
    <div className="flex flex-col h-[100dvh] p-8 w-full">
      <header className="flex justify-between items-center border-b-2 border-app-border pb-6 flex-shrink-0">
        <button 
          onClick={onBack}
          className="font-mono text-sm hover:text-app-accent flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={16} /> [BACK]
        </button>
        <h1 className="font-mono text-xl tracking-tighter m-0 text-app-accent">
          ANALYTICS
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto pt-8">
        {data.length === 0 ? (
          <div className="text-center text-[#888] font-mono mt-20">
            [NO DATA AVAILABLE. START A LESSON TO GATHER STATS]
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 h-full">
            <div className="bg-app-card border border-app-border p-6 h-80">
              <h2 className="font-mono text-sm tracking-widest text-[#888] mb-4 uppercase">Success Rate by Category (%)</h2>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181A', borderColor: '#333', color: '#F8F7F4', fontFamily: 'monospace' }}
                    itemStyle={{ color: '#00FF9D' }}
                  />
                  <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="font-mono text-sm tracking-widest text-[#888] uppercase">Detailed Stats</h2>
              {data.map((cat, i) => (
                <div key={cat.name} className="bg-app-card border border-app-border p-4 flex justify-between items-center">
                  <div>
                    <div className="font-mono text-app-ink mb-1" style={{ color: COLORS[i % COLORS.length] }}>{cat.name}</div>
                    <div className="text-[#888] text-xs font-mono">{cat.correct} / {cat.total} correct</div>
                  </div>
                  <div className="font-mono text-xl">{cat.value}%</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
