import { QuizSet } from './types';
import { basicQuestions, practicalQuestions, advancedQuestions } from './git-questions';
import { 
  linuxBasicQuestions, 
  linuxAdvancedQuestions, 
  linuxPracticalQuestions, 
  linuxEssentialQuestions 
} from './linux-questions';
import { nodeBasicQuestions, nodeAdvancedQuestions } from './nodejs-questions';

// クイズセット定義
export const quizSets: QuizSet[] = [
  {
    id: "git-basic",
    title: "Level 1: 基本操作",
    description: "Gitの基本的なコマンドを学習",
    category: "Git",
    questions: basicQuestions
  },
  {
    id: "git-practical",
    title: "Level 2: 実用操作",
    description: "日常的によく使うコマンドを学習",
    category: "Git",
    questions: practicalQuestions
  },
  {
    id: "git-advanced", 
    title: "Level 3: 応用操作",
    description: "より高度なコマンドを学習",
    category: "Git",
    questions: advancedQuestions
  },
  {
    id: "linux-basic",
    title: "Level 1: 実務基本",
    description: "毎日使うコマンドを学習",
    category: "Linux",
    questions: linuxBasicQuestions
  },
  {
    id: "linux-advanced",
    title: "Level 2: 実務応用",
    description: "週数回使うコマンドを学習",
    category: "Linux",
    questions: linuxAdvancedQuestions
  },
  {
    id: "linux-practical",
    title: "Level 3: 実務発展",
    description: "実務で頻繁に使う重要コマンドを学習",
    category: "Linux",
    questions: linuxPracticalQuestions
  },
  {
    id: "linux-essential",
    title: "Level 4: 必須基本",
    description: "実務で欠かせない追加コマンドを学習",
    category: "Linux",
    questions: linuxEssentialQuestions
  },
  {
    id: "node-basic",
    title: "Level 1: 基本操作",
    description: "バージョン管理・環境構築を学習",
    category: "Node.js",
    questions: nodeBasicQuestions
  },
  {
    id: "node-advanced",
    title: "Level 2: 実務応用",
    description: "パッケージ管理・スクリプト実行を学習",
    category: "Node.js",
    questions: nodeAdvancedQuestions
  }
];

// 後方互換性のため
export const gitQuizQuestions = basicQuestions;
export * from './types';