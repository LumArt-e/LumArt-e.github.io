document.addEventListener('DOMContentLoaded', function () {
  const galleryImgs = document.querySelectorAll('.gallery-zoom-img');
  let modalBg = document.createElement('div');
  modalBg.className = 'image-modal-bg hide';
  document.body.appendChild(modalBg);

  modalBg.innerHTML = `
    <div class="image-modal-content">
      <button class="image-modal-close" title="Cerrar">&times;</button>
      <div class="zoom-controls">
        <button class="zoom-in" title="Zoom In">🔍+</button>
        <button class="zoom-out" title="Zoom Out">🔍-</button>
        <button class="zoom-reset" title="Restablecer Zoom">⟳</button>
      </div>
      <img src="" alt="Obra ampliada" />
    </div>
  `;
  const modalContent = modalBg.querySelector('.image-modal-content');
  const modalImg = modalContent.querySelector('img');
  const closeBtn = modalContent.querySelector('.image-modal-close');
  const zoomInBtn = modalContent.querySelector('.zoom-in');
  const zoomOutBtn = modalContent.querySelector('.zoom-out');
  const zoomResetBtn = modalContent.querySelector('.zoom-reset');

  let currentScale = 1;
  const minScale = 1;
  const maxScale = 3;
  const scaleStep = 0.2;

  function setZoom(scale) {
    currentScale = Math.max(minScale, Math.min(scale, maxScale));
    modalImg.style.transform = `scale(${currentScale}) translate(${imgPos.x/currentScale}px,${imgPos.y/currentScale}px)`;
  }

  // Doble click para abrir modal
  galleryImgs.forEach(img => {
    img.addEventListener('dblclick', function () {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      setZoom(1);
      imgPos = {x:0, y:0};
      modalBg.classList.remove('hide');
    });
  });

  closeBtn.addEventListener('click', function () {
    modalBg.classList.add('hide');
    modalImg.src = '';
    setZoom(1);
    imgPos = {x:0, y:0};
  });

  modalBg.addEventListener('click', function (e) {
    if (e.target === modalBg) {
      modalBg.classList.add('hide');
      modalImg.src = '';
      setZoom(1);
      imgPos = {x:0, y:0};
    }
  });

  zoomInBtn.addEventListener('click', function () {
    setZoom(currentScale + scaleStep);
  });
  zoomOutBtn.addEventListener('click', function () {
    setZoom(currentScale - scaleStep);
  });
  zoomResetBtn.addEventListener('click', function () {
    setZoom(1);
    imgPos = {x:0, y:0};
    modalImg.style.transform = `scale(1)`;
  });

  // Zoom con rueda de mouse
  modalImg.addEventListener('wheel', function (e) {
    if (!modalBg.classList.contains('hide')) {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom(currentScale + scaleStep);
      } else {
        setZoom(currentScale - scaleStep);
      }
    }
  });

  // Arrastrar imagen cuando está ampliada
  let isDragging = false;
  let dragStart = {x: 0, y: 0};
  let imgPos = {x: 0, y: 0};

  modalImg.addEventListener('mousedown', function(e) {
    if (currentScale > 1) {
      isDragging = true;
      dragStart.x = e.clientX - imgPos.x;
      dragStart.y = e.clientY - imgPos.y;
      modalImg.style.cursor = 'grab';
    }
  });
  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      imgPos.x = e.clientX - dragStart.x;
      imgPos.y = e.clientY - dragStart.y;
      modalImg.style.transition = 'none';
      modalImg.style.transform = `scale(${currentScale}) translate(${imgPos.x/currentScale}px,${imgPos.y/currentScale}px)`;
    }
  });
  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      modalImg.style.cursor = 'zoom-in';
      modalImg.style.transition = '';
    }
  });

  // Resetear posición al cambiar imagen o cerrar modal
  modalBg.addEventListener('transitionend', function(){
    if(modalBg.classList.contains('hide')){
      imgPos = {x:0,y:0};
      modalImg.style.transform = `scale(1)`;
    }
  });
});