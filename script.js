
/* ==============================
   TECH X - INTERACTIONS
   ============================== */

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Dynamic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// Optional: Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 30) {
    navbar.style.background = "rgba(8,11,18,0.96)";
  } else {
    navbar.style.background = "rgba(8,11,18,0.82)";
  }
});
