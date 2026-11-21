/* ============================================
   ZOMBIE-TK - Funcionalidad para página de Cuenta
   ============================================ */

// Cargar favoritos desde localStorage
const favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];

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
 * Actualiza las estadísticas del usuario
 */
function updateStats() {
  // Favoritos
  const statFavorites = document.getElementById('statFavorites');
  if (statFavorites) {
    statFavorites.textContent = favorites.length;
  }
  
  // Contenido visto (simulado - en producción vendría de localStorage)
  const statViewed = document.getElementById('statViewed');
  const viewedCount = parseInt(localStorage.getItem('zombieTK_viewed') || '0');
  if (statViewed) {
    statViewed.textContent = viewedCount;
  }
  
  // Nivel basado en favoritos
  const statLevel = document.getElementById('statLevel');
  if (statLevel) {
    let level = 'Novato';
    if (favorites.length >= 50) level = 'Experto';
    else if (favorites.length >= 20) level = 'Avanzado';
    else if (favorites.length >= 10) level = 'Intermedio';
    else if (favorites.length >= 5) level = 'Principiante';
    statLevel.textContent = level;
  }
}

/**
 * Edita el perfil del usuario
 */
function editProfile() {
  const newName = prompt('Ingresa tu nuevo nombre:', document.getElementById('profileName').textContent);
  if (newName && newName.trim()) {
    document.getElementById('profileName').textContent = newName.trim();
    localStorage.setItem('zombieTK_username', newName.trim());
    showToast('✅ Perfil actualizado correctamente');
  }
}

/**
 * Abre el modal de configuración
 */
