import React, { useState } from 'react';
import Home from './components/Home';
import Lesson from './components/Lesson';
import Analytics from './components/Analytics';
import AppLayout from './components/AppLayout';
import { Mode } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'lesson' | 'analytics'>('home');
  const [mode, setMode] = useState<Mode | null>(null);

  const startLesson = (selectedMode: Mode) => {
    setMode(selectedMode);
    setCurrentView('lesson');
  };

  const endLesson = () => {
    setCurrentView('home');
    setMode(null);
  };

  const openAnalytics = () => setCurrentView('analytics');
  const closeAnalytics = () => setCurrentView('home');

  return (
    <AppLayout>
      {currentView === 'home' && <Home onStartLesson={startLesson} onOpenAnalytics={openAnalytics} />}
      {currentView === 'lesson' && mode && <Lesson mode={mode} onEnd={endLesson} />}
      {currentView === 'analytics' && <Analytics onBack={closeAnalytics} />}
    </AppLayout>
  );
}

export default App;
