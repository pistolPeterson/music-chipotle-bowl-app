import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import <SaltProvider>
import { SaltProvider } from '@salt-ds/core';

// Import theme CSS
import '@salt-ds/theme/index.css';

createRoot(document.getElementById('root')).render(
  <SaltProvider>
    <App />
  </SaltProvider>,
);
