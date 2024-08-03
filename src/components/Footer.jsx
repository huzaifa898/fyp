import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaDribbble } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-green-600 font-bold text-2xl font-abc">IERS</Link>
          </div>
          <div className="flex space-x-4 md:space-x-8 font-montserrat">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/" className="hover:text-white">About</Link>
            <Link to="/" className="hover:text-white">How It Works</Link>
            <Link to="/investors" className="hover:text-white">Investors</Link>
            <Link to="/entrepreneurs" className="hover:text-white">Entrepreneurs</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
          <div className="flex space-x-4 ">
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
          <p className="text-lg font-montserrat">Copyright by IERS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
