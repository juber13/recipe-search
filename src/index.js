import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import MyContext from './context/MyContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContext>
);