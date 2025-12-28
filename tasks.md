# webpro_06 — タスクリスト

## 概要
対象システム：京葉線システムに倣った一覧表示ベースの Web アプリを **3 つ** 作成する。  
今回の3システム：
- アンケート（survey）
- スケジュール（schedule）
- メモ（memo）

---

## 1. 基本共通実装
- [ ] `app.js`を作成
  - JS ファイル先頭に `"use strict";` を付ける。:contentReference[oaicite:4]{index=4}
- [ ] `views/` に EJS テンプレート（共通レイアウト、header, footer）
- [ ] `public/` に CSS / 画像 / クライアント JS
- [ ] 各システムの初期データ配列（メモリ）を定義
- [ ] ルーティング実装（一覧, 詳細, 作成画面, 編集画面, 削除）

## 2. システム別タスク
### アンケート（survey）
- [ ] データ構造設計（例：`{ id, title, question[], responses: [{user, answers, created_at}] }`）
- [ ] 一覧表示（/survey）
- [ ] 詳細表示（/survey/:id）
- [ ] 回答送信（POST /survey/:id/respond）
- [ ] 管理用追加/編集/削除（/survey/create, /survey/edit/:id, DELETE）
- [ ] 集計表示（簡易グラフ／棒グラフ等） — クライアントで軽く可視化

### スケジュール（schedule）
- [ ] データ構造設計（例：`{ id, title, start, end, location, note }`）
- [ ] 一覧（/schedule） — 日付ソート, 月/週/日ビューの簡易切替（オプション）
- [ ] 詳細（/schedule/:id）
- [ ] 予定追加（POST /schedule）
- [ ] 予定編集（POST /schedule/update/:id）
- [ ] 予定削除（/schedule/delete/:id）

### メモ（memo）
- [ ] データ構造設計（例：`{ id, title, body, tags, created_at, updated_at }`）
- [ ] 一覧（/memo） — 検索・タグフィルタ（簡易）
- [ ] 詳細（/memo/:id）
- [ ] 追加 / 編集 / 削除
- [ ] Markdown 表示（保存はプレーンテキスト、表示時に Markdown 変換） — `example.md` を参考に書式を統一。

## 3. ドキュメント作成
- [ ] `spec.md` （開発者向け仕様書（仮））を作成（各システムごとのデータ構造・API・ページ遷移を記載）
- [ ] 管理者向け仕様書（TeX）作成（インストール・起動手順、環境要件、既知の不具合）
- [ ] 利用者向け仕様書（TeX）作成（使い方、画面説明、スクリーンショット）
- [ ] GitHub にソースを配置し、レポート内に URL を記載

## 4. テスト & 提出
- [ ] 動作確認（一覧・詳細・追加・編集・削除が正常に動くこと）
- [ ] 各機能のスクリーンショット取得
- [ ] `README.md` と `spec.md` を最終調整
- [ ] GitHub に push（各コミットは意味のある単位で）
- [ ] 提出用 ZIP または リポジトリ URL を Manaba/提出場所へ
