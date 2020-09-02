
var randomNumber1 = Math.floor(Math.random() * 6) + 1;         //1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png";       //dice1.png -dice6.png
var randomImageSource1 = "images/" + randomDiceImage1;        // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];            //first src in img tag
image1.setAttribute("src", randomImageSource1);             //changing src in image tag

var randomNumber2 = Math.floor(Math.random() * 6) + 1;       //1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png";     //dice1.png - dice2.png
var randomImageSource2 = "images/" + randomDiceImage2;      // /images/dice1.png - /images/dice6.png
var image2 = document.querySelectorAll("img")[1] ;         //2nd src in img tag
image2.setAttribute("src",randomImageSource2);             //changing src in image tag


if(randomNumber1 > randomNumber2) //if player1 wins
{
  document.querySelector("h1").innerHTML = " 🚩Player 1 wins";
}
else if (randomNumber2 > randomNumber1)  //if player1 wins
{
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else  //if no player wins
{
  document.querySelector("h1").innerHTML = "Draw !";
}
