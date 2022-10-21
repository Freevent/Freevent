import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles/application.scss';

//possibly need to wrap app with reactRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider> 
)