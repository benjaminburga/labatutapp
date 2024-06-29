// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        carouselItems[currentIndex].classList.remove('active');
        carouselItems[currentIndex].classList.add('previous');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.remove('previous');
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3000); // Cambia cada 3 segundos

    console.log('Document is ready');
    // Puedes agregar más funcionalidad aquí
});
