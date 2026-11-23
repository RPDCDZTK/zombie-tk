/* ============================================
   ZOMBIE-TK - search.js (VERSIÓN ROBUSTA)
   ============================================ */

// Función auxiliar para determinar el archivo alfabético
function getAlphaFile(name, type) {
  if (!name) return type + '/0-9.html';
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
  
  return type + '/' + range + '.html';
}

// ============================================
// BASE DE DATOS SEPARADA POR CATEGORÍAS
// (Más fácil de mantener y menos propensa a errores)
// ============================================

const librosDB = [
  // 📚 Agrega tus libros aquí, uno por línea
  { id: 'b1', title: 'Apocalipsis Z', author: 'Manel Loureiro' },
  { id: 'b2', title: 'Guerra Mundial Z', author: 'Max Brooks' },
  { id: 'b3', title: 'The Walking Dead', author: 'Kirkman' },
  { id: 'b4', title: 'Zombie Survival Guide', author: 'Max Brooks' },
  { id: 'b5', title: 'World War Z', author: 'Max Brooks' },
  { id: 'b6', title: 'I Am Legend', author: 'Richard Matheson' },
  { id: 'b7', title: 'Cell', author: 'Stephen King' },
  { id: 'b8', title: 'The Stand', author: 'Stephen King' },
  // 👇 AGREGA MÁS LIBROS AQUÍ 👇
];

