let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Pase automático cada 3 segundos
let autoSlide = setInterval(nextSlide, 3000);

// Pausa el pase automático al pasar el mouse
document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(autoSlide));
document.querySelector('.carousel').addEventListener('mouseleave', () => {
  autoSlide = setInterval(nextSlide, 3000);
});
