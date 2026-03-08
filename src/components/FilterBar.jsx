import React from 'react';

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All', 'War', 'Politics'];

  return (
    <div className="w-full bg-background pt-4 pb-2 sticky top-16 z-40 border-b border-gray-200/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pill-button ${
                activeFilter === filter ? 'pill-button-active' : 'pill-button-inactive'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
