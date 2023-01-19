import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './List';
import Element from './Element';
import Form from './Form';
import FormValidation from './FormValidation';
import FormValidation2 from './FormValidation2';
import Context from './Context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App msg='Hello App' />
    <App1 />
    <App2 />
    <App3 />
    <App4 />
    <Element />
    <Form />
    <FormValidation />
    <FormValidation2 />
    <Context />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
