import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ChapterSummaries from './components/ChapterSummaries'
import ConceptExplorer from './components/ConceptExplorer'
import KnowledgeCheck from './components/KnowledgeCheck'
import Footer from './components/Footer'
import ChapterDetail from './pages/ChapterDetail'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('chapters')
  const mainContentRef = useRef(null)

  const scrollToContent = () => {
    mainContentRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero scrollToContent={scrollToContent} />
              <div ref={mainContentRef}>
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="container mx-auto"
                >
                  {activeTab === 'chapters' ? <ChapterSummaries /> : <ConceptExplorer />}
                </motion.div>
              </div>
              <KnowledgeCheck />
              <Footer />
            </>
          }
        />
        <Route path="/chapters/:id" element={<ChapterDetail />} />
      </Routes>
    </div>
  )
}

export default App
