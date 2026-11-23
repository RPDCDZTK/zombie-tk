/* ============================================
   ZOMBIE-TK - Funcionalidad para página de Cuenta
   Sistema de avatares con límite de 3 fotos
   ============================================ */

// Avatares predefinidos (NO se pueden eliminar)
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

// Avatar por defecto
const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/bottts/svg?seed=zombiefan&backgroundColor=4c1d95';

// Límite de fotos subidas
const MAX_USER_AVATARS = 3;

// Cargar favoritos desde localStorage
const favorites = JSON.parse(localStorage.getItem('zombieTK_favorites')) || [];

/**
 * Obtiene los avatares subidos por el usuario
 */
function getUserAvatars() {
  try {
    return JSON.parse(localStorage.getItem('zombieTK_userAvatars')) || [];
  } catch (e) {
    return [];
  }
}

/**
 * Guarda los avatares subidos en localStorage
 */
function saveUserAvatars(avatars) {
  localStorage.setItem('zombieTK_userAvatars', JSON.stringify(avatars));
}

/**
 * Obtiene el avatar actual del usuario
 */
function getCurrentAvatar() {
  return localStorage.getItem('zombieTK_avatar') || DEFAULT_AVATAR;
}

/**
 * Guarda el avatar seleccionado en localStorage
 */
function saveAvatar(avatarUrl) {
  localStorage.setItem('zombieTK_avatar', avatarUrl);
  updateAvatarEverywhere(avatarUrl);
}

/**
 * Actualiza el avatar en todas las imágenes de la página
 */
function updateAvatarEverywhere(avatarUrl) {
  const profileImg = document.getElementById('profileAvatarImg');
  const headerImg = document.getElementById('headerAvatarImg');
  const currentImg = document.getElementById('avatarCurrentImg');
  
  if (profileImg) profileImg.src = avatarUrl;
  if (headerImg) headerImg.src = avatarUrl;
  if (currentImg) currentImg.src = avatarUrl;
}

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
 * Abre el modal de selección de avatar
 */
