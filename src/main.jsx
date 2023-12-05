import React from 'react'

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'redux/store.js';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/chat-app">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
