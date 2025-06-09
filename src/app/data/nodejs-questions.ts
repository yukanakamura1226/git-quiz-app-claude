import { QuizQuestion } from './types';

// Node.js/npm基本クイズ（バージョン管理・環境構築）
export const nodeBasicQuestions: QuizQuestion[] = [
  {
    id: 71,
    question: "プロジェクトごとにNode.jsのバージョンを指定するファイル名は？",
    options: [".node-version", ".nvmrc", ".noderc", "node.config"],
    correctAnswer: 1,
    explanation: ".nvmrcファイルを作成して「20.18.0」などのバージョンを記述することで、プロジェクトごとにNode.jsバージョンを管理できます。nvm useで自動的に切り替わります。"
  },
  {
    id: 72,
    question: "nvmで.nvmrcファイルで指定されたバージョンに切り替えるコマンドは？",
    options: ["nvm switch", "nvm use", "nvm change", "nvm set"],
    correctAnswer: 1,
    explanation: "nvm useコマンドで.nvmrcファイルに記述されたバージョンに切り替えます。該当バージョンがインストールされていない場合は先にnvm installが必要です。"
  },
  {
    id: 73,
    question: "現在使用中のNode.jsバージョンを確認するコマンドは？",
    options: ["node -v", "node version", "node --check", "nvm current"],
    correctAnswer: 0,
    explanation: "node -vまたはnode --versionで現在のNode.jsバージョンを表示します。npm --versionでnpmのバージョンも確認できます。"
  },
  {
    id: 74,
    question: "nvmのデフォルトNode.jsバージョンを20.18.0に設定するコマンドは？",
    options: ["nvm default 20.18.0", "nvm set default 20.18.0", "nvm alias default 20.18.0", "nvm config default 20.18.0"],
    correctAnswer: 2,
    explanation: "nvm alias default 20.18.0で新しいターミナルを開いた時のデフォルトバージョンを設定します。これにより、プロジェクト固有の設定がない限り20.18.0が使われます。"
  },
  {
    id: 75,
    question: "Node.jsのLTSバージョンをインストールするnvmコマンドは？",
    options: ["nvm install lts", "nvm install --lts", "nvm install lts/*", "nvm install stable"],
    correctAnswer: 2,
    explanation: "nvm install lts/*で最新のLTS（Long Term Support）バージョンをインストールします。本番環境では安定性を重視してLTSバージョンの使用が推奨されます。"
  },
  {
    id: 76,
    question: "npmでプロジェクトの依存関係をインストールするコマンドは？",
    options: ["npm setup", "npm install", "npm get", "npm load"],
    correctAnswer: 1,
    explanation: "npm installでpackage.jsonに記述された依存関係をインストールします。npm iという短縮形もよく使われます。"
  },
  {
    id: 77,
    question: "package.jsonファイルを新規作成するコマンドは？",
    options: ["npm create", "npm new", "npm init", "npm setup"],
    correctAnswer: 2,
    explanation: "npm initでpackage.jsonファイルを対話的に作成します。npm init -yですべてデフォルト値で作成することも可能です。"
  },
  {
    id: 78,
    question: "開発環境でのみ使用するパッケージをインストールする際のオプションは？",
    options: ["npm install --dev", "npm install -D", "npm install --development", "npm install -dev"],
    correctAnswer: 1,
    explanation: "npm install -D package-nameまたは--save-devで開発時のみ必要なパッケージをdevDependenciesに追加します。テストツールやビルドツールなどが該当します。"
  },
  {
    id: 79,
    question: "グローバルにパッケージをインストールするオプションは？",
    options: ["npm install --global", "npm install -g", "npm install --system", "npm install -s"],
    correctAnswer: 1,
    explanation: "npm install -g package-nameでパッケージをグローバルにインストールします。コマンドラインツールなど、どこからでも使いたいパッケージで使用します。"
  },
  {
    id: 80,
    question: "package-lock.jsonファイルの主な目的は？",
    options: ["設定情報の保存", "依存関係の固定", "スクリプトの定義", "バージョン情報の表示"],
    correctAnswer: 1,
    explanation: "package-lock.jsonは依存関係の正確なバージョンを固定し、どの環境でも同じバージョンがインストールされることを保証します。チーム開発では必須のファイルです。"
  }
];

