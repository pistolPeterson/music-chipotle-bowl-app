import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import <SaltProvider>
import { SaltProviderNext } from '@salt-ds/core';

// Import theme CSS
import '@salt-ds/theme/index.css';

createRoot(document.getElementById('root')).render(
  <SaltProviderNext
    mode="dark"
    accent="teal"
    corner="rounded"
    headingFont="Amplitude"
    actionFont="Amplitude"
  >
    <App />
  </SaltProviderNext>,
);
