// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

// Replace the values below with the ones from your Firebase Project Settings
const firebaseConfig = {
    apiKey: "AIzaSyCH9cKz52Rb5WlRiVlfb-Gx-eCruWKB1fM",
    authDomain: "morph-efe7c.firebaseapp.com",
    projectId: "morph-efe7c",
    storageBucket: "morph-efe7c.firebasestorage.app",
    messagingSenderId: "704216698020",
    appId: "1:704216698020:web:da1bb7577fe9330b25aa31"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Setup Firebase Auth
export const auth = getAuth(app)

// solving sign in with popup error
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})


// Export auth helpers
export { signInWithPopup, signOut }
