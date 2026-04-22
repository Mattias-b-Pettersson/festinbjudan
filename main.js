console.log('🎉 Festinbjudan laddad!');

let isOpen = false;

// Byt till mobilbild på små skärmar
function updateImageForScreen() {
  const baseImg = document.querySelector('.postcard-base img');
  if (window.innerWidth <= 768) {
    baseImg.src = '/2mobil.jpg';
  } else {
    baseImg.src = '/2.jpg';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const postcardScene = document.getElementById('postcardScene');
  const postcardCover = document.getElementById('postcardCover');
  const closeBtn = document.getElementById('closeBtn');

  // Uppdatera bild baserat på skärmstorlek
  updateImageForScreen();
  window.addEventListener('resize', updateImageForScreen);

  // Öppna kortet när man klickar på locket
  postcardCover.addEventListener('click', () => {
    if (!isOpen) {
      isOpen = true;
      postcardScene.classList.add('opening');
      postcardCover.style.cursor = 'default';
    }
  });

  // Stäng kortet
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      isOpen = false;
      postcardScene.classList.remove('opening');
      postcardCover.style.cursor = 'pointer';
    }
  });
});
