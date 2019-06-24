import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/container/App';
import { StoreProvider } from './data/Store';

ReactDOM.render(
  <StoreProvider>
    <App>
    </App>
  </StoreProvider>
, document.getElementById('root'));
