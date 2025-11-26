import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = ({ scrollToContent }) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-bitcoin-orange"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-bitcoin-orange"></div>
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f7931a' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-title font-bold mb-6 text-title-color text-center">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-title mb-2 text-title-color text-center">
            {t('hero.subtitle')}
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-xl font-description text-description-color max-w-3xl mx-auto mb-12 description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('hero.description')}
        <br />
        <span className="text-red-600 font-bold text-2xl md:text-3xl">{t('hero.note')}</span>
        <br />
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
          {t('hero.startButton')}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
