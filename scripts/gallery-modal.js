// Modal para ver imágenes ampliadas y hacer zoom
document.addEventListener('DOMContentLoaded', function () {
  const galleryImgs = document.querySelectorAll('.gallery-zoom-img');
  let modalBg = document.createElement('div');
  modalBg.className = 'image-modal-bg hide';
  document.body.appendChild(modalBg);

  modalBg.innerHTML = `
    <div class="image-modal-content">
      <button class="image-modal-close" title="Cerrar">&times;</button>
      <img src="" alt="Obra ampliada" />
    </div>
  `;
  const modalContent = modalBg.querySelector('.image-modal-content');
  const modalImg = modalContent.querySelector('img');
  const closeBtn = modalContent.querySelector('.image-modal-close');

  galleryImgs.forEach(img => {
    img.addEventListener('click', function () {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalBg.classList.remove('hide');
    });
  });

  closeBtn.addEventListener('click', function () {
    modalBg.classList.add('hide');
    modalImg.src = '';
  });

  modalBg.addEventListener('click', function (e) {
    if (e.target === modalBg) {
      modalBg.classList.add('hide');
      modalImg.src = '';
    }
  });

  // Zoom al hacer click sostenido sobre la imagen ampliada
  modalImg.addEventListener('mousedown', function () {
    modalImg.style.transform = 'scale(1.35)';
  });
  modalImg.addEventListener('mouseup', function () {
    modalImg.style.transform = '';
  });
});