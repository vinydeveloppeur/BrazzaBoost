// Slider Témoignages
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 4000);

// Bouton retour en haut
const backToTop = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Compteur animé
let counter = document.getElementById("counter");
let count = 0;
let target = 5000;
let speed = 50;

let interval = setInterval(() => {
  if (count < target) {
    count += Math.ceil(target / 100);
    counter.innerText = count;
  } else {
    counter.innerText = target;
    clearInterval(interval);
  }
}, speed);

// FAQ Toggle
document.querySelectorAll(".faq-item h3").forEach(item => {
  item.addEventListener("click", () => {
    const p = item.nextElementSibling;
    p.style.display = (p.style.display === "block") ? "none" : "block";
  });
});