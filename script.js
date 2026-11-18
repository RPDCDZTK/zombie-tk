/* ============ ZOMBIE-TK · v6 ============ */
(function () {
    'use strict';

    var d = document;
    var header = d.querySelector('.header-fijo');
    var btn = d.getElementById('btnHamburguesa');
    var menu = d.getElementById('menuNav');
    var overlay = d.getElementById('overlay');
    var mq = window.matchMedia('(max-width: 1024px)');

    function normalizar(s) {
        return (s || '').toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (m) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
        });
    }
    function respaldos(root) {
        root.querySelectorAll('.card-img img, .logo-img img, .res-thumb img').forEach(function (img) {
            var box = img.parentElement;
            function fallo() { box.classList.add('sin-img'); }
            if (img.complete && img.naturalWidth === 0) fallo();
            img.addEventListener('error', fallo);
        });
    }

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
        d.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && abierto) setMenu(false);
        });
        function onMq(e) { if (!e.matches) setMenu(false); }
        if (mq.addEventListener) mq.addEventListener('change', onMq);
        else mq.addListener(onMq);
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

    respaldos(d);

    /* ---- Entrada de secciones ---- */
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

    /* ---- Buscador de catálogo (peliculas.html) ---- */
    var buscador = d.getElementById('buscadorCatalogo');
    if (buscador) {
        var tarjetas = Array.prototype.slice.call(d.querySelectorAll('#carrusel-destacadas .card'));
        var fichas = Array.prototype.slice.call(d.querySelectorAll('.tile-letra'));
        var contador = d.getElementById('contadorCatalogo');
        var pista = d.getElementById('pistaLetra');
        var vacio = d.getElementById('vacioCatalogo');
        var btnX = d.querySelector('.limpiar-x');

        function aplicar() {
            var q = normalizar(buscador.value.trim());
            var visibles = 0;
            tarjetas.forEach(function (c) {
                var ok = !q || normalizar(c.getAttribute('data-titulo')).indexOf(q) !== -1;
                c.classList.toggle('oculta', !ok);
                if (ok) visibles++;
            });
            if (contador) contador.textContent = q ? visibles + ' de ' + tarjetas.length + ' destacadas' : tarjetas.length + ' destacadas';
            if (vacio) vacio.classList.toggle('visible', visibles === 0);
            if (btnX) btnX.classList.toggle('visible', !!q);
            var m = q.match(/[A-Z0-9]/);
            var ch = m ? m[0] : null;
            var encontrada = null;
            fichas.forEach(function (f) {
                var de = f.getAttribute('data-desde'), ha = f.getAttribute('data-hasta');
                var dentro = ch ? ((ch >= '0' && ch <= '9') ? de === '0' : (ch >= de && ch <= ha)) : false;
                f.classList.toggle('destacado', dentro);
                f.classList.toggle('atenuado', !!q && !dentro);
                if (dentro) encontrada = f;
            });
            if (pista) {
                if (q && encontrada) {
                    pista.textContent = 'Los títulos que empiezan con «' + ch + '» están en ' + encontrada.getAttribute('data-desde') + ' – ' + encontrada.getAttribute('data-hasta') + '.';
                    pista.classList.add('visible');
                } else if (q && !ch) {
                    pista.textContent = 'Usa letras o números para ubicar una sección del catálogo.';
                    pista.classList.add('visible');
                } else pista.classList.remove('visible');
            }
            window.dispatchEvent(new Event('resize'));
        }
        function limpiar() { buscador.value = ''; aplicar(); buscador.focus(); }
        buscador.addEventListener('input', aplicar);
        if (btnX) btnX.addEventListener('click', limpiar);
        if (vacio) {
            var bv = vacio.querySelector('[data-limpiar-busqueda]');
            if (bv) bv.addEventListener('click', limpiar);
        }
        aplicar();
    }

    /* ---- BÚSQUEDA GLOBAL con ventana de resultados (index.html) ---- */
    var formG = d.getElementById('formBusquedaGlobal');
    var inputG = d.getElementById('buscadorGlobal');
    var capa = d.getElementById('capaBusqueda');
    var ventana = d.getElementById('ventanaBusqueda');
    var lista = d.getElementById('listaResultados');
    var vacioG = d.getElementById('vacioBusqueda');
    var filtros = d.getElementById('filtrosBusqueda');
    var conteo = d.getElementById('conteoBusqueda');
    var echo = d.getElementById('consultaBusqueda');
    var btnCerrar = d.getElementById('btnCerrarBusqueda');
    var btnContinuar = d.getElementById('btnContinuarBusqueda');
    var scrim = d.getElementById('scrimBusqueda');
    var mensajeG = d.getElementById('mensajeBusqueda');
    var arsenal = d.getElementById('arsenalConteo');
    var catalogo = window.ZTK_CATALOGO || [];
    var cats = window.ZTK_CATEGORIAS || { peliculas: 'Películas', series: 'Series', animes: 'Animes', libros: 'Libros', comics: 'Cómics' };

    if (arsenal) arsenal.textContent = catalogo.length + ' títulos en el arsenal';

    if (formG && inputG && capa && ventana && catalogo.length) {
        var resultados = [], filtro = 'todas', consulta = '', tCierre = null;

        function mapa(s) {
            var norms = '', map = [];
            for (var i = 0; i < s.length; i++) {
                var n = normalizar(s[i]);
                for (var j = 0; j < n.length; j++) map.push(i);
                norms += n;
            }
            return { norms: norms, map: map };
        }
        function resaltar(t, q) {
            var nq = normalizar(q);
            if (!nq) return esc(t);
            var m = mapa(t);
            var idx = m.norms.indexOf(nq);
            if (idx < 0) return esc(t);
            var a = m.map[idx], b = m.map[idx + nq.length - 1] + 1;
            return esc(t.slice(0, a)) + '<mark class="resalte">' + esc(t.slice(a, b)) + '</mark>' + esc(t.slice(b));
        }
        function puntuar(it, nq) {
            var t = normalizar(it.t);
            if (t.indexOf(nq) === 0) return 0;
            if (t.indexOf(nq) > -1) return 1;
            if (normalizar(it.k || '').indexOf(nq) > -1) return 2;
            return 3;
        }

        function pintar() {
            var vis = filtro === 'todas' ? resultados : resultados.filter(function (r) { return r.c === filtro; });
            var cuentas = {};
            resultados.forEach(function (r) { cuentas[r.c] = (cuentas[r.c] || 0) + 1; });

            var chips = ['<button type="button" class="chip' + (filtro === 'todas' ? ' activa' : '') + '" data-filtro="todas">Todas <b>' + resultados.length + '</b></button>'];
            Object.keys(cats).forEach(function (c) {
                if (cuentas[c]) chips.push('<button type="button" class="chip cat-' + c + (filtro === c ? ' activa' : '') + '" data-filtro="' + c + '">' + cats[c] + ' <b>' + cuentas[c] + '</b></button>');
            });
            filtros.innerHTML = chips.join('');
            filtros.hidden = resultados.length === 0;

            if (vis.length) {
                lista.hidden = false;
                vacioG.classList.remove('visible');
                lista.innerHTML = vis.map(function (r, i) {
                    return '<li class="res-fila" style="animation-delay:' + Math.min(i, 8) * 45 + 'ms">' +
                        '<a class="res-enlace" href="' + esc(r.u) + '">' +
                        '<span class="res-thumb" data-fallback="' + esc(r.fb) + '"><img src="' + esc(r.img) + '" alt="" loading="lazy"></span>' +
                        '<span class="res-cuerpo">' +
                        '<span class="res-titulo">' + resaltar(r.t, consulta) + '</span>' +
                        '<span class="res-meta"><span class="insignia cat-' + r.c + '">' + esc(cats[r.c]) + '</span><span class="res-tag">' + esc(r.tag) + '</span></span>' +
                        '<span class="res-desc">' + esc(r.d) + '</span>' +
                        '</span>' +
                        '<span class="res-ir" aria-hidden="true">Abrir →</span>' +
                        '</a></li>';
                }).join('');
                respaldos(lista);
            } else {
                lista.hidden = true;
                lista.innerHTML = '';
                vacioG.classList.add('visible');
                var eco = vacioG.querySelector('.vacio-consulta');
                if (eco) eco.textContent = '«' + consulta + '»';
            }
            if (conteo) conteo.textContent = vis.length + (vis.length === 1 ? ' resultado' : ' resultados') + ' para «' + consulta + '»';
            if (echo) echo.textContent = '«' + consulta + '»';
        }

        function abrir() {
            if (tCierre) { clearTimeout(tCierre); tCierre = null; }
            if (abierto) setMenu(false);
            capa.hidden = false;
            window.requestAnimationFrame(function () { capa.classList.add('abierta'); });
            d.body.style.overflow = 'hidden';
            if (btnCerrar) btnCerrar.focus();
        }
        function cerrar() {
            capa.classList.remove('abierta');
            d.body.style.overflow = '';
            if (tCierre) clearTimeout(tCierre);
            tCierre = setTimeout(function () { capa.hidden = true; tCierre = null; }, 280);
            inputG.focus();
        }
        function ejecutar(q) {
            consulta = q;
            var nq = normalizar(q);
            resultados = catalogo.filter(function (it) {
                return normalizar(it.t).indexOf(nq) > -1 ||
                    normalizar(it.k || '').indexOf(nq) > -1 ||
                    normalizar(cats[it.c] || '').indexOf(nq) > -1;
            }).sort(function (a, b) {
                var pa = puntuar(a, nq), pb = puntuar(b, nq);
                if (pa !== pb) return pa - pb;
                return a.t.localeCompare(b.t, 'es');
            });
            filtro = 'todas';
            pintar();
            abrir();
        }

        formG.addEventListener('submit', function (e) {
            e.preventDefault();
            var v = inputG.value.trim();
            if (!v) {
                formG.classList.add('error');
                if (mensajeG) {
                    mensajeG.textContent = 'Escribe un título para iniciar el rastreo.';
                    mensajeG.classList.add('visible');
                }
                inputG.focus();
                return;
            }
            formG.classList.remove('error');
            if (mensajeG) mensajeG.classList.remove('visible');
            ejecutar(v);
        });
        inputG.addEventListener('input', function () {
            formG.classList.remove('error');
            if (mensajeG) mensajeG.classList.remove('visible');
        });

        if (btnCerrar) btnCerrar.addEventListener('click', cerrar);
        if (btnContinuar) btnContinuar.addEventListener('click', cerrar);
        if (scrim) scrim.addEventListener('click', cerrar);
        capa.addEventListener('click', function (e) { if (e.target === capa) cerrar(); });

        filtros.addEventListener('click', function (e) {
            var c = e.target.closest('.chip');
            if (!c) return;
            filtro = c.getAttribute('data-filtro');
            pintar();
            var act = filtros.querySelector('.chip.activa');
            if (act) act.focus();
        });

        vacioG.addEventListener('click', function (e) {
            var s = e.target.closest('[data-sugerencia]');
            if (!s) return;
            inputG.value = s.getAttribute('data-sugerencia');
            ejecutar(inputG.value);
        });

        d.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !capa.hidden) { cerrar(); return; }
            if (e.key === '/' && capa.hidden) {
                var t = e.target;
                var escribiendo = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
                if (!escribiendo) { e.preventDefault(); inputG.focus(); }
            }
        });

        ventana.addEventListener('keydown', function (e) {
            if (e.key !== 'Tab') return;
            var foc = Array.prototype.slice.call(ventana.querySelectorAll('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'))
                .filter(function (el) { return el.offsetParent !== null; });
            if (!foc.length) return;
            var primero = foc[0], ultimo = foc[foc.length - 1];
            if (e.shiftKey && d.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
            else if (!e.shiftKey && d.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
        });
    }
})();
