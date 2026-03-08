import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm border border-white/20 overflow-hidden mb-6 animate-pulse flex flex-col">
      <div className="w-full aspect-[16/9] sm:h-64 sm:aspect-auto bg-gray-200/70" />
      
      <div className="p-5 sm:p-7 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 bg-gray-200 rounded-full" />
          <div className="h-4 w-16 bg-gray-100 rounded" />
        </div>
        
        <div className="space-y-2">
          <div className="h-6 w-full bg-gray-200 rounded" />
          <div className="h-6 w-5/6 bg-gray-200 rounded" />
        </div>
        
        <div className="space-y-3 mt-3">
          <div className="flex gap-3 items-start">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div className="h-4 w-full bg-gray-100 rounded"></div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
          </div>
        </div>
        
        <div className="pt-5 border-t border-gray-100/40 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-200" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
