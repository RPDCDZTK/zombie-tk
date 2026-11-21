/* ============================================
   ZOMBIE-TK - Script Principal
   ============================================ */

  // Cargar avatar del usuario en el header
  (function() {
    const avatarImg = document.getElementById('headerAvatarImg');
    if (avatarImg) {
      const savedAvatar = localStorage.getItem('zombieTK_avatar') || 
        'https://api.dicebear.com/7.x/bottts/svg?seed=zombiefan&backgroundColor=4c1d95';
      avatarImg.src = savedAvatar;
    }
  })();

/**
 * Navega a una sección interna desde el menú hamburguesa
 */
function navigateToInternal(section) {
  closeMenu();
  setTimeout(() => {
    const navItems = document.querySelectorAll('.nav-item');
    const pageIndex = { search: 1, favorites: 2, account: 3 };
    if (navItems[pageIndex[section]]) {
      showPage(section, navItems[pageIndex[section]]);
    }
  }, 300);
}

// Cargar favoritos desde localStorage al iniciar
let favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];

/**
 * Muestra la página seleccionada
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
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (page === 'favorites') {
    renderFavorites();
  }
  
  updateStarStates();
}

/**
 * 🔥 NUEVO: Verifica si hay una navegación pendiente desde otra página
 * Esto permite que al venir de libros.html, series.html, etc.
 * se abra directamente la sección correcta
 */
function checkNavigation() {
  const navigateTo = sessionStorage.getItem('zombieTK_navigateTo');
  if (navigateTo) {
    sessionStorage.removeItem('zombieTK_navigateTo');
    
    setTimeout(() => {
      const navItems = document.querySelectorAll('.nav-item');
      const pageIndex = { search: 1, favorites: 2, account: 3 };
      
      if (navItems[pageIndex[navigateTo]]) {
        showPage(navigateTo, navItems[pageIndex[navigateTo]]);
      }
    }, 100);
  }
}

/**
 * Alterna el estado de favorito de un ítem
 */
function toggleFavorite(event, button) {
  event.stopPropagation();
  
  const card = button.closest('.card');
  const id = card.dataset.id;
  const title = card.dataset.title;
  const type = card.dataset.type;
  const img = card.dataset.img;
  
  const index = favorites.findIndex(f => f.id === id);
  
  if (index === -1) {
    favorites.push({ id, title, type, img });
    button.classList.add('active');
    showToast('⭐ Agregado a favoritos');
  } else {
    favorites.splice(index, 1);
    button.classList.remove('active');
    showToast('Removido de favoritos');
  }
  
  localStorage.setItem('zombieTK_favorites', JSON.stringify(favorites));
}

/**
 * Actualiza el estado visual de todas las estrellas
 */
function updateStarStates() {
  document.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;
    const btn = card.querySelector('.favorite-btn');
    if (btn && id) {
      const isFavorite = favorites.some(f => f.id === id);
      if (isFavorite) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

/**
 * Renderiza la página de favoritos
 */
function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const countEl = document.getElementById('favoritesCount');
  const emptyEl = document.getElementById('emptyFavorites');
  
  if (!grid) return;
  
  countEl.textContent = `${favorites.length} ítem${favorites.length !== 1 ? 's' : ''} guardado${favorites.length !== 1 ? 's' : ''}`;
  
  const existingCards = grid.querySelectorAll('.card');
  existingCards.forEach(c => c.remove());
  
  if (favorites.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }
  
  if (emptyEl) emptyEl.style.display = 'none';
  
  favorites.forEach(fav => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = fav.id;
    card.dataset.title = fav.title;
    card.dataset.type = fav.type;
    card.dataset.img = fav.img;
    
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${fav.img}" alt="${fav.title}" class="card-img-real">
        <div class="card-title-overlay">${fav.title}</div>
        <button class="favorite-btn active" onclick="toggleFavorite(event, this)">
          <svg class="star-icon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
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
  }, 2000);
}

/**
 * Establece el filtro activo
 */
function setFilter(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
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

/* ============================================
   🍔 MENÚ HAMBURGUESA
   ============================================ */

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
 * Inicializa el menú hamburguesa
 */
function initHamburgerMenu() {
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
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
 * Cierra modales al hacer clic fuera
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
      closeMenu();
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
  initHamburgerMenu();
  updateStarStates();
  checkNavigation(); // 🔥 NUEVO: Verificar navegación pendiente
  
  console.log('🧟 Zombie-TK cargado correctamente');
  console.log('⭐ Favoritos cargados:', favorites.length);
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState !== 'loading') {
  init();
}
