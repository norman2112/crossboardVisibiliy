import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key - confirmed valid until November 06, 2025
registerLicense('Ngo9BigBOggjHTQxAR8/V1JFaF5cXGRCf1JpQ3xbf1x1ZFRMZV5bRnVPIiBoS35Rc0RjWXhfc3FWRWhbWUNyVEFc');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

