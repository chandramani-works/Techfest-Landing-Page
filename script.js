// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================= REGISTER BUTTONS =================

const registerButtons = document.querySelectorAll(
    ".register-btn, .outline, .cta button"
);

registerButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Registration will open soon! 🚀\nStay tuned for Techfest updates."
        );

    });

});


// ================= EXPLORE BUTTON =================

const exploreButton = document.querySelector(".hero-buttons button");

exploreButton.addEventListener("click", () => {

    document.querySelector("#events").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".card, .workshop, .about-text, .section h2"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(3, 5, 13, 0.95)";

    } else {

        navbar.style.background =
            "rgba(5, 8, 22, 0.75)";

    }

});


// ================= CONSOLE MESSAGE =================

console.log(
    "Techfest Landing Page | Designed & Developed with HTML, CSS & JavaScript 🚀"
);