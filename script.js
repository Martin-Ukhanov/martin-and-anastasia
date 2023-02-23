// Header
const header = document.querySelector('header');
let lastScrollPos = 0;

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  if (scrollPos > lastScrollPos) {
    // Scroll down
    header.classList.add('-translate-y-full');
  } else if (scrollPos < lastScrollPos) {
    // Scroll up
    header.classList.remove('-translate-y-full');
  }

  lastScrollPos = (scrollPos < 0) ? 0 : scrollPos;
});

// Menu
const menu = document.querySelector('menu');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menuNavElements = document.querySelector('menu nav').childNodes;

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('translate-x-full');
});

menuNavElements.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
  });
});

// Countdown
const countdown = document.getElementById('countdown');

const getCountdown = () => {
  const dateNow = new Date();
  const dateFuture = new Date('July 1, 2023 01:00:00');
  const distance = dateFuture - dateNow;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days < 0 ? 0 : days} ${days === 1 ? 'Day' : 'Days'} : ${
    hours < 0 ? 0 : hours
  } ${hours === 1 ? 'Hour' : 'Hours'} : ${minutes < 0 ? 0 : minutes} ${
    minutes === 1 ? 'Minute' : 'Minutes'
  } : ${seconds < 0 ? 0 : seconds} ${seconds === 1 ? 'Second' : 'Seconds'}`;
};

countdown.textContent = getCountdown();

setInterval(() => {
  countdown.textContent = getCountdown();
}, 1000);

// Q & A
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    questions[i].querySelector('svg').classList.toggle('rotate-180');
    answers[i].classList.toggle('max-h-0');
    answers[i].classList.toggle('max-h-[1000px]');
  });
}

// Drop
const targets = document.querySelectorAll('.drop');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-drop');
    }
  });
});

targets.forEach((target) => {
  target.classList.add('opacity-0');
  observer.observe(target);
});
