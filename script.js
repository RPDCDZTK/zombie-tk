/* ============ ZOMBIE-TK · v6 ============ */
(function () {
    'use strict';

    var d = document;
    var header = d.querySelector('.header-fijo');
    var btn = d.getElementById('btnHamburguesa');
    var menu = d.getElementById('menuNav');
    var overlay = d.getElementById('overlay');
    var mq = window.matchMedia('(max-width: 1024px)');

    /* ---- Altura real del header → variable CSS ---- */
    function setHeaderH() {
        if (header) d.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
    setHeaderH();
    window.addEventListener('resize', setHeaderH);
    window.addEventListener('load', setHeaderH);
    if ('ResizeObserver' in window && header) new ResizeObserver(setHeaderH).observe(header);

    /* ---- Menú hamburguesa ---- */
    var abierto = false;
    function setMenu(ab) {
        abierto = ab;
        if (!btn || !menu || !overlay) return;
        btn.classList.toggle('activo', ab);
        menu.classList.toggle('abierto', ab);
        overlay.classList.toggle('activo', ab);
        btn.setAttribute('aria-expanded', String(ab));
        btn.setAttribute('aria-label', ab ? 'Cerrar menú' : 'Abrir menú');
        d.body.style.overflow = ab ? 'hidden' : '';
    }
    if (btn && menu && overlay) {
        btn.addEventListener('click', function () { setMenu(!abierto); });
        overlay.addEventListener('click', function () { setMenu(false); });
        menu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { if (mq.matches) setMenu(false); });
        });
        d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && abierto) setMenu(false); });
        function onMq(e) { if (!e.matches) setMenu(false); }
        if (mq.addEventListener) mq.addEventListener('change', onMq); else mq.addListener(onMq);
    }

    /* ---- Carruseles ---- */
    d.querySelectorAll('.carrusel').forEach(function (track) {
        var cont = track.closest('.carrusel-container');
        if (!cont) return;
        var prev = cont.querySelector('.btn-prev');
        var next = cont.querySelector('.btn-next');
        function paso() {
            var c = track.querySelector('.card:not(.oculta)');
            return c ? (c.getBoundingClientRect().width + 18) * 2 : 480;
        }
        function actualizar() {
            var max = track.scrollWidth - track.clientWidth - 2;
            if (prev) prev.classList.toggle('agotado', track.scrollLeft <= 2);
            if (next) next.classList.toggle('agotado', track.scrollLeft >= max);
        }
        if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -paso(), behavior: 'smooth' }); });
        if (next) next.addEventListener('click', function () { track.scrollBy({ left: paso(), behavior: 'smooth' }); });
        track.addEventListener('scroll', function () { window.requestAnimationFrame(actualizar); }, { passive: true });
        window.addEventListener('resize', actualizar);
        actualizar();
    });

    /* ---- Respaldo de portadas ---- */
    function marcarFallback(img) {
        var box = img.parentElement;
        function fallo() { box.classList.add('sin-img'); }
        if (img.complete && img.naturalWidth === 0) fallo();
        img.addEventListener('error', fallo);
    }
    d.querySelectorAll('.card-img img, .logo-img img').forEach(marcarFallback);

    /* ---- Entradas escalonadas ---- */
    var revealEls = d.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---- Sombra del header ---- */
    var tick = false;
    window.addEventListener('scroll', function () {
        if (tick) return;
        tick = true;
        window.requestAnimationFrame(function () {
            if (header) header.classList.toggle('con-sombra', window.scrollY > 40);
            tick = false;
        });
    }, { passive: true });

    /* ---- Atajo «/» para enfocar el buscador ---- */
    d.addEventListener('keydown', function (e) {
        if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
        var t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
        var campo = d.getElementById('inputBusqueda') || d.getElementById('qIndex') || d.getElementById('buscadorCatalogo');
        if (campo) { e.preventDefault(); campo.focus(); }
    });

    /* ---- Utilidades de texto ---- */
    function normalizar(s) {
        return (s || '').toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    function normMapa(texto) {
        var norm = '', map = [];
        for (var i = 0; i < texto.length; i++) {
            var c = texto[i].normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
            for (var j = 0; j < c.length; j++) { norm += c[j]; map.push(i); }
        }
        return { norm: norm, map: map };
    }
    function resaltar(texto, tokens) {
        if (!tokens.length) return esc(texto);
        var nm = normMapa(texto), rangos = [];
        tokens.forEach(function (tk) {
            var idx = nm.norm.indexOf(tk);
            while (idx !== -1 && rangos.length < 60) {
                rangos.push([nm.map[idx], nm.map[idx + tk.length - 1] + 1]);
                idx = nm.norm.indexOf(tk, idx + tk.length);
            }
        });
        if (!rangos.length) return esc(texto);
        rangos.sort(function (a, b) { return a[0] - b[0]; });
        var fusion = [];
        rangos.forEach(function (r) {
            var u = fusion[fusion.length - 1];
            if (u && r[0] <= u[1]) u[1] = Math.max(u[1], r[1]);
            else fusion.push([r[0], r[1]]);
        });
        var out = '', pos = 0;
        fusion.forEach(function (r) {
            out += esc(texto.slice(pos, r[0])) + '<mark>' + esc(texto.slice(r[0], r[1])) + '</mark>';
            pos = r[1];
        });
        return out + esc(texto.slice(pos));
    }

    /* ---- Catálogo global del sitio ---- */
    var CATS = {
        peliculas: { label: 'Películas', color: '#ff1a1a', orden: 0 },
        series:    { label: 'Series',    color: '#ff8800', orden: 1 },
        libros:    { label: 'Libros',    color: '#3ddc84', orden: 2 },
        animes:    { label: 'Animes',    color: '#ff2e88', orden: 3 },
        comics:    { label: 'Cómics',    color: '#38b6ff', orden: 4 }
    };
    var CATALOGO = [
        { t: '28 Days Later', d: 'Un virus desata el apocalipsis zombie en Londres.', c: 'peliculas', href: 'peliculas/0-9.html', img: 'img/peliculas/28-Days-Later.jpg', fb: '🎬', tag: 'Terror', tono: '' },
        { t: 'Dawn of the Dead', d: 'Sobrevivientes en un centro comercial rodeado de zombies.', c: 'peliculas', href: 'peliculas/C-D.html', img: 'img/peliculas/Dawn-of-the-Dead.jpg', fb: '🧟', tag: 'Clásico', tono: 'tag-ambar' },
        { t: 'El Ejército de los Muertos', d: 'Un atraco en Las Vegas infestada de zombies.', c: 'peliculas', href: 'peliculas/E-F.html', img: 'img/peliculas/El-Ejercito-de-los-Muertos.jpg', fb: '💀', tag: 'Acción', tono: '' },
        { t: 'Guerra Mundial Z', d: 'Una pandemia zombie amenaza con destruir la humanidad.', c: 'peliculas', href: 'peliculas/G-H.html', img: 'img/peliculas/Guerra-Mundial-Z.jpg', fb: '🩸', tag: 'Thriller', tono: '' },
        { t: 'Soy Leyenda', d: 'El último hombre en una Nueva York post-apocalíptica.', c: 'peliculas', href: 'peliculas/S-T.html', img: 'img/peliculas/Soy-Leyenda.jpg', fb: '🧠', tag: 'Drama', tono: '' },
        { t: 'La Noche de los Muertos Vivientes', d: 'El clásico que inició el género zombie moderno.', c: 'peliculas', href: 'peliculas/K-L.html', img: 'img/peliculas/La-Noche-de-los-Muertos-Vivientes.jpg', fb: '🌆', tag: 'Clásico', tono: 'tag-ambar' },
        { t: 'Tren a Busan', d: 'Un tren se convierte en el último refugio humano.', c: 'peliculas', href: 'peliculas/S-T.html', img: 'img/peliculas/Tren-a-Busan.jpg', fb: '🚂', tag: 'Acción', tono: '' },
        { t: 'Planeta Zombie', d: 'La humanidad lucha por sobrevivir en un mundo infectado.', c: 'peliculas', href: 'peliculas/O-P.html', img: 'img/peliculas/Planeta-Zombie.jpg', fb: '🏚️', tag: 'Terror', tono: '' },
        { t: 'The Walking Dead', d: 'Un grupo de sobrevivientes lucha en un mundo post-apocalíptico.', c: 'series', href: 'series/The-Walking-Dead.html', img: 'img/series/The-Walking-Dead.jpg', fb: '🚶', tag: 'Drama', tono: '' },
        { t: 'Z Nation', d: 'Una misión para transportar al único inmune conocido.', c: 'series', href: 'series/Z-Nation.html', img: 'img/series/Z-Nation.jpg', fb: '🇺🇸', tag: 'Acción', tono: '' },
        { t: 'Black Summer', d: 'Los primeros días caóticos del apocalipsis zombie.', c: 'series', href: 'series/Black-Summer.html', img: 'img/series/Black-Summer.jpg', fb: '🌑', tag: 'Intenso', tono: '' },
        { t: 'Kingdom', d: 'Intrigas políticas y zombies en la Corea medieval.', c: 'series', href: 'series/Kingdom.html', img: 'img/series/Kingdom.jpg', fb: '👑', tag: 'Histórico', tono: 'tag-ambar' },
        { t: 'I Zombie', d: 'Una médica zombie resuelve crímenes comiendo cerebros.', c: 'series', href: 'series/I-Zombie.html', img: 'img/series/I-Zombie.jpg', fb: '🔍', tag: 'Misterio', tono: '' },
        { t: 'Daybreak', d: 'Adolescentes sobreviven en un mundo post-apocalíptico.', c: 'series', href: 'series/Daybreak.html', img: 'img/series/Daybreak.jpg', fb: '🌅', tag: 'Comedia', tono: 'tag-verde' },
        { t: 'Reality Z', d: 'Un reality show se convierte en una lucha por la vida.', c: 'series', href: 'series/Reality-Z.html', img: 'img/series/Reality-Z.jpg', fb: '📺', tag: 'Terror', tono: '' },
        { t: 'Dead Set', d: 'Concursantes de Big Brother atrapados durante el apocalipsis.', c: 'series', href: 'series/Dead-Set.html', img: 'img/series/Dead-Set.jpg', fb: '🎭', tag: 'Británico', tono: 'tag-ambar' },
        { t: 'Plantas Vs Zombies', d: 'La batalla épica entre plantas y zombies.', c: 'series', href: 'series/Plantas-Vs-Zombies.html', img: 'img/series/Plantas-Vs-Zombies.jpg', fb: '🌱', tag: 'Animación', tono: 'tag-verde' },
        { t: 'Apocalipsis Z', d: 'El inicio del fin de la humanidad contado en primera persona.', c: 'libros', href: 'libros/A-B.html', img: 'img/libros/Apocalipsis-Z.jpg', fb: '📖', tag: 'Novela', tono: '' },
        { t: 'Diario de un Zombie', d: 'La vida cotidiana desde la perspectiva de un no-muerto.', c: 'libros', href: 'libros/C-D.html', img: 'img/libros/Diario-de-un-Zombie.jpg', fb: '🧟‍♂️', tag: 'Comedia', tono: 'tag-verde' },
        { t: 'Guerra Mundial Z (novela)', d: 'Testimonios de sobrevivientes de la guerra zombie global.', c: 'libros', href: 'libros/G-H.html', img: 'img/libros/Guerra-Mundial-Z.jpg', fb: '🌍', tag: 'Documental', tono: '' },
        { t: 'Hospital de los Muertos', d: 'El brote comienza en un hospital aparentemente normal.', c: 'libros', href: 'libros/G-H.html', img: 'img/libros/Hospital-de-los-Muertos.jpg', fb: '🏥', tag: 'Suspenso', tono: '' },
        { t: 'Infección', d: 'Una ciudad entera cae en 24 horas ante el virus.', c: 'libros', href: 'libros/I-J.html', img: 'img/libros/Infeccion.jpg', fb: '🌆', tag: 'Thriller', tono: '' },
        { t: 'La Carretera', d: 'Un padre y su hijo viajan por un mundo devastado.', c: 'libros', href: 'libros/K-L.html', img: 'img/libros/La-Carretera.jpg', fb: '📕', tag: 'Drama', tono: '' },
        { t: 'Noche de Muertos', d: 'Relatos de terror ambientados en la noche más oscura.', c: 'libros', href: 'libros/M-N.html', img: 'img/libros/Noche-de-Muertos.jpg', fb: '🌙', tag: 'Antología', tono: 'tag-ambar' },
        { t: 'Paciente Cero', d: 'La historia del origen de la pandemia zombie.', c: 'libros', href: 'libros/O-P.html', img: 'img/libros/Paciente-Cero.jpg', fb: '📗', tag: 'Ciencia Ficción', tono: 'tag-verde' },
        { t: 'Gakkou Gurashi!', d: 'Vida escolar aparentemente dulce que esconde un brote zombie.', c: 'animes', href: 'animes/Gakkou-Gurashi.html', img: 'img/animes/Gakkou-Gurashi.jpg', fb: '🏫', tag: 'Terror escolar', tono: 'tag-magenta' },
        { t: 'Highschool of the Dead', d: 'Estudiantes armados abren paso entre hordas en Tokio.', c: 'animes', href: 'animes/Highschool-of-the-Dead.html', img: 'img/animes/Highschool-of-the-Dead.jpg', fb: '🎒', tag: 'Acción', tono: 'tag-magenta' },
        { t: 'Kore wa Zombie Desu ka?', d: 'Un chico revive como zombie y termina de chico mágico.', c: 'animes', href: 'animes/Kore-wa-Zombie-Desu-ka.html', img: 'img/animes/Kore-wa-Zombie-Desu-ka.jpg', fb: '🪄', tag: 'Comedia', tono: 'tag-verde' },
        { t: 'Koutetsujou no Kabaneri', d: 'Trenes blindados contra infectados de corazón de hierro.', c: 'animes', href: 'animes/Koutetsujou-no-Kabaneri.html', img: 'img/animes/Koutetsujou-no-Kabaneri.jpg', fb: '🚂', tag: 'Steampunk', tono: 'tag-ambar' },
        { t: 'Shikabane Hime: Aka', d: 'Una princesa cadáver caza muertos vivientes por venganza.', c: 'animes', href: 'animes/Shikabane-Hime-Aka.html', img: 'img/animes/Shikabane-Hime-Aka.jpg', fb: '⚔️', tag: 'Acción', tono: 'tag-magenta' },
        { t: 'Zombieland Saga', d: 'Idols zombie reviven para salvar la prefectura de Saga.', c: 'animes', href: 'animes/Zombieland-Saga.html', img: 'img/animes/Zombieland-Saga.jpg', fb: '🎤', tag: 'Comedia', tono: 'tag-verde' },
        { t: 'The Walking Dead (Cómic)', d: 'La saga original de Robert Kirkman que inspiró la serie.', c: 'comics', href: 'comics/The-Walking-Dead-Comic.html', img: 'img/comics/The-Walking-Dead-Comic.jpg', fb: '🗯️', tag: 'Cómic', tono: 'tag-azul' }
    ];

    /* ---- Página exclusiva de búsqueda ---- */
    var raizBusqueda = d.getElementById('paginaBuscador');
    if (raizBusqueda) {
        var input = d.getElementById('inputBusqueda');
        var limpiar = d.getElementById('limpiarBusqueda');
        var chips = Array.prototype.slice.call(d.querySelectorAll('#chipsCategoria .chip-cat'));
        var ordenSel = d.getElementById('ordenSelect');
        var contador = d.getElementById('contadorResultados');
        var pista = d.getElementById('pistaBusqueda');
        var grid = d.getElementById('gridResultados');
        var vacio = d.getElementById('vacioBusqueda');
        var vacioTitulo = d.getElementById('vacioTitulo');
        var btnVerTodo = d.getElementById('btnVerTodo');
        var pops = Array.prototype.slice.call(raizBusqueda.querySelectorAll('.populares-busqueda .chip-pop'));

        var params = new URLSearchParams(window.location.search);
        var estado = {
            q: params.get('q') || '',
            cat: CATS[params.get('cat')] ? params.get('cat') : 'todo',
            orden: ['relevancia', 'az', 'za', 'categoria'].indexOf(params.get('orden')) !== -1 ? params.get('orden') : 'relevancia'
        };
        input.value = estado.q;
        ordenSel.value = estado.orden;

        function sincronizarURL() {
            var p = new URLSearchParams();
            if (estado.q) p.set('q', estado.q);
            if (estado.cat !== 'todo') p.set('cat', estado.cat);
            if (estado.orden !== 'relevancia') p.set('orden', estado.orden);
            var qs = p.toString();
            window.history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : ''));
        }

        function puntuar(item, nq, tokens) {
            var nt = normalizar(item.t);
            var s = 0;
            if (nt.indexOf(nq) === 0) s += 100;
            else if (nt.indexOf(nq) !== -1) s += 60;
            tokens.forEach(function (tk) { if (nt.indexOf(tk) !== -1) s += 12; });
            if (normalizar(item.d).indexOf(nq) !== -1) s += 20;
            if (normalizar(CATS[item.c].label).indexOf(nq) !== -1) s += 15;
            if (normalizar(item.tag).indexOf(nq) !== -1) s += 15;
            return s;
        }

        function render() {
            var nq = normalizar(estado.q.trim());
            var tokens = nq.split(/\s+/).filter(Boolean);

            var base = CATALOGO.filter(function (it) {
                if (!tokens.length) return true;
                var h = normalizar(it.t + ' ' + it.d + ' ' + CATS[it.c].label + ' ' + it.tag);
                return tokens.every(function (tk) { return h.indexOf(tk) !== -1; });
            }).map(function (it) {
                return { it: it, s: tokens.length ? puntuar(it, nq, tokens) : 0 };
            });

            var porCat = { todo: base.length };
            Object.keys(CATS).forEach(function (k) { porCat[k] = 0; });
            base.forEach(function (r) { porCat[r.it.c]++; });

            chips.forEach(function (ch) {
                var k = ch.getAttribute('data-cat');
                ch.classList.toggle('activo', k === estado.cat);
                ch.classList.toggle('vacia', porCat[k] === 0);
                ch.setAttribute('aria-pressed', String(k === estado.cat));
                var n = ch.querySelector('.n');
                if (n) n.textContent = porCat[k];
            });

            var lista = base.filter(function (r) { return estado.cat === 'todo' || r.it.c === estado.cat; });
            lista.sort(function (a, b) {
                if (estado.orden === 'az') return a.it.t.localeCompare(b.it.t, 'es');
                if (estado.orden === 'za') return b.it.t.localeCompare(a.it.t, 'es');
                if (estado.orden === 'categoria') {
                    var dc = CATS[a.it.c].orden - CATS[b.it.c].orden;
                    return dc !== 0 ? dc : a.it.t.localeCompare(b.it.t, 'es');
                }
                return (b.s - a.s) || a.it.t.localeCompare(b.it.t, 'es');
            });

            grid.innerHTML = lista.map(function (r, i) {
                var it = r.it, cat = CATS[it.c];
                return '<a class="card" href="' + esc(it.href) + '" style="--cat:' + cat.color + ';animation-delay:' + Math.min(i * 35, 350) + 'ms">' +
                    '<div class="card-img" data-fallback="' + esc(it.fb) + '">' +
                        '<img src="' + esc(it.img) + '" alt="' + esc(it.t) + '" loading="lazy">' +
                        '<span class="card-cat">' + esc(cat.label) + '</span>' +
                    '</div>' +
                    '<div class="card-info">' +
                        '<h3>' + resaltar(it.t, tokens) + '</h3>' +
                        '<p>' + resaltar(it.d, tokens) + '</p>' +
                        '<span class="card-tag ' + it.tono + '">' + esc(it.tag) + '</span>' +
                    '</div></a>';
            }).join('');
            grid.querySelectorAll('.card-img img').forEach(marcarFallback);

            if (tokens.length) {
                contador.textContent = lista.length + (lista.length === 1 ? ' resultado' : ' resultados') + ' para «' + estado.q.trim() + '»';
                pista.textContent = 'Resaltamos en ámbar las coincidencias. Filtra por categoría o cambia el orden sin salir de esta página.';
            } else {
                contador.textContent = CATALOGO.length + ' títulos en el catálogo';
                pista.textContent = 'Escribe un título, género o categoría: el buscador revisa películas, series, libros, animes y cómics a la vez.';
            }
            pista.classList.add('visible');

            var sinResultados = lista.length === 0;
            vacio.classList.toggle('visible', sinResultados);
            if (sinResultados) {
                vacioTitulo.textContent = tokens.length
                    ? 'Ningún título coincide con «' + estado.q.trim() + '»' + (estado.cat !== 'todo' ? ' en ' + CATS[estado.cat].label : '') + '.'
                    : 'E
