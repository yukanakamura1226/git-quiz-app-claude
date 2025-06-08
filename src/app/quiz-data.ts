export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const gitQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Gitでローカルリポジトリを初期化するコマンドは？",
    options: ["git init", "git start", "git create", "git new"],
    correctAnswer: 0,
    explanation: "git initコマンドでローカルリポジトリを初期化します。"
  },
  {
    id: 2,
    question: "ファイルをステージングエリアに追加するコマンドは？",
    options: ["git commit", "git add", "git push", "git stage"],
    correctAnswer: 1,
    explanation: "git addコマンドでファイルをステージングエリアに追加します。"
  },
  {
    id: 3,
    question: "変更をコミットするコマンドは？",
    options: ["git save", "git commit", "git record", "git store"],
    correctAnswer: 1,
    explanation: "git commitコマンドで変更をコミットします。-mオプションでメッセージを追加できます。"
  },
  {
    id: 4,
    question: "リモートリポジトリから変更を取得するコマンドは？",
    options: ["git download", "git fetch", "git get", "git retrieve"],
    correctAnswer: 1,
    explanation: "git fetchコマンドでリモートリポジトリから変更を取得します。"
  },
  {
    id: 5,
    question: "現在のリポジトリの状態を確認するコマンドは？",
    options: ["git info", "git status", "git state", "git check"],
    correctAnswer: 1,
    explanation: "git statusコマンドで現在のリポジトリの状態を確認できます。"
  },
  {
    id: 6,
    question: "新しいブランチを作成して切り替えるコマンドは？",
    options: ["git branch -new", "git checkout -b", "git create-branch", "git switch -new"],
    correctAnswer: 1,
    explanation: "git checkout -bコマンドで新しいブランチを作成して切り替えます。"
  },
  {
    id: 7,
    question: "リモートリポジトリに変更をプッシュするコマンドは？",
    options: ["git upload", "git push", "git send", "git sync"],
    correctAnswer: 1,
    explanation: "git pushコマンドでリモートリポジトリに変更をプッシュします。"
  },
  {
    id: 8,
    question: "コミット履歴を表示するコマンドは？",
    options: ["git history", "git log", "git commits", "git timeline"],
    correctAnswer: 1,
    explanation: "git logコマンドでコミット履歴を表示します。"
  },
  {
    id: 9,
    question: "特定のコミットの変更内容を表示するコマンドは？",
    options: ["git diff", "git show", "git view", "git display"],
    correctAnswer: 1,
    explanation: "git showコマンドで特定のコミットの変更内容を表示します。"
  },
  {
    id: 10,
    question: "ブランチをマージするコマンドは？",
    options: ["git combine", "git merge", "git join", "git unite"],
    correctAnswer: 1,
    explanation: "git mergeコマンドでブランチをマージします。"
  }
];