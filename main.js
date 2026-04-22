console.log('🎉 Festinbjudan laddad!');

let isOpen = false;

document.addEventListener('DOMContentLoaded', () => {
  const postcardScene = document.getElementById('postcardScene');
  const postcardCover = document.getElementById('postcardCover');
  const closeBtn = document.getElementById('closeBtn');

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
