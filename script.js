/* ============ ZOMBIE-TK · v5 ============ */
(function () {
    'use strict';

    var d = document;
    var header = d.querySelector('.header-fijo');
    var btn = d.getElementById('btnHamburguesa');
    var menu = d.getElementById('menuNav');
    var overlay = d.getElementById('overlay');
    var mq = window.matchMedia('(max-width: 1024px)');

    /* ---- Altura real del header → variable CSS (nada queda tapado) ---- */
    function setHeaderH() {
        if (header) {
            d.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
        }
    }
    setHeaderH();
    window.addEventListener('resize', setHeaderH);
    window.addEventListener('load', setHeaderH);
    if ('ResizeObserver' in window && header) {
        new ResizeObserver(setHeaderH).observe(header);
    }

    /* ---- Menú hamburguesa (solo móvil/tablet) ---- */
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
            a.addEventListener('click', function () {
                if (mq.matches) setMenu(false);
            });
        });

        d.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && abierto) setMenu(false);
        });

        /* Al pasar a PC, el panel se cierra y vuelve el menú horizontal */
        function onMq(e) { if (!e.matches) setMenu(false); }
        if (mq.addEventListener) mq.addEventListener('change', onMq);
        else mq.addListener(onMq);
    }

    /* ---- Carruseles: flechas con estado real ---- */
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
        if (prev) prev.addEventListener('click', function () {
            track.scrollBy({ left: -paso(), behavior: 'smooth' });
        });
        if (next) next.addEventListener('click', function () {
            track.scrollBy({ left: paso(), behavior: 'smooth' });
        });
        track.addEventListener('scroll', function () {
            window.requestAnimationFrame(actualizar);
        }, { passive: true });
        window.addEventListener('resize', actualizar);
        actualizar();
    });

    /* ---- Portadas: si una imagen no existe, muestra el respaldo ---- */
    d.querySelectorAll('.card-img img, .logo-img img').forEach(function (img) {
        var box = img.parentElement;
        function fallo() { box.classList.add('sin-img'); }
        if (img.complete && img.naturalWidth === 0) fallo();
        img.addEventListener('error', fallo);
    });

    /* ---- Entrada escalonada de secciones ---- */
    var revealEls = d.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---- Sombra del header al hacer scroll ---- */
    var tick = false;
    window.addEventListener('scroll', function () {
        if (tick) return;
        tick = true;
        window.requestAnimationFrame(function () {
            if (header) header.classList.toggle('con-sombra', window.scrollY > 40);
            tick = false;
        });
    }, { passive: true });

    /* ---- Buscador de catálogo: filtra destacadas y marca la letra ---- */
    var buscador = d.getElementById('buscadorCatalogo');
    if (buscador) {
        var tarjetas = Array.prototype.slice.call(d.querySelectorAll('#carrusel-destacadas .card'));
        var fichas = Array.prototype.slice.call(d.querySelectorAll('.tile-letra'));
        var contador = d.getElementById('contadorCatalogo');
        var pista = d.getElementById('pistaLetra');
        var vacio = d.getElementById('vacioCatalogo');
        var btnX = d.querySelector('.limpiar-x');

        function normalizar(s) {
            return (s || '').toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        }

        function aplicar() {
            var q = normalizar(buscador.value.trim());
            var visibles = 0;

            tarjetas.forEach(function (c) {
                var titulo = normalizar(c.getAttribute('data-titulo'));
                var ok = !q || titulo.indexOf(q) !== -1;
                c.classList.toggle('oculta', !ok);
                if (ok) visibles++;
            });

            if (contador) {
                contador.textContent = q
                    ? visibles + ' de ' + tarjetas.length + ' destacadas'
                    : tarjetas.length + ' destacadas';
            }
            if (vacio) vacio.classList.toggle('visible', visibles === 0);
            if (btnX) btnX.classList.toggle('visible', !!q);

            var m = q.match(/[A-Z0-9]/);
            var ch = m ? m[0] : null;
            var encontrada = null;

            fichas.forEach(function (f) {
                var de = f.getAttribute('data-desde');
                var ha = f.getAttribute('data-hasta');
                var dentro = false;
                if (ch) {
                    dentro = (ch >= '0' && ch <= '9')
                        ? (de === '0')
                        : (ch >= de && ch <= ha);
                }
                f.classList.toggle('destacado', dentro);
                f.classList.toggle('atenuado', !!q && !dentro);
                if (dentro) encontrada = f;
            });

            if (pista) {
                if (q && encontrada) {
                    pista.textContent = 'Los títulos que empiezan con «' + ch + '» están en ' +
                        encontrada.getAttribute('data-desde') + ' – ' + encontrada.getAttribute('data-hasta') + '.';
                    pista.classList.add('visible');
                } else if (q && !ch) {
                    pista.textContent = 'Usa letras o números para ubicar una sección del catálogo.';
                    pista.classList.add('visible');
                } else {
                    pista.classList.remove('visible');
                }
            }

            window.dispatchEvent(new Event('resize'));
        }

        function limpiar() {
            buscador.value = '';
            aplicar();
            buscador.focus();
        }

        buscador.addEventListener('input', aplicar);
        if (btnX) btnX.addEventListener('click', limpiar);
        if (vacio) {
            var btnVacio = vacio.querySelector('[data-limpiar-busqueda]');
            if (btnVacio) btnVacio.addEventListener('click', limpiar);
        }
        aplicar();
    }
})();
