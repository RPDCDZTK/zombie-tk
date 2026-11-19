/* ============================================
   ZOMBIE-TK - Sistema de Favoritos
   ============================================ */

// Clave para localStorage
const FAVORITES_KEY = 'zombietk_favorites';

/**
 * Obtiene los favoritos guardados
 */
function getFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Guarda los favoritos en localStorage
 */
function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error('Error al guardar favoritos:', e);
  }
}

/**
 * Alterna el estado de favorito de un ítem
 */
function toggleFavorite(card) {
  const id = card.dataset.id;
  const title = card.dataset.title;
  const type = card.dataset.type;
  const imgSrc = card.querySelector('.card-img-real')?.src || '';
  
  if (!id) return;
  
  let favorites = getFavorites();
  const index = favorites.findIndex(f => f.id === id);
  
  if (index > -1) {
    // Ya es favorito, lo quitamos
    favorites.splice(index, 1);
    card.classList.remove('is-favorite');
    const btn = card.querySelector('.favorite-btn');
    if (btn) btn.classList.remove('active');
  } else {
    // Lo añadimos como favorito
    favorites.push({
      id: id,
      title: title,
      type: type,
      imgSrc: imgSrc,
      addedAt: Date.now()
    });
    card.classList.add('is-favorite');
    const btn = card.querySelector('.favorite-btn');
    if (btn) btn.classList.add('active');
  }
  
  saveFavorites(favorites);
  renderFavorites();
  
  // Animación de feedback
  if (index === -1) {
    showFavoriteFeedback('⭐ Añadido a favoritos');
  } else {
    showFavoriteFeedback('Eliminado de favoritos');
  }
}

/**
 * Muestra un feedback temporal al usuario
 */
