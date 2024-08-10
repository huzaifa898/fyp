import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaDribbble } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-200 py-8 flex flex-col justify-center" style={{ height: '200px' }}>
      <div className="container mx-auto px-4 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="flex gap-2 mb-4 md:mb-0">
          <BookOpenIcon className='w-8 h-8 text-teal-600' />
            <Link to="/" className="text-teal-400 font-bold text-2xl font-palanquin">IEERS</Link>
          </div>
          <div className="flex space-x-4 md:space-x-8 font-montserrat">
            
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <Link to="/" className="hover:text-teal-300 transition-colors">About</Link>
            <Link to="/" className="hover:text-teal-300 transition-colors">How It Works</Link>
            <Link to="/investors" className="hover:text-teal-300 transition-colors">Investors</Link>
            <Link to="/entrepreneurs" className="hover:text-teal-300 transition-colors">Entrepreneurs</Link>
            <Link to="/contact" className="hover:text-teal-300 transition-colors">Contact</Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
        
            <button onClick={() => window.open('https://facebook.com', '_blank')} className="hover:text-teal-300 transition-colors">
              <FaFacebookF size={20} />
            </button>
            <button onClick={() => window.open('https://twitter.com', '_blank')} className="hover:text-teal-300 transition-colors">
              <FaTwitter size={20} />
            </button>
            <button onClick={() => window.open('https://plus.google.com', '_blank')} className="hover:text-teal-300 transition-colors">
              <FaGooglePlusG size={20} />
            </button>
            <button onClick={() => window.open('https://pinterest.com', '_blank')} className="hover:text-teal-300 transition-colors">
              <FaPinterestP size={20} />
            </button>
            <button onClick={() => window.open('https://dribbble.com', '_blank')} className="hover:text-teal-300 transition-colors">
              <FaDribbble size={20} />
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-lg font-montserrat">© {new Date().getFullYear()} IERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
