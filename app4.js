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

  res.render( 'luck2', {number:num, luck:luck} );
});
app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 3 + 1 );
  let luck = '';
  if(num == 1)luck = "グー"
  else if(num == 2)luck = "チョキ"
  else if(num == 3)luck = "パー"

  res.render( 'luck3', {number:num, luck:luck} );
});
app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 2 + 1 );
  let luck = '';
  if(num == 1)luck = "表"
  else if(num == 2)luck = "裏"

  res.render( 'luck3', {number:num, luck:luck} );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
