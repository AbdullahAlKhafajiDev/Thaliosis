var quotes = ["*choking sounds*", "<q>i'M sO qUiRkY</q>",
 "*dying pigeon sounds*", "<q>did y'all think we'd have this kind of friendship? just kidding we're not friends.</q>", 
 "<q>Ivan has a little creepy perdophile smile.</q>", "<q>You freaking boomer!</q>",
 "<q>Shove this up your peepee hole!</q>", "<q>Your mom should've aborted you Ivan.</q>",
 "<q>I've learned so much from Tik Tok, white people gang signs, real gang signs. </q>",
 "<q>will you marry me in 20 years Ivan?</q>", "<q>hey welcome back to my channel, this is my wife Ivan</q>", 
 "<q>hey this is my girlfriend Ivina</q>", "<q>meow meow meow meow</q>", "<q>MEOW MEWO MEWO MEOWWWWWW</q>"]
let bound1 = true
let Thalias = 0
let respose;
let x = true
let i = true
var image1 = document.getElementById("image1")
var text1 = document.getElementById("text")
var score = document.getElementById("score")
console.log(data)
var quote = quotes[Math.floor(Math.random()*quotes.length)];
function Intro(){
if (x == true){
i = false
score.style.opacity = "0"
image1.style.height = "100px"
image1.style.width = "100px"
image1.style.border = "3px solid #525252"
document.body.style.transitionDuration = "0.5s"
document.body.style.backgroundColor = "rgb(158, 184, 185)"
graph.parentNode.removeChild(graph)
button1.parentNode.removeChild(button1)
image1.style.transitionDuration = "0s"
image1.style.opacity = "0"
text1.innerHTML = "mental"
text1.style.opacity = "100"
setTimeout(
    () => {
document.body.style.transitionDuration = "0.5s"
document.body.style.backgroundColor = "white"
text1.style.transitionDuration = "0.3s"
text1.style.color = "black"
text1.style.fontSize = "100px"
text1.innerHTML = "BREAKDOWN!"
    },
    800
  );
setTimeout(
    () => {
document.body.style.transitionDuration = "0s"
document.body.style.backgroundColor = "black"
text1.style.fontSize = "120px"
text1.style.transitionDuration = "0s"
text1.style.color = "white"
    },
    1200
  );
setTimeout(
    () => {
document.body.style.backgroundColor = "white"
text1.style.color = "black"
text1.style.fontSize = "140px"

    },
    1300
  );
  setTimeout(
    () => {
document.body.style.backgroundColor = "black"
text1.style.color = "white"
text1.style.fontSize = "160px"

    },
    1400
  );
    setTimeout(
    () => {
document.body.style.backgroundColor = "white"
text1.style.color = "black"
text1.style.fontSize = "180px"

    },
    1500
  );
      setTimeout(
    () => {
document.body.style.backgroundColor = "black"
text1.style.color = "white"
text1.style.fontSize = "200px"

    },
    1600
  );
        setTimeout(
    () => {
document.body.style.backgroundColor = "white"
text1.style.color = "black"
text1.style.fontSize = "220px"

    },
    1700
  );
          setTimeout(
    () => {
document.body.style.backgroundColor = "black"
text1.style.color = "white"
text1.style.fontSize = "240px"

    },
    1800
  );
          setTimeout(
    () => {
text1.parentNode.removeChild(text1)
document.body.style.backgroundColor = "rgb(250, 192, 255)"
image1.style.opacity = "100"
ActualRotation()
score.style.opacity = "1"
    },
    1900
  );
}
x = false
if (bound1 == true){
  score.style.textShadow = "0px 0px 10px #ffffff"
  score.innerHTML = "Thalias captured " + Thalias
  Thalias = 1 + Thalias
  }
setTimeout(() => {
bound1 = false
}, 12 * 1000
);
}

