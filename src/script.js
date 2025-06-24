// ===== BURGER MENU TOGGLE =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ===== DARK MODE TOGGLE =====
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Optional: persist user preference
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// ===== LOAD DARK MODE IF PREFERRED =====
window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = localStorage.getItem("darkMode") === "true";
  if (prefersDark) document.body.classList.add("dark");
});

// ===== SIMPLE CAROUSEL LOGIC =====
const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

let scrollAmount = 0;
const scrollStep = 280; // width + gap estimate

track.scrollTo({ left: scrollAmount, behavior: "smooth" });


leftBtn.addEventListener("click", () => {
  scrollAmount = Math.max(scrollAmount - scrollStep, 0);
  track.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  scrollAmount = Math.min(scrollAmount + scrollStep, track.scrollWidth);
  track.scrollTo({ left: scrollAmount, behavior: "smooth" });
});
