/* ParleHub — Main JavaScript */

(function () {
  'use strict';

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Mobile navigation toggle -----
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ----- Contact form (static demo) -----
  const form = document.querySelector('.contact__form');
  const notice = document.querySelector('.contact__notice');

  if (form && notice) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        notice.textContent = 'Please fill in all fields.';
        notice.className = 'contact__notice contact__notice--error';
        return;
      }

      // Static site: show a confirmation message instead of submitting
      notice.textContent = "Thanks for reaching out! We'll get back to you soon.";
      notice.className = 'contact__notice contact__notice--success';
      form.reset();
    });
  }
})();
