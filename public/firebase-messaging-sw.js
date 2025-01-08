// Import the Firebase SDK for the messaging service
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVs4YKkngz-yirDTLiu31C0uQLYPDo0Lc",
  authDomain: "pwa-project-30eab.firebaseapp.com",
  projectId: "pwa-project-30eab",
  storageBucket: "pwa-project-30eab.firebasestorage.app",
  messagingSenderId: "817680852300",
  appId: "1:817680852300:web:3277939a226bc6bcda5be9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  // Customize notification or perform actions based on payload
});
