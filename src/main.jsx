// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n'; // 🌍 i18n-i BURADA əlavə et

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