const peliculasDB = [
  { id: 'm1', title: '13 Eerie', year: '2013' },
  { id: 'm2', title: '28 Days Later', year: '2002' },
  { id: 'm3', title: '28 Weeks Later', year: '2007' },
  { id: 'm4', title: 'Aj Zombies', year: '2017' },
  { id: 'm5', title: 'An Accidental Zombie', year: '2017' },
  { id: 'm6', title: 'Anger Of The Dead', year: '2014' },
  { id: 'm7', title: 'Anna And The Apocalypse', year: '2018' },
  { id: 'm8', title: 'Apocalipsis Zombie - Origenes', year: '-' },
  { id: 'm9', title: 'Attack Of The Lederhosen Zombies', year: '2016' },
  { id: 'm10', title: 'Black Death', year: '2010' },
  { id: 'm11', title: 'Blood Quantum', year: '2019' },
  { id: 'm12', title: 'Bombshell Bloodbath', year: '2014' },
  { id: 'm13', title: 'Braindead', year: '1992' },
  { id: 'm14', title: 'Breakdown Lane', year: '2017' },
  { id: 'm15', title: 'Bunks', year: '2013' },
  { id: 'm16', title: 'Burying The Ex', year: '2014' },
  { id: 'm17', title: 'Cabin Fever', year: '2002' },
  { id: 'm18', title: 'Cabin Fever 2 Spring Fever', year: '2009' },
  { id: 'm19', title: 'Cabin Fever 3 Patient Zero', year: '2014' },
  { id: 'm20', title: 'Cabin Fever 4', year: '2016' },
  { id: 'm21', title: 'Cargo', year: '2017' },
  { id: 'm22', title: 'Castores Zombies', year: '-' },
  { id: 'm23', title: 'Cell', year: '2016' },
  { id: 'm24', title: 'Chernobyl Diaries', year: '2012' },
  { id: 'm25', title: 'Chrysalis', year: '2014' },
  { id: 'm26', title: 'Code Red', year: '2013' },
  { id: 'm27', title: 'Contracted', year: '2013' },
  { id: 'm28', title: 'Contracted Phase II', year: '2015' },
  { id: 'm29', title: 'Curas Zombies en Azul', year: '-' },
  { id: 'm30', title: 'Dance Of The Dead', year: '2008' },
  { id: 'm31', title: 'Darkest Day', year: '2015' },
  { id: 'm32', title: 'Dawn Of The Dead', year: '1978' },
  { id: 'm33', title: 'Dawn Of The Dead Remake', year: '2004' },
  { id: 'm34', title: 'Day Of The Dead', year: '1985' },
  { id: 'm35', title: 'Day Of The Dead Bloodline Remake', year: '2018' },
  { id: 'm36', title: 'Daylights End', year: '2016' },
  { id: 'm37', title: 'Dead 7', year: '2016' },
  { id: 'm38', title: 'Dead Before Dawn', year: '2012' },
  { id: 'm39', title: 'Dead Heat', year: '1998' },
  { id: 'm40', title: 'Dead Rising 1 Watchtower', year: '2015' },
  { id: 'm41', title: 'Dead Rising 2 Endgame', year: '2016' },
  { id: 'm42', title: 'Dead Shack', year: '2017' },
  { id: 'm43', title: 'Dead Snow 1', year: '2009' },
  { id: 'm44', title: 'Dead Snow 2', year: '2014' },
  { id: 'm45', title: 'Dead Trigger', year: '2017' },
  { id: 'm46', title: 'Deadgirl', year: '2008' },
  { id: 'm47', title: 'DeadHeads', year: '2011' },
  { id: 'm48', title: 'Deadsight', year: '2018' },
  { id: 'm49', title: 'Demoni', year: '1985' },
  { id: 'm50', title: 'Demoni 2 Lincubo Ritorna', year: '1986' },
  { id: 'm51', title: 'Demoni 3 Black Demons', year: '1991' },
  { id: 'm52', title: 'Devils Tower', year: '2014' },
  { id: 'm53', title: 'Diary Of The Dead', year: '2007' },
  { id: 'm54', title: 'Disaster LA', year: '2014' },
  { id: 'm55', title: 'Dixie And The Zombi Rebellion', year: '2014' },
  { id: 'm56', title: 'Dont Grow Up', year: '2015' },
  { id: 'm57', title: 'El dia de los muertos', year: '-' },
  { id: 'm58', title: 'Endzeit Ever After', year: '2018' },
  { id: 'm59', title: 'Estado de Emergencia', year: '-' },
  { id: 'm60', title: 'Evil Dead 1', year: '1981' },
  { id: 'm61', title: 'Evil Dead 2', year: '1987' },
  { id: 'm62', title: 'Evil Dead 3', year: '1992' },
  { id: 'm63', title: 'Evil Dead Remake', year: '2013' },
  { id: 'm64', title: 'Exit Humanity', year: '2011' },
  { id: 'm65', title: 'Extincion', year: '2015' },
  { id: 'm66', title: 'Feral', year: '2018' },
  { id: 'm67', title: 'Freaks Of Nature', year: '2015' },
  { id: 'm68', title: 'GallowWalkers', year: '2013' },
  { id: 'm69', title: 'Generation Z', year: '2015' },
  { id: 'm70', title: 'Goal Of The Dead', year: '2014' },
  { id: 'm71', title: 'Halley', year: '2012' },
  { id: 'm72', title: 'Hard Line Dead Rush', year: '2016' },
  { id: 'm73', title: 'Here Alone', year: '2016' },
  { id: 'm74', title: 'House Of The Dead', year: '2003' },
  { id: 'm75', title: 'House Of The Dead 2', year: '2005' },
  { id: 'm76', title: 'In Un Giorno La Fine', year: '2017' },
  { id: 'm77', title: 'Infeccion', year: '2019' },
  { id: 'm78', title: 'Isle Of The Dead', year: '2016' },
  { id: 'm79', title: 'It Stains The Sands Red', year: '2016' },
  { id: 'm80', title: 'JeruZalem', year: '2015' },
  { id: 'm81', title: 'Juan De Los Muertos', year: '2011' },
  { id: 'm82', title: 'La Horda', year: '2009' },
  { id: 'm83', title: 'La Nuit A Devore Le Monde', year: '2018' },
  { id: 'm84', title: 'Ladronas De Almas', year: '2015' },
  { id: 'm85', title: 'Land Of The Dead', year: '2005' },
  { id: 'm86', title: 'Last Ones Out', year: '2016' },
  { id: 'm87', title: 'Les Affames', year: '2017' },
  { id: 'm88', title: 'Let There Be Zombies', year: '2014' },
  { id: 'm89', title: 'Life After Beth', year: '2014' },
  { id: 'm90', title: 'Little Monsters', year: '2019' },
  { id: 'm91', title: 'Navy Seals VS Zombies', year: '2015' },
  { id: 'm92', title: 'Night Of Something Strange', year: '2015' },
  { id: 'm93', title: 'Night Of The Creeps', year: '1986' },
  { id: 'm94', title: 'Night Of The Living Dead', year: '1968' },
  { id: 'm95', title: 'Night Of The Living Deb', year: '2015' },
  { id: 'm96', title: 'Office Uprising', year: '2018' },
  { id: 'm97', title: 'Opstandelsen', year: '2010' },
  { id: 'm98', title: 'Pandemic', year: '2016' },
  { id: 'm99', title: 'Papa Soy Una Zombi', year: '2011' },
  { id: 'm100', title: 'Patients Of A Saint', year: '2019' },
  { id: 'm101', title: 'Peelers', year: '2016' },
  { id: 'm102', title: 'Pet Graveyard', year: '2019' },
  { id: 'm103', title: 'Pet Sematary', year: '1989' },
  { id: 'm104', title: 'Pet Sematary 2', year: '1992' },
  { id: 'm105', title: 'Pet Sematary Remake', year: '2019' },
  { id: 'm106', title: 'Plague', year: '2014' },
  { id: 'm107', title: 'Plan 9', year: '2015' },
  { id: 'm108', title: 'Planet Terror', year: '2007' },
  { id: 'm109', title: 'Pride And Prejudice And Zombies', year: '2016' },
  { id: 'm110', title: 'Quarantine', year: '2008' },
  { id: 'm111', title: 'Quarantine 2 Terminal', year: '2011' },
  { id: 'm112', title: 'Rampant', year: '2018' },
  { id: 'm113', title: 'Range 15', year: '2016' },
  { id: 'm114', title: 'Rape Zombie Lust Of The Dead', year: '2012' },
  { id: 'm115', title: 'Rape Zombie Lust Of The Dead 2', year: '2013' },
  { id: 'm116', title: 'Rape Zombie Lust Of The Dead 3', year: '2013' },
  { id: 'm117', title: 'Rec 1', year: '2007' },
  { id: 'm118', title: 'Rec 2', year: '2009' },
  { id: 'm119', title: 'Rec 3', year: '2012' },
  { id: 'm120', title: 'Rec 4', year: '2014' },
  { id: 'm121', title: 'Redcon 1', year: '2018' },
  { id: 'm122', title: 'Remains', year: '2011' },
  { id: 'm123', title: 'Resident Evil 1 El Huesped Maldito', year: '2002' },
  { id: 'm124', title: 'Resident Evil 2 Apocalipsis', year: '2004' },
  { id: 'm125', title: 'Resident Evil 3 Extincion', year: '2007' },
  { id: 'm126', title: 'Resident Evil 4 Ultratumba', year: '2010' },
  { id: 'm127', title: 'Resident Evil 5 Venganza', year: '2012' },
  { id: 'm128', title: 'Resident Evil 6 Capitulo Final', year: '2017' },
  { id: 'm129', title: 'Resident Evil 7 Vendetta', year: '2017' },
  { id: 'm130', title: 'Return Of The Living Dead 1', year: '1985' },
  { id: 'm131', title: 'Return Of The Living Dead 2', year: '1988' },
  { id: 'm132', title: 'Return Of The Living Dead 3', year: '1993' },
  { id: 'm133', title: 'Return Of The Living Dead 4', year: '2005' },
  { id: 'm134', title: 'Return Of The Living Dead 5', year: '2005' },
  { id: 'm135', title: 'Rise Of The Zombies', year: '2012' },
  { id: 'm136', title: 'Scouts Guide To The Zombie Apocalypse', year: '2015' },
  { id: 'm137', title: 'Seoul Station', year: '2016' },
  { id: 'm138', title: 'Shaun Of The Dead', year: '2004' },
  { id: 'm139', title: 'Siege Of The Dead', year: '2010' },
  { id: 'm140', title: 'Skeleton Key 3 The Organ Trail', year: '2011' },
  { id: 'm141', title: 'Slither La Plaga', year: '2006' },
  { id: 'm142', title: 'State Of Emergency', year: '2010' },
  { id: 'm143', title: 'Summer Camp', year: '2015' },
  { id: 'm144', title: 'Survival Of The Dead', year: '2009' },
  { id: 'm145', title: 'Swiss Army Man', year: '2016' },
  { id: 'm146', title: 'Thanatomorphose', year: '2012' },
  { id: 'm147', title: 'The Battery', year: '2012' },
  { id: 'm148', title: 'The Black Death', year: '2015' },
  { id: 'm149', title: 'The Burning Dead', year: '2015' },
  { id: 'm150', title: 'The Crazies', year: '2010' },
  { id: 'm151', title: 'The Cured', year: '2017' },
  { id: 'm152', title: 'The Dead', year: '2010' },
  { id: 'm153', title: 'The Dead 2 India', year: '2013' },
  { id: 'm154', title: 'The Demented', year: '2013' },
  { id: 'm155', title: 'The Girl With All The Gifts', year: '2016' },
  { id: 'm156', title: 'The Hive', year: '2015' },
  { id: 'm157', title: 'The Last Days On Mars', year: '2013' },
  { id: 'm158', title: 'The Revenant', year: '2009' },
  { id: 'm159', title: 'The Serpent And The Rainbow', year: '1988' },
  { id: 'm160', title: 'The Walking Deceased', year: '2015' },
  { id: 'm161', title: 'The Zombie King', year: '2013' },
  { id: 'm162', title: 'Tokyo Living Dead Idol', year: '2018' },
  { id: 'm163', title: 'Train To Busan', year: '2016' },
  { id: 'm164', title: 'Train To Busan 2 Peninsula', year: '2020' },
  { id: 'm165', title: 'Undead', year: '2003' },
  { id: 'm166', title: 'Virus', year: '1980' },
  { id: 'm167', title: 'Walking Dead In The West', year: '2016' },
  { id: 'm168', title: 'War Of The Dead', year: '2011' },
  { id: 'm169', title: 'Warm Bodies', year: '2013' },
  { id: 'm170', title: 'Wasteland', year: '2015' },
  { id: 'm171', title: 'We All Fall Down', year: '2016' },
  { id: 'm172', title: 'World War Z', year: '2013' },
  { id: 'm173', title: 'Yummy', year: '2019' },
  { id: 'm174', title: 'Zombeavers', year: '2014' },
  { id: 'm175', title: 'Zombi Child', year: '2019' },
  { id: 'm176', title: 'Zombie At 17', year: '2018' },
  { id: 'm177', title: 'Zombie Fight Club', year: '2014' },
  { id: 'm178', title: 'Zombie Hunter', year: '2013' },
  { id: 'm179', title: 'Zombie Massacre', year: '2013' },
  { id: 'm180', title: 'Zombie Massacre 2 Reich Of The Dead', year: '2015' },
  { id: 'm181', title: 'Zombie Ninjas VS Black Ops', year: '2015' },
  { id: 'm182', title: 'Zombie Party', year: '-' },
  { id: 'm183', title: 'Zombie Town', year: '-' },
  { id: 'm184', title: 'Zombie World 2', year: '2018' },
  { id: 'm185', title: 'Zombieland', year: '2009' },
  { id: 'm186', title: 'Zombieland Double Tap', year: '2019' },
  { id: 'm187', title: 'Zombies', year: '2017' },
  { id: 'm188', title: 'Zombies of Mass Destruction', year: '-' },
  { id: 'm189', title: 'Zombieworld', year: '2015' },
  { id: 'm190', title: 'Zoo', year: '2018' },
  { id: 'm191', title: 'Zoombies', year: '2016' },
];

