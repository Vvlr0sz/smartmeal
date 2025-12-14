/* Burgermenu */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* Main Banner Interactivity */
const banner = document.querySelector('.banner');
const btn = document.querySelector('#changeImg');
let current = 1;

btn.addEventListener('click', () => {
  current = current === 1 ? 2 : 1;
  banner.style.backgroundImage = `url('../images/placeholder${current}.jpg')`;
});
