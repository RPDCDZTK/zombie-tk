/* ============================================
   ZOMBIE-TK - Lógica de Autenticación con Firebase
   ============================================ */
import { auth } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Elementos del DOM
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotForm = document.getElementById('forgotForm');
const messageEl = document.getElementById('loginMessage');

// Funciones de navegación entre formularios
window.showRegister = () => {
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
  messageEl.className = 'login-message';
};

window.showLogin = () => {
  registerForm.classList.remove('active');
  forgotForm.classList.remove('active');
  loginForm.classList.add('active');
  messageEl.className = 'login-message';
};

window.showForgotPassword = () => {
  loginForm.classList.remove('active');
  forgotForm.classList.add('active');
  messageEl.className = 'login-message';
};

function showMessage(msg, type) {
  messageEl.textContent = msg;
  messageEl.className = `login-message ${type}`;
  setTimeout(() => { messageEl.className = 'login-message'; }, 5000);
}

// ==========================================
// INICIO DE SESIÓN
// ==========================================
window.handleLogin = async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    showMessage(`✅ ¡Bienvenido de vuelta, ${user.displayName || 'Superviviente'}!`, 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } catch (error) {
    let msg = '❌ Error al iniciar sesión';
    if (error.code === 'auth/user-not-found') msg = '❌ Usuario no encontrado';
    if (error.code === 'auth/wrong-password') msg = '❌ Contraseña incorrecta';
    if (error.code === 'auth/invalid-email') msg = '❌ Correo inválido';
    showMessage(msg, 'error');
  }
};

// ==========================================
// REGISTRO
// ==========================================
window.handleRegister = async (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;

  if (password !== confirmPassword) {
    showMessage('❌ Las contraseñas no coinciden', 'error');
    return;
  }
  if (password.length < 6) {
    showMessage('❌ La contraseña debe tener al menos 6 caracteres', 'error');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Guardar el nombre de usuario en el perfil de Firebase
    await updateProfile(user, { displayName: name });
    
    showMessage('✅ ¡Cuenta creada exitosamente! Bienvenido a la horda.', 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  } catch (error) {
    let msg = '❌ Error al crear la cuenta';
    if (error.code === 'auth/email-already-in-use') msg = '❌ Este correo ya está registrado';
    if (error.code === 'auth/weak-password') msg = '❌ Contraseña demasiado débil';
    showMessage(msg, 'error');
  }
};

// ==========================================
// RECUPERAR CONTRASEÑA (Simulado visualmente)
// ==========================================
window.handleForgotPassword = (e) => {
  e.preventDefault();
  showMessage('📧 En un entorno real, Firebase enviaría un correo de recuperación.', 'success');
  setTimeout(() => showLogin(), 3000);
};
