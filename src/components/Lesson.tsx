import React, { useState, useEffect, useRef } from 'react';
import { Mode, Question } from '../types';
import { questions } from '../data150rhel10';
import { useStats } from '../hooks/useStats';
import { Book, Check, X, Clock, Terminal, MousePointerClick, AlertCircle, Award } from 'lucide-react';

interface LessonProps {
  mode: Mode;
  onEnd: () => void;
}

export default function Lesson({ mode, onEnd }: LessonProps) {
  const { stats, incrementLesson, trackAnswer } = useStats();
  
  const [questionsList, setQuestionsList] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 min for mix
  const [status, setStatus] = useState<'playing' | 'correct' | 'incorrect' | 'finished'>('playing');
  
  const [inputType, setInputType] = useState<'chips' | 'terminal'>('chips');
  const [availableChips, setAvailableChips] = useState<{id: number, text: string}[]>([]);
  const [selectedChips, setSelectedChips] = useState<{id: number, text: string}[]>([]);
  const [inputValue, setInputValue] = useState("");
  
  const [showHint, setShowHint] = useState(false);
  const [errorsList, setErrorsList] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<boolean[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let pool = [];
    if (mode === 'rh124') {
      pool = questions.filter(q => q.book === 'rh124');
    } else if (mode === 'rh134') {
      pool = questions.filter(q => q.book === 'rh134');
    } else {
      pool = [...questions];
    }
    
    let selectedQuestions: Question[] = [];
    const count = mode === 'mix' ? 30 : 10;

    if (mode === 'mix') {
      const failedIds = stats.failedQuestions || [];
      const failedQ = pool.filter(q => failedIds.includes(q.id)).sort(() => Math.random() - 0.5);
      const otherQ = pool.filter(q => !failedIds.includes(q.id)).sort(() => Math.random() - 0.5);
      
      const takeFailed = Math.min(failedQ.length, 10); // Take up to 10 failed
      selectedQuestions = [...failedQ.slice(0, takeFailed), ...otherQ.slice(0, count - takeFailed)];
      selectedQuestions.sort(() => Math.random() - 0.5);
    } else {
      selectedQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
    }

    setQuestionsList(selectedQuestions);
  }, [mode]);

  useEffect(() => {
    if (questionsList.length > 0 && currentIndex < questionsList.length) {
      const q = questionsList[currentIndex];
      
      const chipPool: {id: number, text: string}[] = [];
      let nextId = 0;
      
      const correctCounts: Record<string, number> = {};
      q.correctCommand.forEach(c => {
        correctCounts[c] = (correctCounts[c] || 0) + 1;
      });
      
      const optionsCounts: Record<string, number> = {};
      q.options.forEach(c => {
        optionsCounts[c] = (optionsCounts[c] || 0) + 1;
      });
      
      const allTokens = new Set([...q.correctCommand, ...q.options]);
      
      allTokens.forEach(t => {
        const count = Math.max(correctCounts[t] || 0, optionsCounts[t] || 0);
        for(let i=0; i<count; i++) {
          chipPool.push({ id: nextId++, text: t });
        }
      });
      
      setAvailableChips(chipPool.sort(() => Math.random() - 0.5));
      setSelectedChips([]);
      setInputValue("");
      setStatus('playing');
    } else if (questionsList.length > 0 && currentIndex >= questionsList.length) {
      finishLesson();
    }
  }, [currentIndex, questionsList]);

  useEffect(() => {
    if (mode !== 'mix' || status === 'finished' || questionsList.length === 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          finishLesson();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [mode, status, questionsList.length]);

  const finishLesson = () => {
    setStatus('finished');
    if (mode !== 'mix' || timeLeft > 0) {
      incrementLesson();
    }
  };

  const handleChipClick = (chip: {id: number, text: string}, fromSelected: boolean) => {
    if (status !== 'playing') return;
    
    if (fromSelected) {
      setSelectedChips(prev => prev.filter(c => c.id !== chip.id));
      setAvailableChips(prev => [...prev, chip]);
    } else {
      setAvailableChips(prev => prev.filter(c => c.id !== chip.id));
      setSelectedChips(prev => [...prev, chip]);
    }
  };

  const handleTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const currentQ = questionsList[currentIndex];
      if (!currentQ) return;
      
      const expected = currentQ.correctCommand;
      const words = inputValue.split(' ');
      const lastWord = words[words.length - 1];
      const wordIndex = words.length - 1;

      if (!lastWord) return;

      if (expected[wordIndex] && expected[wordIndex].startsWith(lastWord)) {
        words[wordIndex] = expected[wordIndex];
        setInputValue(words.join(' ') + ' ');
      }
    }
  };

  const checkAnswer = () => {
    if (status !== 'playing') return;
    
    const currentQ = questionsList[currentIndex];
    
    const cleanString = (s: string) => s.replace(/['"]/g, '').replace(/\s+/g, ' ').trim();

    let userStr = "";
    if (inputType === 'chips') {
      userStr = selectedChips.map(c => c.text).join(" ");
    } else {
      userStr = inputValue;
    }

    const isCorrect = cleanString(userStr) === cleanString(currentQ.correctCommand.join(" "));
    
    if (isCorrect) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
      setErrorsList(prev => {
        if (!prev.find(q => q.id === currentQ.id)) {
          return [...prev, currentQ];
        }
        return prev;
      });
    }

    setAnswers(prev => [...prev, isCorrect]);
    trackAnswer(currentQ, isCorrect);
  };

  const nextQuestion = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (questionsList.length === 0) {
    return (
      <div className="flex-1 w-full flex items-center justify-center h-[100dvh]">
        <div className="text-app-accent font-mono animate-pulse">[LOADING_MODULE]</div>
      </div>
    );
  }

  if (status === 'finished') {
    return (
      <div className="flex-1 w-full flex flex-col p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
          <div className="w-24 h-24 bg-app-card text-app-accent border border-app-accent rounded-full flex items-center justify-center mb-6">
            <Award size={48} />
          </div>
          <h2 className="font-mono text-3xl text-app-ink mb-2">LESSON_COMPLETE</h2>
          <p className="text-[#888] font-mono text-sm mb-8">
            Answered: {questionsList.length}.
            {errorsList.length > 0 ? ` Errors: ${errorsList.length}.` : ' Perfect run!'}
          </p>

          {errorsList.length > 0 && (
            <div className="w-full bg-app-card border border-[#fca5a5] shadow-sm mb-8">
              <div className="bg-[#451a1a] px-6 py-4 border-b border-[#fca5a5] flex items-center gap-2">
                <AlertCircle className="text-[#fca5a5]" />
                <h3 className="font-mono text-[#fca5a5] text-sm uppercase">Review Errors:</h3>
              </div>
              <div className="divide-y divide-app-border">
                {errorsList.map(err => (
                  <div key={err.id} className="p-6">
                    <p className="font-sans text-app-ink mb-3">{err.question}</p>
                    <p className="font-mono text-sm text-app-accent bg-[#111] p-3 rounded">
                      {err.correctCommand.join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={onEnd}
            className="bg-app-accent text-app-bg font-mono font-bold text-lg py-4 px-12 transition-all hover:bg-[#00e08b]"
          >
            [RETURN_TO_BASE]
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questionsList[currentIndex];
  if (!currentQ) return null;
  const totalQuestions = questionsList.length;

  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden w-full max-w-4xl mx-auto bg-app-bg">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 py-4 w-full border-b border-app-border">
        <button onClick={onEnd} className="text-[#888] hover:text-app-ink p-2 transition-colors">
          <X size={24} />
        </button>
        
        <div className="flex-1 mx-4">
          <div className="flex w-full h-2 gap-1">
            {Array.from({ length: totalQuestions }).map((_, i) => {
              let color = 'bg-[#333]';
              if (i < answers.length) {
                color = answers[i] ? 'bg-app-accent' : 'bg-red-500';
              }
              return <div key={i} className={`flex-1 rounded-sm ${color}`} />;
            })}
          </div>
        </div>

        {mode === 'mix' && (
          <div className={`flex items-center gap-2 font-mono text-sm ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-[#888]'}`}>
            <Clock size={16} />
            {formatTime(timeLeft)}
          </div>
        )}
      </header>

      {/* Main Content (Question Text) */}
      <main className="flex-1 overflow-y-auto px-4 py-6 w-full flex flex-col text-app-ink">
        <h2 className="text-xl md:text-2xl font-sans mb-2 leading-relaxed">
          {currentQ.question}
        </h2>
        
        <p className="text-[#888] font-mono text-[10px] uppercase tracking-wider mb-8">
          * Соблюдайте порядок флагов, предложенный в подсказках
        </p>

        <div className="flex justify-between items-end mb-4">
          <button 
            onClick={() => setShowHint(true)}
            className="flex items-center gap-2 text-[#888] font-mono text-xs hover:text-app-ink transition-colors"
          >
            <Book size={16} />
            [MAN_PAGE]
          </button>
          
          <div className="bg-app-card p-1 rounded border border-app-border flex font-mono text-xs">
            <button
              onClick={() => setInputType('chips')}
              className={`flex items-center gap-1 px-3 py-2 transition-colors ${inputType === 'chips' ? 'bg-[#333] text-app-ink' : 'text-[#888]'}`}
            >
              <MousePointerClick size={14} /> CHIPS
            </button>
            <button
              onClick={() => {
                setInputType('terminal');
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
              className={`flex items-center gap-1 px-3 py-2 transition-colors ${inputType === 'terminal' ? 'bg-[#333] text-app-ink' : 'text-[#888]'}`}
            >
              <Terminal size={14} /> TERM
            </button>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="bg-[#111] overflow-hidden border border-app-border w-full flex-shrink-0 flex flex-col mt-auto shadow-2xl">
          <div className="bg-[#1a1a1a] px-4 py-2 flex items-center border-b border-[#333]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[#888] text-xs font-mono ml-4 truncate">root@rhcsa:~</span>
          </div>
          
          <div className="p-4 font-mono text-app-ink text-sm md:text-base min-h-[140px] flex flex-col break-all sm:break-normal">
            <div className="flex items-start">
              <span className="mr-2 text-app-accent select-none flex-shrink-0">[root@rhcsa ~]#</span>
              {inputType === 'chips' ? (
                <div className="flex flex-wrap gap-2 flex-1">
                  {selectedChips.map(chip => (
                    <button
                      key={chip.id}
                      onClick={() => handleChipClick(chip, true)}
                      className="bg-[#222] text-app-ink px-2 py-1 cursor-pointer hover:bg-[#333] transition-colors border border-[#444] break-all"
                    >
                      {chip.text}
                    </button>
                  ))}
                  <span className={`w-2 h-5 bg-app-ink mt-1 block ${status === 'playing' ? 'animate-pulse' : 'hidden'}`}></span>
                </div>
              ) : (
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleTab}
                  disabled={status !== 'playing'}
                  autoComplete="off"
                  spellCheck="false"
                  className="bg-transparent border-none outline-none text-app-ink flex-1 w-full min-w-0"
                  autoFocus
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Terminal Controls / Chips / Feedback Footer */}
      <footer className="flex-shrink-0 bg-app-bg border-t border-app-border w-full flex flex-col">
        {inputType === 'chips' && status === 'playing' && (
          <div className="flex flex-wrap justify-center gap-2 p-4 pb-0 overflow-y-auto max-h-[150px]">
            {availableChips.map(chip => (
              <button
                key={chip.id}
                onClick={() => handleChipClick(chip, false)}
                disabled={status !== 'playing'}
                className="bg-app-card text-app-ink font-mono text-sm py-2 px-3 border border-app-border hover:border-app-accent transition-colors disabled:opacity-50 break-words max-w-full"
              >
                {chip.text}
              </button>
            ))}
          </div>
        )}

        <div className={`transition-colors duration-300 w-full ${status === 'correct' ? 'bg-[#153b28] border-t border-app-accent' : status === 'incorrect' ? 'bg-[#3b1515] border-t border-red-500' : 'bg-transparent'}`}>
          <div className="p-4 sm:px-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 w-full text-sm">
              {status === 'correct' && (
                <div className="flex items-start gap-3 text-app-accent">
                  <div className="mt-1 flex-shrink-0">
                    <Check size={20} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold mb-1 uppercase text-xs tracking-wider">EXECUTION_SUCCESS</h3>
                    <p className="text-app-ink/80 font-sans">{currentQ.explanation}</p>
                  </div>
                </div>
              )}
              
              {status === 'incorrect' && (
                <div className="flex items-start gap-3 text-red-400">
                  <div className="mt-1 flex-shrink-0">
                    <X size={20} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold mb-1 uppercase text-xs tracking-wider">SYNTAX_ERROR</h3>
                    <p className="font-mono bg-[#111] p-2 text-app-accent inline-block mb-2 border border-[#333]">
                      {currentQ.correctCommand.join(' ')}
                    </p>
                    <p className="text-app-ink/80 font-sans">{currentQ.explanation}</p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={status === 'playing' ? checkAnswer : nextQuestion}
              disabled={status === 'playing' && inputType === 'chips' && selectedChips.length === 0}
              className={`w-full sm:w-auto min-w-[140px] font-mono font-bold text-sm py-3 px-6 transition-colors
                ${status === 'playing' 
                  ? 'bg-app-ink text-app-bg hover:bg-app-accent disabled:bg-[#333] disabled:text-[#666]' 
                  : status === 'correct' 
                    ? 'bg-app-accent text-app-bg' 
                    : 'bg-red-500 text-white'
                }`}
            >
              {status === 'playing' ? '[EXECUTE]' : '[CONTINUE]'}
            </button>
          </div>
        </div>
      </footer>

      {/* Hint Modal */}
      {showHint && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-app-card border border-app-border max-w-lg w-full p-6 relative shadow-2xl">
            <button 
              onClick={() => setShowHint(false)}
              className="absolute top-4 right-4 text-[#888] hover:text-app-ink"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 text-app-ink mb-4 font-mono">
              <Book size={20} />
              <h2 className="text-lg">MAN_PAGE_EXCERPT</h2>
            </div>
            <div className="bg-[#111] p-4 font-mono text-sm text-[#00FF9D] border border-[#333] mb-6">
              {currentQ.manHint}
            </div>
            <button 
              onClick={() => setShowHint(false)}
              className="w-full bg-app-ink text-app-bg font-mono py-2 hover:bg-[#ccc] transition-colors"
            >
              [CLOSE]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
