import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import QRCodeStyling from 'qr-code-styling';
import axios from 'axios';
import { URLS, API_URL } from "../../constants/constants";
import './styles.css'; // Create this file for custom styles

const Dashboard = () => {
    const navigate = useNavigate();
    const qrCodeRef = useRef(null);
    const qrCodeInstance = useRef(null);
    const email = localStorage.getItem("email");
    const user_name = localStorage.getItem("user_name");

  useEffect(() => {
    // Clear previous QR code if it exists
    if (qrCodeInstance.current) {
      qrCodeInstance.current._canvas?.remove();
    }
    // Initialize QR code
    qrCodeInstance.current = new QRCodeStyling({
      width: 200,
      height: 200,
      data: email,
      margin: 10,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q'
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 5
      },
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded'
      },
      backgroundOptions: {
        color: '#ffffff',
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#4267b2'
      },
      cornersDotOptions: {
        type: 'dot',
        color: '#4267b2'
      }
    });

    // Append QR code to the container
    if (qrCodeRef.current) {
      qrCodeInstance.current.append(qrCodeRef.current);
    }

    // Cleanup function
    return () => {
      if (qrCodeInstance.current) {
        qrCodeInstance.current._canvas?.remove();
      }
    };
  }, [email]);

  const handleLogout = async () => {
      // Add your logout logic here
      try {
          const response = await axios.get(`${API_URL}user/logout`);
          console.log('User logged out', response);
          if (response?.data?.success) {
            localStorage.clear();
            navigate(URLS.LOGIN);
          }
    } catch (error) {
        console.error("Error in Login:", error);
        throw error;
      }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">My Dashboard</h1>
          <div className="user-menu">
            <span className="welcome-text">Welcome, {user_name}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
            <div className="left-section">
            <h2>Welcome Back!</h2>
            <p className="user-email">{email}</p>
            <p>We're glad to see you again. Here's your personalized dashboard.</p>
            </div>
        </div>

        <div className="vertical-divider"></div>

        {/* <div className="content-section right-section"> */}
        <div className="right-section">
          <h3>Your Unique QR Code</h3>
          <div 
          ref={qrCodeRef} 
          id="qr-code" className="qr-code-container"></div>
          <p className="qr-hint">Scan this code for quick access</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;