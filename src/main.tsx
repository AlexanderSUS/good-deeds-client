import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthMiddleware from './authentication/AuthMiddleware';
import { store } from './store/store';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthMiddleware>
          <App />
        </AuthMiddleware>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
