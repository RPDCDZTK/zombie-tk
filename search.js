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
  // 🎬 Agrega tus películas aquí
  { id: 'm1', title: '13 Eerie', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/13-Eerie-2013.jpg', url: getAlphaFile('13', 'peliculas') },
  { id: 'm2', title: '28 Days Later', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/28-Days-Later-2002.jpg', url: getAlphaFile('28', 'peliculas') },
  { id: 'm3', title: '28 Weeks Later', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/28-Weeks-Later-2007.jpg', url: getAlphaFile('28', 'peliculas') },
  { id: 'm4', title: 'Aj Zombies', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Aj-Zombies-2017.jpg', url: getAlphaFile('Aj', 'peliculas') },
  { id: 'm5', title: 'An Accidental Zombie', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/An-Accidental-Zombie-2017.jpg', url: getAlphaFile('An', 'peliculas') },
  { id: 'm6', title: 'Anger Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Anger-Of-The-Dead-2014.jpg', url: getAlphaFile('Anger', 'peliculas') },
  { id: 'm7', title: 'Anna And The Apocalypse', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Anna-And-The-Apocalypse-2018.jpg', url: getAlphaFile('Anna', 'peliculas') },
  { id: 'm8', title: 'Apocalipsis Zombie - Origenes', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Apocalipsis-Zombie-Origenes.jpg', url: getAlphaFile('Apocalipsis', 'peliculas') },
  { id: 'm9', title: 'Attack Of The Lederhosen Zombies', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Attack-Of-The-Lederhosen-Zombies-2016.jpg', url: getAlphaFile('Attack', 'peliculas') },
  { id: 'm10', title: 'Black Death', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/Black-Death-2010.jpg', url: getAlphaFile('Black', 'peliculas') },
  { id: 'm11', title: 'Blood Quantum', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Blood-Quantum-2019.jpg', url: getAlphaFile('Blood', 'peliculas') },
  { id: 'm12', title: 'Bombshell Bloodbath', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Bombshell-Bloodbath-2014.jpg', url: getAlphaFile('Bombshell', 'peliculas') },
  { id: 'm13', title: 'Braindead', type: 'pelicula', typeLabel: 'Película', year: '1992', img: 'img/peliculas/Braindead-1992.jpg', url: getAlphaFile('Braindead', 'peliculas') },
  { id: 'm14', title: 'Breakdown Lane', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Breakdown-Lane-2017.jpg', url: getAlphaFile('Breakdown', 'peliculas') },
  { id: 'm15', title: 'Bunks', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Bunks-2013.jpg', url: getAlphaFile('Bunks', 'peliculas') },
  { id: 'm16', title: 'Burying The Ex', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Burying-The-Ex-2014.jpg', url: getAlphaFile('Burying', 'peliculas') },
  { id: 'm17', title: 'Cabin Fever', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/Cabin-Fever-2002.jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm18', title: 'Cabin Fever 2 Spring Fever', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Cabin-Fever-2-Spring-Fever-2009.jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm19', title: 'Cabin Fever 3 Patient Zero', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Cabin-Fever-3-Patient-Zero-2014.jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm20', title: 'Cabin Fever 4', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Cabin-Fever-4-2016.jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm21', title: 'Cargo', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Cargo-2017.jpg', url: getAlphaFile('Cargo', 'peliculas') },
  { id: 'm22', title: 'Castores Zombies', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Castores-Zombies.jpg', url: getAlphaFile('Castores', 'peliculas') },
  { id: 'm23', title: 'Cell', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Cell-2016.jpg', url: getAlphaFile('Cell', 'peliculas') },
  { id: 'm24', title: 'Chernobyl Diaries', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Chernobyl-Diaries-2012.jpg', url: getAlphaFile('Chernobyl', 'peliculas') },
  { id: 'm25', title: 'Chrysalis', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Chrysalis-2014.jpg', url: getAlphaFile('Chrysalis', 'peliculas') },
  { id: 'm26', title: 'Code Red', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Code-Red-2013.jpg', url: getAlphaFile('Code', 'peliculas') },
  { id: 'm27', title: 'Contracted', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Contracted-2013.jpg', url: getAlphaFile('Contracted', 'peliculas') },
  { id: 'm28', title: 'Contracted Phase II', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Contracted-Phase-II-2015.jpg', url: getAlphaFile('Contracted', 'peliculas') },
  { id: 'm29', title: 'Curas Zombies en Azul', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Curas-Zombies-en-Azul.jpg', url: getAlphaFile('Curas', 'peliculas') },
  { id: 'm30', title: 'Dance Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2008', img: 'img/peliculas/Dance-Of-The-Dead-2008.jpg', url: getAlphaFile('Dance', 'peliculas') },
  { id: 'm31', title: 'Darkest Day', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Darkest-Day-2015.jpg', url: getAlphaFile('Darkest', 'peliculas') },
  { id: 'm32', title: 'Dawn Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '1978', img: 'img/peliculas/Dawn-Of-The-Dead-1978.jpg', url: getAlphaFile('Dawn', 'peliculas') },
  { id: 'm33', title: 'Dawn Of The Dead Remake', type: 'pelicula', typeLabel: 'Película', year: '2004', img: 'img/peliculas/Dawn-Of-The-Dead-Remake-2004.jpg', url: getAlphaFile('Dawn', 'peliculas') },
  { id: 'm34', title: 'Day Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '1985', img: 'img/peliculas/Day-Of-The-Dead-1985.jpg', url: getAlphaFile('Day', 'peliculas') },
  { id: 'm35', title: 'Day Of The Dead Bloodline Remake', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Day-Of-The-Dead-Bloodline-Remake-2018.jpg', url: getAlphaFile('Day', 'peliculas') },
  { id: 'm36', title: 'Daylights End', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Daylights-End-2016.jpg', url: getAlphaFile('Daylights', 'peliculas') },
  { id: 'm37', title: 'Dead 7', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Dead-7-2016.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm38', title: 'Dead Before Dawn', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Dead-Before-Dawn-2012.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm39', title: 'Dead Heat', type: 'pelicula', typeLabel: 'Película', year: '1998', img: 'img/peliculas/Dead-Heat-1998.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm40', title: 'Dead Rising 1 Watchtower', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Dead-Rising-1-Watchtower-2015.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm41', title: 'Dead Rising 2 Endgame', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Dead-Rising-2-Endgame-2016.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm42', title: 'Dead Shack', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Dead-Shack-2017.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm43', title: 'Dead Snow 1', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Dead-Snow-1-2009.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm44', title: 'Dead Snow 2', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Dead-Snow-2-2014.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm45', title: 'Dead Trigger', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Dead-Trigger-2017.jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm46', title: 'Deadgirl', type: 'pelicula', typeLabel: 'Película', year: '2008', img: 'img/peliculas/Deadgirl-2008.jpg', url: getAlphaFile('Deadgirl', 'peliculas') },
  { id: 'm47', title: 'DeadHeads', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/DeadHeads-2011.jpg', url: getAlphaFile('DeadHeads', 'peliculas') },
  { id: 'm48', title: 'Deadsight', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Deadsight-2018.jpg', url: getAlphaFile('Deadsight', 'peliculas') },
  { id: 'm49', title: 'Demoni', type: 'pelicula', typeLabel: 'Película', year: '1985', img: 'img/peliculas/Demoni-1985.jpg', url: getAlphaFile('Demoni', 'peliculas') },
  { id: 'm50', title: 'Demoni 2 Lincubo Ritorna', type: 'pelicula', typeLabel: 'Película', year: '1986', img: 'img/peliculas/Demoni-2-Lincubo-Ritorna-1986.jpg', url: getAlphaFile('Demoni', 'peliculas') },
  { id: 'm51', title: 'Demoni 3 Black Demons', type: 'pelicula', typeLabel: 'Película', year: '1991', img: 'img/peliculas/Demoni-3-Black-Demons-1991.jpg', url: getAlphaFile('Demoni', 'peliculas') },
  { id: 'm52', title: 'Devils Tower', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Devils-Tower-2014.jpg', url: getAlphaFile('Devils', 'peliculas') },
  { id: 'm53', title: 'Diary Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/Diary-Of-The-Dead-2007.jpg', url: getAlphaFile('Diary', 'peliculas') },
  { id: 'm54', title: 'Disaster LA', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Disaster-LA-2014.jpg', url: getAlphaFile('Disaster', 'peliculas') },
  { id: 'm55', title: 'Dixie And The Zombi Rebellion', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Dixie-And-The-Zombi-Rebellion-2014.jpg', url: getAlphaFile('Dixie', 'peliculas') },
  { id: 'm56', title: 'Dont Grow Up', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Dont-Grow-Up-2015.jpg', url: getAlphaFile('Dont', 'peliculas') },
  { id: 'm57', title: 'El dia de los muertos', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/El-dia-de-los-muertos.jpg', url: getAlphaFile('El', 'peliculas') },
  { id: 'm58', title: 'Endzeit Ever After', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Endzeit-Ever-After-2018.jpg', url: getAlphaFile('Endzeit', 'peliculas') },
  { id: 'm59', title: 'Estado de Emergencia', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Estado-de-Emergencia.jpg', url: getAlphaFile('Estado', 'peliculas') },
  { id: 'm60', title: 'Evil Dead 1', type: 'pelicula', typeLabel: 'Película', year: '1981', img: 'img/peliculas/Evil-Dead-1-1981.jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm61', title: 'Evil Dead 2', type: 'pelicula', typeLabel: 'Película', year: '1987', img: 'img/peliculas/Evil-Dead-2-1987.jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm62', title: 'Evil Dead 3', type: 'pelicula', typeLabel: 'Película', year: '1992', img: 'img/peliculas/Evil-Dead-3-1992.jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm63', title: 'Evil Dead Remake', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Evil-Dead-Remake-2013.jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm64', title: 'Exit Humanity', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Exit-Humanity-2011.jpg', url: getAlphaFile('Exit', 'peliculas') },
  { id: 'm65', title: 'Extincion', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Extincion-2015.jpg', url: getAlphaFile('Extincion', 'peliculas') },
  { id: 'm66', title: 'Feral', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Feral-2018.jpg', url: getAlphaFile('Feral', 'peliculas') },
  { id: 'm67', title: 'Freaks Of Nature', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Freaks-Of-Nature-2015.jpg', url: getAlphaFile('Freaks', 'peliculas') },
  { id: 'm68', title: 'GallowWalkers', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/GallowWalkers-2013.jpg', url: getAlphaFile('GallowWalkers', 'peliculas') },
  { id: 'm69', title: 'Generation Z', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Generation-Z-2015.jpg', url: getAlphaFile('Generation', 'peliculas') },
  { id: 'm70', title: 'Goal Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Goal-Of-The-Dead-2014.jpg', url: getAlphaFile('Goal', 'peliculas') },
  { id: 'm71', title: 'Halley', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Halley-2012.jpg', url: getAlphaFile('Halley', 'peliculas') },
  { id: 'm72', title: 'Hard Line Dead Rush', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Hard-Line-Dead-Rush-2016.jpg', url: getAlphaFile('Hard', 'peliculas') },
  { id: 'm73', title: 'Here Alone', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Here-Alone-2016.jpg', url: getAlphaFile('Here', 'peliculas') },
  { id: 'm74', title: 'House Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2003', img: 'img/peliculas/House-Of-The-Dead-2003.jpg', url: getAlphaFile('House', 'peliculas') },
  { id: 'm75', title: 'House Of The Dead 2', type: 'pelicula', typeLabel: 'Película', year: '2005', img: 'img/peliculas/House-Of-The-Dead-2-2005.jpg', url: getAlphaFile('House', 'peliculas') },
  { id: 'm76', title: 'In Un Giorno La Fine', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/In-Un-Giorno-La-Fine-2017.jpg', url: getAlphaFile('In', 'peliculas') },
  { id: 'm77', title: 'Infección', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Infeccion-2019.jpg', url: getAlphaFile('Infeccion', 'peliculas') },
  { id: 'm78', title: 'Isle Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Isle-Of-The-Dead-2016.jpg', url: getAlphaFile('Isle', 'peliculas') },
  { id: 'm79', title: 'It Stains The Sands Red', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/It-Stains-The-Sands-Red-2016.jpg', url: getAlphaFile('It', 'peliculas') },
  { id: 'm80', title: 'JeruZalem', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/JeruZalem-2015.jpg', url: getAlphaFile('JeruZalem', 'peliculas') },
  { id: 'm81', title: 'Juan De Los Muertos', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Juan-De-Los-Muertos-2011.jpg', url: getAlphaFile('Juan', 'peliculas') },
  { id: 'm82', title: 'La Horda', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/La-Horda-2009.jpg', url: getAlphaFile('La', 'peliculas') },
  { id: 'm83', title: 'La Nuit A Devore Le Monde', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/La-Nuit-A-Devore-Le-Monde-2018.jpg', url: getAlphaFile('La', 'peliculas') },
  { id: 'm84', title: 'Ladronas De Almas', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Ladronas-De-Almas-2015.jpg', url: getAlphaFile('Ladronas', 'peliculas') },
  { id: 'm85', title: 'Land Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2005', img: 'img/peliculas/Land-Of-The-Dead-2005.jpg', url: getAlphaFile('Land', 'peliculas') },
  { id: 'm86', title: 'Last Ones Out', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Last-Ones-Out-2016.jpg', url: getAlphaFile('Last', 'peliculas') },
  { id: 'm87', title: 'Les Affames', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Les-Affames-2017.jpg', url: getAlphaFile('Les', 'peliculas') },
  { id: 'm88', title: 'Let There Be Zombies', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Let-There-Be-Zombies-2014.jpg', url: getAlphaFile('Let', 'peliculas') },
  { id: 'm89', title: 'Life After Beth', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Life-After-Beth-2014.jpg', url: getAlphaFile('Life', 'peliculas') },
  { id: 'm90', title: 'Little Monsters', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Little-Monsters-2019.jpg', url: getAlphaFile('Little', 'peliculas') },
  { id: 'm91', title: 'Navy Seals VS Zombies', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Navy-Seals-VS-Zombies-2015.jpg', url: getAlphaFile('Navy', 'peliculas') },
  { id: 'm92', title: 'Night Of Something Strange', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Night-Of-Something-Strange-2015.jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm93', title: 'Night Of The Creeps', type: 'pelicula', typeLabel: 'Película', year: '1986', img: 'img/peliculas/Night-Of-The-Creeps-1986.jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm94', title: 'Night Of The Living Dead', type: 'pelicula', typeLabel: 'Película', year: '1968', img: 'img/peliculas/Night-Of-The-Living-Dead-1968.jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm95', title: 'Night Of The Living Deb', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Night-Of-The-Living-Deb-2015.jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm96', title: 'Office Uprising', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Office-Uprising-2018.jpg', url: getAlphaFile('Office', 'peliculas') },
  { id: 'm97', title: 'Opstandelsen', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/Opstandelsen-2010.jpg', url: getAlphaFile('Opstandelsen', 'peliculas') },
  { id: 'm98', title: 'Pandemic', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Pandemic-2016.jpg', url: getAlphaFile('Pandemic', 'peliculas') },
  { id: 'm99', title: 'Papa Soy Una Zombi', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Papa-Soy-Una-Zombi-2011.jpg', url: getAlphaFile('Papa', 'peliculas') },
  { id: 'm100', title: 'Patients Of A Saint', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Patients-Of-A-Saint-2019.jpg', url: getAlphaFile('Patients', 'peliculas') },
  { id: 'm101', title: 'Peelers', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Peelers-2016.jpg', url: getAlphaFile('Peelers', 'peliculas') },
  { id: 'm102', title: 'Pet Graveyard', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Pet-Graveyard-2019.jpg', url: getAlphaFile('Pet', 'peliculas') },
  { id: 'm103', title: 'Pet Sematary', type: 'pelicula', typeLabel: 'Película', year: '1989', img: 'img/peliculas/Pet-Sematary-1989.jpg', url: getAlphaFile('Pet', 'peliculas') },
  { id: 'm104', title: 'Pet Sematary 2', type: 'pelic
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
