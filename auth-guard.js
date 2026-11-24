/* ============================================
   ZOMBIE-TK - Guard de Autenticación
   Protege index.html y páginas internas
   ============================================ */
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Ocultar contenido hasta verificar
document.body.style.visibility = 'hidden';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Autenticado: mostrar contenido
    document.body.style.visibility = 'visible';
    console.log('✅ Usuario autenticado:', user.email);
    
    // Guardar datos del usuario para uso global
    window.ZOMBIE_USER = {
      email: user.email,
      name: user.displayName || 'ZombieFan',
      uid: user.uid
    };
    
    // Disparar evento para que otros scripts lo escuchen
    window.dispatchEvent(new CustomEvent('zombieAuthReady', { detail: user }));
  } else {
    // No autenticado: redirigir al login
    console.log('❌ Sin sesión, redirigiendo a login.html');
    window.location.href = 'login.html';
  }
});
