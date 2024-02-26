import React from 'react';
import ReactDOM from 'react-dom';  // Correct import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/cal';
import Length from './components/length';
import BMI from './components/BMI';
import Temperature from './components/temp';
import Contact from './components/nav/contact';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Length" element={<Length />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/temp" element={<Temperature />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
