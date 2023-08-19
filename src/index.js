import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={`${window.location.origin}/Admin`}
    audience={process.env.REACT_APP_AUTH_AUDIENCE}
  >
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Auth0Provider>,
);

reportWebVitals();
