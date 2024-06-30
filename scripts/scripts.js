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
// scripts.js

// Obtener el botón de scroll hacia arriba
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, hacer scroll hacia arriba de manera suave
scrollToTopBtn.addEventListener("click", () => {
    scrollToTopSmoothly();
});

function scrollToTopSmoothly() {
    // Obtener la posición actual del documento
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Definir la posición a la que se desea llegar (en este caso, el tope de la página)
    const targetPosition = 0;

    // Calcular la distancia y el tiempo de duración del scroll
    const distance = targetPosition - currentPosition;
    const duration = 300; // Duración en milisegundos

    let start = null;

    // Función de animación para scroll suave
    function animation(currentTime) {
        if (start === null) {
            start = currentTime;
        }

        const progress = currentTime - start;
        window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));

        if (progress < duration) {
            requestAnimationFrame(animation);
        }
    }

    // Función de aceleración (ease-in-out cubic)
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    // Iniciar la animación
    requestAnimationFrame(animation);
}
