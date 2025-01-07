const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

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

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if(num == 1)luck = "大吉"
  else if(num == 2)luck = "吉"
  else if(num == 3)luck = "中吉"
  else if(num == 4)luck = "小吉"
  else if(num == 5)luck = "末吉"
  else if(num == 6)luck = "凶"

  res.render( 'luck', {number:num, luck:luck} );
});
app.get("/question", (req, res) => {
  let question = "1+1=?";
  let correct = "2";
  let answer = req.query.answer || ""; 
  let result = "";

  if (answer === correct) {
    result = "正解！";
  } 
  else if (answer) { 
    result = `不正解！正解は ${correct} でした！`;
  }

  const display = {
    question: question,
    result: result,
    answer: answer,
  };

  res.render("question", display);
});
app.get("/game", (req, res) => {
  let userChoice = req.query.choice; 
  let winningNumber = req.query.winningNumber; 

  if (!winningNumber) {
      winningNumber = Math.floor(Math.random() * 5) + 1; 
  }
  let result = ""; 
  if (userChoice) {
      if (parseInt(userChoice) === parseInt(winningNumber)) {
          result = "あたり！おめでとう！";
      } else {
          result = "ハズレ！また挑戦してね。";
      }
  }
  const display = {
      userChoice: userChoice || null,
      winningNumber: winningNumber,
      result: result || null
  };
  res.render("game", display);
});
app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win) || 0;
  let total = Number(req.query.total) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  let judgement = '';
  if (hand === cpu) {
    judgement = '引き分け';
  } 
  else if (
    (hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1;
  } 
  else {
    judgement = '負け';
  }
  // 今はダミーで人間の勝ちにしておく
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
app.get("/get_test", (req, res) => {
  res.json({
    answer: 0
  })
});
app.post("/add", (req, res) => {
  console.log("POST");
  console.log( req.body );
  const num1 = Number( req.body.num1 );
  const num2 = Number( req.body.num2 );
  console.log( num1 );
  console.log( num2 );
  res.json( {answer: num1+num2} );
});
app.listen(8080, () => console.log("Example app listening on port 8080!"));
