import { QuizQuestion } from './types';

// Linux実務基本クイズ（毎日使うコマンド）
export const linuxBasicQuestions: QuizQuestion[] = [
  {
    id: 31,
    question: "現在いるディレクトリの場所（パス）を表示するコマンドは？",
    options: ["cd", "pwd", "ls", "path"],
    correctAnswer: 1,
    explanation: "pwd（print working directory）コマンドで現在の作業ディレクトリの絶対パスを表示します。Linuxで迷子にならないための基本コマンドです。"
  },
  {
    id: 32,
    question: "ディレクトリの内容を一覧表示する基本的なコマンドは？",
    options: ["list", "dir", "ls", "show"],
    correctAnswer: 2,
    explanation: "lsコマンド（list）でディレクトリの内容を表示します。オプションなしだとファイル名のみ、-lで詳細情報、-aで隠しファイルも表示されます。"
  },
  {
    id: 33,
    question: "別のディレクトリに移動するコマンドは？",
    options: ["cd /path/to/dir", "go /path/to/dir", "move /path/to/dir", "mv /path/to/dir"],
    correctAnswer: 0,
    explanation: "cd（change directory）コマンドでディレクトリを移動します。cd ..で親ディレクトリ、cd ~でホームディレクトリに移動できます。"
  },
  {
    id: 34,
    question: "新しいディレクトリを作成するコマンドは？",
    options: ["mkd dirname", "mkdir dirname", "newdir dirname", "create dirname"],
    correctAnswer: 1,
    explanation: "mkdir（make directory）コマンドで新しいディレクトリを作成します。-pオプションで親ディレクトリも同時に作成できます。"
  },
  {
    id: 35,
    question: "ファイルをコピーするコマンドは？",
    options: ["copy source dest", "cp source dest", "cpy source dest", "duplicate source dest"],
    correctAnswer: 1,
    explanation: "cpコマンドでファイルをコピーします。ディレクトリをコピーする場合は-rオプションが必要です。cp file1 file2でfile1をfile2にコピーします。"
  },
  {
    id: 36,
    question: "ファイルやディレクトリを移動・名前変更するコマンドは？",
    options: ["move old new", "rename old new", "mv old new", "rn old new"],
    correctAnswer: 2,
    explanation: "mvコマンドでファイルの移動や名前変更ができます。mv oldname newnameで名前変更、mv file /path/でファイル移動になります。"
  },
  {
    id: 37,
    question: "ファイルを削除するコマンドは？",
    options: ["delete file", "rm file", "del file", "remove file"],
    correctAnswer: 1,
    explanation: "rm（remove）コマンドでファイルを削除します。削除したファイルは復元できないので注意が必要です。-iオプションで確認しながら削除できます。"
  },
  {
    id: 38,
    question: "ファイルの内容を表示するコマンドは？",
    options: ["show file", "display file", "cat file", "read file"],
    correctAnswer: 2,
    explanation: "catコマンドでファイルの内容を表示します。長いファイルの場合はlessやmoreコマンドを使うとページ単位で表示できます。"
  },
  {
    id: 39,
    question: "空のファイルを作成、または既存ファイルのタイムスタンプを更新するコマンドは？",
    options: ["create file", "touch file", "new file", "make file"],
    correctAnswer: 1,
    explanation: "touchコマンドで空のファイルを作成できます。既存ファイルに使うとタイムスタンプ（更新日時）が現在時刻に更新されます。"
  },
  {
    id: 40,
    question: "コマンドのマニュアル（使い方）を表示するコマンドは？",
    options: ["help command", "man command", "info command", "manual command"],
    correctAnswer: 1,
    explanation: "man（manual）コマンドで各コマンドの詳細なマニュアルを表示します。例：man lsでlsコマンドの使い方を確認できます。qキーで終了します。"
  }
];

