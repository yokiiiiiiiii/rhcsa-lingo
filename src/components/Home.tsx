import React from 'react';
import { Mode } from '../types';
import { useStats } from '../hooks/useStats';

interface HomeProps {
  onStartLesson: (mode: Mode) => void;
  onOpenAnalytics: () => void;
}

export default function Home({ onStartLesson, onOpenAnalytics }: HomeProps) {
  const { stats } = useStats();

  return (
    <div className="w-full flex-1 p-8 grid grid-rows-[auto_1fr] gap-12 items-center overflow-y-auto">
      <header className="flex justify-between items-center border-b-2 border-app-border pb-6 self-end w-full mt-4">
        <h1 className="font-mono text-2xl tracking-tighter m-0 flex items-center gap-2">
          <span className="text-app-accent">$</span> RHCSA.LINGO
        </h1>
        <div className="flex gap-6 font-mono text-[0.7rem] uppercase">
          <div className="flex items-center gap-1">{stats.streak} STREAK</div>
          <div className="flex items-center gap-1">{stats.lessonsCompleted} УРОКОВ</div>
          <button 
            onClick={onOpenAnalytics}
            className="flex items-center gap-1 hover:text-app-accent transition-colors ml-4"
          >
            [ANALYTICS]
          </button>
        </div>
      </header>

      <main className="self-start w-full">
        <div className="grid gap-4">
          <div className="text-app-accent text-[0.6rem] tracking-[0.15em] uppercase">SELECT_OPERATIONAL_MODE</div>
          
          <div 
            onClick={() => onStartLesson('rh124')}
            className="bg-app-card border border-app-border p-8 flex justify-between items-center transition-all duration-200 cursor-pointer hover:border-app-accent hover:translate-x-2.5"
          >
            <div>
              <h3 className="font-mono m-0 text-xl text-app-ink">RH124: SysAdmin I</h3>
              <p className="text-[#888] mt-2 mb-0 text-sm">Основы Linux, файлы, процессы, пользователи</p>
            </div>
            <div className="font-mono text-app-ink">[RUN]</div>
          </div>

          <div 
            onClick={() => onStartLesson('rh134')}
            className="bg-app-card border border-app-border p-8 flex justify-between items-center transition-all duration-200 cursor-pointer hover:border-app-accent hover:translate-x-2.5"
          >
            <div>
              <h3 className="font-mono m-0 text-xl text-app-ink">RH134: SysAdmin II</h3>
              <p className="text-[#888] mt-2 mb-0 text-sm">LVM, SELinux, расписания, Firewall</p>
            </div>
            <div className="font-mono text-app-ink">[RUN]</div>
          </div>

          <div 
            onClick={() => onStartLesson('mix')}
            className="bg-app-card border border-app-border p-8 flex justify-between items-center transition-all duration-200 cursor-pointer hover:border-app-accent hover:translate-x-2.5"
          >
            <div>
              <h3 className="font-mono m-0 text-xl text-app-ink">Mix: Экзамен</h3>
              <p className="text-[#888] mt-2 mb-0 text-sm">Стресс-тест на 30 минут со всеми темами</p>
            </div>
            <div className="font-mono text-app-accent">[INIT]</div>
          </div>
        </div>
      </main>
    </div>
  );
}