function openSettingsModal(section) {
  const modal = document.getElementById('settingsModal');
  const title = document.getElementById('settingsModalTitle');
  const body = document.getElementById('settingsModalBody');
  
  if (!modal || !title || !body) return;
  
  const content = getSettingsContent(section);
  title.textContent = content.title;
  body.innerHTML = content.body;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de configuración
 */
function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Obtiene el contenido del modal según la sección
 */
function getSettingsContent(section) {
  const contents = {
    idioma: {
      title: '🌐 Idioma y subtítulos',
      body: `
        <h4>Idioma de la aplicación</h4>
        <p>Selecciona el idioma en el que deseas ver Zombie-TK:</p>
        <ul>
          <li>🇪🇸 Español (Actual)</li>
          <li>🇺🇸 English</li>
          <li>🇧🇷 Português</li>
          <li>🇫🇷 Français</li>
        </ul>
        <h4>Subtítulos</h4>
        <p>Configura el idioma y estilo de los subtítulos para videos y cortometrajes.</p>
        <p><strong>Nota:</strong> Esta función estará disponible en la próxima actualización.</p>
      `
    },
    notificaciones: {
      title: '🔔 Notificaciones',
      body: `
        <h4>Tipos de notificaciones</h4>
        <ul>
          <li>✅ Nuevos estrenos y lanzamientos</li>
          <li>✅ Actualizaciones de contenido favorito</li>
          <li>✅ Mensajes del soporte técnico</li>
          <li>✅ Ofertas y promociones especiales</li>
        </ul>
        <h4>Frecuencia</h4>
        <p>Puedes elegir recibir notificaciones diarias, semanales o solo las más importantes.</p>
        <p><strong>Estado actual:</strong> Notificaciones desactivadas</p>
      `
    },
    privacidad: {
      title: '🔒 Privacidad',
      body: `
        <h4>Control de privacidad</h4>
        <p>Gestiona quién puede ver tu actividad en Zombie-TK:</p>
        <ul>
          <li>👁️ Perfil público/privado</li>
          <li>⭐ Lista de favoritos visible</li>
          <li>📊 Estadísticas de visualización</li>
          <li>🔍 Historial de búsqueda</li>
        </ul>
        <h4>Datos personales</h4>
        <p>Tus datos están protegidos y no se comparten con terceros. Puedes solicitar la eliminación de tu cuenta en cualquier momento contactando a soporte.</p>
      `
    },
    adultos: {
      title: '🔞 Contenido para adultos',
      body: `
        <h4>Configuración actual</h4>
        <p>El contenido para adultos está actualmente <strong>desactivado</strong>.</p>
        <h4>¿Qué incluye?</h4>
        <p>Al activar esta opción, verás títulos con clasificación +18 en el catálogo y búsquedas, incluyendo:</p>
        <ul>
          <li>Películas de terror extremo</li>
          <li>Cómics con contenido explícito</li>
          <li>Relatos con temáticas maduras</li>
        </ul>
        <p><strong>Nota:</strong> Debes ser mayor de 18 años para activar esta opción.</p>
      `
    },
    descargas: {
      title: '⬇️ Descargas',
      body: `
        <h4>Calidad de descarga</h4>
        <ul>
          <li>📱 Baja (480p) - Ahorra datos</li>
          <li>💻 Media (720p) - Balance calidad/tamaño</li>
          <li>🖥️ Alta (1080p) - Máxima calidad</li>
        </ul>
        <h4>Almacenamiento</h4>
        <p>Las descargas se guardan en la carpeta: <code>/ZombieTK/Downloads/</code></p>
        <h4>Wi-Fi only</h4>
        <p>Actualmente las descargas solo se realizan cuando estás conectado a Wi-Fi para evitar consumo de datos móviles.</p>
      `
    },
    tv: {
      title: '📺 Instalar en un TV',
      body: `
        <h4>Dispositivos compatibles</h4>
        <ul>
          <li>📺 Smart TV (Samsung, LG, Sony)</li>
          <li>🎮 Consolas (PlayStation, Xbox)</li>
          <li>📱 Chromecast / AirPlay</li>
          <li>🖥️ Android TV / Apple TV</li>
        </ul>
        <h4>Código de vinculación</h4>
        <p>Para vincular tu TV, abre la app en tu televisor e ingresa el siguiente código:</p>
        <p style="font-size: 24px; text-align: center; color: #a78bfa; font-weight: bold; padding: 15px; background: rgba(109, 40, 217, 0.2); border-radius: 8px;">ZTK-2024-XXXX</p>
        <p><strong>Nota:</strong> El código expira en 10 minutos.</p>
      `
    },
    acerca: {
      title: 'ℹ️ Acerca de Zombie-TK',
      body: `
        <h4>Zombie-TK+</h4>
        <p>La plataforma definitiva para fans del género zombie. Encuentra libros, películas, series, animes, cómics, cortometrajes, relatos, juegos y más.</p>
        <h4>Versión</h4>
        <p><strong>Versión 1.0.43</strong> (Última actualización: Noviembre 2024)</p>
        <h4>Desarrollado por</h4>
        <p>Zombie-TK Team</p>
        <h4>Contacto</h4>
        <p>📧 punk_dead_rp@hotmail.com</p>
        <h4>Créditos</h4>
        <p>Todas las imágenes y contenido pertenecen a sus respectivos autores. Zombie-TK no almacena contenido protegido por derechos de autor.</p>
      `
    },
    actualizar: {
      title: '📱 Buscar actualizaciones',
      body: `
        <h4>Versión actual</h4>
        <p style="font-size: 18px; color: #a78bfa; font-weight: bold;">v1.0.43</p>
        <h4>Estado</h4>
        <p>✅ Estás usando la versión más reciente de Zombie-TK.</p>
        <h4>Últimas mejoras</h4>
        <ul>
          <li>✨ Nuevo diseño de página de cuenta</li>
          <li>🔍 Búsqueda mejorada con filtros</li>
          <li>⭐ Sistema de favoritos persistente</li>
          <li>📱 Menú hamburguesa optimizado</li>
          <li>🎨 Paletas de colores únicas por sección</li>
        </ul>
        <button onclick="checkForUpdates()" style="width: 100%; padding: 12px; background: #6d28d9; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px;">Buscar actualizaciones manualmente</button>
      `
    },
    contacto: {
      title: '✉️ Contactar soporte',
      body: `
        <h4>¿Necesitas ayuda?</h4>
        <p>Nuestro equipo de soporte está disponible para ayudarte con cualquier problema o pregunta.</p>
        <h4>Métodos de contacto</h4>
        <ul>
          <li>📧 Email: <a href="mailto:punk_dead_rp@hotmail.com" style="color: #a78bfa;">punk_dead_rp@hotmail.com</a></li>
          <li>💬 Telegram: @ZombieTKSupport</li>
          <li>🐦 Twitter: @ZombieTK_Official</li>
        </ul>
        <h4>Horario de atención</h4>
        <p>Lunes a Viernes: 9:00 AM - 6:00 PM (GMT-6)</p>
        <p>Tiempo de respuesta promedio: 24-48 horas</p>
      `
    },
    'cambiar-cuenta': {
      title: '🔄 Cambiar de cuenta',
      body: `
        <h4>Cuenta actual</h4>
        <p><strong>Usuario:</strong> ZombieFan</p>
        <p><strong>Email:</strong> zombiefan@zombie-tk.com</p>
        <h4>Cambiar de cuenta</h4>
        <p>Para cambiar de cuenta, primero debes cerrar sesión e iniciar sesión con otra cuenta.</p>
        <button onclick="logout()" style="width: 100%; padding: 12px; background: #dc2626; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px;">Cerrar sesión</button>
      `
    }
  };
  
  return contents[section] || { title: 'Configuración', body: '<p>Opción no disponible.</p>' };
}

/**
 * Busca actualizaciones manualmente
 */
function checkForUpdates() {
  showToast('🔍 Buscando actualizaciones...');
  setTimeout(() => {
    showToast('✅ Ya tienes la versión más reciente');
  }, 2000);
}

/**
 * Cierra sesión
 */
function logout() {
  const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
  if (confirmLogout) {
    showToast('👋 Sesión cerrada correctamente');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }
}

/**
 * Muestra una notificación toast
 */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/**
 * Carga el nombre de usuario desde localStorage
 */
function loadUserProfile() {
  const savedName = localStorage.getItem('zombieTK_username');
  if (savedName) {
    document.getElementById('profileName').textContent = savedName;
  }
}

/**
 * Inicialización
 */
function init() {
  window.addEventListener('scroll', handleScroll);
  updateStats();
  loadUserProfile();
  
  // Menú hamburguesa
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  // Cerrar modal al hacer clic fuera
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeSettingsModal();
      }
    });
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
      closeSettingsModal();
    }
  });
  
  console.log('👤 Página de Cuenta Zombie-TK cargada correctamente');
  console.log('📅 Fecha:', new Date().toLocaleDateString('es-ES'));
  console.log('⭐ Favoritos:', favorites.length);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
