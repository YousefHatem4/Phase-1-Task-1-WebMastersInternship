 const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');

    // Toggle mobile menu open/close
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 774) {
          navbar.classList.remove('open');
        }
      });
    });

    // Change navbar style on scroll (only on desktop width > 774px)
    window.addEventListener('scroll', () => {
      if (window.innerWidth > 774) {
        if (window.scrollY > 100) {
          header.classList.add('shadow', 'bg-white');
          header.querySelector('.logo').classList.remove('text-white');
          header.querySelector('.logo').classList.add('text-[#020307]');
          header.querySelector('.logo i').classList.remove('text-white');
          header.querySelector('.logo i').classList.add('text-[#020307]');
          menuIcon.classList.remove('text-white');
          menuIcon.classList.add('text-[#020307]');
        } else {
          header.classList.remove('shadow', 'bg-white');
          header.querySelector('.logo').classList.add('text-white');
          header.querySelector('.logo').classList.remove('text-[#020307]');
          header.querySelector('.logo i').classList.add('text-[#ff2c1f]');
          header.querySelector('.logo i').classList.remove('text-[#020307]');
          menuIcon.classList.add('text-white');
          menuIcon.classList.remove('text-[#020307]');
        }
      }
    });

    // Responsive layout changes
    function adjustLayout() {
      const width = window.innerWidth;

      if (width > 774) {
        navbar.classList.remove('open');
      }

      // Adjust home text padding
      const homeText = document.querySelector('.home-text');
      if (width <= 991) {
        homeText.classList.remove('pl-20');
        homeText.classList.add('px-4');
      } else {
        homeText.classList.add('pl-20');
        homeText.classList.remove('px-4');
      }

      // Footer stack on small screens
      const footerDiv = document.querySelector('.footer > div');
      if (width <= 472) {
        footerDiv.classList.add('flex-col', 'items-center', 'gap-4');
        footerDiv.classList.remove('justify-between');
      } else {
        footerDiv.classList.remove('flex-col', 'items-center', 'gap-4');
        footerDiv.classList.add('justify-between');
      }
    }

    window.addEventListener('resize', adjustLayout);
    window.addEventListener('load', adjustLayout);