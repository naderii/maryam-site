/* =====================================================
   MARYAM FITNESS COACH
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================= COUNTERS ================= */

const counters = document.querySelectorAll(".result strong");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const duration = 1400;
        const interval = 20;
        const increment = target / (duration / interval);

        const update = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                setTimeout(update, interval);

            } else {

                counter.textContent = target;

                if (target === 8) {
                    counter.textContent = "8+";
                }

                if (target === 300) {
                    counter.textContent = "300+";
                }

                if (target === 95) {
                    counter.textContent = "95%";
                }

                if (target === 100) {
                    counter.textContent = "100%";
                }

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});


counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".service, .why-item, .step, .result, .about-content, .about-image"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* ================= SMOOTH CTA ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= CONSOLE ================= */

console.log(
    "Maryam Fitness Coach Website - Ready 💪"
);
document.addEventListener("contextmenu", function (event) {

    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }

});

document.addEventListener("dragstart", function (event) {

    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }

});