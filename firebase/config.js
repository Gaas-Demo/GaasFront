import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDdCqZXQ4y7kRcnrkZyrtAYUuicIdqJV6I",
    authDomain: "cardb-692ef.firebaseapp.com",
    projectId: "cardb-692ef",
    storageBucket: "cardb-692ef.firebasestorage.app",
    messagingSenderId: "388933584370",
    appId: "1:388933584370:web:8987d36817a7560aaf576b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const profile = 'profile'

export {
    auth, 
    profile,
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
};