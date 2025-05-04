import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import BillingPage from './pages/BillingPage';
import ComponentsPage from './pages/ComponentsPage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Landing/Preview Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Dashboard Layout with nested routes */}
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="components" element={<ComponentsPage />} />
          </Route>
          
          {/* Redirect /dashboard to /dashboard */}
          <Route path="/home" element={<Navigate to="/dashboard" replace />} />
          
          {/* Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;