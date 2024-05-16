import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/registrationPage" element={<RegistrationPage />} />
    </Routes>
  </Router>
);
