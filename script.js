document.addEventListener('DOMContentLoaded', () => {

  /* Burgermenu */
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  /* Main Banner Interactivity */
  const banner = document.querySelector('.banner');
  const btn = document.querySelector('#changeImg');
  let current = 1;

  if (banner && btn) {
    btn.addEventListener('click', () => {
      current = current === 1 ? 2 : 1;
      banner.style.backgroundImage = `url('../images/placeholder${current}.jpg')`;
    });
  }

  /* Get Started Button */
  const getStartedBtn = document.querySelector('#getStarted');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      window.location.href = 'planner.html';
    });
  }

});
