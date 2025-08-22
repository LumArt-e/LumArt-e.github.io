window.addEventListener('scroll', () => {
  document.body.classList.add('scrolled');
  document.body.style.setProperty('--scrollY', window.scrollY + 'px');
});