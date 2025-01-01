import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { MouseFollower } from 'react-mouse-follower';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseFollower />
    <App />
  </React.StrictMode>,
)
