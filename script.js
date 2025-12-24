// =====================
// Smooth scrolling
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =====================
// Dark mode toggle
// =====================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// =====================
// Typed.js for hero
// =====================
var typed = new Typed('#typed', {
  strings: ["Industrial Automation - IIoT Engineer"],
  typeSpeed: 50,
  backSpeed: 25,
  startDelay: 1500,
  backDelay: 3000,
  loop: true,
  showCursor: true,
  fadeOut: true
});

// =====================
// Particles.js background
// =====================
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 1 },
    "line_linked": { "enable": true }
  }
});

// =====================
// Animate skill bars when section visible
// =====================
const skills = document.querySelectorAll('.skill-fill');
const skillsSection = document.getElementById('skills');

// =====================
// Animate language bars when section visible
// =====================
const langBars = document.querySelectorAll('.lang-bar span');
const languagesSection = document.getElementById('languages');

function fillSkills() {
  skills.forEach(skill => {
    skill.style.width = skill.getAttribute('data-width');
  });
}

function fillLangBars() {
  langBars.forEach(bar => {
    bar.style.width = bar.getAttribute('data-level');
  });
}

window.addEventListener('scroll', () => {
  const skillsPos = skillsSection.getBoundingClientRect().top;
  const langPos = languagesSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if(skillsPos < screenPos) fillSkills();
  if(langPos < screenPos) fillLangBars();
});

// =====================
// Initialize AOS library
// =====================
AOS.init({
  duration: 1000,
  once: true
});
