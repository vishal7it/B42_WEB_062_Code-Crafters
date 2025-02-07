import React, { ReactNode } from 'react';

interface LayoutProps {
  sidebar: ReactNode;
  main: ReactNode;
  chat?: ReactNode;
}

export function Layout({ sidebar, main, chat }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r bg-white">
        {sidebar}
      </div>
      <div className="flex-1 flex">
        <div className={`flex-1 ${chat ? 'mr-80' : ''}`}>
          {main}
        </div>
        {chat && (
          <div className="w-80 border-l bg-white">
            {chat}
          </div>
        )}
      </div>
    </div>
  );
}