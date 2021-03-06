import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/contacts/store';

import App from './components/App/App.jsx';

import "modern-normalize/modern-normalize.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);