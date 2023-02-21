import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.js';
import "./src/Styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);