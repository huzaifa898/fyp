import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpenIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated imports

const Header = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "HOW IT WORKS", link: "/how-it-works" },
    { name: "INVESTORS", link: "/investors" },
    { name: "ENTREPRENEURS", link: "/entrepreneurs" },
    { name: "CONTACT US", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='shadow-md w-full h-16 fixed top-0 left-0 z-10 bg-gray-100'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='flex items-center gap-2'>
          <BookOpenIcon className='w-8 h-8 text-teal-600' />
          <span className='font-montserrat text-2xl font-bold text-teal-600'>IEERS</span>
        </div>
        {/* Menu icon */}
        <div 
          onClick={() => setOpen(!open)} 
          className='absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7 text-teal-600'
        >
          {open ? <XMarkIcon className='w-7 h-7' /> : <Bars3Icon className='w-7 h-7' />} {/* Fixed icon */}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <NavLink 
                to={link.link} 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-teal-600 font-bold' 
                    : 'text-gray-600 hover:text-teal-500 duration-500'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <button 
            onClick={handleRegister} 
            className='bg-teal-600 text-white md:ml-8 font-semibold px-4 py-2 rounded-lg duration-500 hover:bg-teal-700'
          >
            Register
          </button>
          <button 
            onClick={handleLogin} 
            className='bg-coral-red text-white md:ml-8 font-semibold px-4 py-2 rounded-lg duration-500 hover:bg-red-700'
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
