// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle
//const toggle = document.getElementById("theme-toggle");
//toggle.addEventListener("click", () => {
//  document.body.classList.toggle("dark");
//  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
//});

// Animated text
const text = document.querySelector(".animated-text");
const phrases = ["Automation Tester", "SDET"];
let i = 0;
setInterval(() => {
  text.textContent = phrases[i];
  i = (i + 1) % phrases.length;
}, 2500);
