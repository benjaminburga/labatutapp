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

    setInterval(showNextItem, 9000); // Cambia cada 9 segundos

    console.log('Document is ready');
    // Puedes agregar más funcionalidad aquí
});

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

// Mostrar la hora actual
document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        const formattedTime = now.toLocaleDateString('en-US', options);
        document.getElementById('time').textContent = formattedTime;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

// Obtener elementos del DOM para la gestión de PDFs
const pdfTitle = document.getElementById('pdfTitle');
const openPdfBtn = document.getElementById('openPdfBtn');
const pdfModal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');

// Manejar clic en el botón para abrir el modal y cargar el PDF
openPdfBtn.addEventListener('click', function() {
    pdfModal.style.display = 'block'; // Mostrar modal

    // Aquí establece la URL del PDF que deseas mostrar
    const pdfUrl = 'pdf/La Batuta 56 - junio 2024.pdf';
    pdfViewer.setAttribute('src', pdfUrl);
});

// Manejar clic en cerrar modal
pdfModal.querySelector('.close').addEventListener('click', function() {
    pdfModal.style.display = 'none'; // Ocultar modal
});

// Gestionar la lista de PDFs
document.addEventListener('DOMContentLoaded', function() {
    const pdfListContainer = document.querySelector('.pdf-list');

    // Array simulado de archivos PDF (puedes obtener estos nombres de tu sistema de gestión de archivos)
    const pdfFiles = [
        { name: 'La Batuta 56 - junio 2024', url: 'pdf/La Batuta 56 - junio 2024.pdf' },
        { name: 'La Batuta 57 - julio 2024', url: 'pdf/La Batuta 57 - julio 2024.pdf' },
        { name: 'La Batuta 58 - agosto 2024', url: 'pdf/La Batuta 58 - agosto 2024.pdf' }
        // Agrega más archivos PDF según sea necesario
    ];

    // Función para crear elementos de lista de PDF
    function renderPDFList() {
        pdfFiles.forEach(function(pdf) {
            const pdfItem = document.createElement('div');
            pdfItem.classList.add('pdf-item');
            pdfItem.innerHTML = `<a href="${pdf.url}" target="_blank">${pdf.name}</a>`;
            pdfListContainer.appendChild(pdfItem);
        });
    }

    // Llamar a la función para renderizar la lista de PDF
    renderPDFList();
});

document.addEventListener('DOMContentLoaded', function() {
    // Remover la clase 'loading' después de cargar completamente la página
    document.body.classList.remove('loading');
});
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});