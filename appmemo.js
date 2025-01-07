// server.js
"use strict";
const express = require("express");
const app = express();

let memos = []; // メモを保存するための配列

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// メモ一覧を取得
app.get("/memos", (req, res) => {
  res.json(memos);
});

// 新しいメモを追加
app.post("/memos", (req, res) => {
  const { title, content } = req.body;
  const newMemo = { title, content, id: memos.length + 1 };
  memos.push(newMemo);
  res.json({ success: true, memo: newMemo });
});

app.listen(8080, () => console.log("Memo app listening on port 3000!"));
