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
    explanation: "git initコマンドで現在のディレクトリに新しいGitリポジトリを初期化します。.gitディレクトリが作成されます。"
  },
  {
    id: 2,
    question: "ファイルをステージングエリアに追加するコマンドは？",
    options: ["git commit", "git add", "git push", "git stage"],
    correctAnswer: 1,
    explanation: "git addコマンドでファイルをステージングエリア（インデックス）に追加します。git add .で全ファイルを追加できます。"
  },
  {
    id: 3,
    question: "変更をコミットするコマンドは？",
    options: ["git save", "git record", "git commit", "git store"],
    correctAnswer: 2,
    explanation: "git commitコマンドでステージングエリアの変更をリポジトリに記録します。-mオプションでメッセージを追加できます。"
  },
  {
    id: 4,
    question: "現在のリポジトリの状態を確認するコマンドは？",
    options: ["git info", "git state", "git check", "git status"],
    correctAnswer: 3,
    explanation: "git statusコマンドで変更されたファイル、ステージングされたファイル、現在のブランチなどを確認できます。"
  },
  {
    id: 5,
    question: "リモートリポジトリを複製するコマンドは？",
    options: ["git copy", "git download", "git clone", "git duplicate"],
    correctAnswer: 2,
    explanation: "git cloneコマンドでリモートリポジトリを複製します。履歴も含めて完全なコピーが作成されます。"
  },
  {
    id: 6,
    question: "リモートリポジトリに変更をプッシュするコマンドは？",
    options: ["git upload", "git send", "git sync", "git push"],
    correctAnswer: 3,
    explanation: "git pushコマンドでローカルのコミットをリモートリポジトリに送信します。"
  },
  {
    id: 7,
    question: "リモートリポジトリから最新の変更を取得してマージするコマンドは？",
    options: ["git fetch", "git download", "git pull", "git sync"],
    correctAnswer: 2,
    explanation: "git pullコマンドはgit fetchとgit mergeを組み合わせたもので、リモートの変更を取得して現在のブランチにマージします。"
  },
  {
    id: 8,
    question: "ブランチを切り替えるコマンドは？",
    options: ["git change", "git move", "git goto", "git switch"],
    correctAnswer: 3,
    explanation: "git switchコマンドでブランチを切り替えます。従来はgit checkoutが使われていましたが、Git 2.23以降はswitchが推奨されます。"
  },
  {
    id: 9,
    question: "コミット履歴を表示するコマンドは？",
    options: ["git history", "git commits", "git log", "git timeline"],
    correctAnswer: 2,
    explanation: "git logコマンドでコミット履歴を表示します。--onelineオプションで簡潔な表示も可能です。"
  },
  {
    id: 10,
    question: "現在のブランチ一覧を表示するコマンドは？",
    options: ["git list", "git branches", "git branch", "git show-branch"],
    correctAnswer: 2,
    explanation: "git branchコマンドでブランチ一覧を表示します。現在のブランチは*マークで示されます。"
  }
];

// Git実用コマンドクイズ（初心者〜中級者向け）
const practicalQuestions: QuizQuestion[] = [
  {
    id: 11,
    question: "新しいブランチを作成して切り替えるコマンドは？",
    options: ["git branch -new", "git switch -c", "git create-branch", "git checkout -new"],
    correctAnswer: 1,
    explanation: "git switch -cコマンドで新しいブランチを作成して切り替えます。従来のgit checkout -bも使用可能です。"
  },
  {
    id: 12,
    question: "ブランチをマージするコマンドは？",
    options: ["git combine", "git join", "git merge", "git unite"],
    correctAnswer: 2,
    explanation: "git mergeコマンドで指定したブランチを現在のブランチにマージします。"
  },
  {
    id: 13,
    question: "ファイルをGitの追跡から除外するコマンドは？",
    options: ["git ignore", "git exclude", "git untrack", "git rm --cached"],
    correctAnswer: 3,
    explanation: "git rm --cachedコマンドでファイルをGitの追跡から除外します。ファイル自体は削除されません。"
  },
  {
    id: 14,
    question: "リモートリポジトリの情報を表示するコマンドは？",
    options: ["git remote", "git remotes", "git remote -v", "git origin"],
    correctAnswer: 2,
    explanation: "git remote -vコマンドでリモートリポジトリの名前とURLを表示します。"
  },
  {
    id: 15,
    question: "ファイルの変更差分を表示するコマンドは？",
    options: ["git diff", "git compare", "git changes", "git delta"],
    correctAnswer: 0,
    explanation: "git diffコマンドでワーキングディレクトリとステージングエリアの差分を表示します。"
  },
  {
    id: 16,
    question: "直前のコミットを取り消すコマンドは？",
    options: ["git undo", "git revert HEAD", "git reset HEAD~1", "git cancel"],
    correctAnswer: 2,
    explanation: "git reset HEAD~1コマンドで直前のコミットを取り消します。--softオプションで変更を保持できます。"
  },
  {
    id: 17,
    question: "設定情報を確認するコマンドは？",
    options: ["git settings", "git info", "git config --list", "git show-config"],
    correctAnswer: 2,
    explanation: "git config --listコマンドで現在のGit設定を一覧表示します。"
  },
  {
    id: 18,
    question: "リモートから最新情報を取得するコマンドは？",
    options: ["git download", "git get", "git retrieve", "git fetch"],
    correctAnswer: 3,
    explanation: "git fetchコマンドでリモートの最新情報を取得します。ローカルブランチへのマージは行いません。"
  },
  {
    id: 19,
    question: "追跡されていないファイルを削除するコマンドは？",
    options: ["git clean -f", "git clear", "git remove", "git cleanup"],
    correctAnswer: 0,
    explanation: "git clean -fコマンドで追跡されていないファイルを削除します。-dオプションでディレクトリも削除できます。"
  },
  {
    id: 20,
    question: "スタッシュに変更を一時保存するコマンドは？",
    options: ["git save", "git store", "git stash", "git temp"],
    correctAnswer: 2,
    explanation: "git stashコマンドで現在の変更を一時的に保存します。git stash popで取り出せます。"
  }
];

