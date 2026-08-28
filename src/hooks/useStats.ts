import { useState, useEffect, useCallback } from 'react';
import { UserStats, Question, CategoryStat } from '../types';
import { getCategoryForQuestion } from '../utils';

const DEFAULT_STATS: UserStats = {
  lessonsCompleted: 0,
  streak: 0,
  lastPlayedDate: null,
  failedQuestions: [],
  categoryStats: {},
};

export function useStats() {
  const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);

  useEffect(() => {
    const saved = localStorage.getItem('rhcsa_lingo_stats');
    if (saved) {
      setStats({ ...DEFAULT_STATS, ...JSON.parse(saved) });
    }
  }, []);

  const saveStats = useCallback((newStats: UserStats) => {
    setStats(newStats);
    localStorage.setItem('rhcsa_lingo_stats', JSON.stringify(newStats));
  }, []);

  const incrementLesson = useCallback(() => {
    setStats(prev => {
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let newStreak = prev.streak;

      if (prev.lastPlayedDate !== today) {
        if (prev.lastPlayedDate === yesterday) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }
      }

      const newStats = {
        ...prev,
        lessonsCompleted: prev.lessonsCompleted + 1,
        streak: newStreak,
        lastPlayedDate: today,
      };
      localStorage.setItem('rhcsa_lingo_stats', JSON.stringify(newStats));
      return newStats;
    });
  }, []);

  const trackAnswer = useCallback((question: Question, isCorrect: boolean) => {
    setStats(prev => {
      const category = getCategoryForQuestion(question);
      const catStat = prev.categoryStats[category] || { total: 0, correct: 0 };
      
      const newCategoryStats = {
        ...prev.categoryStats,
        [category]: {
          total: catStat.total + 1,
          correct: catStat.correct + (isCorrect ? 1 : 0),
        },
      };

      let newFailed = [...(prev.failedQuestions || [])];
      if (isCorrect) {
        newFailed = newFailed.filter(id => id !== question.id);
      } else {
        if (!newFailed.includes(question.id)) {
          newFailed.push(question.id);
        }
      }

      const newStats = {
        ...prev,
        categoryStats: newCategoryStats,
        failedQuestions: newFailed,
      };
      localStorage.setItem('rhcsa_lingo_stats', JSON.stringify(newStats));
      return newStats;
    });
  }, []);

  return { stats, incrementLesson, trackAnswer };
}
