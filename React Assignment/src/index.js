import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap5/src/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
// import Home from './Component/Home'
// import About from './Component/About'
// import Header from './Component/Header'
import HeaderNew from  './Component/Header-new'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/>
    <About/> */}
    {/* <h1>Welcome to Reactjs</h1> */}
    {/* <Header/> */}
    <HeaderNew/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
