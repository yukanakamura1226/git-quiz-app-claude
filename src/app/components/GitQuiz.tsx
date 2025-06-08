'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  LinearProgress,
  Container,
  Paper,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { CheckCircle, Cancel, Refresh, Quiz } from '@mui/icons-material';
import { gitQuizQuestions } from '../quiz-data';

interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timestamp: number;
}

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  showResult: boolean;
  isCorrect: boolean;
  quizCompleted: boolean;
  results: QuizResult[];
  score: number;
}

export default function GitQuiz() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showResult: false,
    isCorrect: false,
    quizCompleted: false,
    results: [],
    score: 0
  });

  const currentQuestion = gitQuizQuestions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / gitQuizQuestions.length) * 100;

  const loadQuizProgress = useCallback(() => {
    try {
      const saved = localStorage.getItem('gitQuizState');
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
      localStorage.setItem('gitQuizState', JSON.stringify(quizState));
    } catch (error) {
      console.error('Failed to save quiz progress:', error);
    }
  }, [quizState]);

  useEffect(() => {
    loadQuizProgress();
  }, [loadQuizProgress]);

  useEffect(() => {
    saveQuizProgress();
  }, [saveQuizProgress]);

  const handleAnswerSelect = (answerIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex
    }));
  };

  const handleSubmitAnswer = () => {
    if (quizState.selectedAnswer === null) return;

    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer: quizState.selectedAnswer,
      isCorrect,
      timestamp: Date.now()
    };

    setQuizState(prev => ({
      ...prev,
      showResult: true,
      isCorrect,
      results: [...prev.results, result],
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < gitQuizQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showResult: false,
        isCorrect: false
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        quizCompleted: true
      }));
    }
  };

  const handleResetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showResult: false,
      isCorrect: false,
      quizCompleted: false,
      results: [],
      score: 0
    });
    localStorage.removeItem('gitQuizState');
  };

  const getScoreColor = () => {
    const percentage = (quizState.score / gitQuizQuestions.length) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'error';
  };

  if (quizState.quizCompleted) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Quiz sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            クイズ完了！
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            スコア: {quizState.score} / {gitQuizQuestions.length}
          </Typography>
          <Chip
            label={`正答率: ${Math.round((quizState.score / gitQuizQuestions.length) * 100)}%`}
            color={getScoreColor()}
            sx={{ mb: 3, fontSize: '1.2rem', py: 3 }}
          />
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleResetQuiz}
              startIcon={<Refresh />}
              size="large"
            >
              もう一度挑戦する
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gitクイズ
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            問題 {quizState.currentQuestionIndex + 1} / {gitQuizQuestions.length}
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
        </Box>
      </Box>

      <Card elevation={3}>
        <CardContent sx={{ p: isMobile ? 2 : 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            {currentQuestion.question}
          </Typography>

          <RadioGroup
            value={quizState.selectedAnswer ?? ''}
            onChange={(e) => handleAnswerSelect(Number(e.target.value))}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {currentQuestion.options.map((option, index) => (
                <Box key={index}>
                  <Paper
                    elevation={quizState.selectedAnswer === index ? 2 : 0}
                    sx={{
                      p: 1,
                      border: '1px solid',
                      borderColor: quizState.selectedAnswer === index ? 'primary.main' : 'divider',
                      backgroundColor: quizState.selectedAnswer === index ? 'primary.50' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      },
                      cursor: 'pointer'
                    }}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <FormControlLabel
                      value={index}
                      control={<Radio />}
                      label={option}
                      sx={{ 
                        width: '100%', 
                        m: 0,
                        '& .MuiFormControlLabel-label': {
                          fontSize: isMobile ? '0.9rem' : '1rem'
                        }
                      }}
                    />
                  </Paper>
                </Box>
              ))}
            </Box>
          </RadioGroup>

          {quizState.showResult && (
            <Alert
              severity={quizState.isCorrect ? 'success' : 'error'}
              icon={quizState.isCorrect ? <CheckCircle /> : <Cancel />}
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {quizState.isCorrect ? '正解！' : '不正解'}
              </Typography>
              <Typography variant="body2">
                {currentQuestion.explanation}
              </Typography>
            </Alert>
          )}

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={handleResetQuiz}
              startIcon={<Refresh />}
            >
              リセット
            </Button>
            
            {!quizState.showResult ? (
              <Button
                variant="contained"
                onClick={handleSubmitAnswer}
                disabled={quizState.selectedAnswer === null}
                size="large"
              >
                回答する
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNextQuestion}
                size="large"
              >
                {quizState.currentQuestionIndex < gitQuizQuestions.length - 1 ? '次の問題' : '結果を見る'}
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}