const seriesDB = [
  { id: 's1', title: 'Black Summer' },
  { id: 's2', title: 'Daybreak' },
  { id: 's3', title: 'Dead Set' },
  { id: 's4', title: 'I Zombie' },
  { id: 's5', title: 'Kingdom' },
  { id: 's6', title: 'Plantas Vs Zombies' },
  { id: 's7', title: 'Reality Z' },
  { id: 's8', title: 'The Walking Dead' },
  { id: 's9', title: 'Z Nation' },
];

const animesDB = [
  { id: 'a1', title: 'Gakkou Gurashi!' },
  { id: 'a2', title: 'Highschool of the Dead' },
  { id: 'a3', title: 'Kore wa Zombie Desu ka?' },
  { id: 'a4', title: 'Koutetsujou no Kabaneri' },
  { id: 'a5', title: 'Shikabane Hime: Aka' },
  { id: 'a6', title: 'Zombieland Saga' },
];

const comicsDB = [
  { id: 'c1', title: 'The Walking Dead' },
];

const cortosDB = [
  { id: 'co1', title: 'Cargo' },
  { id: 'co2', title: 'Hope' },
  { id: 'co3', title: 'Make It Until Morning' },
  { id: 'co4', title: 'Soy un Zombie' },
  { id: 'co5', title: 'Still' },
  { id: 'co6', title: 'Zombie Doom' },
];

