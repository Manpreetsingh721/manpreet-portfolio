/* =============================================
   MANPREET SINGH — PORTFOLIO
   JavaScript: Navigation, Animations, Form
   ============================================= */

(function () {
  'use strict';

  // ===== DOM READY =====
  document.addEventListener('DOMContentLoaded', function () {
    initNavScroll();
    initHamburger();
    initRevealAnimations();
    initSmoothScroll();
    initContactForm();
  });

  // ===== NAVIGATION SCROLL EFFECT =====
  function initNavScroll() {
    var header = document.getElementById('nav-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== HAMBURGER MENU =====
  function initHamburger() {
    var btn = document.getElementById('hamburger');
    var links = document.getElementById('nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      btn.classList.toggle('active', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on nav link click
    links.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ===== SCROLL REVEAL ANIMATIONS =====
  function initRevealAnimations() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    // Use IntersectionObserver for performance
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once revealed
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ===== SMOOTH SCROLL for ANCHOR LINKS =====
  function initSmoothScroll() {
    var navHeight = 72;

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  // ===== ACTIVE NAV LINK HIGHLIGHT =====
  (function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
      var scrollY = window.scrollY + 100;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  // ===== CONTACT FORM =====
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      var name = form.querySelector('#contact-name');
      var email = form.querySelector('#contact-email-input');
      var message = form.querySelector('#contact-message');
      var submitBtn = form.querySelector('#form-submit');

      // Basic validation
      var valid = true;

      [name, email, message].forEach(function (field) {
        if (!field) return;
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#999';
          valid = false;
        }
      });

      if (email && email.value && !isValidEmail(email.value)) {
        email.style.borderColor = '#999';
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
        return;
      }

      // Visual feedback
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        setTimeout(function () {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ===== STAGGER REVEAL for GRID CHILDREN =====
  (function initGridStagger() {
    var grids = [
      '.skills-grid',
      '.projects-grid',
      '.process-grid',
    ];

    grids.forEach(function (selector) {
      var grid = document.querySelector(selector);
      if (!grid) return;
      var children = grid.querySelectorAll('.reveal');
      children.forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.08) + 's';
      });
    });
  })();

})();
