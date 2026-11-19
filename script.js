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
