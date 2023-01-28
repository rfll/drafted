import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import DraftProvider from './providers/DraftProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DraftProvider>
    <App />
  </DraftProvider>
   </React.StrictMode>
);
