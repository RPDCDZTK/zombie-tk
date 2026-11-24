/* ============================================
   ZOMBIE-TK - cuenta.js
   ============================================ */

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

// ===== FUNCIONES GLOBALES =====

window.openMenu = function() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeMenu = function() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
};

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.logout = function() {
  const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
  if (confirmLogout) {
    if (window.firebaseAuth && window.firebaseAuth.logout) {
      window.firebaseAuth.logout();
    } else {
      window.location.href = 'login.html';
    }
  }
};

window.openAvatarModal = function() {
  const modal = document.getElementById('avatarModal');
  const grid = document.getElementById('avatarGrid');
  
  if (!modal || !grid) {
    console.error('❌ Modal o grid no encontrados');
    return;
  }
  
  const currentAvatar = getCurrentAvatar();
  const userAvatars = getUserAvatars();
  
  grid.innerHTML = '';
  PREDEFINED_AVATARS.forEach((avatarUrl, index) => {
    const img = document.createElement('img');
    img.src = avatarUrl;
    img.alt = `Avatar predefinido ${index + 1}`;
    img.className = 'avatar-option';
    if (avatarUrl === currentAvatar) {
      img.classList.add('selected');
    }
    img.onclick = () => selectAvatar(avatarUrl, img);
    grid.appendChild(img);
  });
  
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
        img.onclick = () => selectAvatar(avatarUrl, img);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'avatar-delete-btn';
        deleteBtn.innerHTML = '✕';
        deleteBtn.onclick = (e) => {
          e.stopPropagation();
          deleteUserAvatar(index);
        };
        
        wrapper.appendChild(img);
        wrapper.appendChild(deleteBtn);
        userGrid.appendChild(wrapper);
      });
    } else {
      userSection.style.display = 'none';
    }
  }
  
  const currentImg = document.getElementById('avatarCurrentImg');
  if (currentImg) currentImg.src = currentAvatar;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeAvatarModal = function() {
  const modal = document.getElementById('avatarModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

window.editProfile = function() {
  const currentName = document.getElementById('profileName').textContent;
  const newName = prompt('Ingresa tu nuevo nombre:', currentName);
  if (newName && newName.trim()) {
    document.getElementById('profileName').textContent = newName.trim();
    localStorage.setItem('zombieTK_username', newName.trim());
    showToast('✅ Perfil actualizado');
  }
};

window.openSettingsModal = function(section) {
  const modal = document.getElementById('settingsModal');
  const title = document.getElementById('settingsModalTitle');
  const body = document.getElementById('settingsModalBody');
  
  if (!modal || !title || !body) return;
  
  const content = getSettingsContent(section);
  title.textContent = content.title;
  body.innerHTML = content.body;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeSettingsModal = function() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

window.handleAvatarUpload = function(event) {
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
    showToast(`✅ Foto subida (${userAvatars.length}/${MAX_USER_AVATARS})`);
    
    setTimeout(() => openAvatarModal(), 500);
  };
  reader.readAsDataURL(file);
  event.target.value = '';
};

window.clearAllUserAvatars = function() {
  const userAvatars = getUserAvatars();
  if (userAvatars.length === 0) return;
  
  const confirmDelete = confirm(`¿Eliminar las ${userAvatars.length} fotos?`);
  if (!confirmDelete) return;
  
  saveUserAvatars([]);
  saveAvatar(DEFAULT_AVATAR);
  showToast('🗑️ Fotos eliminadas');
  openAvatarModal();
};

// ===== FUNCIONES AUXILIARES =====

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

function selectAvatar(avatarUrl, element) {
  document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  if (element) element.classList.add('selected');
  saveAvatar(avatarUrl);
  showToast('✅ Avatar actualizado');
  setTimeout(() => closeAvatarModal(), 500);
}

function deleteUserAvatar(index) {
  const userAvatars = getUserAvatars();
  const currentAvatar = getCurrentAvatar();
  
  const confirmDelete = confirm('¿Eliminar esta foto?');
  if (!confirmDelete) return;
  
  if (userAvatars[index] === currentAvatar) {
    saveAvatar(DEFAULT_AVATAR);
  }
  
  userAvatars.splice(index, 1);
  saveUserAvatars(userAvatars);
  showToast('🗑️ Foto eliminada');
  openAvatarModal();
}

function getSettingsContent(section) {
  const contents = {
    idioma: { title: '🌐 Idioma', body: '<p>Disponible en la próxima actualización</p>' },
    privacidad: { title: '🔒 Privacidad', body: '<p>Disponible en la próxima actualización</p>' },
    descargas: { title: '⬇️ Descargas', body: '<p>Disponible en la próxima actualización</p>' },
    acerca: { title: 'ℹ️ Acerca de', body: '<h4>Zombie-TK+</h4><p>La plataforma definitiva para fans del género zombie.</p><p>Versión 1.0</p>' },
    actualizar: { title: '📱 Actualizar', body: '<p>Versión actual: 1.0</p><p>✅ Estás usando la versión más reciente.</p>' },
    contacto: { title: '✉️ Contacto', body: '<p>📧 zombie-tk-regepunk@outlook.com</p>' }
  };
  return contents[section] || { title: 'Configuración', body: '<p>Opción no disponible</p>' };
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
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  if (window.scrollY > 300) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
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

function loadUserProfile() {
  const savedName = localStorage.getItem('zombieTK_username');
  if (savedName) {
    const profileName = document.getElementById('profileName');
    if (profileName) profileName.textContent = savedName;
  }
}

// ===== INICIALIZACIÓN =====

function init() {
  console.log('👤 Inicializando cuenta...');
  
  window.addEventListener('scroll', handleScroll);
  updateStats();
  loadUserProfile();
  
  const currentAvatar = getCurrentAvatar();
  updateAvatarEverywhere(currentAvatar);
  
  const overlay = document.getElementById('menuOverlay');
  if (overlay) overlay.addEventListener('click', closeMenu);
  
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
  
  console.log('✅ Cuenta inicializada');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
