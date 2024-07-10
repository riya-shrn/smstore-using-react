import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Card from './components/Card';
import Electronics from './pages/Electronics';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Lgin from './pages/Lgin';
import Registration from './pages/Registration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <Card/> */}
    {/* <Electronics/> */}
    {/* <Slider/> */}
    {/* <Footer/> */}
    {/* <Lgin/> */}
    {/* <Registration/> */}
  </React.StrictMode>
);


reportWebVitals();
