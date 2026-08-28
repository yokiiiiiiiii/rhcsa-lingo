import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-app-bg text-app-ink font-sans flex flex-col overflow-hidden w-full max-w-[1000px] mx-auto">
      {children}
    </div>
  );
}
