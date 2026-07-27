// DEON Tapes — Chrome (header/nav) module
(function() {
  'use strict';

  // Mobile menu toggle
  const burgers = document.querySelectorAll('.burger');
  const navMenu = document.querySelector('nav');

  if (burgers.length) {
    burgers.forEach(burger => {
      burger.addEventListener('click', function() {
        if (navMenu) {
          navMenu.classList.toggle('open');
        }
      });
    });
  }

  // Close menu on link click
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu) {
        navMenu.classList.remove('open');
      }
    });
  });

  // Sticky header on scroll
  const header = document.querySelector('header');
  if (header) {
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  console.log('✓ Chrome module loaded');
})();
