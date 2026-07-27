// DEON Tapes — Site module
(function() {
  'use strict';

  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    function update() {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString();
      }
    }

    // Only animate if element comes into view
    const elemObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        update();
        elemObserver.unobserve(element);
      }
    }, { threshold: 0.5 });

    elemObserver.observe(element);
  }

  // Find all counter elements
  document.querySelectorAll('[data-count]').forEach(el => {
    const count = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    animateCounter(el, count);
    el.addEventListener('updated', function() {
      this.textContent += suffix;
    });
  });

  // Form handling
  const contactForms = document.querySelectorAll('form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      console.log('Form submitted:', Object.fromEntries(formData));
      // TODO: Integrate with backend
      this.reset();
    });
  });

  // Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Mobile viewport height fix
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  window.addEventListener('resize', setVH);
  setVH();

  // Log initialization
  console.log('✓ Site module loaded');
})();
