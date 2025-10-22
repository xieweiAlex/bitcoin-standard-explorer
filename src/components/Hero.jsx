import { motion } from 'framer-motion';

const Hero = ({ scrollToContent }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-bitcoin-orange"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-bitcoin-orange"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
            The Bitcoin Standard Explorer
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-gray-900">
            Understand Sound Money for the Digital Age
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-xl text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          An interactive guide to the principles, arguments, and ideas behind Saifedean Ammous's groundbreaking book.
        </motion.p>
        
        <motion.button
          className="btn btn-primary text-lg shadow-lg"
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Exploring
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;