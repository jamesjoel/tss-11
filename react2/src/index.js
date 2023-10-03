import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// < >
