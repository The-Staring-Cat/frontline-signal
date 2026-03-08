import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import NewsCard from './components/NewsCard';
import SkeletonCard from './components/SkeletonCard';

// 1. IMPROVED: Fetches from public/data.json with cache-busting
const fetchRealData = async () => {
  try {
    /** * We add '?t=' with a timestamp. This trick forces the browser 
     * to download the NEWEST file from GitHub instead of showing 
     * a version it saved an hour ago.
     */
    const response = await fetch(`./data.json?t=${new Date().getTime()}`); 
    
    if (!response.ok) {
      console.warn("data.json not found. Make sure n8n has run successfully.");
      return [];
    }

    const data = await response.json();
    
    // Safety check: ensure n8n's single news object is treated as a list [item]
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error("Error loading news:", error);
    return [];
  }
};

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchRealData();
      
      // Sort: Newest timestamp first
      const sortedData = data.sort((a, b) => {
        const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
        const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
        return dateB - dateA;
      });
      
      setNews(sortedData);
      setLoading(false);
    };
    
    loadData();
  }, []);

  const filteredNews = news.filter(item => {
    if (activeFilter === 'All') return true;
    // Ensure the category comparison is case-insensitive
    return item.category?.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Header brandName="Frontline Signal" />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {loading ? (
          <div className="space-y-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="space-y-6">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, index) => (
                <NewsCard key={item.id || index} item={item} />
              ))
            ) : (
              <div className="text-center py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                <p className="text-textSecondary font-medium text-lg">
                  No {activeFilter !== 'All' ? activeFilter : ''} signals detected.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
