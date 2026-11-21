/* ============================================
   ZOMBIE-TK - Base de datos de contenido
   ============================================ */

const contentDatabase = [
  // LIBROS
  { id: 'b1', title: 'World War Z', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80', url: 'libros/World-War-Z.html' },
  { id: 'b2', title: 'Guía de Supervivencia', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80', url: 'libros/Guia-de-Supervivencia.html' },
  { id: 'b3', title: 'Zombie Survival Guide', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80', url: 'libros/Zombie-Survival-Guide.html' },
  { id: 'b4', title: 'Patient Zero', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&q=80', url: 'libros/Patient-Zero.html' },
  { id: 'b5', title: 'Diario de un Zombi', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80', url: 'libros/Diario-de-un-Zombi.html' },
  { id: 'b6', title: 'La Plaga Zombie', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80', url: 'libros/La-Plaga-Zombie.html' },
  { id: 'b7', title: 'Apocalipsis Z', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&q=80', url: 'libros/Apocalipsis-Z.html' },
  { id: 'b8', title: 'Los Muertos Vivientes', type: 'libro', typeLabel: 'Libro', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80', url: 'libros/Los-Muertos-Vivientes.html' },

  // PELÍCULAS
  { id: 'm1', title: 'World War Z', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&q=80', url: 'peliculas/World-War-Z.html' },
  { id: 'm2', title: 'Zombieland', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=300&q=80', url: 'peliculas/Zombieland.html' },
  { id: 'm3', title: 'Resident Evil', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80', url: 'peliculas/Resident-Evil.html' },
  { id: 'm4', title: 'Dawn of the Dead', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=300&q=80', url: 'peliculas/Dawn-of-the-Dead.html' },
  { id: 'm5', title: '28 Days Later', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80', url: 'peliculas/28-Days-Later.html' },
  { id: 'm6', title: 'Night of the Living Dead', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&q=80', url: 'peliculas/Night-of-the-Living-Dead.html' },
  { id: 'm7', title: 'Shaun of the Dead', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=300&q=80', url: 'peliculas/Shaun-of-the-Dead.html' },
  { id: 'm8', title: 'Train to Busan', type: 'pelicula', typeLabel: 'Película', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80', url: 'peliculas/Train-to-Busan.html' },

  // SERIES
  { id: 's1', title: 'The Walking Dead', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&q=80', url: 'series/The-Walking-Dead.html' },
  { id: 's2', title: 'Z Nation', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80', url: 'series/Z-Nation.html' },
  { id: 's3', title: 'Kingdom', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&q=80', url: 'series/Kingdom.html' },
  { id: 's4', title: 'Black Summer', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&q=80', url: 'series/Black-Summer.html' },
  { id: 's5', title: 'Daybreak', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80', url: 'series/Daybreak.html' },
  { id: 's6', title: 'Dead Set', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80', url: 'series/Dead-Set.html' },
  { id: 's7', title: 'I Zombie', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=300&q=80', url: 'series/I-Zombie.html' },
  { id: 's8', title: 'Reality Z', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&q=80', url: 'series/Reality-Z.html' },
  { id: 's9', title: 'All of Us Are Dead', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&q=80', url: 'series/All-of-Us-Are-Dead.html' },
  { id: 's10', title: 'Santa Clarita Diet', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&q=80', url: 'series/Santa-Clarita-Diet.html' },
  { id: 's11', title: 'Marvel Zombies', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&q=80', url: 'series/Marvel-Zombies.html' },
  { id: 's12', title: 'Soldados o Zombies', type: 'serie', typeLabel: 'Serie', img: 'https://images.unsplash.com/photo-1542259685-610271221992?w=300&q=80', url: 'series/Soldados-o-Zombies.html' },

  // ANIMES
  { id: 'a1', title: 'Highschool of the Dead', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=300&q=80', url: 'animes/Highschool-of-the-Dead.html' },
  { id: 'a2', title: 'Zombieland Saga', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=300&q=80', url: 'animes/Zombieland-Saga.html' },
  { id: 'a3', title: 'Koutetsujou no Kabaneri', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&q=80', url: 'animes/Koutetsujou-no-Kabaneri.html' },
  { id: 'a4', title: 'Kore wa Zombie Desu ka?', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=300&q=80', url: 'animes/Kore-wa-Zombie-Desu-ka.html' },
  { id: 'a5', title: 'Gakkou Gurashi!', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=300&q=80', url: 'animes/Gakkou-Gurashi.html' },
  { id: 'a6', title: 'Shikabane Hime: Aka', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=300&q=80', url: 'animes/Shikabane-Hime-Aka.html' },
  { id: 'a7', title: 'Tokyo Ghoul', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&q=80', url: 'animes/Tokyo-Ghoul.html' },
  { id: 'a8', title: 'Attack on Titan', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=300&q=80', url: 'animes/Attack-on-Titan.html' },
  { id: 'a9', title: 'Zom 100: Bucket List of the Dead', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=300&q=80', url: 'animes/Zom-100.html' },
  { id: 'a10', title: 'Parasyte: The Maxim', type: 'anime', typeLabel: 'Anime', img: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=300&q=80', url: 'animes/Parasyte.html' },

  // CÓMICS
  { id: 'c1', title: 'The Walking Dead', type: 'comic', typeLabel: 'Cómic', img: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&q=80', url: 'comics/The-Walking-Dead-Comic.html' },
  { id: 'c2', title: 'Marvel Zombies', type: 'comic', typeLabel: 'Cómic', img: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300&q=80', url: 'comics/Marvel-Zombies.html' },
  { id: 'c3', title: 'iZombie', type: 'comic', typeLabel: 'Cómic', img: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=300&q=80', url: 'comics/iZombie.html' },
  { id: 'c4', title: 'DCeased', type: 'comic', typeLabel: 'Cómic', img: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=300&q=80', url: 'comics/DCeased.html' },
  { id: 'c5', title: 'Blackest Night', type: 'comic', typeLabel: 'Cómic', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&q=80', url: 'comics/Blackest-Night.html' },
  { id: 'c6', title: 'Empire of the Dead', type: 'comic', typeLabel: 'Cómic', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&q=80', url: 'comics/Empire-of-the-Dead.html' },

  // CORTOMETRAJES
  { id: 'co1', title: 'Cargo', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/c71d5fb6-6e04-4b90-bbdc-57ebb12857e1.jpg', url: 'cortometrajes/Cargo.html' },
  { id: 'co2', title: 'Hope', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://i.ytimg.com/vi_webp/bUTJC7UdMy4/maxresdefault.webp', url: 'cortometrajes/Hope.html' },
  { id: 'co3', title: 'Make It Until Morning', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/33b29291-5e94-4360-96db-d877f8dd0d5e.jpg', url: 'cortometrajes/Make-It-Until-Morning.html' },
  { id: 'co4', title: 'Soy un Zombie', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://i.ytimg.com/vi/IGfdVXkoe_c/maxresdefault.jpg', url: 'cortometrajes/Soy-un-Zombie.html' },
  { id: 'co5', title: 'Still', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/d923e46f-79da-47e4-952a-0c35a8484c27.jpg', url: 'cortometrajes/Still.html' },
  { id: 'co6', title: 'Zombie Doom', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/f47aea1f-bb63-448b-9aa2-f62fb14f7703.jpg', url: 'cortometrajes/Zombie-Doom.html' },
  { id: 'co7', title: 'Thriller', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80', url: 'cortometrajes/Thriller.html' },
  { id: 'co8', title: '2 Hours', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://images.unsplash.com/photo-1536440136628-849c42c93d0c?w=300&q=80', url: 'cortometrajes/2-Hours.html' },

  // RELATOS
  { id: 'r1', title: 'El último superviviente', type: 'relato', typeLabel: 'Relato', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&q=80', url: 'relatos/El-ultimo-superviviente.html' },
  { id: 'r2', title: 'Noche de muertos', type: 'relato', typeLabel: 'Relato', img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&q=80', url: 'relatos/Noche-de-muertos.html' },
  { id: 'r3', title: 'La cura perdida', type: 'relato', typeLabel: 'Relato', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80', url: 'relatos/La-cura-perdida.html' },
  { id: 'r4', title: 'Amanecer en la ciudad muerta', type: 'relato', typeLabel: 'Relato', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&q=80', url: 'relatos/Amanecer-en-la-ciudad-muerta.html' },
  { id: 'r5', title: 'Diario de un infectado', type: 'relato', typeLabel: 'Relato', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80', url: 'relatos/Diario-de-un-infectado.html' },
  { id: 'r6', title: 'El paciente cero', type: 'relato', typeLabel: 'Relato', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&q=80', url: 'relatos/El-paciente-cero.html' },

  // JUEGOS
  { id: 'g1', title: 'Resident Evil Village', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80', url: 'juegos/Resident-Evil-Village.html' },
  { id: 'g2', title: 'Left 4 Dead 2', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1550978934-490278542c93?w=300&q=80', url: 'juegos/Left-4-Dead-2.html' },
  { id: 'g3', title: 'Days Gone', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&q=80', url: 'juegos/Days-Gone.html' },
  { id: 'g4', title: 'Dying Light 2', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&q=80', url: 'juegos/Dying-Light-2.html' },
  { id: 'g5', title: 'Dead Island 2', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&q=80', url: 'juegos/Dead-Island-2.html' },
  { id: 'g6', title: 'The Last of Us Part II', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&q=80', url: 'juegos/The-Last-of-Us-Part-II.html' },
  { id: 'g7', title: 'Project Zomboid', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&q=80', url: 'juegos/Project-Zomboid.html' },
  { id: 'g8', title: 'State of Decay 2', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&q=80', url: 'juegos/State-of-Decay-2.html' },
  { id: 'g9', title: 'Dead Space', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&q=80', url: 'juegos/Dead-Space.html' },
  { id: 'g10', title: 'Plants vs. Zombies', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80', url: 'juegos/Plants-vs-Zombies.html' },
  { id: 'g11', title: 'Back 4 Blood', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&q=80', url: 'juegos/Back-4-Blood.html' },
  { id: 'g12', title: 'World War Z', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80', url: 'juegos/World-War-Z.html' },
  { id: 'g13', title: 'Zombie Army 4', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80', url: 'juegos/Zombie-Army-4.html' },
  { id: 'g14', title: 'Killing Floor 2', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80', url: 'juegos/Killing-Floor-2.html' },
  { id: 'g15', title: 'Dead Rising', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80', url: 'juegos/Dead-Rising.html' },
  { id: 'g16', title: 'Call of Duty: Zombies', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&q=80', url: 'juegos/Call-of-Duty-Zombies.html' },
  { id: 'g17', title: 'Unturned', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&q=80', url: 'juegos/Unturned.html' },
  { id: 'g18', title: '7 Days to Die', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&q=80', url: 'juegos/7-Days-to-Die.html' },
  { id: 'g19', title: 'They Are Billions', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&q=80', url: 'juegos/They-Are-Billions.html' },
  { id: 'g20', title: 'No More Room in Hell', type: 'juego', typeLabel: 'Juego', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80', url: 'juegos/No-More-Room-in-Hell.html' },
];

/* ============================================
   ZOMBIE-TK - Funcionalidad de Búsqueda
   ============================================ */

let currentFilter = 'all';
let currentQuery = '';

/**
 * Muestra u oculta el botón "Volver arriba"
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Menú hamburguesa
 */
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

/**
 * Establece el filtro activo
 */
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

/**
 * Búsqueda rápida desde sugerencias
 */
function quickSearch(query) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = query;
    input.focus();
    performSearch();
  }
}

/**
 * Limpia la búsqueda
 */
function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  currentQuery = '';
  renderResults();
}

/**
 * Resalta el texto coincidente en el título
 */
function highlightText(text, query) {
  if (!query) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

/**
 * Realiza la búsqueda y filtra los resultados
 */
function performSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');
  
  if (!input) return;
  
  currentQuery = input.value.trim().toLowerCase();
  
  // Mostrar/ocultar botón de limpiar
  if (clearBtn) {
    clearBtn.style.display = currentQuery ? 'flex' : 'none';
  }
  
  renderResults();
}

/**
 * Renderiza los resultados según filtro y búsqueda
 */
function renderResults() {
  const grid = document.getElementById('resultsGrid');
  const emptyEl = document.getElementById('searchEmpty');
  const noResultsEl = document.getElementById('noResults');
  const countEl = document.getElementById('searchCount');
  const noResultsText = document.getElementById('noResultsText');
  
  if (!grid) return;
  
  // Filtrar por categoría
  let filtered = contentDatabase;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(item => item.type === currentFilter);
  }
  
  // Filtrar por texto de búsqueda
  if (currentQuery) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(currentQuery)
    );
  }
  
  // Actualizar contadores de filtros
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
    return;
  }
  
  // Mostrar resultados
  if (noResultsEl) noResultsEl.style.display = 'none';
  grid.style.display = 'grid';
  
  filtered.forEach((item, index) => {
    const card = document.createElement('a');
    card.className = 'result-card';
    card.href = item.url;
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="result-card-img">
      <div class="result-card-overlay"></div>
      <div class="result-card-content">
        <div class="result-card-title">${highlightText(item.title, currentQuery)}</div>
        <div class="result-card-type">${item.typeLabel}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

/**
 * Actualiza los contadores de cada filtro
 */
function updateFilterCounts() {
  const types = ['libro', 'pelicula', 'serie', 'anime', 'comic', 'cortometraje', 'relato', 'juego'];
  
  // Contador total
  let totalFiltered = contentDatabase;
  if (currentQuery) {
    totalFiltered = totalFiltered.filter(item => 
      item.title.toLowerCase().includes(currentQuery)
    );
  }
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = totalFiltered.length;
  
  // Contadores por tipo
  types.forEach(type => {
    let filtered = contentDatabase.filter(item => item.type === type);
    if (currentQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(currentQuery)
      );
    }
    const countEl = document.getElementById(`count-${type}`);
    if (countEl) countEl.textContent = filtered.length;
  });
}

/**
 * Inicialización
 */
function init() {
  window.addEventListener('scroll', handleScroll);
  
  // Inicializar búsqueda
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    searchInput.focus();
  }
  
  // Inicializar contadores
  updateFilterCounts();
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
  
  console.log('🔍 Página de Búsqueda Zombie-TK cargada correctamente');
  console.log('📊 Total de ítems en base de datos:', contentDatabase.length);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
