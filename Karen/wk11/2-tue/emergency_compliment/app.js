var express = require('express');
var app = express();
const PORT = 8080; //capital letters because it is a constant

app.set('views','./views');
app.set('view engine', 'ejs');

let compliments = [
"Your instructors love you",
"High five = ^5",
"Shut up and take my money",
"It's always beer o'clock somewhere",
"The Force is strong with you",
"You're the absolute best",
"Nobody can code like you",
"You're a unicorn!"];

let colors = [
    "#FFBF00",
    "#0080FF",
    "#01DF3A",
    "#FF0080"
  ];

function pickRandomElementFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


app.get('/', function(req,res) {
  let compliment = pickRandomElementFromArray(compliments);
  let color = pickRandomElementFromArray(colors);
  res.render('compliment', {compliment, color});
});


app.listen(8080, () => console.log('Example app listening on port 3000!'))
