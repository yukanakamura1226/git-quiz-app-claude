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
  category: string;
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

// Linux実務基本クイズ（毎日使うコマンド）
const linuxBasicQuestions: QuizQuestion[] = [
  {
    id: 31,
    question: "ファイルの詳細情報（権限・サイズ・日時）を表示するコマンドは？",
    options: ["ls", "ls -l", "ls -la", "list -a"],
    correctAnswer: 1,
    explanation: "ls -lコマンドで詳細情報を表示します。-laは隠しファイルも含みますが、基本的な詳細表示は-lで十分です。-lはlong format、-aはall（隠しファイルを含む）の意味です。"
  },
  {
    id: 32,
    question: "現在いるディレクトリのパスを確認するコマンドは？",
    options: ["cd", "pwd", "ls", "dir"],
    correctAnswer: 1,
    explanation: "pwdコマンド（print working directory）で現在の作業ディレクトリの絶対パスを表示します。"
  },
  {
    id: 33,
    question: "ディレクトリを再帰的にコピーするコマンドは？",
    options: ["cp source dest", "cp -r source dest", "copy source dest", "cp -a source dest"],
    correctAnswer: 1,
    explanation: "cp -rコマンドでディレクトリとその中身を再帰的にコピーします。-rはrecursiveの意味です。-aは属性も保持してコピーするオプションです。"
  },
  {
    id: 34,
    question: "ファイルやディレクトリを強制的に削除するコマンドは？",
    options: ["rm file", "rm -f file", "rm -rf directory", "delete file"],
    correctAnswer: 2,
    explanation: "rm -rfコマンドで強制的に再帰削除します。-rは再帰（ディレクトリ用）、-fは強制（確認なし）です。単一ファイルなら-fのみで十分です。⚠️ 注意して使用してください。"
  },
  {
    id: 35,
    question: "ファイル内で特定の文字列を検索するコマンドは？",
    options: ["find \"text\" file", "search \"text\" file", "grep \"text\" file", "look \"text\" file"],
    correctAnswer: 2,
    explanation: "grepコマンドでファイル内の文字列を検索します。正規表現も使用できる強力な検索ツールです。"
  },
  {
    id: 36,
    question: "ログファイルをリアルタイムで監視するコマンドは？",
    options: ["cat log.txt", "tail log.txt", "tail -f log.txt", "watch log.txt"],
    correctAnswer: 2,
    explanation: "tail -fコマンドでファイルの末尾をリアルタイムで監視できます。-fはfollow（追跡）の意味で、ログ監視で頻繁に使用されます。"
  },
  {
    id: 37,
    question: "現在実行中の全プロセスを表示するコマンドは？",
    options: ["ps", "ps -e", "ps aux", "process"],
    correctAnswer: 2,
    explanation: "ps auxコマンドで全ユーザーの全プロセスを詳細表示します。BSD形式で、aは端末を持つ全プロセス、uはユーザー形式、xは端末を持たないプロセスも表示します。"
  },
  {
    id: 38,
    question: "プロセスIDを指定してプロセスを強制終了するコマンドは？",
    options: ["stop 1234", "end 1234", "kill 1234", "kill -9 1234"],
    correctAnswer: 3,
    explanation: "kill -9コマンドでプロセスを強制終了します。-9はSIGKILLシグナルで、プロセスが無視できない終了シグナルです。通常はkillのみ（SIGTERM）を試してから使用します。"
  },
  {
    id: 39,
    question: "ファイルに実行権限を付与するコマンドは？",
    options: ["chmod +x file", "chmod 755 file", "permission +x file", "chmod u+x file"],
    correctAnswer: 0,
    explanation: "chmod +xコマンドでファイルに実行権限を付与します。+xは全ユーザーに実行権限を与えます。より細かく制御する場合はu+x（所有者のみ）やa+x（全員）を使用します。"
  },
  {
    id: 40,
    question: "親ディレクトリも含めてディレクトリを作成するコマンドは？",
    options: ["mkdir dir", "mkdir -p path/to/dir", "create -p path/to/dir", "md -p path/to/dir"],
    correctAnswer: 1,
    explanation: "mkdir -pコマンドで親ディレクトリが存在しない場合も自動的に作成します。-pはparents（親ディレクトリ）の意味です。"
  }
];

