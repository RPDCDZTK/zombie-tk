/* ============================================
   ZOMBIE-TK - cuenta.js (VERSIÓN CORREGIDA)
   Sistema de avatares con debug visual
   ============================================ */

// Avatares predefinidos
const PREDEFINED_AVATARS = [
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie1&backgroundColor=4c1d95',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie2&backgroundColor=6d28d9',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie3&backgroundColor=a78bfa',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie4&backgroundColor=8b0000',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie5&backgroundColor=2d5016',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie6&backgroundColor=ff006e',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie7&backgroundColor=ff8c00',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zombie8&backgroundColor=00b4d8',
];

const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/bottts/svg?seed=zombiefan&backgroundColor=4c1d95';
const MAX_USER_AVATARS = 3;
const favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];

// ============================================
// PANEL DE DEBUG VISUAL (para móvil)
// ============================================

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
      z-index: 999999;
      border-bottom: 2px solid #0f0;
      display: none;
    `;
    document.body.appendChild(debugPanel);
    
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
      z-index: 9999999;
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
}

// ============================================
// FUNCIONES DE AVATAR
// ============================================

function getUserAvatars() {
  try {
    return JSON.parse(localStorage.getItem('zombieTK_userAvatars')) || [];
  } catch (e) {
    return [];
  }
}

function saveUserAvatars(avatars) {
  localStorage.setItem('zombieTK_userAvatars', JSON.stringify(avatars));
}

function getCurrentAvatar() {
  return localStorage.getItem('zombieTK_avatar') || DEFAULT_AVATAR;
}

function saveAvatar(avatarUrl) {
  localStorage.setItem('zombieTK_avatar', avatarUrl);
  updateAvatarEverywhere(avatarUrl);
}

function updateAvatarEverywhere(avatarUrl) {
  const profileImg = document.getElementById('profileAvatarImg');
  const headerImg = document.getElementById('headerAvatarImg');
  const currentImg = document.getElementById('avatarCurrentImg');
  
  if (profileImg) profileImg.src = avatarUrl;
  if (headerImg) headerImg.src = avatarUrl;
  if (currentImg) currentImg.src = avatarUrl;
}

// ============================================
// FUNCIÓN CORREGIDA: Abrir Modal de Avatar
// ============================================

function openAvatarModal() {
  showDebug('🔓 Intentando abrir modal de avatar...', 'info');
  
  const modal = document.getElementById('avatarModal');
  
  if (!modal) {
    showDebug('❌ ERROR: No existe el elemento avatarModal', 'error');
    showToast('❌ Error: Modal de avatar no encontrado');
    return;
  }
  
  showDebug('✅ Modal encontrado', 'success');
  
  const grid = document.getElementById('avatarGrid');
  if (!grid) {
    showDebug('❌ ERROR: No existe avatarGrid', 'error');
    showToast('❌ Error: Grid de avatares no encontrado');
    return;
  }
  
  const currentAvatar = getCurrentAvatar();
  const userAvatars = getUserAvatars();
  
  showDebug(`📊 Avatar actual: ${currentAvatar.substring(0, 50)}...`, 'info');
  showDebug(`📸 Avatares subidos: ${userAvatars.length}`, 'info');
  
  // ===== GENERAR AVATARES PREDEFINIDOS =====
  grid.innerHTML = '';
  PREDEFINED_AVATARS.forEach((avatarUrl, index) => {
    const img = document.createElement('img');
    img.src = avatarUrl;
    img.alt = `Avatar predefinido ${index + 1}`;
    img.className = 'avatar-option';
    if (avatarUrl === currentAvatar) {
      img.classList.add('selected');
    }
    img.onclick = () => selectAvatar(avatarUrl, img, 'predefined');
    grid.appendChild(img);
  });
  
  showDebug(`✅ ${PREDEFINED_AVATARS.length} avatares predefinidos cargados`, 'success');
  
  // ===== GENERAR AVATARES SUBIDOS (si existe el contenedor) =====
  const userGrid = document.getElementById('userAvatarGrid');
  const userSection = document.getElementById('userAvatarsSection');
  const userCount = document.getElementById('userAvatarsCount');
  
  if (userGrid && userSection) {
    userGrid.innerHTML = '';
    
    if (userAvatars.length > 0) {
      userSection.style.display = 'block';
      if (userCount) userCount.textContent = userAvatars.length;
      
      userAvatars.forEach((avatarUrl, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'avatar-option-wrapper';
        
        const img = document.createElement('img');
        img.src = avatarUrl;
        img.alt = `Mi foto ${index + 1}`;
        img.className = 'avatar-option';
        if (avatarUrl === currentAvatar) {
          img.classList.add('selected');
        }
        img.onclick = () => selectAvatar(avatarUrl, img, 'user', index);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'avatar-delete-btn';
        deleteBtn.innerHTML = '✕';
        deleteBtn.title = 'Eliminar esta foto';
        deleteBtn.onclick = (e) => {
          e.stopPropagation();
          deleteUserAvatar(index);
        };
        
        const badge = document.createElement('div');
        badge.className = 'avatar-uploaded-badge';
        badge.innerHTML = '📸';
        badge.title = 'Foto subida por ti';
        
        wrapper.appendChild(img);
        wrapper.appendChild(deleteBtn);
        wrapper.appendChild(badge);
        userGrid.appendChild(wrapper);
      });
      
      showDebug(`✅ ${userAvatars.length} avatares de usuario cargados`, 'success');
    } else {
      userSection.style.display = 'none';
    }
  }
  
  // ===== CONTROLAR LÍMITE DE UPLOAD =====
  const uploadBtn = document.getElementById('uploadBtnLabel');
  const uploadHint = document.getElementById('uploadHint');
  const uploadWarning = document.getElementById('uploadLimitWarning');
  
  if (uploadBtn && uploadHint && uploadWarning) {
    if (userAvatars.length >= MAX_USER_AVATARS) {
      uploadBtn.classList.add('disabled');
      uploadHint.style.display = 'none';
      uploadWarning.style.display = 'block';
    } else {
      uploadBtn.classList.remove('disabled');
      uploadHint.style.display = 'block';
      uploadWarning.style.display = 'none';
    }
  }
  
  // ===== MOSTRAR AVATAR ACTUAL =====
  const currentImg = document.getElementById('avatarCurrentImg');
  if (currentImg) {
    currentImg.src = currentAvatar;
  }
  
  // ===== ABRIR MODAL =====
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  showDebug('✅ Modal de avatar abierto correctamente', 'success');
  showToast('📷 Modal de avatar abierto');
}

function closeAvatarModal() {
  const modal = document.getElementById('avatarModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function selectAvatar(avatarUrl, element, type, userIndex = null) {
  document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  if (element) element.classList.add('selected');
  
  saveAvatar(avatarUrl);
  showToast('✅ Avatar actualizado correctamente');
  
  setTimeout(() => {
    closeAvatarModal();
  }, 500);
}

function deleteUserAvatar(index) {
  const userAvatars = getUserAvatars();
  const currentAvatar = getCurrentAvatar();
  const avatarToDelete = userAvatars[index];
  
  const confirmDelete = confirm('¿Estás seguro de que quieres eliminar esta foto?');
  if (!confirmDelete) return;
  
  if (avatarToDelete === currentAvatar) {
    saveAvatar(DEFAULT_AVATAR);
    showToast('🗑️ Foto eliminada. Avatar restablecido al predeterminado.');
  } else {
    showToast('🗑️ Foto eliminada correctamente');
  }
  
  userAvatars.splice(index, 1);
  saveUserAvatars(userAvatars);
  
  openAvatarModal();
}

function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const userAvatars = getUserAvatars();
  
  if (userAvatars.length >= MAX_USER_AVATARS) {
    showToast(`⚠️ Límite alcanzado: máximo ${MAX_USER_AVATARS} fotos`);
    event.target.value = '';
    return;
  }
  
  if (!file.type.startsWith('image/')) {
    showToast('❌ Solo se permiten imágenes');
    event.target.value = '';
    return;
  }
  
  if (file.size > 2 * 1024 * 1024) {
    showToast('❌ La imagen es muy grande (máx 2MB)');
    event.target.value = '';
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    
    if (userAvatars.includes(dataUrl)) {
      showToast('⚠️ Esta imagen ya está en tu galería');
      event.target.value = '';
      return;
    }
    
    userAvatars.push(dataUrl);
    saveUserAvatars(userAvatars);
    
    saveAvatar(dataUrl);
    showToast(`✅ Foto subida correctamente (${userAvatars.length}/${MAX_USER_AVATARS})`);
    
    setTimeout(() => {
      openAvatarModal();
    }, 500);
  };
  reader.readAsDataURL(file);
  
  event.target.value = '';
}

// ============================================
// OTRAS FUNCIONES
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

function updateStats() {
  const statFavorites = document.getElementById('statFavorites');
  if (statFavorites) statFavorites.textContent = favorites.length;
  
  const statViewed = document.getElementById('statViewed');
  const viewedCount = parseInt(localStorage.getItem('zombieTK_viewed') || '0');
  if (statViewed) statViewed.textContent = viewedCount;
  
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

function editProfile() {
  const currentName = document.getElementById('profileName').textContent;
  const newName = prompt('Ingresa tu nuevo nombre:', currentName);
  if (newName && newName.trim()) {
    document.getElementById('profileName').textContent = newName.trim();
    localStorage.setItem('zombieTK_username', newName.trim());
    showToast('✅ Perfil actualizado correctamente');
  }
}

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

function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function getSettingsContent(section) {
  const contents = {
    idioma: {
      title: '🌐 Idioma y subtítulos',
      body: `<h4>Idioma de la aplicación</h4><p>Selecciona el idioma en el que deseas ver Zombie-TK:</p><ul><li>🇪🇸 Español (Actual)</li><li>🇺🇸 English</li><li>🇧🇷 Português</li><li>🇫🇷 Français</li></ul><p><strong>Nota:</strong> Esta función estará disponible en la próxima actualización.</p>`
    },
    notificaciones: {
      title: '🔔 Notificaciones',
      body: `<h4>Tipos de notificaciones</h4><ul><li>✅ Nuevos estrenos y lanzamientos</li><li>✅ Actualizaciones de contenido favorito</li><li>✅ Mensajes del soporte técnico</li><li>✅ Ofertas y promociones especiales</li></ul><p><strong>Estado actual:</strong> Notificaciones desactivadas</p>`
    },
    privacidad: {
      title: '🔒 Privacidad',
      body: `<h4>Control de privacidad</h4><p>Gestiona quién puede ver tu actividad en Zombie-TK:</p><ul><li>👁️ Perfil público/privado</li><li>⭐ Lista de favoritos visible</li><li>📊 Estadísticas de visualización</li><li>🔍 Historial de búsqueda</li></ul>`
    },
    descargas: {
      title: '⬇️ Descargas',
      body: `<h4>Calidad de descarga</h4><ul><li>📱 Baja (480p) - Ahorra datos</li><li>💻 Media (720p) - Balance calidad/tamaño</li><li>🖥️ Alta (1080p) - Máxima calidad</li></ul><p>Las descargas se guardan en: <code>/ZombieTK/Downloads/</code></p>`
    },
    tv: {
      title: '📺 Instalar en un TV',
      body: `<h4>Dispositivos compatibles</h4><ul><li>📺 Smart TV (Samsung, LG, Sony)</li><li>🎮 Consolas (PlayStation, Xbox)</li><li>📱 Chromecast / AirPlay</li><li>🖥️ Android TV / Apple TV</li></ul><h4>Código de vinculación</h4><p style="font-size: 24px; text-align: center; color: #a78bfa; font-weight: bold; padding: 15px; background: rgba(109, 40, 217, 0.2); border-radius: 8px;">ZTK-2024-XXXX</p>`
    },
    acerca: {
      title: 'ℹ️ Acerca de Zombie-TK',
      body: `<h4>Zombie-TK+</h4><p>La plataforma definitiva para fans del género zombie.</p><h4>Versión</h4><p><strong>Versión 1.0.43</strong> (Noviembre 2024)</p><h4>Contacto</h4><p>📧 punk_dead_rp@hotmail.com</p>`
    },
    actualizar: {
      title: '📱 Buscar actualizaciones',
      body: `<h4>Versión actual</h4><p style="font-size: 18px; color: #a78bfa; font-weight: bold;">v1.0.43</p><p>✅ Estás usando la versión más reciente.</p><button onclick="checkForUpdates()" style="width: 100%; padding: 12px; background: #6d28d9; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px;">Buscar actualizaciones</button>`
    },
    contacto: {
      title: '✉️ Contactar soporte',
      body: `<h4>Métodos de contacto</h4><ul><li>📧 Email: <a href="mailto:punk_dead_rp@hotmail.com" style="color: #a78bfa;">punk_dead_rp@hotmail.com</a></li><li>💬 Telegram: @ZombieTKSupport</li></ul><p>Tiempo de respuesta: 24-48 horas</p>`
    },
    'cambiar-cuenta': {
      title: '🔄 Cambiar de cuenta',
      body: `<h4>Cuenta actual</h4><p><strong>Usuario:</strong> ZombieFan</p><p><strong>Email:</strong> zombiefan@zombie-tk.com</p><button onclick="logout()" style="width: 100%; padding: 12px; background: #dc2626; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px;">Cerrar sesión</button>`
    }
  };
  
  return contents[section] || { title: 'Configuración', body: '<p>Opción no disponible.</p>' };
}

function checkForUpdates() {
  showToast('🔍 Buscando actualizaciones...');
  setTimeout(() => {
    showToast('✅ Ya tienes la versión más reciente');
  }, 2000);
}

function logout() {
  const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
  if (confirmLogout) {
    showToast('👋 Sesión cerrada correctamente');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }
}

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

function loadUserProfile() {
  const savedName = localStorage.getItem('zombieTK_username');
  if (savedName) {
    document.getElementById('profileName').textContent = savedName;
  }
}

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
  showDebug('🚀 Iniciando página de cuenta...', 'info');
  
  window.addEventListener('scroll', handleScroll);
  updateStats();
  loadUserProfile();
  
  const currentAvatar = getCurrentAvatar();
  updateAvatarEverywhere(currentAvatar);
  
  showDebug(`🖼️ Avatar cargado: ${currentAvatar.substring(0, 50)}...`, 'success');
  
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  const settingsModal = document.getElementById('settingsModal');
  if (settingsModal) {
    settingsModal.addEventListener('click', function(e) {
      if (e.target === settingsModal) closeSettingsModal();
    });
  }
  
  const avatarModal = document.getElementById('avatarModal');
  if (avatarModal) {
    avatarModal.addEventListener('click', function(e) {
      if (e.target === avatarModal) closeAvatarModal();
    });
    showDebug('✅ Modal de avatar encontrado en el DOM', 'success');
  } else {
    showDebug('❌ ERROR: Modal de avatar NO encontrado en el DOM', 'error');
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
      closeSettingsModal();
      closeAvatarModal();
    }
  });
  
  showDebug('✅ Página de cuenta inicializada', 'success');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
