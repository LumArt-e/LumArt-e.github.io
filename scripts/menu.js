document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menuList = document.querySelector('.menu-list');
  const menuLinks = document.querySelectorAll('.menu-link');

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    menuList.classList.toggle('open');
    hamburger.classList.toggle('menu-open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      menuList.classList.remove('open');
      hamburger.classList.remove('menu-open');
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

  document.body.addEventListener('click', function(e){
    if (!menuList.contains(e.target) && !hamburger.contains(e.target)) {
      menuList.classList.remove('open');
      hamburger.classList.remove('menu-open');
    }
  });
});