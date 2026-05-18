// ==========================
// TYPING EFFECT
// ==========================

const words = [

"Tech Enthusiast",
"Video Editor",
"Graphic Designer",
"Gamer",
"Anime Lover",
"Creative Designer"

];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

currentWord = words[i];

if(!isDeleting){

document.getElementById("typing").textContent =
currentWord.substring(0, j + 1);

j++;

if(j === currentWord.length){

isDeleting = true;

setTimeout(typeEffect, 1500);

return;

}

}

else{

document.getElementById("typing").textContent =
currentWord.substring(0, j - 1);

j--;

if(j === 0){

isDeleting = false;

i++;

if(i === words.length){

i = 0;

}

}

}

setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ==========================
// IMAGE MODAL
// ==========================

function openModal(img){

const modal = document.getElementById("imgModal");

const modalImg = document.getElementById("fullImg");

modal.style.display = "flex";

modalImg.src = img.src;

document.body.style.overflow = "hidden";

}


// ==========================
// CLOSE MODAL
// ==========================

function closeModal(){

const modal = document.getElementById("imgModal");

modal.style.display = "none";

document.body.style.overflow = "auto";

}


// ==========================
// CLICK OUTSIDE TO CLOSE
// ==========================

document.getElementById("imgModal")
.addEventListener("click", function(e){

if(e.target.id === "imgModal"){

closeModal();

}

});


// ==========================
// ESC BUTTON CLOSE
// ==========================

document.addEventListener("keydown", function(e){

if(e.key === "Escape"){

closeModal();

}

});


// ==========================
// SMOOTH SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

sections.forEach((section) => {

section.classList.add("hidden");

observer.observe(section);

});


// ==========================
// FLOATING CURSOR GLOW
// ==========================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});


// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop;

if(scrollY >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach((link) => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});


// ==========================
// PAGE LOADER EFFECT
// ==========================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


// ==========================
// PARALLAX EFFECT
// ==========================

window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

document.querySelector(".bg-animation")
.style.transform = `translateY(${scrollY * 0.2}px)`;

});


// ==========================
// IMAGE HOVER 3D EFFECT
// ==========================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

img.addEventListener("mousemove", (e) => {

const rect = img.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const centerX = rect.width / 2;

const centerY = rect.height / 2;

const rotateX = ((y - centerY) / 20);

const rotateY = ((centerX - x) / 20);

img.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

img.addEventListener("mouseleave", () => {

img.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

btn.addEventListener("click", function(e){

const circle = document.createElement("span");

circle.classList.add("ripple");

this.appendChild(circle);

const x = e.clientX - e.target.offsetLeft;

const y = e.clientY - e.target.offsetTop;

circle.style.left = `${x}px`;

circle.style.top = `${y}px`;

setTimeout(() => {

circle.remove();

}, 600);

});

});