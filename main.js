console.log('🎉 Festinbjudan laddad!');

let isOpen = false;

document.addEventListener('DOMContentLoaded', () => {
  const postcardFront = document.getElementById('postcardFront');
  const postcardInside = document.getElementById('postcardInside');
  const closeBtn = document.getElementById('closeBtn');

  // Öppna vykortet när man klickar på framsidan
  postcardFront.addEventListener('click', () => {
    if (!isOpen) {
      isOpen = true;
      postcardFront.style.display = 'none';
      postcardInside.classList.add('open');
    }
  });

  // Stäng vykortet
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      isOpen = false;
      postcardInside.classList.remove('open');
      
      setTimeout(() => {
        postcardInside.style.display = 'none';
        postcardFront.style.display = 'block';
        postcardFront.classList.add('closing');
        
        setTimeout(() => {
          postcardFront.classList.remove('closing');
        }, 600);
      }, 400);
    }
  });
});
