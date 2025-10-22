import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quizData';

const KnowledgeCheck = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section className="section py-12 bg-quiz-bg" style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23553c9a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-title font-bold mb-6 text-center text-quiz-color">Knowledge Check</h2>
        <p className="text-center font-description text-description-color mb-12 max-w-3xl mx-auto description">
          Test your understanding of key concepts from The Bitcoin Standard.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {!quizCompleted ? (
            <>
              <div className="mb-8 quiz-section">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentQuestion + 1} of {quizData.length}</span>
                  <span>Score: {score}/{quizData.length}</span>
                </div>
                <h3 className="text-xl font-quiz font-bold mb-6 quiz-question">{quizData[currentQuestion].question}</h3>
                
                <div className="space-y-3">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !selectedAnswer && handleAnswerSelect(option)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-md border transition-colors quiz-option ${
                        selectedAnswer === option
                          ? option === quizData[currentQuestion].correctAnswer
                            ? 'bg-green-100 border-green-500'
                            : 'bg-red-100 border-red-500'
                          : selectedAnswer !== null && option === quizData[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : 'border-gray-300 hover:border-quiz-accent'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h4 className="font-bold mb-2">Explanation:</h4>
                      <p>{quizData[currentQuestion].explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedAnswer && (
                <div className="text-center">
                  <button
                    onClick={handleNextQuestion}
                    className="btn btn-primary"
                  >
                    {currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
              <p className="text-xl mb-6">Your score: {score} out of {quizData.length}</p>
              
              {score === quizData.length ? (
                <p className="mb-8 text-green-600">Perfect score! You have an excellent understanding of The Bitcoin Standard.</p>
              ) : score >= quizData.length * 0.7 ? (
                <p className="mb-8 text-green-600">Great job! You have a solid understanding of The Bitcoin Standard.</p>
              ) : (
                <p className="mb-8 text-yellow-600">You might want to review some concepts from The Bitcoin Standard.</p>
              )}
              
              <button
                onClick={resetQuiz}
                className="btn btn-primary"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCheck;