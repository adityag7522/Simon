var p1 = Math.random();
p1 = p1*6;
p1 = Math.floor(p1);
var p2 = Math.random();
p2 = p2*6;
p2 = Math.floor(p2);
// console.log(p1);
// console.log(p2);
p1 += 1;
p2 += 1;
var d1 = "images/dice" + p1 + ".png";
var d2 = "images/dice" + p2 + ".png";

document.querySelector(".img1").setAttribute("src" , d1);

document.querySelector(".img2").setAttribute("src" , d2);

if(p1<p2){
    document.querySelector("h1").innerText = "🚩Player 2 Wins.";
}
else if(p1>p2){
    document.querySelector("h1").innerText = "Player 1 Wins.🚩";
}
else document.querySelector("h1").innerText = "Drawww.";