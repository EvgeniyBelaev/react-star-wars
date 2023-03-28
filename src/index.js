import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store'

import App from '@containers/App';
import reportWebVitals from './reportWebVitals';

import '@styles/index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>      
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
