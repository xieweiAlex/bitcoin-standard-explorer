import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../data/chapters';

const ChapterSummaries = () => {
  return (
    <section className="section py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Chapter Summaries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
          ))}
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
        className="p-4 cursor-pointer flex justify-between items-center bg-white hover:bg-gray-50"
        onClick={toggleExpand}
      >
        <div>
          <span className="text-bitcoin-orange font-bold">Chapter {chapter.id}</span>
          <h3 className="text-xl font-serif font-bold">{chapter.title}</h3>
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
            <div className="p-4 border-t border-gray-200">
              <p className="text-gray-700 mb-4">{chapter.summary}</p>
              
              {chapter.quotes.map((quote, i) => (
                <blockquote key={i} className="border-l-4 border-bitcoin-orange pl-4 italic text-gray-600 my-4">
                  "{quote}"
                </blockquote>
              ))}
              
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <h4 className="font-bold text-sm uppercase text-gray-700 mb-2">Takeaway Insight</h4>
                <p className="text-gray-800">{chapter.takeaway}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChapterSummaries;