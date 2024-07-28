document.addEventListener("DOMContentLoaded", function () {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  const scrollRevealOptionLeft = {
    distance: "50px",
    origin: "left",
    duration: 1000,
  };

  const scrollRevealOptionRight = {
    distance: "50px",
    origin: "right",
    duration: 1000,
  };

  // Individual animations with a 200ms delay difference
  ScrollReveal().reveal(".menu-links:nth-child(1)", {
    ...scrollRevealOptionRight,
    delay: 0, // No delay for the first element
  });

  ScrollReveal().reveal(".menu-links:nth-child(2)", {
    ...scrollRevealOptionRight,
    delay: 200, // 200ms delay for the second element
  });

  ScrollReveal().reveal(".menu-links:nth-child(3)", {
    ...scrollRevealOptionRight,
    delay: 400, // 400ms delay for the third element
  });

  ScrollReveal().reveal(".menu-links:nth-child(4)", {
    ...scrollRevealOptionRight,
    delay: 600, // 600ms delay for the fourth element
  });

  // Reveal all elements with the class "services-card" from the bottom
  ScrollReveal().reveal(".services-card", {
    ...scrollRevealOption,
    interval: 500, // The delay between the start of each element's animation
  });

  ScrollReveal().reveal(".gallery-grid", {
    ...scrollRevealOption,
    interval: 500, // The delay between the start of each element's animation
  });

  ScrollReveal().reveal(".contact-form", {
    ...scrollRevealOptionLeft,
    interval: 500, // The delay between the start of each element's animation
  });

  ScrollReveal().reveal(".contact-socials", {
    ...scrollRevealOptionRight,
    interval: 500, // The delay between the start of each element's animation
  });

  ScrollReveal().reveal(".footer-container", {
    ...scrollRevealOption,
    interval: 500, // The delay between the start of each element's animation
  });

});

// for infinite number counter
$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200,
  });
});

// menu bar

const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
