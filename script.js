// TYPING EFFECT

const texts = [
"Tech Enthusiast",
"Video Editor",
"Graphic Designer",
"Gamer",
"Anime Lover"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type, 1000);
}else{
setTimeout(type, 120);
}

})();

// IMAGE MODAL

function openModal(img){

document.getElementById("imgModal").style.display = "flex";

document.getElementById("fullImg").src = img.src;

document.body.style.overflow = "hidden";
}

function closeModal(){

document.getElementById("imgModal").style.display = "none";

document.body.style.overflow = "auto";
}