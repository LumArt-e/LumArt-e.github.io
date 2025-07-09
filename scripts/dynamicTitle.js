
const title = document.getElementById('lumart-title');
let gray = 50;
let increasing = true;

function animateTitleColor() {
  if (increasing) {
    gray++;
    if (gray >= 200) increasing = false;
  } else {
    gray--;
    if (gray <= 50) increasing = true;
  }
  title.style.color = `rgb(${gray}, ${gray}, ${gray})`;
  requestAnimationFrame(animateTitleColor);
}
animateTitleColor();
