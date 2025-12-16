let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});


const texts = [
  "Frontend Developer",
  "Data Analyst",
  "Data Scientist",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = texts[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.slice(0, charIndex++);
  } else {
    typingElement.textContent = currentText.slice(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }


  let speed;

  if (!isDeleting) {

    speed = charIndex < 4 ? 300 : 140;
  } else {
    speed = 80;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach((box) => {
  const fill = box.querySelector(".skill-fill");
  const width = box.getAttribute("data-width");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fill.style.width = width;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(box);
});

