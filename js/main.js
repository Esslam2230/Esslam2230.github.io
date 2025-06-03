   document.addEventListener("DOMContentLoaded", () => {
      const faders = document.querySelectorAll(".fade-in");
      const options = {
        threshold: 0.3
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      }, options);
      faders.forEach(el => observer.observe(el));
    });
      (() => {
        'use strict';
        const form = document.querySelector('#contact-form');
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      })();