// Linux実務応用クイズ（週数回使うコマンド）
export const linuxAdvancedQuestions: QuizQuestion[] = [
  {
    id: 41,
    question: "ファイル内で特定の文字列を検索するコマンドは？",
    options: ["find \"text\" file", "search \"text\" file", "grep \"text\" file", "locate \"text\" file"],
    correctAnswer: 2,
    explanation: "grepコマンドでファイル内の文字列を検索します。grep \"error\" log.txtでlog.txt内の\"error\"を含む行を表示。-iで大文字小文字を無視できます。"
  },
  {
    id: 42,
    question: "ファイルの詳細情報（権限・所有者・サイズ・日時）を表示するオプション付きコマンドは？",
    options: ["ls -a", "ls -l", "ls -h", "ls -t"],
    correctAnswer: 1,
    explanation: "ls -lコマンドで詳細情報をlong format（長形式）で表示します。権限、所有者、グループ、サイズ、更新日時、ファイル名が表示されます。"
  },
  {
    id: 43,
    question: "ファイルやディレクトリを名前で検索するコマンドは？",
    options: ["search . -name \"*.txt\"", "locate \"*.txt\"", "find . -name \"*.txt\"", "grep -name \"*.txt\""],
    correctAnswer: 2,
    explanation: "findコマンドでファイルを検索します。find . -name \"*.txt\"で現在ディレクトリ以下の.txtファイルを検索。-typeオプションでファイルやディレクトリを指定できます。"
  },
  {
    id: 44,
    question: "ファイルのアクセス権限を変更するコマンドは？",
    options: ["chown 755 file", "chmod 755 file", "perm 755 file", "access 755 file"],
    correctAnswer: 1,
    explanation: "chmod（change mode）コマンドで権限を変更します。755は所有者に全権限、グループと他者に読み取りと実行権限を与えます。chmod +xで実行権限を追加できます。"
  },
  {
    id: 45,
    question: "実行中のプロセスを表示するコマンドは？",
    options: ["proc", "ps", "process", "jobs"],
    correctAnswer: 1,
    explanation: "psコマンドでプロセスを表示します。単独で実行すると現在の端末のプロセスのみ、ps auxで全ユーザーの全プロセスを詳細表示します。"
  },
  {
    id: 46,
    question: "ログファイルの最後の10行を表示するコマンドは？",
    options: ["head log.txt", "tail log.txt", "last log.txt", "end log.txt"],
    correctAnswer: 1,
    explanation: "tailコマンドでファイルの末尾を表示します。デフォルトは10行。-n 20で20行、-fオプションでリアルタイム監視（ログ監視に便利）ができます。"
  },
  {
    id: 47,
    question: "圧縮ファイル（.tar.gz）を解凍するコマンドは？",
    options: ["unzip file.tar.gz", "tar -xzf file.tar.gz", "extract file.tar.gz", "decompress file.tar.gz"],
    correctAnswer: 1,
    explanation: "tar -xzfコマンドで.tar.gz形式を解凍します。-xは展開、-zはgzip圧縮、-fはファイル指定。作成は-czfを使います。"
  },
  {
    id: 48,
    question: "ディスク使用量を確認するコマンドは？",
    options: ["disk", "df -h", "du -h", "space"],
    correctAnswer: 1,
    explanation: "df -hコマンドでディスク全体の使用量を人間が読みやすい形式（GB、MB単位）で表示。du -hは個別のファイルやディレクトリのサイズを表示します。"
  },
  {
    id: 49,
    question: "コマンドの履歴を表示するコマンドは？",
    options: ["log", "hist", "history", "commands"],
    correctAnswer: 2,
    explanation: "historyコマンドで過去に実行したコマンドの履歴を番号付きで表示。!番号で再実行、!!で直前のコマンドを再実行できます。"
  },
  {
    id: 50,
    question: "プロセスを終了させるコマンドは？",
    options: ["stop PID", "kill PID", "end PID", "terminate PID"],
    correctAnswer: 1,
    explanation: "killコマンドでプロセスを終了。通常はkill PIDでSIGTERMシグナルを送信。応答しない場合はkill -9 PIDで強制終了（SIGKILL）します。"
  }
];

