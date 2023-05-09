import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store'
import {REPO_NAME} from '@constants/repo'

import ThemeProvider from '@context/ThemeProvider';
import App from '@containers/App';
import reportWebVitals from './reportWebVitals';

import '@styles/index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>      
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
