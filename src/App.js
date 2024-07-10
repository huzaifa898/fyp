// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Investors from "./components/Investors";
import Entrepreneurs from "./components/Entrepreneurs";
import Contact from "./components/Contact";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
     
  );
}

export default App;
