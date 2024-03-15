const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function moveToNext() {
    currentIndex = (currentIndex + 5) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 15 + '%';
    carousel.style.transform = `translateX(${offset})`;
}

// Automatic slide change
setInterval(moveToNext, 4000);