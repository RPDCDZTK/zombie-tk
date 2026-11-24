import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Hacer funciones globales para que cualquier script pueda usarlas
window.firebaseAuth = {
  auth: auth,
  
  checkAuth: function(callback) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('✅ Usuario autenticado:', user.email);
        window.ZOMBIE_USER = {
          email: user.email,
          name: user.displayName || 'ZombieFan',
          uid: user.uid
        };
        if (callback) callback(user);
      } else {
        console.log('❌ No hay usuario');
        window.ZOMBIE_USER = null;
        if (callback) callback(null);
      }
    });
  },
  
  logout: async function() {
    try {
      await signOut(auth);
      console.log('👋 Sesión cerrada');
      window.location.href = 'login.html';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Error al cerrar sesión');
    }
  }
};

console.log('🔐 auth.js cargado');
