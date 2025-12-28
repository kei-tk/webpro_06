# webpro_06のページ遷移図

### じゃんけん関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /public/janken.html
/public/janken.html --> /janken:手を選択(1)
/janken --> /janken:手を選択(2)
```

#### (1)のパラメータ

パラメータ名 | 属性 | 内容 | 値
-|-|-|-
hand | text | ユーザの手 | グー/チョキ/パー
win | hidden | 勝利数 | 0
total | hidden | 対戦数 | 0

#### (2)のパラメータ

パラメータ名 | 属性 | 内容 | 値
-|-|-|-
hand | text | ユーザの手 | グー/チョキ/パー
win | hidden | 勝利数 | これまでの勝利数
total | hidden | 対戦数 | これまでの対戦数


```mermaid
stateDiagram-v2
    direction LR
    
    state "一覧ページ (List)" as 一覧
    state "詳細ページ (Detail)" as 詳細
    state "新規登録 (Create)" as 新規
    state "編集 (Edit)" as 編集

    [*] --> 一覧: アクセス

    %% 新規登録のフロー
    一覧 --> 新規: 新規ボタン
    新規 --> 一覧: 登録実行 (POST)

    %% 詳細表示のフロー
    一覧 --> 詳細: タイトルクリック
    詳細 --> 一覧: 戻る
    
    %% 編集のフロー
    一覧 --> 編集: 編集リンク
    詳細 --> 編集: 編集リンク
    編集 --> 一覧: 更新実行 (POST)

    %% 削除のフロー（自分自身への矢印）
    一覧 --> 一覧: 削除リンク
```