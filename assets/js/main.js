/* ===== MENU TOGGLE ===== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const toggleIcon = navToggle.querySelector('i');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  if (navMenu.classList.contains('show')) {
    toggleIcon.classList.replace('bx-menu', 'bx-x');
  } else {
    toggleIcon.classList.replace('bx-x', 'bx-menu');
  }
});

/* ===== CLOSE MENU ON LINK CLICK / OUTSIDE CLICK ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show');
  toggleIcon.classList.replace('bx-x', 'bx-menu');
}

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('show');
    toggleIcon.classList.replace('bx-x', 'bx-menu');
  }
});

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    const navItem = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    );

    if (!navItem) return;

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      navItem.classList.add('active-link');
    } else {
      navItem.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ===== SCROLL REVEAL ===== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/* ===== PROJECT CARD CLICK ===== */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});

/* ===== TYPING ANIMATION (FIXED) ===== */
const typingEl = document.getElementById("typing");

const texts = [
  "Frontend Developer",
  "Web Designer",
  "PHP Developer",
  "UI/UX Designer"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  if (!typingEl) return;

  const currentText = texts[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  typingEl.innerText = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    setTimeout(type, 400);
    return;
  }

  setTimeout(type, isDeleting ? 70 : 130);
}

type();

/* ===== THEME TOGGLE (DARK / LIGHT) ===== */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  if (!toggle || !icon) return;

  // load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.replace("bx-moon", "bx-sun");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    icon.classList.toggle("bx-moon");
    icon.classList.toggle("bx-sun");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});