// Linux実務発展クイズ（実務で頻繁に使う重要コマンド）
export const linuxPracticalQuestions: QuizQuestion[] = [
  {
    id: 51,
    question: "複数のコマンドの出力を連結して次のコマンドに渡す記号は？",
    options: [">", "<", "|", "&"],
    correctAnswer: 2,
    explanation: "パイプ（|）を使って前のコマンドの出力を次のコマンドの入力に渡せます。例：ls -l | grep \"txt\"で.txtファイルのみ表示。複数のコマンドを組み合わせる強力な機能です。"
  },
  {
    id: 52,
    question: "コマンドの出力をファイルに保存（上書き）する記号は？",
    options: ["|", ">>", ">", "<"],
    correctAnswer: 2,
    explanation: "> でコマンドの出力をファイルにリダイレクト（上書き保存）します。>> は追記。例：ls -l > list.txtでファイル一覧をlist.txtに保存します。"
  },
  {
    id: 53,
    question: "環境変数PATHの内容を表示するコマンドは？",
    options: ["echo $PATH", "print PATH", "show PATH", "path"],
    correctAnswer: 0,
    explanation: "echo $PATHで環境変数PATHの内容を表示。$は変数を参照する記号です。PATHにはコマンドの検索パスが設定されています。"
  },
  {
    id: 54,
    question: "ファイルの所有者とグループを変更するコマンドは？",
    options: ["chmod user:group file", "chown user:group file", "owner user:group file", "chgrp user:group file"],
    correctAnswer: 1,
    explanation: "chown（change owner）コマンドで所有者とグループを変更。chown user fileで所有者のみ、chown user:group fileで両方変更。通常はsudo権限が必要です。"
  },
  {
    id: 55,
    question: "現在ログインしているユーザー名を表示するコマンドは？",
    options: ["who", "whoami", "id", "user"],
    correctAnswer: 1,
    explanation: "whoamiコマンドで現在のユーザー名を表示。whoは現在ログイン中の全ユーザー、idはユーザーIDとグループID詳細を表示します。"
  },
  {
    id: 56,
    question: "テキストエディタviでファイルを開いた後、編集モードに入るキーは？",
    options: ["e", "i", "a", "o"],
    correctAnswer: 1,
    explanation: "iキーで挿入（insert）モードに入り、テキスト編集が可能になります。aは後ろに追加、oは下に新しい行を追加して編集。ESCキーでコマンドモードに戻ります。"
  },
  {
    id: 57,
    question: "システムのメモリ使用状況を確認するコマンドは？",
    options: ["memory", "mem", "free", "ram"],
    correctAnswer: 2,
    explanation: "freeコマンドでメモリ（RAM）とスワップの使用状況を表示。-hオプションで人間が読みやすい単位（GB、MB）で表示されます。"
  },
  {
    id: 58,
    question: "ファイルやコマンド出力の行数、単語数、バイト数を数えるコマンドは？",
    options: ["count file", "wc file", "lines file", "calc file"],
    correctAnswer: 1,
    explanation: "wc（word count）コマンドで行数、単語数、バイト数を表示。-lで行数のみ、-wで単語数のみ。例：ls | wc -lでファイル数をカウントできます。"
  },
  {
    id: 59,
    question: "ネットワークの接続確認（ping）を行うコマンドの基本形は？",
    options: ["ping host", "connect host", "test host", "check host"],
    correctAnswer: 0,
    explanation: "pingコマンドでネットワークの疎通確認を行います。例：ping google.comでGoogleへの接続を確認。Ctrl+Cで停止。-c 5で5回だけ実行できます。"
  },
  {
    id: 60,
    question: "ファイルを分割して表示（ページャー）し、上下スクロールできるコマンドは？",
    options: ["more file", "less file", "page file", "view file"],
    correctAnswer: 1,
    explanation: "lessコマンドで大きなファイルをページ単位で表示。上下矢印でスクロール、/で検索、qで終了。moreより高機能で「less is more」と覚えます。"
  }
];

