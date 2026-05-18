// TYPING EFFECT

const words = [
  "Tech Enthusiast",
  "Video Editor",
  "Graphic Designer",
  "Gamer",
  "Anime Lover"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

  currentWord = words[i];

  if (!isDeleting) {

    document.getElementById("typing").textContent =
      currentWord.substring(0, j + 1);

    j++;

    if (j === currentWord.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }

  } else {

    document.getElementById("typing").textContent =
      currentWord.substring(0, j - 1);

    j--;

    if (j === 0) {

      isDeleting = false;

      i++;

      if (i === words.length) {
        i = 0;
      }

    }

  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// IMAGE MODAL

function openModal(img) {

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("fullImg");

  modal.style.display = "flex";

  modalImg.src = img.src;

  document.body.style.overflow = "hidden";

}


// CLOSE MODAL

function closeModal() {

  const modal = document.getElementById("imgModal");

  modal.style.display = "none";

  document.body.style.overflow = "auto";

}


// CLOSE WHEN CLICK OUTSIDE IMAGE

window.onclick = function(event) {

  const modal = document.getElementById("imgModal");

  const modalImg = document.getElementById("fullImg");

  if (event.target === modal) {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

  }

};


// SCROLL ANIMATION

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      section.style.opacity = "1";
      section.style.transform = "translateY(0px)";

    }

  });

});


// INITIAL SECTION STYLE

sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(80px)";
  section.style.transition = "all 0.8s ease";

});


// LOAD FIRST SECTION

window.onload = () => {

  document.querySelector(".hero").style.opacity = "1";

  document.querySelector(".hero").style.transform =
  "translateY(0px)";

};