// Node.js実務応用クイズ（パッケージ管理・スクリプト実行）
export const nodeAdvancedQuestions: QuizQuestion[] = [
  {
    id: 81,
    question: "package.jsonのscriptsセクションで定義したスクリプトを実行するコマンドは？",
    options: ["npm exec scriptname", "npm run scriptname", "npm start scriptname", "npm script scriptname"],
    correctAnswer: 1,
    explanation: "npm run script-nameでpackage.jsonのscriptsに定義されたスクリプトを実行します。npm start、npm testなど一部は「run」を省略可能です。"
  },
  {
    id: 82,
    question: "npmでパッケージの脆弱性をチェックするコマンドは？",
    options: ["npm check", "npm audit", "npm security", "npm scan"],
    correctAnswer: 1,
    explanation: "npm auditで依存関係の既知の脆弱性をチェックします。npm audit fixで自動修復も可能です。セキュリティ対策として定期実行が重要です。"
  },
  {
    id: 83,
    question: "node_modulesディレクトリを削除してから依存関係を再インストールする理由は？",
    options: ["容量節約のため", "バージョン競合解決のため", "パフォーマンス向上のため", "セキュリティ強化のため"],
    correctAnswer: 1,
    explanation: "依存関係の競合やキャッシュ問題を解決するため、node_modulesとpackage-lock.jsonを削除してからnpm installを実行します。「クリーンインストール」と呼ばれます。"
  },
  {
    id: 84,
    question: "npmでパッケージの最新バージョンを確認するコマンドは？",
    options: ["npm check package", "npm version package", "npm info package", "npm show package"],
    correctAnswer: 2,
    explanation: "npm info package-nameまたはnpm view package-nameでパッケージの詳細情報（最新バージョン、説明、依存関係など）を確認できます。"
  },
  {
    id: 85,
    question: "特定のバージョンのパッケージをインストールするコマンドは？",
    options: ["npm install package@1.0.0", "npm install package=1.0.0", "npm install package:1.0.0", "npm install package-1.0.0"],
    correctAnswer: 0,
    explanation: "npm install package-name@1.0.0で特定のバージョンをインストールします。@latestで最新版、@nextでプレリリース版も指定可能です。"
  },
  {
    id: 86,
    question: "環境変数NODE_ENVが'production'の時に通常除外される依存関係は？",
    options: ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"],
    correctAnswer: 1,
    explanation: "本番環境（NODE_ENV=production）ではdevDependenciesはインストールされません。npm install --productionまたは--only=prodで明示的に除外することも可能です。"
  },
  {
    id: 87,
    question: "npmキャッシュをクリアするコマンドは？",
    options: ["npm clear", "npm cache clean", "npm cache clean --force", "npm reset"],
    correctAnswer: 2,
    explanation: "npm cache clean --forceでnpmのキャッシュをクリアします。パッケージのインストール問題やディスク容量の問題を解決する際に使用します。"
  },
  {
    id: 88,
    question: "npmでパッケージをアンインストールして、package.jsonからも削除するコマンドは？",
    options: ["npm remove package", "npm uninstall package", "npm delete package", "npm rm package"],
    correctAnswer: 1,
    explanation: "npm uninstall package-nameでパッケージをアンインストールし、package.jsonからも自動的に削除されます。npm rmは短縮形です。"
  },
  {
    id: 89,
    question: "npmでローカルインストール済みパッケージの一覧を表示するコマンドは？",
    options: ["npm list", "npm ls", "npm show", "npm packages"],
    correctAnswer: 1,
    explanation: "npm lsまたはnpm listで現在のプロジェクトにインストールされているパッケージを階層表示します。--depthオプションで表示レベルを制御できます。"
  },
  {
    id: 90,
    question: "package.jsonのenginesフィールドの目的は？",
    options: ["実行時環境の指定", "必要なNode.jsバージョンの指定", "パフォーマンス設定", "ビルド設定"],
    correctAnswer: 1,
    explanation: "enginesフィールドでプロジェクトが動作するNode.jsやnpmのバージョン範囲を指定します。チーム開発でバージョン統一を図る際に重要です。"
  }
];