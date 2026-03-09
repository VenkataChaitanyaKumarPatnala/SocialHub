import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Notifications from './pages/Notifications/Notifications';
import Messages from './pages/Messages/Messages';
import { api } from './utils/api';
import './styles/globals.css';

function App() {
  const [notifCount, setNotifCount] = useState(0);

  useEffect(() => {
    api.fetchNotifications().then((ns) => {
      setNotifCount(ns.filter((n) => !n.read).length);
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout notifCount={notifCount}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '80px 20px' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔍</div>
                <h2 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)' }}>Page not found</h2>
                <p style={{ color: 'var(--text-muted)' }}>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
