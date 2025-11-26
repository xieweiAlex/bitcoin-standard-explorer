import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-center flex-1">
            <div className="flex space-x-8">
              <TabButton 
                active={activeTab === 'chapters'} 
                onClick={() => setActiveTab('chapters')}
                label={t('navigation.byChapter')}
              />
              <TabButton 
                active={activeTab === 'concepts'} 
                onClick={() => setActiveTab('concepts')}
                label={t('navigation.byConcept')}
              />
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-2 relative font-medium text-lg transition-colors duration-300 ${
        active ? 'text-bitcoin-orange' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-1 bg-bitcoin-orange"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

export default Navigation;