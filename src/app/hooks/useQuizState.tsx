'use client';

import { useState, useEffect, useCallback } from 'react';
import { QuizState } from '../types/quiz';
import { QuizSet } from '../data';

const STORAGE_KEY = 'engineerQuizState';

const initialQuizState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswer: null,
  showResult: false,
  isCorrect: false,
  quizCompleted: false,
  results: [],
  score: 0
};

export const useQuizState = () => {
  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);

  const loadQuizProgress = useCallback(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedState = JSON.parse(saved);
        setQuizState(parsedState);
      }
    } catch (error) {
      console.error('Failed to load quiz progress:', error);
    }
  }, []);

  const saveQuizProgress = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quizState));
    } catch (error) {
      console.error('Failed to save quiz progress:', error);
    }
  }, [quizState]);

  const resetQuizState = useCallback(() => {
    setQuizState(initialQuizState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const selectQuizSet = useCallback((quizSet: QuizSet) => {
    setSelectedQuizSet(quizSet);
    setQuizState(initialQuizState);
  }, []);

  const backToSetSelection = useCallback(() => {
    setSelectedQuizSet(null);
    setQuizState(initialQuizState);
  }, []);

  useEffect(() => {
    loadQuizProgress();
  }, [loadQuizProgress]);

  useEffect(() => {
    saveQuizProgress();
  }, [saveQuizProgress]);

  return {
    quizState,
    setQuizState,
    selectedQuizSet,
    resetQuizState,
    selectQuizSet,
    backToSetSelection
  };
};