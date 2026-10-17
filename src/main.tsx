import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CertificationsPage } from './pages/CertificationsPage';
import './index.css';

// Simple client-side routing
const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')!).render(
  path === '/certifications' ? <CertificationsPage /> : <App />
);