function showFavoriteFeedback(message) {
  const existing = document.querySelector('.favorite-feedback');
  if (existing) existing.remove();
  
  const feedback = document.createElement('div');
  feedback.className = 'favorite-feedback';
  feedback.textContent = message;
  feedback.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 215, 0, 0.95);
    color: #000;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 14px;
    z-index: 3000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    animation: fadeIn 0.3s ease;
  `;
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.style.opacity = '0';
    feedback.style.transition = 'opacity 0.3s';
    setTimeout(() => feedback.remove(), 300);
  }, 1500);
}

/**
 * Renderiza la página de favoritos
 */
function renderFavorites() {
  const favorites = getFavorites();
  const grid = document.getElementById('favoritesGrid');
  const empty = document.getElementById('favoritesEmpty');
  
  if (!grid) return;
  
  if (favorites.length === 0) {
    if (empty) empty.style.display = 'flex';
    grid.innerHTML = '';
    return;
  }
  
  if (empty) empty.style.display = 'none';
  
  grid.innerHTML = favorites.map(fav => `
    <div class="card" data-id="${fav.id}" data-title="${fav.title}" data-type="${fav.type}">
      <div class="card-img-container">
        <img src="${fav.imgSrc}" alt="${fav.title}" class="card-img-real">
        <div class="card-title-overlay">${fav.title}</div>
        <button class="favorite-btn active" aria-label="Quitar de favoritos">
          <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </button>
      </div>
    </div>
  `).join('');
  
  // Re-attach event listeners a los nuevos botones
  attachFavoriteListeners();
}

/**
 * Adjunta listeners a todos los botones de favoritos
 */
function attachFavoriteListeners() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = this.closest('.card');
      if (card) {
        toggleFavorite(card);
      }
    });
  });
}

/**
 * Sincroniza el estado visual de favoritos en todas las páginas
 */
function syncFavoriteStates() {
  const favorites = getFavorites();
  const favoriteIds = new Set(favorites.map(f => f.id));
  
  document.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;
    const btn = card.querySelector('.favorite-btn');
    if (id && btn) {
      if (favoriteIds.has(id)) {
        btn.classList.add('active');
        card.classList.add('is-favorite');
      } else {
        btn.classList.remove('active');
        card.classList.remove('is-favorite');
      }
    }
  });
}

/**
 * Navegación entre páginas
 */
function showPage(page, element) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  const pageElement = document.getElementById(page + 'Page');
  if (pageElement) {
    pageElement.classList.add('active');
  }
  
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }
  
  // Si vamos a favoritos, renderizar
  if (page === 'favorites') {
    renderFavorites();
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Filtros de búsqueda
 */
function setFilter(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/**
 * Búsqueda en tiempo real
 */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase().trim();
      const cards = searchResults.querySelectorAll('.card');
      
      cards.forEach(card => {
        const titleElement = card.querySelector('.card-title-overlay');
        if (titleElement) {
          const title = titleElement.textContent.toLowerCase();
          if (title.includes(query) || query === '') {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  }
}

/**
 * Configuración modal
 */
function showSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Cierre de modales al hacer clic fuera
 */
function initModalClose() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
}

/**
 * Cierre con tecla Escape
 */
function initKeyboardEvents() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = 'auto';
    }
  });
}

/**
 * Scroll horizontal con drag
 */
function initHorizontalScroll() {
  document.querySelectorAll('.horizontal-scroll').forEach(scroll => {
    let isDown = false;
    let startX;
    let scrollLeft;

    scroll.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
      scroll.style.cursor = 'grabbing';
    });

    scroll.addEventListener('mouseleave', () => {
      isDown = false;
      scroll.style.cursor = 'grab';
    });

    scroll.addEventListener('mouseup', () => {
      isDown = false;
      scroll.style.cursor = 'grab';
    });

    scroll.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      const walk = (x - startX) * 2;
      scroll.scrollLeft = scrollLeft - walk;
    });
  });
}

/**
 * Inicialización
 */
function init() {
  initSearch();
  initModalClose();
  initKeyboardEvents();
  initHorizontalScroll();
  attachFavoriteListeners();
  syncFavoriteStates();
  renderFavorites();
  
  console.log('🧟 Zombie-TK cargado correctamente');
  console.log('⭐ Sistema de favoritos activo');
}

document.addEventListener('DOMContentLoaded', init);

if (document.readyState !== 'loading') {
  init();
}

/* ============================================
   ZOMBIE-TK - Funcionalidad JavaScript
   ============================================ */

/**
 * Muestra la página seleccionada y actualiza la navegación
 * @param {string} page - Nombre de la página (home, search, downloads, account)
 * @param {HTMLElement} element - Elemento de navegación clickeado
 */
function showPage(page, element) {
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Mostrar la página seleccionada
  const pageElement = document.getElementById(page + 'Page');
  if (pageElement) {
    pageElement.classList.add('active');
  }
  
  // Actualizar navegación activa
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }
  
  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Establece el filtro activo en la página de búsqueda
 * @param {HTMLElement} btn - Botón de filtro clickeado
 */
function setFilter(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  // Aquí puedes añadir lógica para filtrar contenido
  console.log('Filtro seleccionado:', btn.textContent);
}

/**
 * Muestra el modal de planes de suscripción
 */
function showPlans() {
  const modal = document.getElementById('plansModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Cierra el modal de planes
 */
function closePlans() {
  const modal = document.getElementById('plansModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Muestra el modal de configuración
 */
function showSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Cierra el modal de configuración
 */
function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Funcionalidad de búsqueda en tiempo real
 */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase().trim();
      const cards = searchResults.querySelectorAll('.card');
      
      cards.forEach(card => {
        const titleElement = card.querySelector('.card-title');
        if (titleElement) {
          const title = titleElement.textContent.toLowerCase();
          if (title.includes(query) || query === '') {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  }
}

/**
 * Cierra modales al hacer clic fuera de ellos
 */
function initModalClose() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
}

/**
 * Maneja el cierre de modales con la tecla Escape
 */
function initKeyboardEvents() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = 'auto';
    }
  });
}

/**
 * Añade efecto de scroll suave a los carruseles horizontales
 */
function initHorizontalScroll() {
  document.querySelectorAll('.horizontal-scroll').forEach(scroll => {
    let isDown = false;
    let startX;
    let scrollLeft;

    scroll.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
      scroll.style.cursor = 'grabbing';
    });

    scroll.addEventListener('mouseleave', () => {
      isDown = false;
      scroll.style.cursor = 'grab';
    });

    scroll.addEventListener('mouseup', () => {
      isDown = false;
      scroll.style.cursor = 'grab';
    });

    scroll.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      const walk = (x - startX) * 2;
      scroll.scrollLeft = scrollLeft - walk;
    });
  });
}

/**
 * Inicializa todas las funcionalidades al cargar la página
 */
function init() {
  initSearch();
  initModalClose();
  initKeyboardEvents();
  initHorizontalScroll();
  
  console.log('🧟 Zombie-TK cargado correctamente');
  console.log('📅 Fecha: ' + new Date().toLocaleDateString('es-ES'));
}

// Ejecutar inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// También ejecutar inmediatamente por si el DOM ya está cargado
if (document.readyState !== 'loading') {
  init();
}
