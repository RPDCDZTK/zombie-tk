/* ============================================
   ZOMBIE-TK - Base de Datos Central (Parte 1 de 3)
   Libros, Películas, Series y Animes
   ============================================ */

const ZOMBIE_DB = {
  
  // ============================================
  // 📚 LIBROS
  // ============================================
  libros: [
    { id: 'b1', title: '#Spanishinfection', author: 'Tomás Haya', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/0-9.html' },
    { id: 'b2', title: '99.Z', author: 'Jordi Llavoré', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/0-9.html' },
    { id: 'b3', title: '1936Z. La Guerra Civil zombi', author: 'Javier Cosnava', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/0-9.html' },
    { id: 'b4', title: 'Afuera Estan Los Zombies', author: 'Santiago Repetto', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b5', title: 'Ahora el Silencio', author: 'Luis Martínez Vallés', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b6', title: 'American Zombie', author: 'Miguel Barqueros Gonnet', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b7', title: 'Antidoto', author: 'Jeff Carlson', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b8', title: 'Antirresurreccion', author: 'Juan Ramon Biedma', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b9', title: 'Antologia Z - Volumen 1', author: 'Varios autores', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b10', title: 'Apocalipsis Z - Tomo 1', author: 'Manel Loureiro', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html', featured: true },
    { id: 'b11', title: 'Guerra Mundial Z', author: 'Max Brooks', year: '2006', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b12', title: 'The Walking Dead - El Gobernador', author: 'Kirkman', year: '2014', img: 'img/libros/portada-generica.jpg', url: 'libros/S-T.html' },
    { id: 'b13', title: 'Zombie - Guia de supervivencia', author: 'Max Brooks', year: '2003', img: 'img/libros/portada-generica.jpg', url: 'libros/Y-Z.html' },
    { id: 'b14', title: 'Soy leyenda', author: 'Richard Matheson', year: '1954', img: 'img/libros/portada-generica.jpg', url: 'libros/S-T.html' },
    { id: 'b15', title: 'Cell', author: 'Stephen King', year: '2006', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    // 👇 AGREGA MÁS LIBROS AQUÍ 👇
  ],

  // ============================================
  // 🎬 PELÍCULAS
  // ============================================
  peliculas: [
    { id: 'm1', title: '28 Days Later', year: '2002', img: 'img/peliculas/28-Days-Later.jpg', url: 'peliculas/0-9.html' },
    { id: 'm2', title: '28 Weeks Later', year: '2007', img: 'img/peliculas/28-Weeks-Later.jpg', url: 'peliculas/0-9.html' },
    { id: 'm3', title: 'Dawn Of The Dead', year: '1978', img: 'img/peliculas/Dawn-Of-The-Dead.jpg', url: 'peliculas/C-D.html' },
    { id: 'm4', title: 'Night Of The Living Dead', year: '1968', img: 'img/peliculas/Night-Of-The-Living-Dead.jpg', url: 'peliculas/M-N.html' },
    { id: 'm5', title: 'Resident Evil 1 El Huésped Maldito', year: '2002', img: 'img/peliculas/Resident-Evil-1.jpg', url: 'peliculas/Q-R.html' },
    { id: 'm6', title: 'Shaun Of The Dead', year: '2004', img: 'img/peliculas/Shaun-Of-The-Dead.jpg', url: 'peliculas/S-T.html' },
    { id: 'm7', title: 'World War Z', year: '2013', img: 'img/peliculas/World-War-Z.jpg', url: 'peliculas/W-X.html', featured: true },
    { id: 'm8', title: 'Zombieland', year: '2009', img: 'img/peliculas/Zombieland.jpg', url: 'peliculas/Y-Z.html' },
    { id: 'm9', title: 'Train To Busan', year: '2016', img: 'img/peliculas/Train-To-Busan.jpg', url: 'peliculas/S-T.html' },
    { id: 'm10', title: 'Evil Dead 1', year: '1981', img: 'img/peliculas/Evil-Dead-1.jpg', url: 'peliculas/E-F.html' },
    { id: 'm11', title: 'Cargo', year: '2017', img: 'img/peliculas/Cargo.jpg', url: 'peliculas/C-D.html' },
    { id: 'm12', title: 'Rec 1', year: '2007', img: 'img/peliculas/Rec-1.jpg', url: 'peliculas/Q-R.html' },
    // 👇 AGREGA MÁS PELÍCULAS AQUÍ 👇
  ],

  // ============================================
  // 📺 SERIES
  // ============================================
  series: [
    { id: 's1', title: 'Black Summer', year: '2019', img: 'img/series/Black-Summer.jpg', url: 'series/Black-Summer.html' },
    { id: 's2', title: 'Daybreak', year: '2019', img: 'img/series/Daybreak.png', url: 'series/Daybreak.html' },
    { id: 's3', title: 'Dead Set', year: '2008', img: 'img/series/Dead-Set.jpg', url: 'series/Dead-Set.html' },
    { id: 's4', title: 'I Zombie', year: '2015', img: 'img/series/I-Zombie.jpg', url: 'series/I-Zombie.html' },
    { id: 's5', title: 'Kingdom', year: '2019', img: 'img/series/kingdom.jpg', url: 'series/Kingdom.html' },
    { id: 's6', title: 'Plantas Vs Zombies', year: '2020', img: 'img/series/Plantas-Vs-Zombies.png', url: 'series/Plantas-Vs-Zombies.html' },
    { id: 's7', title: 'Reality Z', year: '2020', img: 'img/series/Reality-Z.png', url: 'series/Reality-Z.html' },
    { id: 's8', title: 'The Walking Dead', year: '2010', img: 'img/series/The-Walking-Dead.jpg', url: 'series/The-Walking-Dead.html', featured: true },
    { id: 's9', title: 'Z Nation', year: '2014', img: 'img/series/Z-Nation.png', url: 'series/Z-Nation.html' },
    { id: 's10', title: 'All of Us Are Dead', year: '2022', img: 'img/series/All-of-Us-Are-Dead.jpg', url: 'series/All-of-Us-Are-Dead.html' },
    { id: 's11', title: 'Marvel Zombies', year: '2024', img: 'img/series/Marvel-Zombies.jpg', url: 'series/Marvel-Zombies.html' },
    { id: 's12', title: 'Soldados o Zombies', year: '2023', img: 'img/series/Soldados-o-Zombies.jpg', url: 'series/Soldados-o-Zombies.html' },
    { id: 's13', title: 'Santa Clarita Diet', year: '2017', img: 'img/series/Santa-Clarita-Diet.jpg', url: 'series/Santa-Clarita-Diet.html' },
    { id: 's14', title: 'Zombies', year: '2018', img: 'img/series/Zombies.jpg', url: 'series/Zombies.html' },
  ],

  // ============================================
  // 🎌 ANIMES
  // ============================================
  animes: [
    { id: 'a1', title: 'Another', year: '2012', img: 'img/animes/Another.png', url: 'animes/Another.html' },
    { id: 'a2', title: 'Attack on Titan', year: '2013', img: 'img/animes/Attack-on-Titan.png', url: 'animes/Attack-on-Titan.html' },
    { id: 'a3', title: 'Corpse Party', year: '2013', img: 'img/animes/Corpse-Party.png', url: 'animes/Corpse-Party.html' },
    { id: 'a4', title: 'Gakkou Gurashi!', year: '2015', img: 'img/animes/Gakkou-Gurashi.png', url: 'animes/Gakkou-Gurashi.html' },
    { id: 'a5', title: 'Hellsing Ultimate', year: '2006', img: 'img/animes/Hellsing-Ultimate.png', url: 'animes/Hellsing-Ultimate.html' },
    { id: 'a6', title: 'Highschool of the Dead', year: '2010', img: 'img/animes/Highschool-of-the-Dead.png', url: 'animes/Highschool-of-the-Dead.html', featured: true },
    { id: 'a7', title: 'I Am a Hero', year: '2016', img: 'img/animes/I-Am-a-Hero.png', url: 'animes/I-Am-a-Hero.html' },
    { id: 'a8', title: 'Kore wa Zombie Desu ka?', year: '2011', img: 'img/animes/Kore-wa-Zombie-Desu-ka.png', url: 'animes/Kore-wa-Zombie-Desu-ka.html' },
    { id: 'a9', title: 'Koutetsujou no Kabaneri', year: '2016', img: 'img/animes/Koutetsujou-no-Kabaneri.png', url: 'animes/Koutetsujou-no-Kabaneri.html' },
    { id: 'a10', title: 'Parasyte: The Maxim', year: '2014', img: 'img/animes/Parasyte.png', url: 'animes/Parasyte.html' },
    { id: 'a11', title: 'The Promised Neverland', year: '2019', img: 'img/animes/Promised-Neverland.png', url: 'animes/Promised-Neverland.html' },
    { id: 'a12', title: 'Seraph of the End', year: '2015', img: 'img/animes/Seraph-of-the-End.png', url: 'animes/Seraph-of-the-End.html' },
    { id: 'a13', title: 'Shiki', year: '2010', img: 'img/animes/Shiki.png', url: 'animes/Shiki.html' },
    { id: 'a14', title: 'Shikabane Hime: Aka', year: '2008', img: 'img/animes/Shikabane-Hime-Aka.png', url: 'animes/Shikabane-Hime-Aka.html' },
    { id: 'a15', title: 'Tokyo Ghoul', year: '2014', img: 'img/animes/Tokyo-Ghoul.png', url: 'animes/Tokyo-Ghoul.html' },
    { id: 'a16', title: 'Undead Unluck', year: '2023', img: 'img/animes/Undead-Unluck.png', url: 'animes/Undead-Unluck.html' },
    { id: 'a17', title: 'Zom 100: Bucket List of the Dead', year: '2023', img: 'img/animes/Zom-100.png', url: 'animes/Zom-100.html' },
    { id: 'a18', title: 'Zombieland Saga', year: '2018', img: 'img/animes/Zombieland-Saga.png', url: 'animes/Zombieland-Saga.html' },
  ],

// ============================================
  // 💥 CÓMICS
  // ============================================
  comics: [
    { id: 'c1', title: '16-Bit Zombie', publisher: 'Boom! Studios', year: '2014', img: 'img/comics/16-Bit-Zombie.jpg', url: 'comics/16-Bit-Zombie.html' },
    { id: 'c2', title: '28 Days Later', publisher: 'Dark Horse', year: '2009', img: 'img/comics/28-Days-Later.jpg', url: 'comics/28-Days-Later.html' },
    { id: 'c3', title: 'Afterlife with Archie', publisher: 'Archie Horror', year: '2013', img: 'img/comics/Afterlife-with-Archie.jpg', url: 'comics/Afterlife-with-Archie.html' },
    { id: 'c4', title: 'Batman vs. the Undead', publisher: 'DC', year: '2013', img: 'img/comics/Batman-vs-the-Undead.jpg', url: 'comics/Batman-vs-the-Undead.html' },
    { id: 'c5', title: 'Blackest Night', publisher: 'DC', year: '2009', img: 'img/comics/Blackest-Night.jpg', url: 'comics/Blackest-Night.html' },
    { id: 'c6', title: 'DCeased', publisher: 'DC', year: '2019', img: 'img/comics/DCeased.jpg', url: 'comics/DCeased.html' },
    { id: 'c7', title: 'Empire of the Dead', publisher: 'Marvel', year: '2014', img: 'img/comics/Empire-of-the-Dead.jpg', url: 'comics/Empire-of-the-Dead.html' },
    { id: 'c8', title: 'iZombie', publisher: 'Vertigo', year: '2010', img: 'img/comics/iZombie.jpg', url: 'comics/iZombie.html' },
    { id: 'c9', title: 'Marvel Zombies', publisher: 'Marvel', year: '2005', img: 'img/comics/Marvel-Zombies.jpg', url: 'comics/Marvel-Zombies.html' },
    { id: 'c10', title: 'Night of the Living Dead', publisher: 'Avatar Press', year: '2011', img: 'img/comics/Night-of-the-Living-Dead.jpg', url: 'comics/Night-of-the-Living-Dead.html' },
    { id: 'c11', title: 'Star Trek: Infestation', publisher: 'IDW', year: '2011', img: 'img/comics/Star-Trek-Infestation.jpg', url: 'comics/Star-Trek-Infestation.html' },
    { id: 'c12', title: 'The Goon', publisher: 'Dark Horse', year: '2003', img: 'img/comics/The-Goon.jpg', url: 'comics/The-Goon.html' },
    { id: 'c13', title: 'The Walking Dead', publisher: 'Image', year: '2003', img: 'img/comics/The-Walking-Dead.jpg', url: 'comics/The-Walking-Dead-Comic.html', featured: true },
    { id: 'c14', title: 'Zombie Survival Guide', publisher: 'Broadway', year: '2003', img: 'img/comics/Zombie-Survival-Guide.jpg', url: 'comics/Zombie-Survival-Guide.html' },
    { id: 'c15', title: 'Victorian Undead', publisher: 'Dynamite', year: '2010', img: 'img/comics/Victorian-Undead.jpg', url: 'comics/Victorian-Undead.html' },
    { id: 'c16', title: 'ZMD: Zombies of Mass Destruction', publisher: 'IDW', year: '2010', img: 'img/comics/ZMD.jpg', url: 'comics/ZMD-Zombies-of-Mass-Destruction.html' },
    { id: 'c17', title: 'Zombie Tales', publisher: 'Boom! Studios', year: '2005', img: 'img/comics/Zombie-Tales.jpg', url: 'comics/Zombie-Tales.html' },
    { id: 'c18', title: 'Zombie-Loan', publisher: 'Tokyopop', year: '2004', img: 'img/comics/Zombie-Loan.jpg', url: 'comics/Zombie-Loan.html' },
  ],

  // ============================================
  // 🎬 CORTOMETRAJES
  // ============================================
  cortometrajes: [
    { id: 'co1', title: '2 Hours', year: '2012', duration: '25 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1536440136628-849c42c93d0c?w=500&q=80', url: 'cortometrajes/2-Hours.html' },
    { id: 'co2', title: 'Best Friends', year: '2016', duration: '15 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80', url: 'cortometrajes/Best-Friends.html' },
    { id: 'co3', title: 'Cargo', year: '2013', duration: '7 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/c71d5fb6-6e04-4b90-bbdc-57ebb12857e1.jpg', url: 'cortometrajes/Cargo.html', featured: true },
    { id: 'co4', title: 'Hope', year: '2013', duration: '5 min', lang: 'Subtitulado', img: 'https://i.ytimg.com/vi_webp/bUTJC7UdMy4/maxresdefault.webp', url: 'cortometrajes/Hope.html' },
    { id: 'co5', title: 'Make It Until Morning', year: '2014', duration: '10 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/33b29291-5e94-4360-96db-d877f8dd0d5e.jpg', url: 'cortometrajes/Make-It-Until-Morning.html' },
    { id: 'co6', title: 'Rising Up: The Story of the Zombie Rights', year: '2012', duration: '12 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80', url: 'cortometrajes/Rising-Up.html' },
    { id: 'co7', title: 'Scary or Die', year: '2012', duration: '18 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80', url: 'cortometrajes/Scary-or-Die.html' },
    { id: 'co8', title: 'Soy un Zombie', year: '2015', duration: '8 min', lang: 'Latino', img: 'https://i.ytimg.com/vi/IGfdVXkoe_c/maxresdefault.jpg', url: 'cortometrajes/Soy-un-Zombie.html' },
    { id: 'co9', title: 'Still', year: '2014', duration: '11 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/d923e46f-79da-47e4-952a-0c35a8484c27.jpg', url: 'cortometrajes/Still.html' },
    { id: 'co10', title: 'The Gravedigger', year: '2016', duration: '9 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500&q=80', url: 'cortometrajes/The-Gravedigger.html' },
    { id: 'co11', title: 'Thriller', year: '1983', duration: '14 min', lang: 'Latino', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80', url: 'cortometrajes/Thriller.html' },
    { id: 'co12', title: 'Zombie Day Apocalypse', year: '2017', duration: '13 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80', url: 'cortometrajes/Zombie-Day-Apocalypse.html' },
    { id: 'co13', title: 'Zombie Doom', year: '2015', duration: '10 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/f47aea1f-bb63-448b-9aa2-f62fb14f7703.jpg', url: 'cortometrajes/Zombie-Doom.html' },
    { id: 'co14', title: 'Zombie in a Penguin Suit', year: '2013', duration: '6 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1550978934-490278542c93?w=500&q=80', url: 'cortometrajes/Zombie-in-a-Penguin-Suit.html' },
  ],

  // ============================================
  // ✍️ RELATOS
  // ============================================
  relatos: [
    { id: 'r1', title: 'Amanecer en la ciudad muerta', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80', url: 'relatos/Amanecer-en-la-ciudad-muerta.html' },
    { id: 'r2', title: 'Diario de un infectado', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80', url: 'relatos/Diario-de-un-infectado.html' },
    { id: 'r3', title: 'El último superviviente', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80', url: 'relatos/El-ultimo-superviviente.html', featured: true },
    { id: 'r4', title: 'El paciente cero', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80', url: 'relatos/El-paciente-cero.html' },
    { id: 'r5', title: 'La cura perdida', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80', url: 'relatos/La-cura-perdida.html' },
    { id: 'r6', title: 'Noche de muertos', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80', url: 'relatos/Noche-de-muertos.html' },
  ],

  // ============================================
  // 🎮 JUEGOS
  // ============================================
  juegos: [
    { id: 'g1', title: '7 Days to Die', genre: 'Survival', platforms: 'PC/PS/Xbox', year: '2013', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/7-Days-to-Die.html' },
    { id: 'g2', title: 'Back 4 Blood', genre: 'FPS Co-op', platforms: 'PC/PS/Xbox', year: '2021', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/Back-4-Blood.html' },
    { id: 'g3', title: 'Call of Duty: Zombies', genre: 'FPS', platforms: 'PC/PS/Xbox', year: '2009', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/Call-of-Duty-Zombies.html' },
    { id: 'g4', title: 'Days Gone', genre: 'Acción/Aventura', platforms: 'PC/PS', year: '2019', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/Days-Gone.html' },
    { id: 'g5', title: 'Dead Island 2', genre: 'RPG/Acción', platforms: 'PC/PS/Xbox', year: '2023', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80', url: 'juegos/Dead-Island-2.html' },
    { id: 'g6', title: 'Dead Rising', genre: 'Mundo abierto', platforms: 'PC/PS/Xbox', year: '2006', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/Dead-Rising.html' },
    { id: 'g7', title: 'Dead Space (Remake)', genre: 'Survival Horror', platforms: 'PC/PS/Xbox', year: '2023', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80', url: 'juegos/Dead-Space.html' },
    { id: 'g8', title: 'Dying Light 2', genre: 'Survival Horror', platforms: 'PC/PS/Xbox', year: '2022', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80', url: 'juegos/Dying-Light-2.html' },
    { id: 'g9', title: 'Killing Floor 2', genre: 'FPS Co-op', platforms: 'PC/PS', year: '2016', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80', url: 'juegos/Killing-Floor-2.html' },
    { id: 'g10', title: 'Left 4 Dead 2', genre: 'FPS Co-op', platforms: 'PC', year: '2009', img: 'https://images.unsplash.com/photo-1550978934-490278542c93?w=400&q=80', url: 'juegos/Left-4-Dead-2.html' },
    { id: 'g11', title: 'No More Room in Hell', genre: 'Survival Horror', platforms: 'PC (Gratis)', year: '2011', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80', url: 'juegos/No-More-Room-in-Hell.html' },
    { id: 'g12', title: 'Plants vs. Zombies', genre: 'Estrategia', platforms: 'Multiplataforma', year: '2009', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/Plants-vs-Zombies.html' },
    { id: 'g13', title: 'Project Zomboid', genre: 'Survival', platforms: 'PC', year: '2013', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/Project-Zomboid.html' },
    { id: 'g14', title: 'Resident Evil Village', genre: 'Survival Horror', platforms: 'PC/PS/Xbox', year: '2021', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80', url: 'juegos/Resident-Evil-Village.html', featured: true },
    { id: 'g15', title: 'State of Decay 2', genre: 'Survival', platforms: 'PC/Xbox', year: '2018', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80', url: 'juegos/State-of-Decay-2.html' },
    { id: 'g16', title: 'The Last of Us Part II', genre: 'Aventura/Narrativo', platforms: 'PS/PC', year: '2020', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80', url: 'juegos/The-Last-of-Us-Part-II.html' },
    { id: 'g17', title: 'They Are Billions', genre: 'Estrategia', platforms: 'PC', year: '2019', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/They-Are-Billions.html' },
    { id: 'g18', title: 'Unturned', genre: 'Survival', platforms: 'PC (Gratis)', year: '2017', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80', url: 'juegos/Unturned.html' },
    { id: 'g19', title: 'World War Z', genre: 'FPS Co-op', platforms: 'PC/PS/Xbox', year: '2019', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/World-War-Z.html' },
    { id: 'g20', title: 'Zombie Army 4: Dead War', genre: 'FPS Co-op', platforms: 'PC/PS/Xbox', year: '2020', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80', url: 'juegos/Zombie-Army-4.html' },
    { id: 'g21', title: 'Dead Trigger 2', genre: 'FPS', platforms: 'Android/iOS', year: '2013', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/Dead-Trigger-2.html' },
    { id: 'g22', title: 'Into the Dead 2', genre: 'Runner', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80', url: 'juegos/Into-the-Dead-2.html' },
    { id: 'g23', title: 'Last Day on Earth: Survival', genre: 'Survival', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/Last-Day-on-Earth.html' },
    { id: 'g24', title: 'Mini DAYZ', genre: 'Survival', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/Mini-DAYZ.html' },
    { id: 'g25', title: 'Unkilled', genre: 'FPS', platforms: 'Android/iOS', year: '2015', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80', url: 'juegos/Unkilled.html' },
    { id: 'g26', title: 'Zombie Age 3', genre: 'Acción', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80', url: 'juegos/Zombie-Age-3.html' },
    { id: 'g27', title: 'Zombie Tsunami', genre: 'Casual', platforms: 'Android/iOS', year: '2012', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80', url: 'juegos/Zombie-Tsunami.html' },
  ],
};

/* ============================================
   FUNCIONES DE CREACIÓN DE TARJETAS
   ============================================ */

/**
 * Crea una tarjeta HTML para libros/películas/series/animes/cómics/relatos
 */
function createStandardCard(item, typeClass, typeLabel, badgeText) {
  const featuredClass = item.featured ? ' featured' : '';
  const badge = item.featured ? '⭐ Destacado' : (badgeText || typeLabel);
  
  return `
    <a href="${item.url}" class="${typeClass}-card${featuredClass}">
      <img src="${item.img}" alt="${item.title}" class="${typeClass}-card-img" 
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="${typeClass}-card-overlay"></div>
      <div class="${typeClass}-card-content">
        <div class="${typeClass}-card-title">${item.title}</div>
        <div class="${typeClass}-card-badge">${badge}</div>
      </div>
    </a>
  `;
}

/**
 * Crea una tarjeta para cortometrajes
 */
function createCortoCard(item) {
  const featuredClass = item.featured ? ' featured' : '';
  const badge = item.featured ? '⭐ Destacado' : item.lang;
  const duration = item.duration ? `<span class="corto-card-duration">${item.duration}</span>` : '';
  
  return `
    <a href="${item.url}" class="corto-card${featuredClass}">
      <img src="${item.img}" alt="${item.title}" class="corto-card-img"
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="corto-card-overlay"></div>
      <div class="corto-card-play">▶</div>
      <div class="corto-card-content">
        <div class="corto-card-title">${item.title} (${item.year})</div>
        <div class="corto-card-meta">
          <span class="corto-card-badge ${item.lang === 'Latino' ? 'latino' : ''}">${badge}</span>
          ${duration}
        </div>
      </div>
    </a>
  `;
}

/**
 * Crea una tarjeta para juegos
 */
function createGameCard(item) {
  const featuredClass = item.featured ? ' featured' : '';
  const badge = item.featured ? '⭐ Destacado' : item.genre;
  
  return `
    <a href="${item.url}" class="game-card${featuredClass}">
      <img src="${item.img}" alt="${item.title}" class="game-card-img"
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="game-card-overlay"></div>
      <div class="game-card-content">
        <div class="game-card-title">${item.title}</div>
        <div class="game-card-meta">
          <span class="game-card-badge">${badge}</span>
          <span class="game-card-platform">${item.platforms}</span>
        </div>
      </div>
    </a>
  `;
}

/* ============================================
   ZOMBIE-TK - Base de Datos Central (Parte 3 de 3)
   Funciones de Renderizado e Inicialización
   ============================================ */

/**
 * Renderiza la página de libros
 */
function renderLibros(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.libros.map(item => 
    createStandardCard(item, 'libro', 'Libro', 'Libro')
  ).join('');
  
  console.log(`📚 Libros renderizados: ${ZOMBIE_DB.libros.length}`);
}

/**
 * Renderiza la página de películas
 */
function renderPeliculas(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.peliculas.map(item => 
    createStandardCard(item, 'pelicula', 'Película', 'Película')
  ).join('');
  
  console.log(`🎬 Películas renderizadas: ${ZOMBIE_DB.peliculas.length}`);
}

/**
 * Renderiza la página de series
 */
function renderSeries(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.series.map(item => 
    createStandardCard(item, 'serie', 'Serie', 'Serie')
  ).join('');
  
  console.log(`📺 Series renderizadas: ${ZOMBIE_DB.series.length}`);
}

/**
 * Renderiza la página de animes
 */
function renderAnimes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.animes.map(item => 
    createStandardCard(item, 'anime', 'Anime', 'Anime')
  ).join('');
  
  console.log(`🎌 Animes renderizados: ${ZOMBIE_DB.animes.length}`);
}

/**
 * Renderiza la página de cómics
 */
function renderComics(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.comics.map(item => 
    createStandardCard(item, 'comic', 'Cómic', item.publisher)
  ).join('');
  
  console.log(`💥 Cómics renderizados: ${ZOMBIE_DB.comics.length}`);
}

/**
 * Renderiza la página de cortometrajes
 */
function renderCortometrajes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.cortometrajes.map(item => 
    createCortoCard(item)
  ).join('');
  
  console.log(`🎬 Cortometrajes renderizados: ${ZOMBIE_DB.cortometrajes.length}`);
}

/**
 * Renderiza la página de relatos
 */
function renderRelatos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.relatos.map(item => 
    createStandardCard(item, 'relato', 'Relato', 'Relato')
  ).join('');
  
  console.log(`✍️ Relatos renderizados: ${ZOMBIE_DB.relatos.length}`);
}

/**
 * Renderiza la página de juegos
 */
function renderJuegos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.juegos.map(item => 
    createGameCard(item)
  ).join('');
  
  console.log(`🎮 Juegos renderizados: ${ZOMBIE_DB.juegos.length}`);
}

/**
 * Actualiza los contadores del menú hamburguesa
 * leyendo la longitud de los arrays en ZOMBIE_DB
 */
function updateMenuCounters() {
  const counters = {
    'menu-count-libros': ZOMBIE_DB.libros ? ZOMBIE_DB.libros.length : 0,
    'menu-count-peliculas': ZOMBIE_DB.peliculas ? ZOMBIE_DB.peliculas.length : 0,
    'menu-count-series': ZOMBIE_DB.series ? ZOMBIE_DB.series.length : 0,
    'menu-count-animes': ZOMBIE_DB.animes ? ZOMBIE_DB.animes.length : 0,
    'menu-count-comics': ZOMBIE_DB.comics ? ZOMBIE_DB.comics.length : 0,
    'menu-count-cortos': ZOMBIE_DB.cortometrajes ? ZOMBIE_DB.cortometrajes.length : 0,
    'menu-count-relatos': ZOMBIE_DB.relatos ? ZOMBIE_DB.relatos.length : 0,
    'menu-count-juegos': ZOMBIE_DB.juegos ? ZOMBIE_DB.juegos.length : 0
  };

  Object.keys(counters).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = counters[id];
    }
  });
  
  console.log('📊 Contadores del menú actualizados desde database.js');
}

/**
 * Inicializa el renderizado según la página actual
 */
function initDatabase() {
  // Actualizar contadores del menú
  updateMenuCounters();
  
  // Detectar qué página estamos y renderizar
  const path = window.location.pathname;
  
  if (path.includes('libros.html')) {
    renderLibros('librosGrid');
  } else if (path.includes('peliculas.html')) {
    renderPeliculas('peliculasGrid');
  } else if (path.includes('series.html')) {
    renderSeries('seriesGrid');
  } else if (path.includes('animes.html')) {
    renderAnimes('animesGrid');
  } else if (path.includes('comics.html')) {
    renderComics('comicsGrid');
  } else if (path.includes('cortometrajes.html')) {
    renderCortometrajes('cortosGrid');
  } else if (path.includes('relatos.html')) {
    renderRelatos('relatosGrid');
  } else if (path.includes('juegos.html')) {
    renderJuegos('juegosGrid');
  }
  
  console.log('🧟 Zombie-TK Database inicializada');
  console.log('📊 Total de ítems:', 
    ZOMBIE_DB.libros.length + ZOMBIE_DB.peliculas.length + 
    ZOMBIE_DB.series.length + ZOMBIE_DB.animes.length + 
    ZOMBIE_DB.comics.length + ZOMBIE_DB.cortometrajes.length + 
    ZOMBIE_DB.relatos.length + ZOMBIE_DB.juegos.length
  );
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDatabase);
} else {
  initDatabase();
}
