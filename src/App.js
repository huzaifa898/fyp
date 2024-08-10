import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Investors from "./components/Investors";
import Entrepreneurs from "./components/Entrepreneurs";
import Contact from "./components/Contact";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Scroll from './components/Scroll'; 
import LearnMore from './components/Learnmore';
import Getqoutes from './components/Getqoutes';
import Footer from './components/Footer';
import Pannel from './components/Pannel';
import About from './components/About';
import Howitwork from './components/Howitwork';
function App() {
  return (
    <div>
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works'element={<Howitwork/>}/>
        <Route path="/investors" element={<Investors />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learn-more" element={<LearnMore />}/>
        <Route path='/getqoutes' element={<Getqoutes/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/pannel' element={<Pannel/>}/>
      </Routes>
    </div>
  );
}

export default App;
