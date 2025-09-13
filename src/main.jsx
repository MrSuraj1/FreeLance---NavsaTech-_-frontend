import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the 'client' import
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';  // Your main App component
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));  // createRoot instead of render
root.render(
  <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
    <App />
   
  </BrowserRouter>
);
