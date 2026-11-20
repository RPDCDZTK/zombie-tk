/* ============================================
   ZOMBIE-TK - Funcionalidad para página de Favoritos
   ============================================ */

// Cargar favoritos desde localStorage
let favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];

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
 * Abre el menú hamburguesa
 */
function openMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el menú hamburguesa
 */
function closeMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/**
 * Renderiza la página de favoritos
 */
function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const countEl = document.getElementById('favoritesCount');
  const emptyEl = document.getElementById('emptyFavorites');
  const actionsEl = document.getElementById('favoritesActions');
  
  if (!grid) return;
  
  // Actualizar contador
  const count = favorites.length;
  countEl.textContent = `📌 ${count} ítem${count !== 1 ? 's' : ''} guardado${count !== 1 ? 's' : ''}`;
  
  // Limpiar grid
  grid.innerHTML = '';
  
  // Mostrar/ocultar estado vacío
  if (count === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    if (actionsEl) actionsEl.style.display = 'none';
    if (grid) grid.style.display = 'none';
    return;
  }
  
  if (emptyEl) emptyEl.style.display = 'none';
  if (actionsEl) actionsEl.style.display = 'block';
  if (grid) grid.style.display = 'grid';
  
  // Crear tarjetas de favoritos
  favorites.forEach((fav, index) => {
    const card = document.createElement('div');
    card.className = 'fav-card animate-card';
    card.dataset.index = index;
    
    card.innerHTML = `
      <img src="${fav.img}" alt="${fav.title}" class="fav-card-img">
      <div class="fav-card-overlay"></div>
      <button class="fav-remove-btn" onclick="removeFavorite(${index}, event)" title="Eliminar de favoritos">✕</button>
      <div class="fav-card-content">
        <div class="fav-card-title">${fav.title}</div>
        <div class="fav-card-type">${fav.type || 'Contenido'}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Inicializar animaciones
  setTimeout(() => {
    initCardAnimations();
  }, 50);
}

/**
 * Elimina un favorito específico
 */
function removeFavorite(index, event) {
  event.stopPropagation();
  event.preventDefault();
  
  const removed = favorites.splice(index, 1)[0];
  localStorage.setItem('zombieTK_favorites', JSON.stringify(favorites));
  
  showToast(`⭐ "${removed.title}" eliminado de favoritos`);
  renderFavorites();
}

/**
 * Elimina todos los favoritos
 */
function clearAllFavorites() {
  if (favorites.length === 0) return;
  
  const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar todos tus favoritos (${favorites.length} ítems)?`);
  
  if (confirmDelete) {
    favorites = [];
    localStorage.setItem('zombieTK_favorites', JSON.stringify(favorites));
    showToast('🗑️ Todos los favoritos han sido eliminados');
    renderFavorites();
  }
}

/**
 * Muestra una notificación toast
 */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/**
 * Inicializa las animaciones de entrada para las tarjetas
 */
function initCardAnimations() {
  const cards = document.querySelectorAll('.fav-card, .nav-category-card');
  
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
 * Inicialización cuando el DOM está listo
 */
function init() {
  window.addEventListener('scroll', handleScroll);
  renderFavorites();
  
  // Inicializar menú hamburguesa
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
  
  console.log('⭐ Página de Favoritos Zombie-TK cargada correctamente');
  console.log('📅 Fecha:', new Date().toLocaleDateString('es-ES'));
  console.log('⭐ Favoritos cargados:', favorites.length);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
