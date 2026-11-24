/* ============================================
   ZOMBIE-TK - Lógica de renderizado del index
   ============================================ */

// ===== FUNCIONES GLOBALES DE MENÚ =====
window.openMenu = function() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeMenu = function() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
};

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== FUNCIÓN DE FAVORITOS =====
window.toggleFavorite = function(event, button) {
  event.stopPropagation();
  button.classList.toggle('active');
  
  const card = button.closest('[data-id]');
  if (!card) return;
  
  const id = card.dataset.id;
  const title = card.dataset.title;
  const type = card.dataset.type;
  const img = card.querySelector('.card-img-real')?.src || '';
  
  let favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];
  const index = favorites.findIndex(f => f.id === id);
  
  if (index > -1) {
    favorites.splice(index, 1);
    console.log('⭐ Eliminado de favoritos:', title);
  } else {
    favorites.push({ id, title, type, img });
    console.log('⭐ Agregado a favoritos:', title);
  }
  
  localStorage.setItem('zombieTK_favorites', JSON.stringify(favorites));
};

// ===== RENDERIZAR HERO CARRUSEL =====
function renderHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel || typeof ZOMBIE_DB === 'undefined') return;
  
  // Tomar los items destacados de cada categoría
  const destacados = [];
  
  if (ZOMBIE_DB.peliculas) {
    const p = ZOMBIE_DB.peliculas.find(x => x.featured) || ZOMBIE_DB.peliculas[0];
    if (p) destacados.push({...p, type: 'pelicula'});
  }
  if (ZOMBIE_DB.series) {
    const s = ZOMBIE_DB.series.find(x => x.featured) || ZOMBIE_DB.series[0];
    if (s) destacados.push({...s, type: 'serie'});
  }
  if (ZOMBIE_DB.animes) {
    const a = ZOMBIE_DB.animes.find(x => x.featured) || ZOMBIE_DB.animes[0];
    if (a) destacados.push({...a, type: 'anime'});
  }
  if (ZOMBIE_DB.juegos) {
    const g = ZOMBIE_DB.juegos.find(x => x.featured) || ZOMBIE_DB.juegos[0];
    if (g) destacados.push({...g, type: 'juego'});
  }
  
  if (destacados.length === 0) {
    carousel.style.display = 'none';
    return;
  }
  
  // Crear slides
  let slidesHTML = '';
  let dotsHTML = '';
  
  destacados.forEach((item, index) => {
    const img = item.img || 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80';
    const activeClass = index === 0 ? 'active' : '';
    const dotActive = index === 0 ? 'active' : '';
    
    slidesHTML += `
      <div class="hero-slide ${activeClass}" style="background-image: url('${img}')">
        <div class="hero-slide-content">
          <div class="hero-slide-title">${item.title}</div>
          <div class="hero-slide-subtitle">${item.year || ''} • ${item.type}</div>
        </div>
      </div>
    `;
    
    dotsHTML += `<div class="hero-dot ${dotActive}" onclick="goToSlide(${index})"></div>`;
  });
  
  carousel.innerHTML = slidesHTML + `<div class="hero-dots">${dotsHTML}</div>`;
  
  // Auto-rotación
  let currentSlide = 0;
  const slides = carousel.querySelectorAll('.hero-slide');
  const dots = carousel.querySelectorAll('.hero-dot');
  
  window.goToSlide = function(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };
  
  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, 5000);
}

