/* =====================================================
   MARYAM FITNESS - JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* بستن منو بعد از کلیک روی لینک */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* ================= COUNTERS ================= */

const counters = document.querySelectorAll(".stat strong");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const duration = 1200;
        const stepTime = 20;
        const increment = target / (duration / stepTime);

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                setTimeout(updateCounter, stepTime);

            } else {

                counter.textContent = target + (target === 95 ? "%" : "+");

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold: .5
});


counters.forEach(counter => observer.observe(counter));


/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,5,5,.96)";
    } else {
        navbar.style.background = "rgba(9,9,9,.88)";
    }

});


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .result-card, .about-content, .about-image"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: .15
});


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});