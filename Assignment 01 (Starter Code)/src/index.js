import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LocalStyles from './components/localCss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalStyles>
    <App />
    </LocalStyles>
  </React.StrictMode>
);
