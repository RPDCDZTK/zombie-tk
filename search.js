/* ============================================
   ZOMBIE-TK - search.js (VERSIÓN CORREGIDA)
   ============================================ */

// Función auxiliar para determinar el archivo alfabético
function getAlphaFile(name, type) {
  const firstChar = name.charAt(0).toUpperCase();
  let range = '';
  
  if (/[0-9]/.test(firstChar)) range = '0-9';
  else if (['A','B'].includes(firstChar)) range = 'A-B';
  else if (['C','D'].includes(firstChar)) range = 'C-D';
  else if (['E','F'].includes(firstChar)) range = 'E-F';
  else if (['G','H'].includes(firstChar)) range = 'G-H';
  else if (['I','J'].includes(firstChar)) range = 'I-J';
  else if (['K','L'].includes(firstChar)) range = 'K-L';
  else if (['M','N'].includes(firstChar)) range = 'M-N';
  else if (['O','P'].includes(firstChar)) range = 'O-P';
  else if (['Q','R'].includes(firstChar)) range = 'Q-R';
  else if (['S','T'].includes(firstChar)) range = 'S-T';
  else if (['U','V'].includes(firstChar)) range = 'U-V';
  else if (['W','X'].includes(firstChar)) range = 'W-X';
  else if (['Y','Z'].includes(firstChar)) range = 'Y-Z';
  
  return `${type}/${range}.html`;
}

// Base de datos de contenido (versión simplificada para probar)
const contentDatabase = [
  // 📚 LIBROS (ejemplos)
  { id: 'b1', title: 'Apocalipsis Z', type: 'libro', typeLabel: 'Libro', author: 'Manel Loureiro', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
  { id: 'b2', title: 'Guerra Mundial Z', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
  { id: 'b3', title: 'The Walking Dead', type: 'libro', typeLabel: 'Libro', author: 'Kirkman', img: 'img/libros/portada-generica.jpg', url: 'libros/S-T.html' },
  
  // 🎬 PELÍCULAS (ejemplos)
  { id: 'm1', title: 'World War Z', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/World-War-Z.jpg', url: 'peliculas/W-X.html' },
  { id: 'm2', title: 'Zombieland', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Zombieland.jpg', url: 'peliculas/Y-Z.html' },
  { id: 'm3', title: 'Resident Evil', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/Resident-Evil.jpg', url: 'peliculas/Q-R.html' },
  { id: 'm4', title: '28 Days Later', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/28-Days-Later.jpg', url: 'peliculas/0-9.html' },
  { id: 'm5', title: 'Shaun of the Dead', type: 'pelicula', typeLabel: 'Película', year: '2004', img: 'img/peliculas/Shaun-of-the-Dead.jpg', url: 'peliculas/S-T.html' },
  
  // 📺 SERIES
  { id: 's1', title: 'The Walking Dead', type: 'serie', typeLabel: 'Serie', img: 'img/series/The-Walking-Dead.jpg', url: 'series/The-Walking-Dead.html' },
  { id: 's2', title: 'Z Nation', type: 'serie', typeLabel: 'Serie', img: 'img/series/Z-Nation.jpg', url: 'series/Z-Nation.html' },
  { id: 's3', title: 'Black Summer', type: 'serie', typeLabel: 'Serie', img: 'img/series/Black-Summer.jpg', url: 'series/Black-Summer.html' },
  
  // 🎌 ANIMES
  { id: 'a1', title: 'Highschool of the Dead', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Highschool-of-the-Dead.jpg', url: 'animes/Highschool-of-the-Dead.html' },
  { id: 'a2', title: 'Zombieland Saga', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Zombieland-Saga.jpg', url: 'animes/Zombieland-Saga.html' },
  
  // 💥 CÓMICS
  { id: 'c1', title: 'The Walking Dead', type: 'comic', typeLabel: 'Cómic', img: 'img/comics/The-Walking-Dead.jpg', url: 'comics/The-Walking-Dead-Comic.html' },
  
  // 🎬 CORTOMETRAJES
  { id: 'co1', title: 'Cargo', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/c71d5fb6.jpg', url: 'cortometrajes/Cargo.html' },
  { id: 'co2', title: 'Hope', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://i.ytimg.com/vi/bUTJC7UdMy4/maxresdefault.jpg', url: 'cortometrajes/Hope.html' },
];

// Variables globales
let currentFilter = 'all';
let currentQuery = '';

// ============================================
// FUNCIONES DE NAVEGACIÓN
// ============================================

function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ============================================
// FUNCIONES DE BÚSQUEDA
// ============================================

function setFilter(filter, button) {
  currentFilter = filter;
  
  // Actualizar botones activos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (button) button.classList.add('active');
  
  // Re-renderizar resultados
  renderResults();
}

function quickSearch(query) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = query;
    input.focus();
    performSearch();
  }
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  currentQuery = '';
  renderResults();
}

function highlightText(text, query) {
  if (!query) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function performSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');
  
  if (!input) {
    console.error('❌ No se encontró el input de búsqueda');
    return;
  }
  
  currentQuery = input.value.trim().toLowerCase();
  
  // Mostrar/ocultar botón de limpiar
  if (clearBtn) {
    clearBtn.style.display = currentQuery ? 'flex' : 'none';
  }
  
  renderResults();
}

// ============================================
// RENDERIZADO DE RESULTADOS
// ============================================

function renderResults() {
  console.log('🔍 Renderizando resultados...');
  console.log('📊 Filtro actual:', currentFilter);
  console.log('🔎 Query actual:', currentQuery);
  
  const grid = document.getElementById('resultsGrid');
  const emptyEl = document.getElementById('searchEmpty');
  const noResultsEl = document.getElementById('noResults');
  const countEl = document.getElementById('searchCount');
  const noResultsText = document.getElementById('noResultsText');
  
  if (!grid) {
    console.error('❌ No se encontró el elemento resultsGrid');
    return;
  }
  
  // Filtrar por categoría
  let filtered = contentDatabase;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(item => item.type === currentFilter);
    console.log(`📂 Filtrado por ${currentFilter}: ${filtered.length} ítems`);
  }
  
  // Filtrar por texto de búsqueda
  if (currentQuery) {
    filtered = filtered.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(currentQuery);
      const authorMatch = item.author && item.author.toLowerCase().includes(currentQuery);
      return titleMatch || authorMatch;
    });
    console.log(`🔎 Después de buscar "${currentQuery}": ${filtered.length} resultados`);
  }
  
  // Actualizar contadores
  updateFilterCounts();
  
  // Actualizar contador general
  if (countEl) {
    const total = currentQuery ? filtered.length : contentDatabase.length;
    countEl.textContent = `📊 ${total} resultado${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
  }
  
  // Limpiar grid
  grid.innerHTML = '';
  
  // Mostrar estado correspondiente
  if (!currentQuery && currentFilter === 'all') {
    // Estado inicial
    if (emptyEl) emptyEl.style.display = 'block';
    if (noResultsEl) noResultsEl.style.display = 'none';
    grid.style.display = 'none';
    console.log('📋 Mostrando estado inicial (vacío)');
    return;
  }
  
  if (emptyEl) emptyEl.style.display = 'none';
  
  if (filtered.length === 0) {
    // Sin resultados
    if (noResultsEl) noResultsEl.style.display = 'block';
    if (noResultsText) {
      noResultsText.textContent = `No se encontró "${currentQuery}" en ${currentFilter === 'all' ? 'ninguna sección' : 'la sección de ' + currentFilter + 's'}`;
    }
    grid.style.display = 'none';
    console.log('😕 No se encontraron resultados');
    return;
  }
  
  // Mostrar resultados
  if (noResultsEl) noResultsEl.style.display = 'none';
  grid.style.display = 'grid';
  
  console.log(`✅ Renderizando ${filtered.length} tarjetas`);
  
  filtered.forEach((item, index) => {
    const card = document.createElement('a');
    card.className = 'result-card';
    card.href = item.url;
    card.style.animationDelay = `${index * 0.03}s`;
    
    const extraInfo = item.author ? ` • ${item.author}` : (item.year ? ` (${item.year})` : '');
    
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="result-card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="result-card-overlay"></div>
      <div class="result-card-content">
        <div class="result-card-title">${highlightText(item.title, currentQuery)}${highlightText(extraInfo, currentQuery)}</div>
        <div class="result-card-type">${item.typeLabel}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function updateFilterCounts() {
  const types = ['libro', 'pelicula', 'serie', 'anime', 'comic', 'cortometraje', 'relato', 'juego'];
  
  // Contador total
  let totalFiltered = contentDatabase;
  if (currentQuery) {
    totalFiltered = totalFiltered.filter(item => 
      item.title.toLowerCase().includes(currentQuery) ||
      (item.author && item.author.toLowerCase().includes(currentQuery))
    );
  }
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = totalFiltered.length;
  
  // Contadores por tipo
  types.forEach(type => {
    let filtered = contentDatabase.filter(item => item.type === type);
    if (currentQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(currentQuery) ||
        (item.author && item.author.toLowerCase().includes(currentQuery))
      );
    }
    const countEl = document.getElementById(`count-${type}`);
    if (countEl) countEl.textContent = filtered.length;
  });
}

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
  console.log('🚀 Inicializando página de búsqueda...');
  console.log('📊 Total de ítems en base de datos:', contentDatabase.length);
  
  // Verificar que existan los elementos necesarios
  const searchInput = document.getElementById('searchInput');
  const resultsGrid = document.getElementById('resultsGrid');
  const searchEmpty = document.getElementById('searchEmpty');
  
  if (!searchInput) {
    console.error('❌ No se encontró el elemento searchInput');
  }
  if (!resultsGrid) {
    console.error('❌ No se encontró el elemento resultsGrid');
  }
  if (!searchEmpty) {
    console.error('❌ No se encontró el elemento searchEmpty');
  }
  
  // Event listener para scroll
  window.addEventListener('scroll', handleScroll);
  
  // Event listener para búsqueda
  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    searchInput.focus();
    console.log('✅ Input de búsqueda configurado');
  }
  
  // Inicializar contadores
  updateFilterCounts();
  
  // Renderizar resultados iniciales
  renderResults();
  
  // Menú hamburguesa
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
  
  console.log('✅ Página de búsqueda inicializada correctamente');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
