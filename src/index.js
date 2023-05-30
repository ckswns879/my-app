import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseRef from './UseRef';
//import UseMemo from './UseMemo';
//import UseEffect from './UseEffect';
//import UseState from './UseState';
//import UseStateTest from './UseStateTest';
//import Apptest from './Apptest';
import ComponentsStyle from './Components_Style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Apptest /> */}
    {/* <UseState /> */}
    {/* <UseStateTest /> */}
    {/* <UseEffect /> */}
    {/* <UseMemo /> */}
    {/* <UseRef /> */}
    <ComponentsStyle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
