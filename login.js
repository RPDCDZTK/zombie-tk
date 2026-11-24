/* ============================================
   ZOMBIE-TK - Sistema de Autenticación con Firebase
   VERSIÓN CORREGIDA Y FUNCIONAL
   ============================================ */

// Importar Firebase
import { auth } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

console.log('🔐 login.js cargado correctamente');

// ===== FUNCIONES DE NAVEGACIÓN ENTRE FORMULARIOS =====

// Función para mostrar formulario de registro
window.showRegister = function() {
  console.log('📝 Cambiando a formulario de registro');
  
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const forgotForm = document.getElementById('forgotForm');
  const messageEl = document.getElementById('loginMessage');
  
  if (loginForm) loginForm.classList.remove('active');
  if (registerForm) registerForm.classList.add('active');
  if (forgotForm) forgotForm.classList.remove('active');
  if (messageEl) messageEl.className = 'login-message';
};

// Función para mostrar formulario de login
window.showLogin = function() {
  console.log('🔐 Cambiando a formulario de login');
  
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const forgotForm = document.getElementById('forgotForm');
  const messageEl = document.getElementById('loginMessage');
  
  if (loginForm) loginForm.classList.add('active');
  if (registerForm) registerForm.classList.remove('active');
  if (forgotForm) forgotForm.classList.remove('active');
  if (messageEl) messageEl.className = 'login-message';
};

// Función para mostrar formulario de recuperación
window.showForgotPassword = function() {
  console.log('📧 Cambiando a formulario de recuperación');
  
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const forgotForm = document.getElementById('forgotForm');
  const messageEl = document.getElementById('loginMessage');
  
  if (loginForm) loginForm.classList.remove('active');
  if (registerForm) registerForm.classList.remove('active');
  if (forgotForm) forgotForm.classList.add('active');
  if (messageEl) messageEl.className = 'login-message';
};

// ===== FUNCIÓN AUXILIAR PARA MENSAJES =====

function showMessage(msg, type) {
  const messageEl = document.getElementById('loginMessage');
  if (messageEl) {
    messageEl.textContent = msg;
    messageEl.className = `login-message ${type}`;
    setTimeout(() => { 
      messageEl.className = 'login-message'; 
    }, 5000);
  }
}

// ===== INICIO DE SESIÓN =====

window.handleLogin = async function(event) {
  if (event) event.preventDefault();
  
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showMessage('❌ Por favor completa todos los campos', 'error');
    return;
  }

  try {
    showMessage('🔄 Iniciando sesión...', 'success');
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    showMessage(`✅ ¡Bienvenido de vuelta, ${user.displayName || 'Superviviente'}!`, 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } catch (error) {
    console.error('Error de login:', error);
    let msg = '❌ Error al iniciar sesión';
    
    if (error.code === 'auth/user-not-found') msg = '❌ Usuario no encontrado';
    else if (error.code === 'auth/wrong-password') msg = '❌ Contraseña incorrecta';
    else if (error.code === 'auth/invalid-email') msg = '❌ Correo inválido';
    else if (error.code === 'auth/invalid-credential') msg = '❌ Credenciales inválidas';
    else if (error.code === 'auth/too-many-requests') msg = '⚠️ Demasiados intentos. Intenta más tarde';
    else msg = `❌ Error: ${error.message}`;
    
    showMessage(msg, 'error');
  }
};

// ===== REGISTRO DE NUEVO USUARIO =====

window.handleRegister = async function(event) {
  if (event) event.preventDefault();
  
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;

  if (!name || !email || !password || !confirmPassword) {
    showMessage('❌ Por favor completa todos los campos', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('❌ Las contraseñas no coinciden', 'error');
    return;
  }

  if (password.length < 6) {
    showMessage('❌ La contraseña debe tener al menos 6 caracteres', 'error');
    return;
  }

  try {
    showMessage('🔄 Creando cuenta...', 'success');
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await updateProfile(user, { displayName: name });
    
    showMessage('✅ ¡Cuenta creada exitosamente! Bienvenido a la horda.', 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  } catch (error) {
    console.error('Error de registro:', error);
    let msg = '❌ Error al crear la cuenta';
    
    if (error.code === 'auth/email-already-in-use') msg = '❌ Este correo ya está registrado';
    else if (error.code === 'auth/weak-password') msg = '❌ Contraseña demasiado débil (mínimo 6 caracteres)';
    else if (error.code === 'auth/invalid-email') msg = '❌ Correo inválido';
    else msg = `❌ Error: ${error.message}`;
    
    showMessage(msg, 'error');
  }
};

// ===== RECUPERAR CONTRASEÑA =====

window.handleForgotPassword = function(event) {
  if (event) event.preventDefault();
  
  const email = document.getElementById('forgotEmail').value.trim();
  
  if (!email) {
    showMessage('❌ Por favor ingresa tu correo', 'error');
    return;
  }
  
  showMessage('📧 Función de recuperación en desarrollo', 'success');
  setTimeout(() => showLogin(), 3000);
};

// ===== VERIFICAR ESTADO DE AUTENTICACIÓN =====

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('✅ Usuario ya autenticado:', user.email);
    // Si ya está autenticado, redirigir al index
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  } else {
    console.log('❌ No hay usuario autenticado, mostrando login');
  }
});

console.log('✅ Todas las funciones de login.js están listas');
