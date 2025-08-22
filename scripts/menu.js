document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menuList = document.querySelector('.menu-list');
  const menuLinks = document.querySelectorAll('.menu-link');

  if (hamburger && menuList) {
    // Abrir/cerrar menú hamburguesa
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      menuList.classList.toggle('open');
      hamburger.classList.toggle('menu-open');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !menuList.contains(e.target)) {
        menuList.classList.remove('open');
        hamburger.classList.remove('menu-open');
      }
    });

    // Cerrar menú y hacer scroll suave al hacer clic en un link
    menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        menuList.classList.remove('open');
        hamburger.classList.remove('menu-open');
        // Smooth scroll to section
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active-section'));
          section.classList.add('active-section');
        }
      });
    });
  }
});
