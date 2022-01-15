import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Warning } from './pages/Warning';

ReactDOM.render(
  <React.StrictMode>
    <Warning />
  </React.StrictMode>,
  document.getElementById('root')
);