// Linux実務応用クイズ（週数回使うコマンド）
const linuxAdvancedQuestions: QuizQuestion[] = [
  {
    id: 41,
    question: "ファイル名で検索してファイルを見つけるコマンドは？",
    options: ["search -name \"*.log\"", "find . -name \"*.log\"", "locate \"*.log\"", "grep -name \"*.log\""],
    correctAnswer: 1,
    explanation: "find . -name \"pattern\"でカレントディレクトリ以下からファイル名パターンで検索します。locateは高速ですがデータベースの更新が必要です。"
  },
  {
    id: 42,
    question: "gzip圧縮されたtarアーカイブを展開するコマンドは？",
    options: ["tar -xf archive.tar", "tar -xzf archive.tar.gz", "untar archive.tar", "extract archive.tar"],
    correctAnswer: 1,
    explanation: "tar -xzfでgzip圧縮されたtarアーカイブを展開します。-xは展開（extract）、-zはgzip、-fはファイル指定です。最近のtarは拡張子を自動判別するため-zは省略可能です。"
  },
  {
    id: 43,
    question: "ディスクの使用量を人間が読みやすい形式で表示するコマンドは？",
    options: ["disk", "df", "df -h", "diskusage"],
    correctAnswer: 2,
    explanation: "df -hコマンドでディスク使用量をGB、MBなど人間が読みやすい単位で表示します。-hはhuman-readableの意味です。"
  },
  {
    id: 44,
    question: "ディレクトリのサイズを確認するコマンドは？",
    options: ["ls -s dirname", "size dirname", "du -sh dirname", "dir -s dirname"],
    correctAnswer: 2,
    explanation: "du -shコマンドでディレクトリの合計サイズを人間が読みやすい形式で表示します。-sはsummary（合計）、-hはhuman-readableです。"
  },
  {
    id: 45,
    question: "システムの負荷やプロセスを動的に監視するコマンドは？",
    options: ["ps aux", "monitor", "top", "system"],
    correctAnswer: 2,
    explanation: "topコマンドでCPU使用率、メモリ使用量、プロセス一覧をリアルタイムで監視できます。qキーで終了します。htopはより高機能な代替ツールです。"
  },
  {
    id: 46,
    question: "URLからファイルをダウンロードするコマンドは？",
    options: ["download http://example.com/file", "get http://example.com/file", "curl -O http://example.com/file", "fetch http://example.com/file"],
    correctAnswer: 2,
    explanation: "curl -Oコマンドでファイルをダウンロードし、元のファイル名で保存します。-Oは大文字で、リモートファイル名を使用します。wgetも同様の用途で使用されます。"
  },
  {
    id: 47,
    question: "過去に実行したコマンドの履歴を表示するコマンドは？",
    options: ["history", "log", "commands", "past"],
    correctAnswer: 0,
    explanation: "historyコマンドで過去に実行したコマンドの履歴を表示します。番号付きで表示され、!番号で再実行、!!で直前のコマンド再実行が可能です。"
  },
  {
    id: 48,
    question: "コマンドがどこにあるかパスを調べるコマンドは？",
    options: ["where ls", "which ls", "find ls", "locate ls"],
    correctAnswer: 1,
    explanation: "whichコマンドで実行可能ファイルのフルパスを表示します。環境変数PATHから検索します。typeコマンドはエイリアスや関数も判別できます。"
  },
  {
    id: 49,
    question: "複数ディレクトリで再帰的に文字列を検索するコマンドは？",
    options: ["grep \"text\" *", "grep -r \"text\" .", "search -r \"text\"", "find \"text\" -r"],
    correctAnswer: 1,
    explanation: "grep -rコマンドで指定ディレクトリ以下のすべてのファイルから文字列を再帰的に検索します。-Rはシンボリックリンクも辿ります。"
  },
  {
    id: 50,
    question: "ファイルの所有者を変更するコマンドは？",
    options: ["chmod user file", "chown user file", "owner user file", "setowner user file"],
    correctAnswer: 1,
    explanation: "chownコマンドでファイルの所有者を変更します。chown user:group fileの形式でグループも同時に変更可能です。root権限が必要な場合が多いです。"
  }
];

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
  }
];

// 後方互換性のため
export const gitQuizQuestions: QuizQuestion[] = basicQuestions;