var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage ;

var image = document.querySelectorAll("img") [0];

image.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW !";
} else if (randomNumber1 === 6 ) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
}else if (randomNumber2 === 6 ) {
    document.querySelector ("h1").innerHTML = "Player 2 win";
}else {
    document.querySelector("h1");
}



