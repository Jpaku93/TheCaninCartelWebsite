import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    projectId: "canine-cartel-2026",
    appId: "1:113292069614:web:5d540451e2db21c0db01ff",
    storageBucket: "canine-cartel-2026.firebasestorage.app",
    apiKey: "AIzaSyA_hLLnoJZZ7rAOOgWyw9p8AXbG1iUBvb4",
    authDomain: "canine-cartel-2026.firebaseapp.com",
    messagingSenderId: "113292069614",
    measurementId: "G-G599M0Q7Y2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
