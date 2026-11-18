// ========== MENÚ HAMBURGUESA ==========
const btnHamburguesa = document.getElementById('btnHamburguesa');
const menuNav = document.getElementById('menuNav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    btnHamburguesa.classList.toggle('activo');
    menuNav.classList.toggle('abierto');
    overlay.classList.toggle('activo');
    
    // Bloquear scroll del body cuando el menú está abierto
    if (menuNav.classList.contains('abierto')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

btnHamburguesa.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Cerrar menú al hacer clic en un enlace
const enlacesMenu = menuNav.querySelectorAll('a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (menuNav.classList.contains('abierto')) {
            toggleMenu();
        }
    });
});

// Cerrar menú al redimensionar la ventana a desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && menuNav.classList.contains('abierto')) {
        toggleMenu();
    }
});

// ========== CARRUSEL ==========
function scrollCarrusel(id, distancia) {
    const carrusel = document.getElementById(id);
    carrusel.scrollBy({
        left: distancia,
        behavior: 'smooth'
    });
}

// ========== HEADER CON SOMBRA AL HACER SCROLL ==========
const headerFijo = document.querySelector('.header-fijo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerFijo.style.boxShadow = '0 4px 20px rgba(139, 0, 0, 0.6)';
    } else {
        headerFijo.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.8)';
    }
});

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🧟 Zombie-TK cargado correctamente');
});
