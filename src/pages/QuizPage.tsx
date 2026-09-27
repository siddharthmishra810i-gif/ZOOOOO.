import React, { useState } from 'react';
import { quizQuestions } from '../data/nonChordata';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Array<{ questionId: string; selected: number; isCorrect: boolean }>>([]);

  const currentQ = quizQuestions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [
      ...prev,
      { questionId: currentQ.id, selected: selectedOption, isCorrect },
    ]);
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const scorePercentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="py-8 md:py-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-2xl mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
          <span>Zoological Examination</span>
          <span aria-hidden="true">·</span>
          <span>Knowledge Assessment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#162617] tracking-tight">
          Test Your Zoology
        </h1>
        <p className="mt-2 text-sm text-[#5C5549] font-serif leading-relaxed">
          Challenge your understanding of Non-Chordata anatomical features, diagnostic cell types, life cycle stages, and taxonomic criteria.
        </p>
      </div>

      {!quizCompleted ? (
        <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 sm:p-8 paper-edge shadow-md">
          {/* Progress Ribbon */}
          <div className="flex items-center justify-between border-b border-[#E6E1D1] pb-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#734528] font-bold">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-serif text-[#685F53]">
                Score: <strong className="text-[#385E38] font-mono">{score}</strong> / {quizQuestions.length}
              </span>
              <div className="w-24 bg-[#E0DBCB] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#385E38] h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Question Body */}
          <div className="mb-6">
            <div className="inline-block text-[10px] font-mono uppercase tracking-wider bg-[#E5EDE1] text-[#2C4B2C] px-2 py-0.5 rounded-xs mb-2">
              {currentQ.type.replace('_', ' ')}
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#162617] leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQ.correctIndex;

              let buttonStyle = 'bg-[#FFFFFF] border-[#D8D1BD] hover:bg-[#F4F1E8] text-[#23201D]';

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  buttonStyle = 'bg-[#E5EDE1] border-[#385E38] text-[#162617] font-semibold';
                } else if (isSelected && !isCorrectAnswer) {
                  buttonStyle = 'bg-[#FDF2F0] border-[#A44A32] text-[#A44A32]';
                } else {
                  buttonStyle = 'bg-[#FFFFFF] border-[#E6E1D1] opacity-50 text-[#8C8270]';
                }
              } else if (isSelected) {
                buttonStyle = 'bg-[#EAE5D9] border-[#385E38] text-[#162617] font-semibold shadow-xs';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-md border text-sm font-serif flex items-center justify-between transition-colors cursor-pointer ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-current text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswerSubmitted && (
                    <div>
                      {isCorrectAnswer && <CheckCircle2 className="w-5 h-5 text-[#385E38]" />}
                      {isSelected && !isCorrectAnswer && <XCircle className="w-5 h-5 text-[#A44A32]" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout (Shown after submitting) */}
          {isAnswerSubmitted && (
            <div className={`p-4 rounded-md mb-6 border ${
              selectedOption === currentQ.correctIndex
                ? 'bg-[#E5EDE1]/60 border-[#C4D7BC]'
                : 'bg-[#FDF2F0] border-[#E8C2BA]'
            }`}>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold mb-1">
                {selectedOption === currentQ.correctIndex ? (
                  <span className="text-[#385E38] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                  </span>
                ) : (
                  <span className="text-[#A44A32] flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Incorrect
                  </span>
                )}
              </div>
              <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Controls: Submit or Next */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E6E1D1]">
            {!isAnswerSubmitted ? (
              <button
                type="button"
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="px-6 py-2.5 bg-[#385E38] hover:bg-[#2C4B2C] disabled:bg-[#A99E81] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer shadow-xs"
              >
                Submit Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 bg-[#385E38] hover:bg-[#2C4B2C] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>{currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Complete Score Screen */
        <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-8 sm:p-12 text-center paper-edge shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#E5EDE1] text-[#2C4B2C] flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-3xl font-serif font-bold text-[#162617] mb-2">
            Assessment Completed
          </h2>

          <p className="text-sm font-serif text-[#685F53] max-w-md mx-auto mb-6">
            You have answered all {quizQuestions.length} undergraduate zoology questions.
          </p>

          <div className="bg-[#FFFFFF] border border-[#D8D1BD] rounded-lg p-6 max-w-xs mx-auto mb-8 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C8270] block">
              Final Score
            </span>
            <div className="text-4xl sm:text-5xl font-sans font-bold text-[#385E38] my-1">
              {score} <span className="text-2xl text-[#8C8270]">/ {quizQuestions.length}</span>
            </div>
            <span className="text-xs font-serif font-semibold text-[#734528]">
              {scorePercentage}% Proficiency ({scorePercentage >= 80 ? 'Mastery' : scorePercentage >= 60 ? 'Competent' : 'Needs Revision'})
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="px-6 py-2.5 bg-[#385E38] hover:bg-[#2C4B2C] text-white text-xs font-semibold rounded-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>

            <Link
              to="/revision"
              className="px-5 py-2.5 bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#C4BBA1] text-[#23201D] text-xs font-medium rounded-sm transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#734528]" />
              <span>Exam Revision Cards</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
