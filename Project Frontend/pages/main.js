document.addEventListener('DOMContentLoaded', () => {
  //Image Slide
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");

  const slidernav = function(manual) {
    if (manual < 0 || manual >= btns.length) return;

    btns.forEach(btn => btn.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("active"));

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
  };

  const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;

        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      slidernav(i);
    });
  });

  //FAQ  
  const faqContainer = document.querySelector('.faq-content');

  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-group-header');
      if (!header) return;

      const group = header.parentElement;
      const body = group.querySelector('.faq-group-body');
      const icon = header.querySelector('i');

      body.classList.toggle('open');
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');

      const allGroups = faqContainer.querySelectorAll('.faq-group');
      allGroups.forEach((item) => {
        if (item !== group) {
          item.querySelector('.faq-group-body').classList.remove('open');
          const i = item.querySelector('i');
          i.classList.remove('fa-minus');
          i.classList.add('fa-plus');
        }
      });
    });
  }

  // Hamburger toggle 
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  //Login form
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }
});
