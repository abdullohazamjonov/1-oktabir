const readBtn = document.getElementById("readBtn");
const tabrik = document.getElementById("tabrik");


// ================= BUTTON =================

readBtn.addEventListener("click", function () {

    tabrik.scrollIntoView({
        behavior: "smooth"
    });

});


// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


// Tabrik card
const tabrikCard = document.querySelector(".tabrik-card");

if (tabrikCard) {
    observer.observe(tabrikCard);
}


// Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    observer.observe(card);
});


// ================= FALLING FLOWERS =================

const flowers = [
    "🌸",
    "🌷",
    "🌹",
    "🌼",
    "🌺",
    "💮"
];


function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        Math.random() * 15 + 15 + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    petal.style.opacity =
        Math.random() * 0.6 + 0.4;

    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 10000);
}


// Har 500ms yangi gul
setInterval(createPetal, 500);


// ================= MOUSE EFFECT =================

document.addEventListener("mousemove", (event) => {

    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((flower, index) => {

        const speed = (index + 1) * 0.01;

        const x =
            (window.innerWidth / 2 - event.clientX)
            * speed;

        const y =
            (window.innerHeight / 2 - event.clientY)
            * speed;

        flower.style.marginLeft = `${x}px`;
        flower.style.marginTop = `${y}px`;

    });

});