// ============================================
// CONSTRUCTOR AUTOMÁTICO DE LA BASE DE DATOS
// (No necesitas escribir todo manualmente)
// ============================================

function buildDatabase() {
  const db = [];
  
  // Procesar libros
  librosDB.forEach(item => {
    db.push({
      id: item.id,
      title: item.title,
      type: 'libro',
      typeLabel: 'Libro',
      author: item.author || '-',
      year: null,
      img: 'img/libros/portada-generica.jpg',
      url: getAlphaFile(item.title, 'libros')
    });
  });
  
  // Procesar películas
  peliculasDB.forEach(item => {
    db.push({
      id: item.id,
      title: item.title,
      type: 'pelicula',
      typeLabel: 'Película',
      author: null,
      year: item.year || '-',
      img: 'img/peliculas/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.jpg',
      url: getAlphaFile(item.title, 'peliculas')
    });
  });
  
  // Procesar series
  seriesDB.forEach(item => {
    db.push({
      id: item.id,
      title: item.title,
      type: 'serie',
      typeLabel: 'Serie',
      author: null,
      year: null,
      img: 'img/series/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.jpg',
      url: 'series/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.html'
    });
  });
  
  // Procesar animes
  animesDB.forEach(item => {
    db.push({
      id: item.id,
      title: item.title,
      type: 'anime',
      typeLabel: 'Anime',
      author: null,
      year: null,
      img: 'img/animes/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.png',
      url: 'animes/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.html'
    });
  });
  
  // Procesar cómics
  comicsDB.forEach(item => {
    db.push({
      id: item.id,
      title: item.title,
      type: 'comic',
      typeLabel: 'Cómic',
      author: null,
      year: null,
      img: 'img/comics/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.jpg',
      url: 'comics/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '-Comic.html'
    });
  });
  
  // Procesar cortometrajes
  cortosDB.forEach(item => {
    db.push({
      id: item.id,
      title: item.title,
      type: 'cortometraje',
      typeLabel: 'Cortometraje',
      author: null,
      year: null,
      img: 'https://via.placeholder.com/300x400/333/FFD700?text=' + encodeURIComponent(item.title),
      url: 'cortometrajes/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.html'
    });
  });
  
  return db;
}

