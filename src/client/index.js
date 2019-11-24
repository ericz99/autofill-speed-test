import React from 'react';
import { render } from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';

import App from './App';
import config from './config/default';
import GlobalState from './context/GlobalState';

import './styles/main.css';

render(
  <StripeProvider apiKey={config.apiKey}>
    <GlobalState>
      <App />
    </GlobalState>
  </StripeProvider>,
  document.getElementById('root')
);
