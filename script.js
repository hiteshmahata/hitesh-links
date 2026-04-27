// ===== MOBILE MENU =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


// ===== TYPING EFFECT =====
const texts = ["Student", "Tech Learner", "Graphic Designer", "Video Editor"];

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
setTimeout(type, 1200);
}else{
setTimeout(type, 100);
}

})();


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

// mobile menu auto close
navLinks.classList.remove("active");

});
});


// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
let triggerBottom = window.innerHeight * 0.85;

sections.forEach(sec => {
let boxTop = sec.getBoundingClientRect().top;

if(boxTop < triggerBottom){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}else{
sec.style.opacity = "0";
sec.style.transform = "translateY(40px)";
}
});
});


// ===== INITIAL STATE =====
sections.forEach(sec => {
sec.style.opacity = "0";
sec.style.transform = "translateY(40px)";
});
window.addEventListener("load", ()=>{
document.getElementById("loader").style.display="none";
});
const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

images.forEach(img=>{
img.addEventListener("click", ()=>{
modal.style.display="flex";
modalImg.src = img.src;
});
});

closeBtn.onclick = ()=> modal.style.display="none";

modal.onclick = (e)=>{
if(e.target === modal){
modal.style.display="none";
}
};