// Construir la base de datos con manejo de errores
let contentDatabase = [];
try {
  contentDatabase = buildDatabase();
  console.log('✅ Base de datos construida correctamente');
} catch (error) {
  console.error('❌ Error al construir la base de datos:', error);
  contentDatabase = [];
}

console.log('📊 Total de ítems:', contentDatabase.length);
console.log('📚 Libros:', contentDatabase.filter(i => i.type === 'libro').length);
console.log('🎬 Películas:', contentDatabase.filter(i => i.type === 'pelicula').length);
console.log('📺 Series:', contentDatabase.filter(i => i.type === 'serie').length);
console.log('🎌 Animes:', contentDatabase.filter(i => i.type === 'anime').length);

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentFilter = 'all';
let currentQuery = '';

// ============================================
// FUNCIONES DE NAVEGACIÓN
// ============================================

function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  if (window.scrollY > 300) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
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
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
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
  if (!query || !text) return text || '';
  try {
    const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  } catch (e) {
    return text;
  }
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
  const grid = document.getElementById('resultsGrid');
  const emptyEl = document.getElementById('searchEmpty');
  const noResultsEl = document.getElementById('noResults');
  const countEl = document.getElementById('searchCount');
  const noResultsText = document.getElementById('noResultsText');
  
  if (!grid) {
    console.error('❌ No se encontró resultsGrid');
    return;
  }
  
  // Filtrar
  let filtered = contentDatabase;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(item => item.type === currentFilter);
  }
  
  if (currentQuery) {
    filtered = filtered.filter(item => {
      const titleMatch = item.title && item.title.toLowerCase().includes(currentQuery);
      const authorMatch = item.author && item.author.toLowerCase().includes(currentQuery);
      return titleMatch || authorMatch;
    });
  }
  
  // Actualizar contadores
  updateFilterCounts();
  
  if (countEl) {
    const total = currentQuery ? filtered.length : contentDatabase.length;
    countEl.textContent = '📊 ' + total + ' resultado' + (total !== 1 ? 's' : '') + ' encontrado' + (total !== 1 ? 's' : '');
  }
  
  grid.innerHTML = '';
  
  // Estado inicial
  if (!currentQuery && currentFilter === 'all') {
    if (emptyEl) emptyEl.style.display = 'block';
    if (noResultsEl) noResultsEl.style.display = 'none';
    grid.style.display = 'none';
    return;
  }
  
  if (emptyEl) emptyEl.style.display = 'none';
  
  // Sin resultados
  if (filtered.length === 0) {
    if (noResultsEl) noResultsEl.style.display = 'block';
    if (noResultsText) {
      noResultsText.textContent = 'No se encontró "' + currentQuery + '" en ' + (currentFilter === 'all' ? 'ninguna sección' : 'la sección de ' + currentFilter + 's');
    }
    grid.style.display = 'none';
    return;
  }
  
  // Mostrar resultados
  if (noResultsEl) noResultsEl.style.display = 'none';
  grid.style.display = 'grid';
  
  filtered.forEach((item, index) => {
    try {
      const card = document.createElement('a');
      card.className = 'result-card';
      card.href = item.url || '#';
      card.style.animationDelay = (index * 0.03) + 's';
      
      const extraInfo = item.author ? ' • ' + item.author : (item.year ? ' (' + item.year + ')' : '');
      
      const fallbackImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23333" width="100" height="100"/><text x="50" y="55" font-size="40" text-anchor="middle" fill="%23FFD700">🧟</text></svg>';
      
      card.innerHTML = '<img src="' + (item.img || fallbackImg) + '" alt="' + (item.title || '') + '" class="result-card-img" onerror="this.src=\'' + fallbackImg + '\'">' +
        '<div class="result-card-overlay"></div>' +
        '<div class="result-card-content">' +
          '<div class="result-card-title">' + highlightText(item.title, currentQuery) + highlightText(extraInfo, currentQuery) + '</div>' +
          '<div class="result-card-type">' + (item.typeLabel || '') + '</div>' +
        '</div>';
      
      grid.appendChild(card);
    } catch (error) {
      console.error('❌ Error al crear tarjeta:', item, error);
    }
  });
}

function updateFilterCounts() {
  const types = ['libro', 'pelicula', 'serie', 'anime', 'comic', 'cortometraje', 'relato', 'juego'];
  
  let totalFiltered = contentDatabase;
  if (currentQuery) {
    totalFiltered = totalFiltered.filter(item => 
      (item.title && item.title.toLowerCase().includes(currentQuery)) ||
      (item.author && item.author.toLowerCase().includes(currentQuery))
    );
  }
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = totalFiltered.length;
  
  types.forEach(type => {
    let filtered = contentDatabase.filter(item => item.type === type);
    if (currentQuery) {
      filtered = filtered.filter(item => 
        (item.title && item.title.toLowerCase().includes(currentQuery)) ||
        (item.author && item.author.toLowerCase().includes(currentQuery))
      );
    }
    const countEl = document.getElementById('count-' + type);
    if (countEl) countEl.textContent = filtered.length;
  });
}

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
  console.log('🚀 Inicializando búsqueda...');
  
  window.addEventListener('scroll', handleScroll);
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    searchInput.focus();
    console.log('✅ Input configurado');
  }
  
  updateFilterCounts();
  renderResults();
  
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
  
  console.log('✅ Búsqueda lista');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
