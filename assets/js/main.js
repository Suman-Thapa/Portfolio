/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    window.location.href = link;
  });
});


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
  const currentText = texts[i];

  // typing / deleting
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerText = currentText.substring(0, j);

  // pause when full word typed
  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500); // longer pause
    return;
  }

  // move to next word
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    setTimeout(type, 400); // small delay before next word
    return;
  }

  // smoother speed
  const speed = isDeleting ? 70 : 130;
  setTimeout(type, speed);
}

type();




// for day and ligth view

const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  icon.classList.toggle("bx-moon");
  icon.classList.toggle("bx-sun");
});