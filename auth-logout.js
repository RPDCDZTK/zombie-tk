/* ============================================
   ZOMBIE-TK - Cierre de sesión con Firebase
   Escucha el evento 'zombieLogout' del script normal
   ============================================ */
import { auth } from './firebase-config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.addEventListener('zombieLogout', async () => {
  try {
    await signOut(auth);
    console.log('👋 Sesión cerrada en Firebase');
    window.location.href = 'login.html';
  } catch (error) {
    console.error('❌ Error al cerrar sesión:', error);
    alert('Error al cerrar sesión: ' + error.message);
  }
});

console.log('🔐 auth-logout.js cargado');
