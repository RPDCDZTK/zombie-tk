/* ============================================
   ZOMBIE-TK - search.js (VERSIÓN MÓVIL CON DIAGNÓSTICO)
   ============================================ */

// Panel de diagnóstico visible en pantalla
function showDebug(message, type) {
  let debugPanel = document.getElementById('debugPanel');
  if (!debugPanel) {
    debugPanel = document.createElement('div');
    debugPanel.id = 'debugPanel';
    debugPanel.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-height: 200px;
      overflow-y: auto;
      background: rgba(0,0,0,0.95);
      color: #0f0;
      font-family: monospace;
      font-size: 11px;
      padding: 10px;
      z-index: 99999;
      border-bottom: 2px solid #0f0;
      display: none;
    `;
    document.body.appendChild(debugPanel);
    
    // Botón para mostrar/ocultar
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '🔍 DEBUG';
    toggleBtn.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #ff0000;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 20px;
      font-weight: bold;
      z-index: 999999;
      cursor: pointer;
    `;
    toggleBtn.onclick = function() {
      debugPanel.style.display = debugPanel.style.display === 'none' ? 'block' : 'none';
    };
    document.body.appendChild(toggleBtn);
  }
  
  const colors = { error: '#ff4444', warn: '#ffaa00', info: '#00ff00', success: '#00ff88' };
  const color = colors[type] || '#fff';
  const time = new Date().toLocaleTimeString();
  debugPanel.innerHTML += `<div style="color:${color};margin:2px 0;">[${time}] ${message}</div>`;
  debugPanel.scrollTop = debugPanel.scrollHeight;
  console.log(`[${type.toUpperCase()}] ${message}`);
}

// Función auxiliar para archivos alfabéticos
function getAlphaFile(name, type) {
  try {
    if (!name) return type + '/0-9.html';
    const firstChar = name.charAt(0).toUpperCase();
    let range = '0-9';
    
    if (/[A-B]/.test(firstChar)) range = 'A-B';
    else if (/[C-D]/.test(firstChar)) range = 'C-D';
    else if (/[E-F]/.test(firstChar)) range = 'E-F';
    else if (/[G-H]/.test(firstChar)) range = 'G-H';
    else if (/[I-J]/.test(firstChar)) range = 'I-J';
    else if (/[K-L]/.test(firstChar)) range = 'K-L';
    else if (/[M-N]/.test(firstChar)) range = 'M-N';
    else if (/[O-P]/.test(firstChar)) range = 'O-P';
    else if (/[Q-R]/.test(firstChar)) range = 'Q-R';
    else if (/[S-T]/.test(firstChar)) range = 'S-T';
    else if (/[U-V]/.test(firstChar)) range = 'U-V';
    else if (/[W-X]/.test(firstChar)) range = 'W-X';
    else if (/[Y-Z]/.test(firstChar)) range = 'Y-Z';
    
    return type + '/' + range + '.html';
  } catch (e) {
    showDebug('Error en getAlphaFile: ' + e.message, 'error');
    return type + '/0-9.html';
  }
}

// ============================================
// BASE DE DATOS SEPARADA (más fácil de mantener)
// ============================================

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
// CONSTRUCTOR DE BASE DE DATOS
// ============================================

function buildDatabase() {
  const db = [];
  
  try {
    peliculasDB.forEach(item => {
      db.push({
        id: item.id,
        title: item.title,
        type: 'pelicula',
        typeLabel: 'Película',
        year: item.year || '-',
        img: 'img/peliculas/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.jpg',
        url: getAlphaFile(item.title, 'peliculas')
      });
    });
    showDebug('✅ Películas cargadas: ' + peliculasDB.length, 'success');
  } catch (e) {
    showDebug('❌ Error en películas: ' + e.message, 'error');
  }
  
  try {
    seriesDB.forEach(item => {
      db.push({
        id: item.id,
        title: item.title,
        type: 'serie',
        typeLabel: 'Serie',
        img: 'img/series/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.jpg',
        url: 'series/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.html'
      });
    });
    showDebug('✅ Series cargadas: ' + seriesDB.length, 'success');
  } catch (e) {
    showDebug('❌ Error en series: ' + e.message, 'error');
  }
  
  try {
    animesDB.forEach(item => {
      db.push({
        id: item.id,
        title: item.title,
        type: 'anime',
        typeLabel: 'Anime',
        img: 'img/animes/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.png',
        url: 'animes/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.html'
      });
    });
    showDebug('✅ Animes cargados: ' + animesDB.length, 'success');
  } catch (e) {
    showDebug('❌ Error en animes: ' + e.message, 'error');
  }
  
  try {
    comicsDB.forEach(item => {
      db.push({
        id: item.id,
        title: item.title,
        type: 'comic',
        typeLabel: 'Cómic',
        img: 'img/comics/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.jpg',
        url: 'comics/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '-Comic.html'
      });
    });
    showDebug('✅ Cómics cargados: ' + comicsDB.length, 'success');
  } catch (e) {
    showDebug('❌ Error en cómics: ' + e.message, 'error');
  }
  
  try {
    cortosDB.forEach(item => {
      db.push({
        id: item.id,
        title: item.title,
        type: 'cortometraje',
        typeLabel: 'Cortometraje',
        img: 'https://via.placeholder.com/300x400/333/FFD700?text=' + encodeURIComponent(item.title),
        url: 'cortometrajes/' + item.title.replace(/[^a-zA-Z0-9]/g, '-') + '.html'
      });
    });
    showDebug('✅ Cortos cargados: ' + cortosDB.length, 'success');
  } catch (e) {
    showDebug('❌ Error en cortos: ' + e.message, 'error');
  }
  
  return db;
}

// Construir base de datos
let contentDatabase = [];
try {
  contentDatabase = buildDatabase();
  showDebug('📊 Total de ítems: ' + contentDatabase.length, 'success');
} catch (error) {
  showDebug('❌ Error fatal: ' + error.message, 'error');
  contentDatabase = [];
}

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
    const regex = new RegExp('(' + query.replace(/[.*+?^${}(
