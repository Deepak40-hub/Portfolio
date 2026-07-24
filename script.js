/* ===========================
   AOS
=========================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ===========================
   TYPEWRITER
=========================== */

new Typed(".typing", {
    strings: [
        "Problem Solver",
        "Designer",
        "Cloud Computing",
        "ServiceNow Certified System Administrator",
        "ServiceNow Certified Application Developer"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1800,
    loop: true
});

/* ===========================
   CURSOR GLOW
=========================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* ===========================
   COUNTER
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ===========================
   SCROLL BUTTON
=========================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   DARK MODE
=========================== */

const toggle = document.getElementById("theme-toggle");

let dark = true;

toggle.addEventListener("click", () => {

    if (dark) {

        document.body.classList.add("light-mode");

        toggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.classList.remove("light-mode");

        toggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

});

/* ===========================
   VANILLA TILT
=========================== */

VanillaTilt.init(

    document.querySelectorAll(
        ".project-card,.skill-card,.achievement-card,.certificate-card,.info-card"
    ),

    {

        max: 10,

        speed: 400,

        glare: true,

        "max-glare": .2

    }

);

/* ===========================
   PARTICLES
=========================== */

particlesJS("particles-js", {

    particles: {

        number: {

            value: 70

        },

        color: {

            value: "#06B6D4"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: .4

        },

        size: {

            value: 3

        },

        move: {

            enable: true,

            speed: 2

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#4F46E5",

            opacity: .3,

            width: 1

        }

    },

    interactivity: {

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        }

    }

});

/* ===========================
   ACTIVE NAVBAR
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   FLOATING ICONS
=========================== */

document.querySelectorAll(".floating").forEach((icon, index) => {

    icon.style.animationDelay = `${index * .3}s`;

});

/* ===========================
   CONTACT FORM
=========================== */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

/* ===========================
   HERO PARALLAX
=========================== */

const hero = document.querySelector(".hero-right");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 35;

    const y = (window.innerHeight / 2 - e.pageY) / 35;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ===========================
   FADE NAVBAR
=========================== */

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(10,15,25,.9)";

    } else {

        navbar.style.background =
            "rgba(10,15,25,.65)";

    }

});

/* ===========================
   PRELOADER (OPTIONAL)
=========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Portfolio Loaded Successfully 🚀");