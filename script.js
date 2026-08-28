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

function unlockSomethingMore() {

    const dobInput = document.getElementById("dob");
    const message = document.getElementById("dob-message");
    const privateContent = document.getElementById("something-more-content");

    if (!dobInput || !message || !privateContent) return;

    const enteredDOB = dobInput.value;

    if (!enteredDOB) {

        message.textContent = "Please enter the date first.";
        message.style.color = "#ff6b6b";

        return;
    }

    // Your DOB: YYYY-MM-DD
    const correctDOB = "2005-06-12";

    if (enteredDOB === correctDOB) {

        message.textContent =
            "Access granted. Welcome to the other side.";

        message.style.color = "#00d2ff";

        privateContent.classList.add("unlocked");

        setTimeout(function () {

            privateContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 500);

    } else {

        message.textContent =
            "That doesn't seem right. Try again.";

        message.style.color = "#ff6b6b";

        privateContent.classList.remove("unlocked");
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
/* ==========================
   KNOW ME BETTER
========================== */

function openPrivateSection(sectionName) {

    if (sectionName !== "know-me") return;

    const existing = document.getElementById("know-me-panel");

    if (existing) {
        existing.remove();
        return;
    }

    const panel = document.createElement("div");

    panel.id = "know-me-panel";
    panel.className = "private-detail-panel";

    panel.innerHTML = `
        <div class="private-detail-inner">

            <button
                type="button"
                class="private-detail-close"
                onclick="closePrivateSection()"
            >
                &times;
            </button>

            <div class="private-detail-icon">
                <i class="fas fa-user"></i>
            </div>

            <span class="unlock-badge">
                <i class="fas fa-unlock"></i>
                Know Me Better
            </span>

            <h2>A little more about me</h2>

            <p class="private-detail-intro">
                If you really want to know me, this is where
                you can see the side of me that I don't usually
                show publicly.
            </p>


            <div class="detail-block">

                <h3>I'm pretty direct</h3>

                <p>
                    I prefer people to be honest and direct with me.
                    If something is on your mind, you can say it.
                    There is usually no need to hide things from me.
                </p>

            </div>


            <div class="detail-block">

                <h3>Trust takes time</h3>

                <p>
                    I don't blindly trust people.
                    Trust is something that builds over time
                    through honesty, consistency and actions.
                </p>

            </div>


            <div class="detail-block">

                <h3>I care more than I show</h3>

                <p>
                    I can keep many small things to myself.
                    Sometimes I overthink those little things
                    instead of talking about them immediately.
                </p>

            </div>


            <div class="detail-block">

                <h3>If I make a mistake</h3>

                <p>
                    If I know I am wrong, I don't have a problem
                    saying sorry. I would rather fix the situation
                    than protect my ego.
                </p>

            </div>


            <div class="detail-block">

                <h3>One thing I really value</h3>

                <p>
                    Genuine people.
                    Someone who can talk openly, stay loyal,
                    give importance to the relationship and
                    still respect each other's freedom.
                </p>

            </div>


            <div class="detail-final">

                <p>
                    You don't have to believe everything you read here.
                    Take your time, talk to me, and decide for yourself.
                </p>

            </div>

        </div>
    `;

    document.body.appendChild(panel);

    requestAnimationFrame(function () {
        panel.classList.add("show");
    });

    document.body.style.overflow = "hidden";
}


function closePrivateSection() {

    const panel = document.getElementById("know-me-panel");

    if (!panel) return;

    panel.classList.remove("show");

    setTimeout(function () {
        panel.remove();
        document.body.style.overflow = "";
    }, 350);
}
/* ==========================
   IF YOU LIKE ME
========================== */

function openIfYouLikeMe() {

    const existing =
        document.getElementById("if-you-like-me-panel");

    if (existing) {
        closeIfYouLikeMe();
        return;
    }

    const panel = document.createElement("div");

    panel.id = "if-you-like-me-panel";
    panel.className = "private-detail-panel";

    panel.innerHTML = `
        <div class="private-detail-inner">

            <button
                type="button"
                class="private-detail-close"
                onclick="closeIfYouLikeMe()"
            >
                &times;
            </button>

            <div class="private-detail-icon">
                <i class="fas fa-heart"></i>
            </div>

            <span class="unlock-badge">
                <i class="fas fa-heart"></i>
                If You Like Me
            </span>

            <h2>Don't overthink it.</h2>

            <p class="private-detail-intro">
                If you genuinely want to know me or talk to me,
                you don't need a perfect reason or a perfect opening.
            </p>

            <div class="detail-block">
                <h3>Being nervous is normal.</h3>

                <p>
                    I understand that starting a conversation can be difficult,
                    especially when you genuinely like someone.
                    You don't have to say everything at once.
                </p>
            </div>

            <div class="detail-block">
                <h3>Start slowly.</h3>

                <p>
                    You can simply start with a normal conversation.
                    Let things become comfortable naturally.
                    There is no need to rush anything.
                </p>
            </div>

            <div class="detail-block">
                <h3>Just be honest with me.</h3>

                <p>
                    You can talk to me directly.
                    Tell me what you actually think or feel.
                    I would rather hear the truth than a carefully made story.
                </p>
            </div>

            <div class="detail-block">
                <h3>You don't need to be afraid of being judged.</h3>

                <p>
                    If you genuinely want to talk to me,
                    you can approach me.
                    I will listen and try to understand before making any judgement.
                </p>
            </div>

            <div class="detail-final">
                <p>
                    If you really want to know me,
                    talk to me honestly.
                    Maybe that's the easiest way to find out
                    whether we actually understand each other.
                </p>
            </div>

        </div>
    `;

    document.body.appendChild(panel);

    requestAnimationFrame(function () {
        panel.classList.add("show");
    });

    document.body.style.overflow = "hidden";
}


function closeIfYouLikeMe() {

    const panel =
        document.getElementById("if-you-like-me-panel");

    if (!panel) return;

    panel.classList.remove("show");

    setTimeout(function () {
        panel.remove();
        document.body.style.overflow = "";
    }, 350);
}
/* ==========================
   PRIVATE CORNER
========================== */

function openPrivateCorner() {

    const existing =
        document.getElementById("private-corner-panel");

    if (existing) {
        closePrivateCorner();
        return;
    }

    const panel = document.createElement("div");

    panel.id = "private-corner-panel";
    panel.className = "private-detail-panel";

    panel.innerHTML = `
        <div class="private-detail-inner">

            <button
                type="button"
                class="private-detail-close"
                onclick="closePrivateCorner()"
            >
                &times;
            </button>

            <div class="private-detail-icon">
                <i class="fas fa-lock"></i>
            </div>

            <span class="unlock-badge">
                <i class="fas fa-lock"></i>
                Private Corner
            </span>

            <h2>Ek aur level...</h2>

            <p class="private-detail-intro">
                Agar tum yahan tak aaye ho, to tum genuinely
                mujhe thoda aur jaan-na chahte ho.
                Is section ke liye ek custom password chahiye.
            </p>

            <div class="private-password-box">

                <label for="private-password">
                    Password enter karo
                </label>

                <input
                    type="password"
                    id="private-password"
                    placeholder="Enter password"
                    autocomplete="off"
                >

                <button
                    type="button"
                    class="private-open-btn"
                    onclick="unlockPrivateCorner()"
                >
                    Unlock Private Corner
                </button>

                <p
                    id="private-password-message"
                    class="private-password-message"
                ></p>

            </div>

        </div>
    `;

    document.body.appendChild(panel);

    requestAnimationFrame(function () {
        panel.classList.add("show");
    });

    document.body.style.overflow = "hidden";
}


function unlockPrivateCorner() {

    const input =
        document.getElementById("private-password");

    const message =
        document.getElementById("private-password-message");

    if (!input || !message) return;

    const enteredPassword =
        input.value.trim();

    /* YAHAN APNA CUSTOM PASSWORD LIKHNA HAI */
    const correctPassword = "1 20 1 8 1 13 18 1 13 21 11 8 19 5 20 9 8";

    if (enteredPassword === correctPassword) {

        message.textContent =
            "Access granted. Welcome to my Private Corner.";

        message.style.color = "#00d2ff";

        setTimeout(function () {

            closePrivateCorner();

            openPrivateCornerContent();

        }, 700);

    } else {

        message.textContent =
            "Password sahi nahi hai. Dobara try karo.";

        message.style.color = "#ff6b6b";

        input.value = "";

        input.focus();
    }
}


function openPrivateCornerContent() {

    const existing =
        document.getElementById("private-corner-content-panel");

    if (existing) return;

    const panel = document.createElement("div");

    panel.id = "private-corner-content-panel";
    panel.className = "private-detail-panel";

    panel.innerHTML = `
        <div class="private-detail-inner">

            <button
                type="button"
                class="private-detail-close"
                onclick="closePrivateCornerContent()"
            >
                &times;
            </button>

            <div class="private-detail-icon">
                <i class="fas fa-unlock"></i>
            </div>

            <span class="unlock-badge">
                <i class="fas fa-unlock"></i>
                Private Corner Unlocked
            </span>

            <h2>Welcome to my real side.</h2>

            <p class="private-detail-intro">
                Yahan meri kuch personal, random aur real-life
                cheezein hongi. Ye section kisi ko impress karne
                ke liye nahi hai. Bas mujhe thoda aur genuinely
                samajhne ke liye hai.
            </p>

            <div class="detail-block">

                <h3>Private Gallery</h3>

                <p>
                    Friends, random moments, old memories,
                    funny photos aur meri normal life ke
                    kuch moments yahan rahenge.
                </p>

            </div>

            <div class="detail-block">

                <h3>My Story</h3>

                <p>
                    Meri life ke kuch experiences aur woh
                    cheezein jo mujhe andar se change karti rahi hain.
                </p>

            </div>

            <div class="detail-block">

                <h3>Relationship & Mindset</h3>

                <p>
                    Trust, honesty, loyalty, communication,
                    understanding aur relationship ko lekar
                    meri genuine thinking.
                </p>

            </div>

            <div class="detail-block">

                <h3>Things I Don't Usually Tell People</h3>

                <p>
                    Kuch personal thoughts aur chhoti-chhoti
                    baatein jo main normally har kisi ke saath share nahi karta.
                </p>

            </div>

            <div class="detail-block">

                <h3>Random Me</h3>

                <p>
                    Kuch random memories, funny moments,
                    habits aur normal life ki chhoti-chhoti cheezein.
                </p>

            </div>

        </div>
    `;

    document.body.appendChild(panel);

    requestAnimationFrame(function () {
        panel.classList.add("show");
    });

    document.body.style.overflow = "hidden";
}


function closePrivateCorner() {

    const panel =
        document.getElementById("private-corner-panel");

    if (!panel) return;

    panel.classList.remove("show");

    setTimeout(function () {
        panel.remove();
        document.body.style.overflow = "";
    }, 350);
}


function closePrivateCornerContent() {

    const panel =
        document.getElementById("private-corner-content-panel");

    if (!panel) return;

    panel.classList.remove("show");

    setTimeout(function () {
        panel.remove();
        document.body.style.overflow = "";
    }, 350);
}