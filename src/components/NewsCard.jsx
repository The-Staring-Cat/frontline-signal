import React from 'react';
import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

const NewsCard = ({ item }) => {
  const { id, title, summary_points, source_url, image_url, timestamp, category, source_name } = item;
  
  // Format the date relative to now (e.g., "2 hours ago")
  const timeAgo = timestamp ? formatDistanceToNow(new Date(timestamp), { addSuffix: true }) : '';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this ${category} brief on Frontline Signal`,
          url: source_url,
        });
      } catch (error) {
        if (error.name !== 'AbortError') console.error('Error sharing', error);
      }
    } else {
      navigator.clipboard.writeText(source_url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/80 backdrop-blur-md rounded-3xl shadow-sm border border-white/40 overflow-hidden mb-6 flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      {image_url && (
        <div className="w-full aspect-[16/9] sm:h-64 sm:aspect-auto relative overflow-hidden bg-gray-100">
          <img 
            src={image_url} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-5 sm:p-7 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="px-3.5 py-1 bg-accent/60 text-textPrimary text-xs font-bold rounded-full uppercase tracking-wider">
            {category}
          </span>
          <span className="text-xs font-medium text-textSecondary uppercase tracking-wide">
            {timeAgo}
          </span>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-textPrimary">
          {title}
        </h2>
        
        <ul className="space-y-3 mt-1">
          {summary_points?.map((point, i) => (
            <li key={i} className="flex gap-3 items-start text-sm sm:text-[15px] text-textSecondary/90 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-textPrimary/30 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-5 border-t border-gray-100/60 mt-2 flex items-center justify-between">
          <a 
            href={source_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-background flex items-center justify-center border border-gray-200/60 group-hover:border-gray-300 transition-colors">
              <span className="text-[11px] font-bold text-textPrimary">
                {source_name ? source_name.charAt(0) : 'S'}
              </span>
            </div>
            <span className="text-sm font-semibold text-textPrimary group-hover:underline underline-offset-2">
              {source_name || 'Source'}
            </span>
          </a>
          
          <button 
            onClick={handleShare} 
            className="p-2.5 -mr-2 text-textSecondary hover:bg-background rounded-full transition-colors active:scale-95"
            aria-label="Share article"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;
