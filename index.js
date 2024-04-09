let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageDice = "dice" + randomNumber1 + ".png";

let randomImageDiceSrc = "images/" + randomImageDice;

let image1 = document.querySelectorAll("img")[0];

// alert(img1);
image1.setAttribute("src", randomImageDiceSrc);
