// scripts/section-transition.js
// Transición suave entre secciones al navegar

document.addEventListener('DOMContentLoaded', function () {
  // Detecta todos los enlaces de menú que apuntan a secciones
  const menuLinks = document.querySelectorAll('.menu-link');
  const sections = document.querySelectorAll('.section');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      const targetSection = document.querySelector(href);
      if (targetSection) {
        e.preventDefault();
        // Remueve la clase de animación de todas las secciones
        sections.forEach(sec => sec.classList.remove('fade-in'));
        // Agrega la clase de animación a la sección destino
        targetSection.classList.add('fade-in');
        // Navega suavemente
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});