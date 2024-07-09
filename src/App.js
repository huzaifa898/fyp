// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import What from "./components/What";
import Qoutes from "./components/Qoutes";
import Work from "./components/Work";
import Motivation from "./components/Motivation";
import Footer from "./components/Footer";
import Investors from "./components/Investors";
import Entrepreneurs from "./components/Entrepreneurs";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <What />
              <Qoutes />
              <Work />
              <Motivation />
              <Footer />
            </>
          } />
          <Route path="/investors" element={<Investors />} />
          <Route path="/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
