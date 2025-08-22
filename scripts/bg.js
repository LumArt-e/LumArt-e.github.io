// Efecto para que el video superior se mueva con el scroll
window.addEventListener('scroll', () => {
  document.body.classList.add('scrolled');
  document.body.style.setProperty('--scrollY', window.scrollY + 'px');
});