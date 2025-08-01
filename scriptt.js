// Crear estrellas
function createStars() {
  const starsContainer = document.getElementById('stars');
  if (!starsContainer) return;

  const numStars = 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = Math.random() * 4 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
  }
}

// Crear corazones flotantes
function createFloatingHeart() {
  const heartsContainer = document.getElementById('hearts');
  if (!heartsContainer) return;

  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '♥';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
  heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    if (heart && heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  }, 7000);
}

// Pausar animación al hacer hover
function setupCarouselInteraction() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
  });

  carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = '0';

  setTimeout(() => {
    document.body.style.transition = 'opacity 2s ease-in';
    document.body.style.opacity = '1';
  }, 100);

  createStars();
  setupCarouselInteraction();
  setInterval(createFloatingHeart, 3000);
  setTimeout(createFloatingHeart, 1000);
});
