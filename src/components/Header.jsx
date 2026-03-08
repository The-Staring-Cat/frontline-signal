import React from 'react';
import { Radio } from 'lucide-react';

const Header = ({ brandName = "Frontline Signal" }) => {
  return (
    <header className="sticky top-0 z-50 glassmorphism w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-textPrimary">
          {brandName}
        </h1>
        <div className="flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full border border-red-100 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
            <Radio size={14} className="opacity-80" /> Live
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
