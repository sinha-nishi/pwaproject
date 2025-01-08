import React, { useEffect } from 'react';
import { messaging } from "./firebase"; // Import messaging instance
import { getToken } from "firebase/messaging"; 
import beyyondlogo from "./beyyondfavicon.png";
import './App.css';
import { Link } from "react-router-dom";
 // Ensure firebase is initialized here

function App() {
  const requestPermissionAndGetToken = async () => {
    try {
      // Request permission for notifications
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        const token = await getToken(messaging, {
          vapidKey: "BN7qju_D83VdPTv8ZFYKIPrxeBh8FWylNEBCkSRiJWr29csegrKVmRLoo5vmfj5rdyqN-JlOQxGNW3YhFoVbi24", // Replace with your VAPID key
        });
        if (token) {
          console.log("FCM Token:", token);
        } else {
          console.error("Failed to retrieve FCM token.");
        }
      } else {
        console.error("Notification permission denied.");
      }
    } catch (error) {
      console.error("Error during permission or token retrieval:", error);
    }
  };

  useEffect(() => {
    requestPermissionAndGetToken();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={beyyondlogo} className="App-logo" alt="logo" />
        <p>About Beyyond</p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default App;
