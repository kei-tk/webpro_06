const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));



// ---------------------------------------------------
// メモ帳 (Memo) アプリケーション
// ---------------------------------------------------

// 初期のデータ定義
let memoList = [
  { id: 1, title: "買い物リスト", content: "牛乳、卵、パン、洗剤" },
  { id: 2, title: "アイデア", content: "新しいWebアプリの企画案を練る" },
  { id: 3, title: "パスワード（仮）", content: "wifi: 1234abcd" }
];

// 一覧表示 (Read - List)
app.get("/memo", (req, res) => {
  res.render('memo', { data: memoList });
});

// 新規登録画面への遷移 (Create - Form)
app.get("/memo/create", (req, res) => {
  res.redirect('/public/memo_new.html');
});

// 詳細表示 (Read - Detail)
app.get("/memo/:number", (req, res) => {
  const number = req.params.number;
  const detail = memoList[number];
  
  if (!detail) {
    return res.send("データが見つかりません。<a href='/memo'>一覧に戻る</a>");
  }
  
  res.render('memo_detail', { id: number, data: detail });
});

// 削除処理 (Delete)
app.get("/memo/delete/:number", (req, res) => {
  const number = req.params.number;
  if (memoList[number]) {
    memoList.splice(number, 1);
  }
  res.redirect('/memo');
});

// 新規登録処理 (Create - Process)
app.post("/memo", (req, res) => {
  const id = memoList.length + 1;
  const title = req.body.title;
  const content = req.body.content;

  memoList.push({ id: id, title: title, content: content });
  console.log(memoList);
  
  res.render('memo', { data: memoList });
});

// 編集画面への遷移 (Update - Form)
app.get("/memo/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = memoList[number];
  
  if (!detail) {
    return res.redirect('/memo');
  }
  
  res.render('memo_edit', { id: number, data: detail });
});

// 更新処理 (Update - Process)
app.post("/memo/update/:number", (req, res) => {
  const number = req.params.number;
  
  if (memoList[number]) {
    memoList[number].title = req.body.title;
    memoList[number].content = req.body.content;
  }
  
  console.log(memoList);
  res.redirect('/memo');
});




// ---------------------------------------------------
// スケジュール (Schedule) アプリケーション
// ---------------------------------------------------

// 初期のデータ定義
let scheduleList = [
  { id: 1, date: "2024-07-20", title: "レポート提出", memo: "Webプログラミングの課題" },
  { id: 2, date: "2024-07-25", title: "テスト勉強", memo: "図書館に行く" },
  { id: 3, date: "2024-08-01", title: "夏休み開始", memo: "実家に帰省" }
];

// 一覧表示 (Read - List) [cite: 128]
app.get("/schedule", (req, res) => {
  res.render('schedule', { data: scheduleList });
});

// 新規登録画面への遷移 (Create - Form) [cite: 133]
app.get("/schedule/create", (req, res) => {
  res.redirect('/public/schedule_new.html');
});

// 詳細表示 (Read - Detail) [cite: 135]
app.get("/schedule/:number", (req, res) => {
  const number = req.params.number;
  const detail = scheduleList[number];
  
  if (!detail) {
    return res.send("データが見つかりません。<a href='/schedule'>一覧に戻る</a>");
  }
  
  res.render('schedule_detail', { id: number, data: detail });
});

// 削除処理 (Delete) [cite: 145]
app.get("/schedule/delete/:number", (req, res) => {
  const number = req.params.number;
  if (scheduleList[number]) {
    scheduleList.splice(number, 1);
  }
  res.redirect('/schedule');
});

// 新規登録処理 (Create - Process) [cite: 152]
app.post("/schedule", (req, res) => {
  const id = scheduleList.length + 1;
  const date = req.body.date;
  const title = req.body.title;
  const memo = req.body.memo;

  scheduleList.push({ id: id, date: date, title: title, memo: memo });
  console.log(scheduleList);
  
  res.render('schedule', { data: scheduleList });
});

// 編集画面への遷移 (Update - Form) [cite: 165]
app.get("/schedule/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = scheduleList[number];
  
  if (!detail) {
    return res.redirect('/schedule');
  }
  
  res.render('schedule_edit', { id: number, data: detail });
});

// 更新処理 (Update - Process) [cite: 172]
app.post("/schedule/update/:number", (req, res) => {
  const number = req.params.number;
  
  if (scheduleList[number]) {
    scheduleList[number].date = req.body.date;
    scheduleList[number].title = req.body.title;
    scheduleList[number].memo = req.body.memo;
  }
  
  console.log(scheduleList);
  res.redirect('/schedule');
});




// ---------------------------------------------------
// アンケート (Survey) アプリケーション
// ---------------------------------------------------

// 初期のデータ定義
let surveyList = [
  { id: 1, name: "山田太郎", age: 20, hobby: "読書" },
  { id: 2, name: "鈴木花子", age: 22, hobby: "スポーツ" },
  { id: 3, name: "田中一郎", age: 19, hobby: "ゲーム" }
];

// 一覧表示 (Read - List)
app.get("/survey", (req, res) => {
  res.render('survey', { data: surveyList });
});

// 新規登録画面への遷移 (Create - Form)
app.get("/survey/create", (req, res) => {
  res.redirect('/public/survey_new.html');
});

// 詳細表示 (Read - Detail)
app.get("/survey/:number", (req, res) => {
  const number = req.params.number;
  // 配列のインデックスを使ってデータを取得 [cite: 137]
  const detail = surveyList[number];
  
  // データが存在しない場合のエラーハンドリング（簡易的）
  if (!detail) {
    return res.send("データが見つかりません。<a href='/survey'>一覧に戻る</a>");
  }
  
  res.render('survey_detail', { id: number, data: detail });
});

// 削除処理 (Delete)
// ※講義スライド13ページ等の仕様に基づきGETメソッドで実装 [cite: 123]
app.get("/survey/delete/:number", (req, res) => {
  const number = req.params.number;
  // 指定されたインデックスの要素を1つ削除 [cite: 150]
  if (surveyList[number]) {
    surveyList.splice(number, 1);
  }
  res.redirect('/survey');
});

// 新規登録処理 (Create - Process)
app.post("/survey", (req, res) => {
  const id = surveyList.length + 1; // IDは簡易的に付与
  const name = req.body.name;
  const age = req.body.age;
  const hobby = req.body.hobby;

  // 配列に追加 [cite: 161]
  surveyList.push({ id: id, name: name, age: age, hobby: hobby });
  console.log(surveyList);
  
  // 一覧画面を再描画（またはredirectでも可）
  res.render('survey', { data: surveyList });
});

// 編集画面への遷移 (Update - Form)
app.get("/survey/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = surveyList[number];
  
  if (!detail) {
    return res.redirect('/survey');
  }
  
  res.render('survey_edit', { id: number, data: detail });
});

// 更新処理 (Update - Process)
app.post("/survey/update/:number", (req, res) => {
  const number = req.params.number;
  
  if (surveyList[number]) {
    // 既存データの書き換え [cite: 175]
    surveyList[number].name = req.body.name;
    surveyList[number].age = req.body.age;
    surveyList[number].hobby = req.body.hobby;
  }
  
  console.log(surveyList);
  res.redirect('/survey');
});







let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

// 一覧
app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {id: number, data: detail} );
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
});



app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 以下の数行は人間の勝ちの場合の処理なので，
  // 判定に沿ってあいこと負けの処理を追加する
  judgement = '勝ち';
  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
