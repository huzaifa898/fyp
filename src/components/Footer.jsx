import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-white font-bold text-2xl">IERS</a>
          </div>
          <div className="flex space-x-4 md:space-x-8">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">How Its Work</a>
            <a href="#" className="hover:text-white">Investors </a>
            <a href="#" className="hover:text-white">Enterprenurs </a>
            <a href="#" className="hover:text-white">Contact  </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaGooglePlusG size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaPinterestP size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">Copyright by IERS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;