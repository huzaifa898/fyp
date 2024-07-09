// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Investors from "./components/Investors";
import Entrepreneurs from "./components/Entrepreneurs";
import Contact from "./components/Contact";
import Home from './components/Home';

function App() {
  return (
    
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
  );
}

export default App;