function ActualRotation(){
if (bound1 == true){
  image1.style.transitionDuration = "0.2s"
  EndColor()
  document.body.style.transitionDuration = "0.2s"
  document.body.style.backgroundColor = Color2
  image1.style.borderColor = "#ffffff"
  var x = Math.floor((Math.random() * 500) + 100);
  x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var y = Math.floor((Math.random() * 200) + 100);
  y *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var r = Math.floor((Math.random() * 1000) + 0);
  r *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

  image1.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + r + "deg)"
  setTimeout(
    () => {
  EndColor()
  document.body.style.transitionDuration = "0.2s"
  document.body.style.backgroundColor = Color2
  var x = Math.floor((Math.random() * 500) + 100);
  x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var y = Math.floor((Math.random() * 200) + 100);
  y *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var r = Math.floor((Math.random() * 1000) + 0);
  r *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  image1.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + r + "deg)"
    },
    500
  );
 setTimeout(
    () => {
    ActualRotation()
    },
    1000
  );
}
if (bound1 == false){
  image1.parentNode.removeChild(image1)
  document.body.style.transitionDuration = "0.5s"
  document.body.style.backgroundColor = "rgb(252, 230, 255)"
  score.style.fontSize = "50px"
  score.style.transform = "translate(0, 0)"
  Thalias = Thalias - 1
  if (Thalias < 2){
    response = "stop recording and help Ivan."
  }
  if (Thalias == 2 || Thalias == 3 || Thalias == 4){
    response = "Abdul snap out of your Hiroshima flashback and stop Thalia."
  }
  if (Thalias == 5 || Thalias == 6 || Thalias == 7){
    response = "ok Leia thanks for the contribution."
  }
  if (Thalias > 7){
    response = "alright Pablo hold the table before she flips it."
  }
    score.innerHTML = "You tried to stop Thalia's mental breakdown " + Thalias + " times, " + response
 setTimeout(
    () => {
    score.style.transitionDuration = "0.5s"
    EndColor()
    score.style.color = Color2
    TitleColor()
    },
    1000
  );

}
}
function pickColor(){
    r = Math.random() * (254 - 0) + 222;
    g = Math.random() * (254 - 0) + 222;
    b = Math.random() * (254 - 0) + 222;

    Color = 'rgb('+r+','+g+', '+b+')';
}

function DarkMode(){
  document.body.style.backgroundColor = "#F3FFE3"
  document.getElementById("graph").style.color = "rgb(138, 138, 138)"
  document.getElementById("graph").innerHTML = quote
  document.getElementById("image1").style.borderColor = ""
  button1.parentNode.removeChild(button1)
  pickColor()
  document.getElementById("body").style.backgroundColor = Color

}
function chngButton(x, y){
  document.getElementById(x).style.color = "#525252"
  document.getElementById(x).style.backgroundColor = y
  document.getElementById(x).style.boxShadow = "rgba(0,0,0,0.19)";
}
function chngBack(x, y){
  document.getElementById(x).style.color = y
  document.getElementById(x).style.backgroundColor = "#525252"
}

function imgRotation(){
if (i == true){
  document.getElementById("image1").style.transitionDuration = "2s"
  document.getElementById("image1").style.transform = "rotate(-720deg)"
}}

function backNormal (){
  if (i == true){
  document.getElementById("image1").style.transform = "rotate(0deg)"
}}

function Bigger(){
  button1.parentNode.removeChild(button1)
  graph.parentNode.removeChild(graph)
  document.getElementById("image1").style.marginRight = "420px"
  document.getElementById("image1").style.height = "1000px"
  document.getElementById("image1").style.width = "1000px"
}
function EndColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    Color2 = 'rgb('+r+','+g+', '+b+')';
}
function TitleColor(){

    r = Math.random() * (150 - 0) + 0;
    g = Math.random() * (150 - 0) + 0;
    b = Math.random() * (150 - 0) + 0;
    Color3 = 'rgb('+r+','+g+', '+b+')';
    score.style.transitionDuration = "1s"
    score.style.color = Color3
setTimeout(() =>{
TitleColor()
}, 1000

)
}
