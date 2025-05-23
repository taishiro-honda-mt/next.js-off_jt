# JavaScript基礎（DOM操作・イベント）

## 🎯 目的

JavaScriptの基本構文を理解し、DOMの操作やユーザーの操作（イベント）に反応するWebページを作成できるようになる。

---

## 🎯 今週のゴール

- JavaScriptの基本的な文法を理解する（変数・条件分岐・関数など）
- ボタンのクリックや入力などに対して処理を動かせる
- HTMLの要素（DOM）をJavaScriptで取得・変更できる

---

## ✅ JavaScriptの基本構文

[リンク](JavaScriptの基本構文.md)

---

## ✅ DOM操作の基本

[リンク](DOM操作の基本.md)

---

## ✅ イベント処理（ユーザーの操作に反応）

[リンク](イベント処理（ユーザーの操作に反応）.md) 

---

## ✅ 課題1：カウンターアプリを作ろう

### 📘 説明  
ボタンをクリックすると数値が「＋1」「−1」されていく **カウンターアプリ** を作成しましょう。

### 🎯 要件

- 画面上に「現在の回数」を表示する
- 「＋」ボタンを押すと、回数が 1 増える
- 「−」ボタンを押すと、回数が 1 減る
- 回数はリアルタイムに更新されること

### 💡 ヒント

- JavaScriptで数値の状態（`count`）を管理しましょう
- DOMの取得には `getElementById()` を使ってみましょう
- クリックイベントには `addEventListener("click", 関数)` を使います

### 完成イメージ

https://github.com/user-attachments/assets/cf01316d-3b96-4563-b0a8-e0c33a272c42

---

## ✅ 課題2：名前を入力して表示しよう

### 📘 説明  
テキストボックスに名前を入力してボタンを押すと、「こんにちは、◯◯さん！」と表示されるアプリを作成しましょう。

### 🎯 要件

- テキストボックスを設置する（`<input type="text">`）
- ボタンを押すと入力内容が表示される
- 表示エリア（`<p>`タグなど）に挨拶文を出力する
- 入力が空の場合は「名前を入力してください」と表示する

### 💡 ヒント

- `input.value` で入力値を取得できます
- 表示の書き換えには `.innerText` を使いましょう
- 入力チェックには `if (value === "")` を使ってみましょう

### 完成イメージ

https://github.com/user-attachments/assets/9107e3dc-c6b3-4a14-abb3-db079fa046e8

---

## 🔄 提出方法

- HTMLファイル + JSファイルを GitHub に Push
- メンターに Pull Request を出してレビューを受けてください

---

## ✅ まとめ

- JavaScriptで**動きのあるページ**が作れるようになる
- DOMの取得とイベント処理はフロントエンドの基本
- 小さな動作を作ってみることで「面白さ」を感じるのが重要！

<!-- 課題を提出する際、プルリクエストに以下を貼り付けてください
## 📊 評価チェックリスト

※ 各観点ごとにチェック数を数え、下記ルールで点数化  
（チェック数 0個=0点 / 1個=1点 / 2個=3点 / 3個以上=5点）

---

### 🎯 成果物（アウトプットの完成度）

- [ ] 変数定義・関数定義・条件分岐などの基本構文を使って動くプログラムを作成している
- [ ] DOMを取得し、要素に対する変更（例：テキストの書き換え）ができている
- [ ] イベント（クリックなど）をトリガーにして処理が動くようにできている
- [ ] 実装したコードをブラウザで動作確認し、期待通りに動いている

---

### 📚 知識理解（仕組みや構文の理解）

- [ ] 変数（let / const）とその使い分けを理解している
- [ ] if / switch / for / while など基本制御構文を説明できる
- [ ] イベントリスナー（addEventListener）を使う意味を説明できる
- [ ] DOMの取得（`getElementById` など）の意味と動作を理解している

---

### 💬 説明力（なぜその実装をしたか）

- [ ] 処理の流れを言葉で説明できる（例：クリック→値取得→表示）
- [ ] なぜこの関数や変数が必要だったのか説明できる
- [ ] イベントと関数の関係性を説明できる
- [ ] 実装したコードの目的・結果が説明できる

---

### 🔧 自己修正（修正・改善の自走力）

- [ ] コンソールログやDevToolsを使ってバグや問題を自力で発見・修正した
- [ ] 不明点を自分で調べて解決しようとした痕跡がある（コメントや検索ログなど）
- [ ] レビューコメントに対して「なぜ直すか」を理解して反映している
- [ ] 試行錯誤してより良い書き方を探そうとしていた形跡がある

---

📝 評価観点ごとのチェック数を数え、以下のように点数に換算してください：

| チェック数 | 点数 |
|------------|------|
| 0個        | 0点  |
| 1個        | 1点  |
| 2個        | 3点  |
| 3〜4個     | 5点  |

-->