function openAvatarModal() {
  const modal = document.getElementById('avatarModal');
  const grid = document.getElementById('avatarGrid');
  const userGrid = document.getElementById('userAvatarGrid');
  const userSection = document.getElementById('userAvatarsSection');
  const userCount = document.getElementById('userAvatarsCount');
  const uploadBtn = document.getElementById('uploadBtnLabel');
  const uploadHint = document.getElementById('uploadHint');
  const uploadWarning = document.getElementById('uploadLimitWarning');
  
  if (!modal || !grid) return;
  
  const currentAvatar = getCurrentAvatar();
  const userAvatars = getUserAvatars();
  
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
  
  // ===== GENERAR AVATARES SUBIDOS =====
  if (userGrid) {
    userGrid.innerHTML = '';
  }
  
  if (userAvatars.length > 0) {
    if (userSection) userSection.style.display = 'block';
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
      
      // Botón de eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'avatar-delete-btn';
      deleteBtn.innerHTML = '✕';
      deleteBtn.title = 'Eliminar esta foto';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteUserAvatar(index);
      };
      
      // Badge indicador
      const badge = document.createElement('div');
      badge.className = 'avatar-uploaded-badge';
      badge.innerHTML = '📸';
      badge.title = 'Foto subida por ti';
      
      wrapper.appendChild(img);
      wrapper.appendChild(deleteBtn);
      wrapper.appendChild(badge);
      userGrid.appendChild(wrapper);
    });
  } else {
    if (userSection) userSection.style.display = 'none';
  }
  
  // ===== CONTROLAR LÍMITE DE UPLOAD =====
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
  
  // Mostrar avatar actual
  const currentImg = document.getElementById('avatarCurrentImg');
  if (currentImg) {
    currentImg.src = currentAvatar;
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de avatar
 */
function closeAvatarModal() {
  const modal = document.getElementById('avatarModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Selecciona un avatar (predefinido o subido)
 */
function selectAvatar(avatarUrl, element, type, userIndex = null) {
  // Quitar selección de todos los avatares
  document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Seleccionar el actual
  if (element) element.classList.add('selected');
  
  // Guardar y aplicar
  saveAvatar(avatarUrl);
  showToast('✅ Avatar actualizado correctamente');
  
  // Cerrar modal después de un momento
  setTimeout(() => {
    closeAvatarModal();
  }, 500);
}

/**
 * Elimina un avatar subido por el usuario
 */
function deleteUserAvatar(index) {
  const userAvatars = getUserAvatars();
  const currentAvatar = getCurrentAvatar();
  const avatarToDelete = userAvatars[index];
  
  // Confirmar eliminación
  const confirmDelete = confirm('¿Estás seguro de que quieres eliminar esta foto?');
  if (!confirmDelete) return;
  
  // Si el avatar eliminado es el actual, cambiar al default
  if (avatarToDelete === currentAvatar) {
    saveAvatar(DEFAULT_AVATAR);
    showToast('🗑️ Foto eliminada. Avatar restablecido al predeterminado.');
  } else {
    showToast('🗑️ Foto eliminada correctamente');
  }
  
  // Eliminar del array
  userAvatars.splice(index, 1);
  saveUserAvatars(userAvatars);
  
  // Re-renderizar modal
  openAvatarModal();
}

/**
 * Elimina TODOS los avatares subidos
 */
function clearAllUserAvatars() {
  const userAvatars = getUserAvatars();
  if (userAvatars.length === 0) return;
  
  const currentAvatar = getCurrentAvatar();
  const isCurrentUserAvatar = userAvatars.includes(currentAvatar);
  
  const confirmDelete = confirm(`¿Eliminar las ${userAvatars.length} fotos subidas?`);
  if (!confirmDelete) return;
  
  // Si el avatar actual es uno de los subidos, cambiar al default
  if (isCurrentUserAvatar) {
    saveAvatar(DEFAULT_AVATAR);
  }
  
  saveUserAvatars([]);
  showToast('🗑️ Todas las fotos han sido eliminadas');
  
  // Re-renderizar modal
  openAvatarModal();
}

/**
 * Maneja la subida de imagen desde la galería
 */
function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const userAvatars = getUserAvatars();
  
  // Validar límite
  if (userAvatars.length >= MAX_USER_AVATARS) {
    showToast(`⚠️ Límite alcanzado: máximo ${MAX_USER_AVATARS} fotos`);
    event.target.value = '';
    return;
  }
  
  // Validar tipo
  if (!file.type.startsWith('image/')) {
    showToast('❌ Solo se permiten imágenes');
    event.target.value = '';
    return;
  }
  
  // Validar tamaño (2MB)
  if (file.size > 2 * 1024 * 1024) {
    showToast('❌ La imagen es muy grande (máx 2MB)');
    event.target.value = '';
    return;
  }
  
  // Leer la imagen
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    
    // Verificar si ya existe (evitar duplicados)
    if (userAvatars.includes(dataUrl)) {
      showToast('⚠️ Esta imagen ya está en tu galería');
      event.target.value = '';
      return;
    }
    
    // Agregar al array
    userAvatars.push(dataUrl);
    saveUserAvatars(userAvatars);
    
    // Seleccionar automáticamente el nuevo avatar
    saveAvatar(dataUrl);
    showToast(`✅ Foto subida correctamente (${userAvatars.length}/${MAX_USER_AVATARS})`);
    
    // Re-renderizar modal para mostrar la nueva foto
    setTimeout(() => {
      openAvatarModal();
    }, 500);
  };
  reader.readAsDataURL(file);
  
  // Limpiar input para permitir subir la misma imagen otra vez si se elimina
  event.target.value = '';
}

/**
 * Actualiza las estadísticas del usuario
 */
function updateStats() {
  const statFavorites = document.getElementById('statFavorites');
  if (statFavorites) {
    statFavorites.textContent = favorites.length;
  }
  
  const statViewed = document.getElementById('statViewed');
  const viewedCount = parseInt(localStorage.getItem('zombieTK_viewed') || '0');
  if (statViewed) {
    statViewed.textContent = viewedCount;
  }
  
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
  const currentName = document.getElementById('profileName').textContent;
  const newName = prompt('Ingresa tu nuevo nombre:', currentName);
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
      body: `<h4>Idioma de la aplicación</h4>
             <p>Selecciona el idioma en el que deseas ver Zombie-TK:</p>
             <ul>
               <li>🇪🇸 Español (Actual)</li>
               <li>🇺🇸 English</li>
               <li>🇧🇷 Português</li>
               <li>🇫🇷 Français</li>
             </ul>
             <p><strong>Nota:</strong> Esta función estará disponible en la próxima actualización.</p>`
    },
    notificaciones: {
      title: '🔔 Notificaciones',
      body: `<h4>Tipos de notificaciones</h4>
             <ul>
               <li>✅ Nuevos estrenos y lanzamientos</li>
               <li>✅ Actualizaciones de contenido favorito</li>
               <li>✅ Mensajes del soporte técnico</li>
               <li>✅ Ofertas y promociones especiales</li>
             </ul>
             <p><strong>Estado actual:</strong> Notificaciones desactivadas</p>`
    },
    privacidad: {
      title: '🔒 Privacidad',
      body: `<h4>Control de privacidad</h4>
             <p>Gestiona quién puede ver tu actividad en Zombie-TK:</p>
             <ul>
               <li>👁️ Perfil público/privado</li>
               <li>⭐ Lista de favoritos visible</li>
               <li>📊 Estadísticas de visualización</li>
               <li>🔍 Historial de búsqueda</li>
             </ul>`
    },
    descargas: {
      title: '⬇️ Descargas',
      body: `<h4>Calidad de descarga</h4>
             <ul>
               <li>📱 Baja (480p) - Ahorra datos</li>
               <li>💻 Media (720p) - Balance calidad/tamaño</li>
               <li>🖥️ Alta (1080p) - Máxima calidad</li>
             </ul>
             <p>Las descargas se guardan en: <code>/ZombieTK/Downloads/</code></p>`
    },
    tv: {
      title: '📺 Instalar en un TV',
      body: `<h4>Dispositivos compatibles</h4>
             <ul>
               <li>📺 Smart TV (Samsung, LG, Sony)</li>
               <li>🎮 Consolas (PlayStation, Xbox)</li>
               <li>📱 Chromecast / AirPlay</li>
               <li>🖥️ Android TV / Apple TV</li>
             </ul>
             <h4>Código de vinculación</h4>
             <p style="font-size: 24px; text-align: center; color: #a78bfa; font-weight: bold; padding: 15px; background: rgba(109, 40, 217, 0.2); border-radius: 8px;">ZTK-2024-XXXX</p>`
    },
    acerca: {
      title: 'ℹ️ Acerca de Zombie-TK',
      body: `<h4>Zombie-TK+</h4>
             <p>La plataforma definitiva para fans del género zombie.</p>
             <h4>Versión</h4>
             <p><strong>Versión 1.0.43</strong> (Noviembre 2024)</p>
             <h4>Contacto</h4>
             <p>📧 punk_dead_rp@hotmail.com</p>`
    },
    actualizar: {
      title: '📱 Buscar actualizaciones',
      body: `<h4>Versión actual</h4>
             <p style="font-size: 18px; color: #a78bfa; font-weight: bold;">v1.0.43</p>
             <p>✅ Estás usando la versión más reciente.</p>
             <button onclick="checkForUpdates()" style="width: 100%; padding: 12px; background: #6d28d9; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px;">Buscar actualizaciones</button>`
    },
    contacto: {
      title: '✉️ Contactar soporte',
      body: `<h4>Métodos de contacto</h4>
             <ul>
               <li>📧 Email: <a href="mailto:punk_dead_rp@hotmail.com" style="color: #a78bfa;">punk_dead_rp@hotmail.com</a></li>
               <li>💬 Telegram: @ZombieTKSupport</li>
             </ul>
             <p>Tiempo de respuesta: 24-48 horas</p>`
    },
    'cambiar-cuenta': {
      title: '🔄 Cambiar de cuenta',
      body: `<h4>Cuenta actual</h4>
             <p><strong>Usuario:</strong> ZombieFan</p>
             <p><strong>Email:</strong> zombiefan@zombie-tk.com</p>
             <button onclick="logout()" style="width: 100%; padding: 12px; background: #dc2626; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px;">Cerrar sesión</button>`
    }
  };
  
  return contents[section] || { title: 'Configuración', body: '<p>Opción no disponible.</p>' };
}

/**
 * Busca actualizaciones
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
 * Carga el perfil del usuario
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
  
  // Cargar y mostrar avatar en todas partes
  const currentAvatar = getCurrentAvatar();
  updateAvatarEverywhere(currentAvatar);
  
  // Menú hamburguesa
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  // Cerrar modales al hacer clic fuera
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
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
      closeSettingsModal();
      closeAvatarModal();
    }
  });
  
  console.log('👤 Página de Cuenta Zombie-TK cargada');
  console.log('🖼️ Avatar actual:', currentAvatar);
  console.log('📸 Avatares subidos:', getUserAvatars().length);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