// Linux必須基本クイズ（実務で欠かせない追加コマンド）
export const linuxEssentialQuestions: QuizQuestion[] = [
  {
    id: 61,
    question: "管理者権限でコマンドを実行する際に使う接頭辞は？",
    options: ["admin command", "root command", "sudo command", "su command"],
    correctAnswer: 2,
    explanation: "sudoを付けることで一時的に管理者権限でコマンドを実行できます。例：sudo apt updateでパッケージ更新。パスワード入力が求められます。"
  },
  {
    id: 62,
    question: "ファイルの内容を並び替えて表示するコマンドは？",
    options: ["order file", "sort file", "arrange file", "align file"],
    correctAnswer: 1,
    explanation: "sortコマンドでファイルの内容を行単位で並び替えます。-nで数値順、-rで逆順、-uで重複削除。パイプと組み合わせて使うことが多いです。"
  },
  {
    id: 63,
    question: "重複した行を削除して表示するコマンドは？",
    options: ["unique file", "uniq file", "distinct file", "dedupe file"],
    correctAnswer: 1,
    explanation: "uniqコマンドで連続する重複行を削除。通常はsortと組み合わせて使用：sort file | uniq。-cオプションで重複数もカウントできます。"
  },
  {
    id: 64,
    question: "ファイルの最初の10行を表示するコマンドは？",
    options: ["top file", "head file", "first file", "start file"],
    correctAnswer: 1,
    explanation: "headコマンドでファイルの先頭を表示（デフォルト10行）。-n 20で20行表示。tailと対になるコマンドで、ログの確認などでよく使います。"
  },
  {
    id: 65,
    question: "コマンドをバックグラウンドで実行するために付ける記号は？",
    options: ["!", "&", "*", "@"],
    correctAnswer: 1,
    explanation: "コマンドの最後に & を付けるとバックグラウンドで実行されます。例：long-process &。jobsコマンドでバックグラウンドジョブを確認できます。"
  },
  {
    id: 66,
    question: "ファイル間の差分を表示するコマンドは？",
    options: ["compare file1 file2", "diff file1 file2", "check file1 file2", "delta file1 file2"],
    correctAnswer: 1,
    explanation: "diffコマンドで2つのファイルの差分を表示。設定ファイルの変更確認などで重要。-uオプションで統一形式（unified format）で見やすく表示されます。"
  },
  {
    id: 67,
    question: "コマンドやファイルの場所を検索するコマンドは？（whichより高速）",
    options: ["where command", "whereis command", "locate command", "find command"],
    correctAnswer: 1,
    explanation: "whereisコマンドでコマンドの実行ファイル、ソース、マニュアルの場所を検索。whichは実行ファイルのみ、whereisはより包括的な情報を表示します。"
  },
  {
    id: 68,
    question: "現在の日付と時刻を表示するコマンドは？",
    options: ["time", "date", "now", "today"],
    correctAnswer: 1,
    explanation: "dateコマンドで現在の日時を表示。+フォーマットで表示形式を指定可能。例：date +\"%Y-%m-%d\"で2024-01-15形式。ログのタイムスタンプなどで使用します。"
  },
  {
    id: 69,
    question: "プロセスにシグナルを送る際、正常終了を要求するデフォルトシグナルの番号は？",
    options: ["kill -1 PID", "kill -9 PID", "kill -15 PID", "kill -2 PID"],
    correctAnswer: 2,
    explanation: "kill -15（SIGTERM）が正常終了シグナルで、killコマンドのデフォルト。プロセスに終了処理の機会を与えます。-9（SIGKILL）は強制終了で最終手段です。"
  },
  {
    id: 70,
    question: "標準エラー出力も含めてファイルにリダイレクトする記法は？",
    options: ["command > file", "command 2> file", "command &> file", "command >> file"],
    correctAnswer: 2,
    explanation: "command &> fileまたはcommand > file 2>&1で標準出力と標準エラー出力の両方をファイルに保存。ログ収集やエラー解析で重要な記法です。"
  }
];