// Git応用操作クイズ（中級者向け）
const advancedQuestions: QuizQuestion[] = [
  {
    id: 21,
    question: "ワーキングディレクトリの変更を破棄するコマンドは？",
    options: ["git reset", "git checkout -- <file>", "git restore", "git revert"],
    correctAnswer: 2,
    explanation: "git restoreコマンドでワーキングディレクトリの変更を破棄します。Git 2.23以降で推奨される方法です。従来はgit checkout -- <file>が使われていました。"
  },
  {
    id: 22,
    question: "ステージングエリアから変更を取り消すコマンドは？",
    options: ["git unstage", "git restore --staged", "git reset HEAD", "git undo"],
    correctAnswer: 1,
    explanation: "git restore --stagedコマンドでステージングエリアから変更を取り消します。"
  },
  {
    id: 23,
    question: "コミットメッセージを修正するコマンドは？",
    options: ["git edit", "git modify", "git commit --amend", "git update"],
    correctAnswer: 2,
    explanation: "git commit --amendコマンドで直前のコミットメッセージを修正できます。"
  },
  {
    id: 24,
    question: "リベースを実行するコマンドは？",
    options: ["git merge", "git relocate", "git reapply", "git rebase"],
    correctAnswer: 3,
    explanation: "git rebaseコマンドでコミット履歴を整理し、ブランチのベースを変更できます。"
  },
  {
    id: 25,
    question: "ファイルの変更履歴を行単位で表示するコマンドは？",
    options: ["git history", "git track", "git blame", "git annotate"],
    correctAnswer: 2,
    explanation: "git blameコマンドでファイルの各行がいつ誰によって変更されたかを表示します。"
  },
  {
    id: 26,
    question: "特定のコミットの変更内容を表示するコマンドは？",
    options: ["git diff", "git view", "git show", "git display"],
    correctAnswer: 2,
    explanation: "git showコマンドで特定のコミットの詳細な変更内容を表示します。"
  },
  {
    id: 27,
    question: "コンフリクトを解決した後にリベースを続行するコマンドは？",
    options: ["git rebase --continue", "git rebase --proceed", "git rebase --resolve", "git rebase --go"],
    correctAnswer: 0,
    explanation: "git rebase --continueコマンドでコンフリクト解決後にリベースを続行します。"
  },
  {
    id: 28,
    question: "タグを作成するコマンドは？",
    options: ["git mark", "git label", "git tag", "git version"],
    correctAnswer: 2,
    explanation: "git tagコマンドで特定のコミットにタグを付けます。-aオプションで注釈付きタグを作成できます。"
  },
  {
    id: 29,
    question: "過去のコミットを対話的に編集するコマンドは？",
    options: ["git rebase -i", "git edit", "git interactive", "git modify"],
    correctAnswer: 0,
    explanation: "git rebase -iコマンドで過去のコミットを対話的に編集、結合、削除できます。"
  },
  {
    id: 30,
    question: "特定のコミットを取り消す新しいコミットを作成するコマンドは？",
    options: ["git undo", "git rollback", "git revert", "git reverse"],
    correctAnswer: 2,
    explanation: "git revertコマンドで指定したコミットの変更を打ち消す新しいコミットを作成します。"
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
    id: "practical",
    title: "Git実用コマンド",
    description: "日常的によく使うGitコマンドを学習（初心者〜中級者向け）",
    questions: practicalQuestions
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