import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  SearchRoot } from './pages/SearchRoot';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchRoot />
  </React.StrictMode>
);
