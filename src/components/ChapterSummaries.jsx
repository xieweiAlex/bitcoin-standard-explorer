import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../data/chapters';

const ChapterSummaries = () => {
  return (
    <section className="section py-12 relative" style={{ 
      backgroundColor: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f7931a' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '20px 20px'
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-title font-bold mb-12 text-center">Chapter Summaries</h2>
        
        <div className="flex flex-col items-center">
          <div className="max-w-4xl w-full">
            {chapters.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ChapterCard = ({ chapter, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <motion.div
      className="card h-full flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className="p-4 cursor-pointer flex flex-col justify-center items-center bg-white hover:bg-gray-50 text-center"
        onClick={toggleExpand}
      >
        <div className="mb-2">
          <span className="text-bitcoin-orange font-bold">Chapter {chapter.id}</span>
          <h3 className="text-xl font-title font-bold">{chapter.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-bitcoin-orange"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-gray-200 text-center">
              <p className="font-content text-content-color mb-4">{chapter.summary}</p>
              
              {chapter.quotes.map((quote, i) => (
                <blockquote key={i} className="border-t-4 border-bitcoin-orange pt-4 italic font-description text-description-color my-4">
                  "{quote}"
                </blockquote>
              ))}
              
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <h4 className="font-title font-bold text-sm uppercase text-title-color mb-2 text-center">Takeaway Insight</h4>
                <p className="font-content text-content-color">{chapter.takeaway}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChapterSummaries;