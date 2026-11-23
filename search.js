/* ============================================
   ZOMBIE-TK - search.js (VERSIÓN FINAL CON DATOS REALES)
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

// Base de datos de contenido REAL
const contentDatabase = [
  // 📚 LIBROS (organizados alfabéticamente)
  { id: 'b1', title: 'Apocalipsis Z', type: 'libro', typeLabel: 'Libro', author: 'Manel Loureiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b2', title: 'Guerra Mundial Z', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Guerra', 'libros') },
  { id: 'b3', title: 'The Walking Dead', type: 'libro', typeLabel: 'Libro', author: 'Kirkman', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b4', title: 'Zombie Survival Guide', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombie', 'libros') },
  { id: 'b5', title: 'World War Z', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('World', 'libros') },
  { id: 'b6', title: 'I Am Legend', type: 'libro', typeLabel: 'Libro', author: 'Richard Matheson', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('I', 'libros') },
  { id: 'b7', title: 'Cell', type: 'libro', typeLabel: 'Libro', author: 'Stephen King', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cell', 'libros') },
  { id: 'b8', title: 'The Stand', type: 'libro', typeLabel: 'Libro', author: 'Stephen King', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  
  // 🎬 PELÍCULAS (organizadas alfabéticamente)
  { id: 'm1', title: '28 Days Later', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/28-Days-Later.jpg', url: getAlphaFile('28', 'peliculas') },
  { id: 'm2', title: '28 Weeks Later', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/28-Weeks-Later.jpg', url: getAlphaFile('28', 'peliculas') },
  { id: 'm3', title: 'Dawn of the Dead', type: 'pelicula', typeLabel: 'Película', year: '1978', img: 'img/peliculas/Dawn-of-the-Dead.jpg', url: getAlphaFile('Dawn', 'peliculas') },
  { id: 'm4', title: 'Night of the Living Dead', type: 'pelicula', typeLabel: 'Película', year: '1968', img: 'img/peliculas/Night-of-the-Living-Dead.jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm5', title: 'Resident Evil', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/Resident-Evil.jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm6', title: 'Shaun of the Dead', type: 'pelicula', typeLabel: 'Película', year: '2004', img: 'img/peliculas/Shaun-of-the-Dead.jpg', url: getAlphaFile('Shaun', 'peliculas') },
  { id: 'm7', title: 'World War Z', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/World-War-Z.jpg', url: getAlphaFile('World', 'peliculas') },
  { id: 'm8', title: 'Zombieland', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Zombieland.jpg', url: getAlphaFile('Zombieland', 'peliculas') },
  { id: 'm9', title: 'Train to Busan', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Train-to-Busan.jpg', url: getAlphaFile('Train', 'peliculas') },
  { id: 'm10', title: 'The Walking Dead', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/The-Walking-Dead.jpg', url: getAlphaFile('The', 'peliculas') },
  
  // 📺 SERIES
  { id: 's1', title: 'Black Summer', type: 'serie', typeLabel: 'Serie', img: 'img/series/Black-Summer.jpg', url: 'series/Black-Summer.html' },
  { id: 's2', title: 'Daybreak', type: 'serie', typeLabel: 'Serie', img: 'img/series/Daybreak.png', url: 'series/Daybreak.html' },
  { id: 's3', title: 'Dead Set', type: 'serie', typeLabel: 'Serie', img: 'img/series/Dead-Set.jpg', url: 'series/Dead-Set.html' },
  { id: 's4', title: 'I Zombie', type: 'serie', typeLabel: 'Serie', img: 'img/series/I-Zombie.jpg', url: 'series/I-Zombie.html' },
  { id: 's5', title: 'Kingdom', type: 'serie', typeLabel: 'Serie', img: 'img/series/kingdom.jpg', url: 'series/Kingdom.html' },
  { id: 's6', title: 'Plantas Vs Zombies', type: 'serie', typeLabel: 'Serie', img: 'img/series/Plantas-Vs-Zombies.png', url: 'series/Plantas-Vs-Zombies.html' },
  { id: 's7', title: 'Reality Z', type: 'serie', typeLabel: 'Serie', img: 'img/series/Reality-Z.png', url: 'series/Reality-Z.html' },
  { id: 's8', title: 'The Walking Dead', type: 'serie', typeLabel: 'Serie', img: 'img/series/The-Walking-Dead.jpg', url: 'series/The-Walking-Dead.html' },
  { id: 's9', title: 'Z Nation', type: 'serie', typeLabel: 'Serie', img: 'img/series/Z-Nation.png', url: 'series/Z-Nation.html' },
  
  // 🎌 ANIMES
  { id: 'a1', title: 'Gakkou Gurashi!', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Gakkou-Gurashi.png', url: 'animes/Gakkou-Gurashi.html' },
  { id: 'a2', title: 'Highschool of the Dead', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Highschool-of-the-Dead.png', url: 'animes/Highschool-of-the-Dead.html' },
  { id: 'a3', title: 'Kore wa Zombie Desu ka?', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Kore-wa-Zombie-Desu-ka.png', url: 'animes/Kore-wa-Zombie-Desu-ka.html' },
  { id: 'a4', title: 'Koutetsujou no Kabaneri', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Koutetsujou-no-Kabaneri.png', url: 'animes/Koutetsujou-no-Kabaneri.html' },
  { id: 'a5', title: 'Shikabane Hime: Aka', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Shikabane-Hime-Aka.png', url: 'animes/Shikabane-Hime-Aka.html' },
  { id: 'a6', title: 'Zombieland Saga', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Zombieland-Saga.png', url: 'animes/Zombieland-Saga.html' },
  
  // 💥 CÓMICS
  { id: 'c1', title: 'The Walking Dead', type: 'comic', typeLabel: 'Cómic', img: 'img/comics/The-Walking-Dead.jpg', url: 'comics/The-Walking-Dead-Comic.html' },
  
  // 🎬 CORTOMETRAJES
  { id: 'co1', title: 'Cargo', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/c71d5fb6-6e04-4b90-bbdc-57ebb12857e1.jpg', url: 'cortometrajes/Cargo.html' },
  { id: 'co2', title: 'Hope', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://i.ytimg.com/vi_webp/bUTJC7UdMy4/maxresdefault.webp', url: 'cortometrajes/Hope.html' },
  { id: 'co3', title: 'Make It Until Morning', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/33b29291-5e94-4360-96db-d877f8dd0d5e.jpg', url: 'cortometrajes/Make-It-Until-Morning.html' },
  { id: 'co4', title: 'Soy un Zombie', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://i.ytimg.com/vi/IGfdVXkoe_c/maxresdefault.jpg', url: 'cortometrajes/Soy-un-Zombie.html' },
  { id: 'co5', title: 'Still', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/d923e46f-79da-47e4-952a-0c35a8484c27.jpg', url: 'cortometrajes/Still.html' },
  { id: 'co6', title: 'Zombie Doom', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/f47aea1f-bb63-448b-9aa2-f62fb14f7703.jpg', url: 'cortometrajes/Zombie-Doom.html' },
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
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (button) button.classList.add('active');
  
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
  
  let filtered = contentDatabase;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(item => item.type === currentFilter);
    console.log(`📂 Filtrado por ${currentFilter}: ${filtered.length} ítems`);
  }
  
  if (currentQuery) {
    filtered = filtered.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(currentQuery);
      const authorMatch = item.author && item.author.toLowerCase().includes(currentQuery);
      return titleMatch || authorMatch;
    });
    console.log(`🔎 Después de buscar "${currentQuery}": ${filtered.length} resultados`);
  }
  
  updateFilterCounts();
  
  if (countEl) {
    const total = currentQuery ? filtered.length : contentDatabase.length;
    countEl.textContent = `📊 ${total} resultado${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
  }
  
  grid.innerHTML = '';
  
  if (!currentQuery && currentFilter === 'all') {
    if (emptyEl) emptyEl.style.display = 'block';
    if (noResultsEl) noResultsEl.style.display = 'none';
    grid.style.display = 'none';
    console.log('📋 Mostrando estado inicial (vacío)');
    return;
  }
  
  if (emptyEl) emptyEl.style.display = 'none';
  
  if (filtered.length === 0) {
    if (noResultsEl) noResultsEl.style.display = 'block';
    if (noResultsText) {
      noResultsText.textContent = `No se encontró "${currentQuery}" en ${currentFilter === 'all' ? 'ninguna sección' : 'la sección de ' + currentFilter + 's'}`;
    }
    grid.style.display = 'none';
    console.log('😕 No se encontraron resultados');
    return;
  }
  
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
  const types = ['libro', 'pelicula', 'serie', 'anime', 'comic', 'cortometraje'];
  
  let totalFiltered = contentDatabase;
  if (currentQuery) {
    totalFiltered = totalFiltered.filter(item => 
      item.title.toLowerCase().includes(currentQuery) ||
      (item.author && item.author.toLowerCase().includes(currentQuery))
    );
  }
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = totalFiltered.length;
  
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
  
  window.addEventListener('scroll', handleScroll);
  
  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    searchInput.focus();
    console.log('✅ Input de búsqueda configurado');
  }
  
  updateFilterCounts();
  renderResults();
  
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