// ===== RENDERIZAR SECCIONES =====
function renderIndexContent() {
  const container = document.getElementById('dynamicContent');
  if (!container || typeof ZOMBIE_DB === 'undefined') {
    setTimeout(renderIndexContent, 500);
    return;
  }

  console.log('🎨 Renderizando contenido del index...');
  let html = '';

  // 1. SEGUIR VIENDO
  if (ZOMBIE_DB.series && ZOMBIE_DB.series.length > 0) {
    html += renderWideSection('Seguir Viendo', ZOMBIE_DB.series.slice(0, 5), 'serie');
  }

  // 2. NUEVOS EPISODIOS
  if (ZOMBIE_DB.series && ZOMBIE_DB.series.length > 0) {
    html += renderWideSection('Nuevos Episodios', ZOMBIE_DB.series.slice(0, 5), 'serie');
  }

  // 3. PELÍCULAS DESTACADAS
  if (ZOMBIE_DB.peliculas && ZOMBIE_DB.peliculas.length > 0) {
    const destacadas = ZOMBIE_DB.peliculas.filter(p => p.featured);
    const peliculas = destacadas.length > 0 ? destacadas.slice(0, 5) : ZOMBIE_DB.peliculas.slice(0, 5);
    html += renderStandardSection('Películas Destacadas', peliculas, 'pelicula', 'peliculas.html');
  }

  // 4. SERIES PRINCIPALES
  if (ZOMBIE_DB.series && ZOMBIE_DB.series.length > 0) {
    const destacadas = ZOMBIE_DB.series.filter(s => s.featured);
    const series = destacadas.length > 0 ? destacadas.slice(0, 5) : ZOMBIE_DB.series.slice(0, 5);
    html += renderStandardSection('Series Principales', series, 'serie', 'series.html');
  }

  // 5. LO ÚLTIMO
  const ultimos = [];
  if (ZOMBIE_DB.libros) ultimos.push(...ZOMBIE_DB.libros.slice(0, 3).map(i => ({...i, type: 'libro'})));
  if (ZOMBIE_DB.juegos) ultimos.push(...ZOMBIE_DB.juegos.slice(0, 2).map(i => ({...i, type: 'juego'})));
  if (ultimos.length > 0) {
    html += renderWideSection('Lo último en Zombie-TK', ultimos.slice(0, 5), 'mixto', 'libros.html');
  }

  // 6. LIBROS
  if (ZOMBIE_DB.libros && ZOMBIE_DB.libros.length > 0) {
    html += renderStandardSection('📚 Libros Zombie', ZOMBIE_DB.libros.slice(0, 5), 'libro', 'libros.html');
  }

  // 7. CÓMICS
  if (ZOMBIE_DB.comics && ZOMBIE_DB.comics.length > 0) {
    html += renderStandardSection('📖 Cómics', ZOMBIE_DB.comics.slice(0, 5), 'comic', 'comics.html');
  }

  // 8. JUEGOS
  if (ZOMBIE_DB.juegos && ZOMBIE_DB.juegos.length > 0) {
    const destacados = ZOMBIE_DB.juegos.filter(g => g.featured);
    const juegos = destacados.length > 0 ? destacados.slice(0, 5) : ZOMBIE_DB.juegos.slice(0, 5);
    html += renderStandardSection('🎮 Juegos', juegos, 'juego', 'juegos.html');
  }

  // 9. ANIMES
  if (ZOMBIE_DB.animes && ZOMBIE_DB.animes.length > 0) {
    const destacados = ZOMBIE_DB.animes.filter(a => a.featured);
    const animes = destacados.length > 0 ? destacados.slice(0, 5) : ZOMBIE_DB.animes.slice(0, 5);
    html += renderStandardSection('🎌 Animes', animes, 'anime', 'animes.html');
  }

  // 10. CORTOMETRAJES
  if (ZOMBIE_DB.cortometrajes && ZOMBIE_DB.cortometrajes.length > 0) {
    html += renderStandardSection('🎬 Cortometrajes', ZOMBIE_DB.cortometrajes.slice(0, 5), 'cortometraje', 'cortometrajes.html');
  }

  // 11. RELATOS
  if (ZOMBIE_DB.relatos && ZOMBIE_DB.relatos.length > 0) {
    html += renderStandardSection('✍️ Relatos', ZOMBIE_DB.relatos.slice(0, 5), 'relato', 'relatos.html');
  }

  // 12. PERSONALIDADES
  html += renderPersonalities();

  // 13. COLECCIONES
  if (ZOMBIE_DB.peliculas && ZOMBIE_DB.peliculas.length > 0) {
    html += renderWideSection('Colecciones', ZOMBIE_DB.peliculas.slice(0, 3), 'coleccion');
  }

  container.innerHTML = html;
  updateMenuCounters();
  renderHeroCarousel();
  console.log('✅ Contenido del index renderizado');
}

