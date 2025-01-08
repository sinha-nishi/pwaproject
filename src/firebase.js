import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCVs4YKkngz-yirDTLiu31C0uQLYPDo0Lc",
    authDomain: "pwa-project-30eab.firebaseapp.com",
    projectId: "pwa-project-30eab",
    storageBucket: "pwa-project-30eab.firebasestorage.app",
    messagingSenderId: "817680852300",
    appId: "1:817680852300:web:3277939a226bc6bcda5be9"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = getMessaging(firebaseApp);

export { messaging, getToken };
