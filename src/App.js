import React, { useEffect } from 'react';
import { messaging, getToken } from './firebase';
import beyyondlogo from "./beyyondfavicon.png"
import './App.css';
import { Link } from "react-router-dom";


function App() {
    useEffect(() => {
    const requestPermissionAndGetToken = async () => {
      try {
        // Request notification permission
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Notification permission granted.');

          // Get FCM token
          const token = await getToken(messaging, { vapidKey: 'YOUR_VAPID_PUBLIC_KEY' });
          console.log('Token:', token);
        } else {
          console.error('Notification permission denied.');
        }
      } catch (error) {
        console.error('Permission or token retrieval failed:', error);
      }
    };

    requestPermissionAndGetToken();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={beyyondlogo} className="App-logo" alt="logo" />
        <p>
          About Beyyond
        </p>
        <Link to='/about'>
          About
        </Link>


      </header>
    </div>
  );
}

export default App;
