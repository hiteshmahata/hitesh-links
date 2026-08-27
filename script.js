/* ==========================
   TYPING EFFECT
========================== */

const words = [
    "Just Hitesh",
    "A Normal Guy",
    "Anime Lover",
    "Music Listener",
    "Tech Curious",
    "Always Exploring"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const word = words[wordIndex];

    if(!deleting){

        typing.textContent =
            word.substring(0,charIndex + 1);

        charIndex++;

        if(charIndex === word.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent =
            word.substring(0,charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 110
    );
}

typeEffect();


/* ==========================
   IMAGE MODAL
========================== */

function openModal(img){

    const modal =
        document.getElementById("imgModal");

    const fullImg =
        document.getElementById("fullImg");

    modal.style.display = "flex";

    fullImg.src = img.src;

    document.body.style.overflow = "hidden";
}


function closeModal(){

    const modal =
        document.getElementById("imgModal");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


/* ==========================
   CLOSE MODAL
========================== */

document
    .getElementById("imgModal")
    .addEventListener("click",function(event){

        if(event.target === this){
            closeModal();
        }

    });


document.addEventListener("keydown",function(event){

    if(event.key === "Escape"){
        closeModal();
    }

});


/* ==========================
   GALLERY 3D EFFECT
========================== */

const images =
    document.querySelectorAll(".gallery-grid img");

images.forEach(function(img){

    img.addEventListener("mousemove",function(event){

        const rect =
            img.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 35;

        const rotateY =
            (centerX - x) / 35;

        img.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });


    img.addEventListener("mouseleave",function(){

        img.style.transform =
            "perspective(700px) rotateX(0) rotateY(0) scale(1)";

    });

});
/* ==========================
   SOMETHING MORE - DOB UNLOCK
========================== */

function unlockSomethingMore(){

    const dobInput = document.getElementById("dob");
    const message = document.getElementById("dob-message");

    if(!dobInput || !message) return;

    const enteredDOB = dobInput.value;

    if(!enteredDOB){

        message.textContent =
            "Please enter the date first.";

        message.style.color = "#ff6b6b";

        return;
    }


    /*
       IMPORTANT:
       Yahan YOUR-DOB ko apni actual DOB se replace karna hai.

       Format:
       YYYY-MM-DD

       Example:
       2000-01-25
    */

   const correctDOB = "2005-06-12";


    if(enteredDOB === correctDOB){

        message.textContent =
            "Access granted. Welcome to the other side.";

        message.style.color = "#00d2ff";

        setTimeout(function(){

            alert("Something More unlocked!");

        },300);

    }else{

        message.textContent =
            "That doesn't seem right. Try again.";

        message.style.color = "#ff6b6b";

    }

}
/* ==========================
   SOMETHING MORE SHOW / HIDE
========================== */

const somethingMoreLink =
    document.querySelector(".something-more-link a");

const somethingMoreSection =
    document.getElementById("something-more");


if (somethingMoreLink && somethingMoreSection) {

    somethingMoreSection.style.display = "none";

    somethingMoreLink.addEventListener("click", function(event) {

        event.preventDefault();

        if (somethingMoreSection.style.display === "none") {

            somethingMoreSection.style.display = "block";

            somethingMoreSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        } else {

            somethingMoreSection.style.display = "none";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

}