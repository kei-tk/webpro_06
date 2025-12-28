# 開発者向け仕様書（仮） — webpro_06

## 1. 目的
京葉線システム `keiyo2` の構造を踏襲し、下記 3 システムを同一設計方針で実装する。  
- survey（アンケート）
- schedule（スケジュール）
- memo（メモ）  
本仕様は実装者が実装・保守できるレベルの情報を提供する（仮）。

参照：授業スライドの要件（一覧表示ベース・REST 統一方針）。:contentReference[oaicite:8]{index=8}

---

## 2. 技術スタック
- Node.js + Express
- View: EJS
- 静的資源: `public/`
- 開発言語: JavaScript（全ファイル先頭に `"use strict";` を付与）:contentReference[oaicite:9]{index=9}
- データ永続化: **当面はメモリ内配列**（仕様に従う）。将来はファイル or DB に差し替え可能にする。



---

## 3. API（共通ルール）
各リソースで以下を統一する（`keiyo2` の例に準拠）。:contentReference[oaicite:10]{index=10}

- 一覧: `GET /<resource>` → 表示（HTML）
- 作成画面: `GET /<resource>/create` → 新規入力画面（HTML）
- 詳細: `GET /<resource>/:id` → 詳細表示（HTML）
- 削除: `GET /<resource>/delete/:id` → 削除実行（確認画面は任意）
- 作成実行: `POST /<resource>` → 新規登録（フォーム送信）
- 編集画面: `GET /<resource>/edit/:id` → 編集フォーム
- 更新実行: `POST /<resource>/update/:id` → 更新処理





