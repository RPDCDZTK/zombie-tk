/* ============================================
   ZOMBIE-TK - Hero Carrusel Automático
   ============================================ */

// Datos de los slides del hero
const heroSlides = [
  {
    id: 'hero-m1',
    type: 'Película',
    title: 'WORLD WAR Z',
    subtitle: 'La humanidad está al borde del colapso. Los no-muertos caminan entre nosotros.',
    img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1200&q=80',
    dataId: 'm1',
    dataTitle: 'World War Z',
    dataType: 'Película',
    dataImg: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&q=80'
  },
  {
    id: 'hero-s1',
    type: 'Serie',
    title: 'THE WALKING DEAD',
    subtitle: 'Sobrevive en un mundo donde los muertos caminan. La lucha por la humanidad continúa.',
    img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1200&q=80',
    dataId: 's1',
    dataTitle: 'The Walking Dead',
    dataType: 'Serie',
    dataImg: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&q=80'
  },
  {
    id: 'hero-b1',
    type: 'Libro',
    title: 'GUÍA DE SUPERVIVENCIA',
    subtitle: 'El manual definitivo para sobrevivir al apocalipsis zombie. Escrito por Max Brooks.',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80',
    dataId: 'b2',
    dataTitle: 'Guía de Supervivencia',
    dataType: 'Libro',
    dataImg: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80'
  },
  {
    id: 'hero-g1',
    type: 'Juego',
    title: 'RESIDENT EVIL VILLAGE',
    subtitle: 'Entra en un pueblo misterioso lleno de horrores. ¿Podrás escapar con vida?',
    img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80',
    dataId: 'g2',
    dataTitle: 'Resident Evil Village',
    dataType: 'Juego',
    dataImg: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80'
  },
  {
    id: 'hero-c1',
    type: 'Cómic',
    title: 'THE WALKING DEAD COMICS',
    subtitle: 'La historia original de Robert Kirkman. Donde todo comenzó el apocalipsis.',
    img: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1200&q=80',
    dataId: 'c1',
    dataTitle: 'The Walking Dead Comics',
    dataType: 'Cómic',
    dataImg: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&q=80'
  },
  {
    id: 'hero-t1',
    type: 'Tutorial',
    title: 'CÓMO SOBREVIVIR',
    subtitle: 'Aprende las técnicas esenciales para sobrevivir a un apocalipsis zombie.',
    img: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&q=80',
    dataId: 't1',
    dataTitle: 'Cómo sobrevivir a un apocalipsis zombie',
    dataType: 'Tutorial',
    dataImg: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=300&q=80'
  },
  {
    id: 'hero-cu1',
    type: 'Relato',
    title: 'EL ÚLTIMO SUPERVIVIENTE',
    subtitle: 'Un relato escalofriante sobre el último humano en un mundo dominado por zombies.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    dataId: 'cu1',
    dataTitle: 'El último superviviente',
    dataType: 'Relato',
    dataImg: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&q=80'
  },
  {
    id: 'hero-r1',
    type: 'Revista',
    title: 'ZOMBIE MONTHLY',
    subtitle: 'La revista mensual número 1 sobre cultura zombie. Noticias, reseñas y más.',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
    dataId: 'r1',
    dataTitle: 'Zombie Monthly',
    dataType: 'Revista',
    dataImg: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&q=80'
  },
  {
    id: 'hero-co1',
    type: 'Cortometraje',
    title: 'SHAUN OF THE DEAD',
    subtitle: 'Una comedia de terror británica. Shaun debe salvar a su novia de los zombies.',
    img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80',
    dataId: 'co2',
    dataTitle: 'Shaun of the Dead',
    dataType: 'Cortometraje',
    dataImg: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=80'
  }
];

// Configuración
const SLIDE_DURATION = 6000; // 6 segundos por slide
let currentSlide = 0;
let slideInterval;
let progressInterval;
let isPaused = false;

/**
 * Construye el HTML del carrusel
 */
function buildHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  // Crear slides
  const slidesHTML = heroSlides.map((slide, index) => `
    <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${slide.img}" alt="${slide.title}" class="hero-slide-bg">
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-content">
        <span class="hero-type-badge">${slide.type}</span>
        <h1 class="hero-slide-title">${slide.title}</h1>
        <p class="hero-slide-subtitle">${slide.subtitle}</p>
        <div class="hero-slide-buttons">
          <button class="btn-hero-play">▶ Reproducir</button>
          <button class="btn-hero-fav" onclick="addHeroToFavorite(${index}, this)">
            ⭐ Agregar a favoritos
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Crear indicadores
  const indicatorsHTML = heroSlides.map((_, index) => `
    <button class="hero-indicator ${index === 0 ? 'active' : ''}" 
            onclick="goToSlide(${index})" 
            aria-label="Ir al slide ${index + 1}"></button>
  `).join('');

  carousel.innerHTML = `
    ${slidesHTML}
    <button class="hero-nav-btn hero-nav-prev" onclick="prevSlide()">‹</button>
    <button class="hero-nav-btn hero-nav-next" onclick="nextSlide()">›</button>
    <div class="hero-indicators">${indicatorsHTML}</div>
    <div class="hero-progress" id="heroProgress"></div>
  `;
}

/**
 * Va al slide específico
 */
function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  
  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
  
  resetProgress();
}

/**
 * Siguiente slide
 */
function nextSlide() {
  goToSlide(currentSlide + 1);
}

/**
 * Slide anterior
 */
function prevSlide() {
  goToSlide(currentSlide - 1);
}

/**
 * Inicia el carrusel automático
 */
function startCarousel() {
  stopCarousel();
  slideInterval = setInterval(() => {
    if (!isPaused) {
      nextSlide();
    }
  }, SLIDE_DURATION);
  
  startProgress();
}

/**
 * Detiene el carrusel
 */
function stopCarousel() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
}

/**
 * Inicia la barra de progreso
 */
function startProgress() {
  const progress = document.getElementById('heroProgress');
  if (!progress) return;
  
  let width = 0;
  const increment = 100 / (SLIDE_DURATION / 100);
  
  progressInterval = setInterval(() => {
    if (!isPaused) {
      width += increment;
      if (width >= 100) width = 0;
      progress.style.width = width + '%';
    }
  }, 100);
}

/**
 * Resetea la barra de progreso
 */
function resetProgress() {
  const progress = document.getElementById('heroProgress');
  if (progress) {
    progress.style.width = '0%';
  }
  startProgress();
}

/**
 * Agrega el contenido del hero a favoritos
 */
function addHeroToFavorite(index, button) {
  const slide = heroSlides[index];
  if (!slide) return;
  
  const id = slide.dataId;
  const title = slide.dataTitle;
  const type = slide.dataType;
  const img = slide.dataImg;
  
  // Obtener favoritos actuales
  let favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];
  const existingIndex = favorites.findIndex(f => f.id === id);
  
  if (existingIndex === -1) {
    // Agregar
    favorites.push({ id, title, type, img });
    localStorage.setItem('zombieTK_favorites', JSON.stringify(favorites));
    button.classList.add('added');
    button.innerHTML = '✓ Agregado a favoritos';
    showToast('⭐ Agregado a favoritos');
    
    // Quitar el estado "added" después de 2 segundos
    setTimeout(() => {
      button.classList.remove('added');
      button.innerHTML = '⭐ Agregar a favoritos';
    }, 2000);
  } else {
    // Ya existe
    button.classList.add('added');
    button.innerHTML = '✓ Ya está en favoritos';
    showToast('⚠️ Ya está en tus favoritos');
    
    setTimeout(() => {
      button.classList.remove('added');
      button.innerHTML = '⭐ Agregar a favoritos';
    }, 2000);
  }
}

/**
 * Pausa el carrusel al hacer hover
 */
function initCarouselHover() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;
  
  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  
  carousel.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  
  // Soporte táctil: swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isPaused = true;
  }, { passive: true });
  
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    isPaused = false;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }
}

/**
 * Inicialización
 */
function initHeroCarousel() {
  buildHeroCarousel();
  initCarouselHover();
  startCarousel();
  
  console.log('🎬 Hero Carrusel inicializado con', heroSlides.length, 'slides');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroCarousel);
} else {
  initHeroCarousel();
}
