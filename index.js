var RandomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var RandomDiceImage = "dice" + RandomNumber1 + ".png";
var RandomImageSource = "images/" + RandomDiceImage;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", RandomImageSource);

var RandomNumber2 = Math.floor(Math.random()*6) +1;
var RandomImageSource2 = "images/dice" +RandomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src" , RandomImageSource2);
if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins !";
}
else if (RandomNumber1 < RandomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins !";
}
else {
    document.querySelector("h1").innerHTML = "Draw !";
}