import React from 'react';
import ReactDOM from 'react-dom';
import './assets/global-css/global.css';
import App from './App';

window.addEventListener('resize', ()=>window.location.reload());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

