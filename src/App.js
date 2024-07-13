import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Investors from "./components/Investors";
import Entrepreneurs from "./components/Entrepreneurs";
import Contact from "./components/Contact";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Scroll from './components/Scroll'; // Import your scroll component here

function App() {
  return (
    <div>
      <Scroll /> {/* Render your ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
