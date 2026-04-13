document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-item');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');

  if (!track || !slides.length || !nextBtn || !prevBtn) {
    console.log('Carousel not found properly');
    return;
  }

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});
