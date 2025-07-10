const title = document.getElementById('lumart-title');
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  title.style.transform = `translateY(${scroll * 0.2}px)`;
  title.style.opacity = 1 - scroll / 500;
});