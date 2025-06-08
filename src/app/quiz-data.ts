export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

// Git基本操作クイズ（初心者向け）
const basicQuestions: QuizQuestion[] = [
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
    question: "現在のリポジトリの状態を確認するコマンドは？",
    options: ["git info", "git status", "git state", "git check"],
    correctAnswer: 1,
    explanation: "git statusコマンドで現在のリポジトリの状態を確認できます。"
  },
  {
    id: 5,
    question: "リモートリポジトリを複製するコマンドは？",
    options: ["git copy", "git clone", "git download", "git duplicate"],
    correctAnswer: 1,
    explanation: "git cloneコマンドでリモートリポジトリを複製します。"
  },
  {
    id: 6,
    question: "リモートリポジトリに変更をプッシュするコマンドは？",
    options: ["git upload", "git push", "git send", "git sync"],
    correctAnswer: 1,
    explanation: "git pushコマンドでリモートリポジトリに変更をプッシュします。"
  },
  {
    id: 7,
    question: "リモートリポジトリから最新の変更を取得してマージするコマンドは？",
    options: ["git fetch", "git pull", "git download", "git sync"],
    correctAnswer: 1,
    explanation: "git pullコマンドでリモートリポジトリから変更を取得してマージします。"
  },
  {
    id: 8,
    question: "新しいブランチを作成して切り替えるコマンドは？",
    options: ["git branch -new", "git checkout -b", "git create-branch", "git switch -new"],
    correctAnswer: 1,
    explanation: "git checkout -bコマンドで新しいブランチを作成して切り替えます。"
  },
  {
    id: 9,
    question: "コミット履歴を表示するコマンドは？",
    options: ["git history", "git log", "git commits", "git timeline"],
    correctAnswer: 1,
    explanation: "git logコマンドでコミット履歴を表示します。"
  },
  {
    id: 10,
    question: "ブランチをマージするコマンドは？",
    options: ["git combine", "git merge", "git join", "git unite"],
    correctAnswer: 1,
    explanation: "git mergeコマンドでブランチをマージします。"
  }
];

// Git応用操作クイズ（中級者向け）
const advancedQuestions: QuizQuestion[] = [
  {
    id: 11,
    question: "ワーキングディレクトリの変更を破棄するコマンドは？",
    options: ["git reset", "git checkout", "git restore", "git revert"],
    correctAnswer: 2,
    explanation: "git restoreコマンドでワーキングディレクトリの変更を破棄します。"
  },
  {
    id: 12,
    question: "ステージングエリアから変更を取り消すコマンドは？",
    options: ["git unstage", "git restore --staged", "git reset HEAD", "git undo"],
    correctAnswer: 1,
    explanation: "git restore --stagedコマンドでステージングエリアから変更を取り消します。"
  },
  {
    id: 13,
    question: "コミットメッセージを修正するコマンドは？",
    options: ["git edit", "git commit --amend", "git modify", "git update"],
    correctAnswer: 1,
    explanation: "git commit --amendコマンドで直前のコミットメッセージを修正できます。"
  },
  {
    id: 14,
    question: "スタッシュに変更を一時保存するコマンドは？",
    options: ["git save", "git stash", "git store", "git temp"],
    correctAnswer: 1,
    explanation: "git stashコマンドで現在の変更を一時的に保存できます。"
  },
  {
    id: 15,
    question: "リベースを実行するコマンドは？",
    options: ["git merge", "git rebase", "git relocate", "git reapply"],
    correctAnswer: 1,
    explanation: "git rebaseコマンドでコミット履歴を整理し、ブランチを別のベースに移動できます。"
  },
  {
    id: 16,
    question: "ファイルの変更履歴を表示するコマンドは？",
    options: ["git history", "git blame", "git track", "git follow"],
    correctAnswer: 1,
    explanation: "git blameコマンドでファイルの各行がいつ誰によって変更されたかを表示します。"
  },
  {
    id: 17,
    question: "特定のコミットの変更内容を表示するコマンドは？",
    options: ["git diff", "git show", "git view", "git display"],
    correctAnswer: 1,
    explanation: "git showコマンドで特定のコミットの変更内容を表示します。"
  },
  {
    id: 18,
    question: "リモートリポジトリから変更を取得するコマンドは？",
    options: ["git download", "git fetch", "git get", "git retrieve"],
    correctAnswer: 1,
    explanation: "git fetchコマンドでリモートリポジトリから変更を取得します。"
  },
  {
    id: 19,
    question: "コンフリクトを解決した後にマージを完了するコマンドは？",
    options: ["git resolve", "git commit", "git complete", "git finish"],
    correctAnswer: 1,
    explanation: "コンフリクトを解決した後、git commitでマージを完了します。"
  },
  {
    id: 20,
    question: "タグを作成するコマンドは？",
    options: ["git mark", "git tag", "git label", "git version"],
    correctAnswer: 1,
    explanation: "git tagコマンドで特定のコミットにタグを付けることができます。"
  }
];

// クイズセット定義
export const quizSets: QuizSet[] = [
  {
    id: "basic",
    title: "Git基本操作",
    description: "Gitの基本的なコマンドを学習（初心者向け）",
    questions: basicQuestions
  },
  {
    id: "advanced", 
    title: "Git応用操作",
    description: "より高度なGitコマンドを学習（中級者向け）",
    questions: advancedQuestions
  }
];

// 後方互換性のため
export const gitQuizQuestions: QuizQuestion[] = basicQuestions;