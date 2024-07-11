import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-white font-bold text-2xl font-abc">IERS</a>
          </div>
          <div className="flex space-x-4 md:space-x-8 font-abc">
            <a href="/home" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/howitswork" className="hover:text-white">How It Works</a>
            <a href="/investors" className="hover:text-white">Investors</a>
            <a href="/entrepreneurs" className="hover:text-white">Entrepreneurs</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => window.open('https://facebook.com', '_blank')} className="hover:text-white">
              <FaFacebookF size={20} />
            </button>
            <button onClick={() => window.open('https://twitter.com', '_blank')} className="hover:text-white">
              <FaTwitter size={20} />
            </button>
            <button onClick={() => window.open('https://plus.google.com', '_blank')} className="hover:text-white">
              <FaGooglePlusG size={20} />
            </button>
            <button onClick={() => window.open('https://pinterest.com', '_blank')} className="hover:text-white">
              <FaPinterestP size={20} />
            </button>
            <button onClick={() => window.open('https://dribbble.com', '_blank')} className="hover:text-white">
              <FaDribbble size={20} />
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm font-abc">Copyright by IERS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
