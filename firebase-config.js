/* ============================================
   ZOMBIE-TK - Configuración de Firebase
   ============================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Configuración de tu proyecto Zombie-tk
const firebaseConfig = {
  apiKey: "AIzaSyAhmfIe2-ubrvTLlp4q6_PCP1B-ya4ScCA",
  authDomain: "zombie-tk-rpd.firebaseapp.com",
  projectId: "zombie-tk-rpd",
  storageBucket: "zombie-tk-rpd.firebasestorage.app",
  messagingSenderId: "139295642195",
  appId: "1:139295642195:web:96a7b445922acf9e2faca6",
  measurementId: "G-LBBBZJS8ZX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
