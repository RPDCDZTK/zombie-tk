/* ============================================
   ZOMBIE-TK - Funcionalidad para página de Juegos
   ============================================ */

/**
 * Muestra u oculta el botón "Volver arriba" según el scroll
 */
function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

/**
 * Hace scroll suave hacia arriba
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Navega a una sección específica de la página principal
 */
function navigateToSection(event, section) {
  event.preventDefault();
  sessionStorage.setItem('zombieTK_navigateTo', section);
  window.location.href = 'index.html';
}

/**
 * Inicializa las animaciones de entrada para las tarjetas
 */
function initCardAnimations() {
  const cards = document.querySelectorAll('.game-card, .nav-category-card');
  
  if (!cards.length) return;
  
  cards.forEach(card => {
    card.classList.add('animate-card');
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  cards.forEach(card => {
    observer.observe(card);
  });
}

/**
 * Añade efecto de ripple al hacer click en las tarjetas
 */
function initRippleEffect() {
  const cards = document.querySelectorAll('.game-card, .nav-category-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      card.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/**
 * Inicialización cuando el DOM está listo
 */
function init() {
  window.addEventListener('scroll', handleScroll);
  initCardAnimations();
  initRippleEffect();
  
  console.log('🎮 Página de Juegos Zombie-TK cargada correctamente');
  console.log('📅 Fecha:', new Date().toLocaleDateString('es-ES'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