// Sección con tarjetas verticales (estándar)
function renderStandardSection(title, items, type, linkUrl) {
  if (!items || items.length === 0) return '';

  let html = `
    <div class="section">
      <div class="section-header">
        <div class="section-title">${title}</div>
        ${linkUrl ? `<a href="${linkUrl}" class="section-link">Ver todo ›</a>` : ''}
      </div>
      <div class="horizontal-scroll">
  `;

  items.forEach((item, index) => {
    const img = item.img || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23333" width="100" height="100"/><text x="50" y="55" font-size="40" text-anchor="middle" fill="%23FFD700">🧟</text></svg>';
    const badge = getBadge(item, type);
    
    html += `
      <div class="card" data-id="${item.id}" data-title="${item.title}" data-type="${type}">
        <div class="card-img-container">
          <img src="${img}" alt="${item.title}" class="card-img-real" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
          <span class="card-number">${index + 1}</span>
          <div class="content-type-badge ${type}">${badge}</div>
          <div class="card-title-overlay">${item.title}</div>
          <button class="favorite-btn" onclick="toggleFavorite(event, this)">
            <svg class="star-icon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </button>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
}

// Sección con tarjetas horizontales (wide)
function renderWideSection(title, items, type, linkUrl) {
  if (!items || items.length === 0) return '';

  let html = `
    <div class="section">
      <div class="section-header">
        <div class="section-title">${title}</div>
        ${linkUrl ? `<a href="${linkUrl}" class="section-link">Ver todo ›</a>` : ''}
      </div>
      <div class="horizontal-scroll">
  `;

  items.forEach((item) => {
    const img = item.img || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23333" width="100" height="100"/><text x="50" y="55" font-size="40" text-anchor="middle" fill="%23FFD700">🧟</text></svg>';
    const badge = getBadge(item, type);
    
    html += `
      <div class="card-wide" data-id="${item.id}" data-title="${item.title}" data-type="${type}">
        <img src="${img}" alt="${item.title}" class="card-img-real" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
        <div class="content-type-badge ${type}">${badge}</div>
        <div class="card-title-overlay">${item.title}</div>
        <button class="favorite-btn" onclick="toggleFavorite(event, this)">
          <svg class="star-icon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </button>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
}

// Personalidades
function renderPersonalities() {
  const personalities = [
    { name: 'George Romero', role: 'Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80' },
    { name: 'Robert Kirkman', role: 'Creador', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80' },
    { name: 'Max Brooks', role: 'Escritor', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80' },
    { name: 'Hideo Kojima', role: 'Game Dev', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80' }
  ];

  let html = `
    <div class="section">
      <div class="section-header">
        <div class="section-title">Personalidades Populares</div>
      </div>
      <div class="horizontal-scroll">
  `;

  personalities.forEach(p => {
    html += `
      <div class="personality">
        <img src="${p.img}" alt="${p.name}" class="personality-img-real">
        <div class="personality-name">${p.name}</div>
        <div class="personality-role">${p.role}</div>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
}

function getBadge(item, type) {
  if (item.featured) return '⭐ Destacado';
  const badges = {
    pelicula: '🎥 Película',
    serie: '📺 Serie',
    libro: '📖 Libro',
    anime: '🎌 Anime',
    comic: '💥 Cómic',
    cortometraje: '🎬 Corto',
    relato: '✍️ Relato',
    juego: '🎮 Juego',
    coleccion: '🏆 Colección',
    mixto: '✨ Nuevo'
  };
  return badges[type] || type;
}

function updateMenuCounters() {
  if (typeof ZOMBIE_DB === 'undefined') return;
  const counters = {
    'menu-count-libros': ZOMBIE_DB.libros ? ZOMBIE_DB.libros.length : 0,
    'menu-count-peliculas': ZOMBIE_DB.peliculas ? ZOMBIE_DB.peliculas.length : 0,
    'menu-count-series': ZOMBIE_DB.series ? ZOMBIE_DB.series.length : 0,
    'menu-count-animes': ZOMBIE_DB.animes ? ZOMBIE_DB.animes.length : 0,
    'menu-count-comics': ZOMBIE_DB.comics ? ZOMBIE_DB.comics.length : 0,
    'menu-count-cortos': ZOMBIE_DB.cortometrajes ? ZOMBIE_DB.cortometrajes.length : 0,
    'menu-count-relatos': ZOMBIE_DB.relatos ? ZOMBIE_DB.relatos.length : 0,
    'menu-count-juegos': ZOMBIE_DB.juegos ? ZOMBIE_DB.juegos.length : 0
  };
  Object.keys(counters).forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = counters[id];
  });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  renderIndexContent();
  
  window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 300) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    }
  });
});

console.log('🎬 index.js cargado correctamente');
