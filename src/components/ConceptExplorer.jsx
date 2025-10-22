import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { concepts } from '../data/concepts';

const ConceptExplorer = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [hoveredConcept, setHoveredConcept] = useState(null);

  const hardMoneyPath = concepts.filter(c => 
    ['hard-money', 'low-time-preference', 'capital-accumulation', 'civilization-growth'].includes(c.id)
  );
  
  const softMoneyPath = concepts.filter(c => 
    ['soft-money', 'inflation', 'high-time-preference', 'economic-decay'].includes(c.id)
  );
  
  const bitcoinPath = concepts.filter(c => 
    ['bitcoin', 'digital-hard-money', 'global-economic-coordination'].includes(c.id)
  );

  const handleNodeClick = (concept) => {
    setSelectedConcept(concept);
  };

  return (
    <section className="section py-12" style={{ 
      backgroundColor: '#f0f4f8',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%232d3748' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-title font-bold mb-6 text-center">Concept Explorer</h2>
        <p className="text-center font-description text-description-color mb-12 max-w-3xl mx-auto description">
          Explore the key concepts from The Bitcoin Standard and how they relate to each other.
          Hover over nodes to see brief descriptions and click for more detailed explanations.
        </p>

        <div className="flex flex-col items-center mb-16">
          <div className="max-w-4xl w-full">
            {/* Hard Money Path */}
            <FlowPath 
              concepts={hardMoneyPath} 
              pathColor="bg-green-500" 
              onNodeClick={handleNodeClick}
              onNodeHover={setHoveredConcept}
              hoveredConcept={hoveredConcept}
              className="mb-16"
            />
            
            {/* Soft Money Path */}
            <FlowPath 
              concepts={softMoneyPath} 
            pathColor="bg-red-500" 
            onNodeClick={handleNodeClick}
            onNodeHover={setHoveredConcept}
            hoveredConcept={hoveredConcept}
            className="mb-16"
          />
          
          {/* Bitcoin Path */}
          <FlowPath 
            concepts={bitcoinPath} 
            pathColor="bg-bitcoin-orange" 
            onNodeClick={handleNodeClick}
            onNodeHover={setHoveredConcept}
            hoveredConcept={hoveredConcept}
          />
          </div>
        </div>

        <AnimatePresence>
          {selectedConcept && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto"
            >
              <div className="flex flex-col items-center mb-4 text-center">
                <h3 className="text-xl font-serif font-bold mb-2">{selectedConcept.title}</h3>
                <button 
                  onClick={() => setSelectedConcept(null)}
                  className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-700 mb-4 text-center">{selectedConcept.explanation}</p>
              
              {selectedConcept.connections.length > 0 && (
                <div className="text-center">
                  <h4 className="font-bold text-sm uppercase text-gray-700 mb-2">Related Concepts</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedConcept.connections.map(connectionId => {
                      const connectedConcept = concepts.find(c => c.id === connectionId);
                      return (
                        <button
                          key={connectionId}
                          onClick={() => setSelectedConcept(connectedConcept)}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                        >
                          {connectedConcept.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const FlowPath = ({ concepts, pathColor, onNodeClick, onNodeHover, hoveredConcept, className = "" }) => {
  return (
    <div className={`flex flex-col md:flex-row justify-center items-center relative ${className}`}>
      {/* Connecting Line */}
      <div className={`absolute top-1/2 left-0 right-0 h-1 ${pathColor} transform -translate-y-1/2 hidden md:block`}></div>
      <div className={`absolute left-1/2 top-0 bottom-0 w-1 ${pathColor} transform -translate-x-1/2 md:hidden`}></div>
      
      {/* Concept Nodes */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-4">
      {concepts.map((concept, index) => (
        <motion.div
          key={concept.id}
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div 
            className={`relative ${hoveredConcept?.id === concept.id ? 'z-20' : 'z-10'}`}
            onMouseEnter={() => onNodeHover(concept)}
            onMouseLeave={() => onNodeHover(null)}
          >
            <button
              onClick={() => onNodeClick(concept)}
              className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-medium text-center p-2 transition-all duration-300 ${pathColor} hover:shadow-lg transform hover:scale-105`}
            >
              {concept.title}
            </button>
            
            {/* Tooltip */}
            {hoveredConcept?.id === concept.id && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md p-3 w-48 text-sm z-30">
                {concept.tooltip}
              </div>
            )}
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
};

export default ConceptExplorer;