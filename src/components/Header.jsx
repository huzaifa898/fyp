import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "HOW IT WORKS", link: "/" },
        { name: "INVESTORS", link: "/investors" },
        { name: "ENTREPRENEURS", link: "/entrepreneurs" },
        { name: "CONTACT US", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className='shadow-md w-full h-30 fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600' />
                    <span className='font-abc'>IERS</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-bold font-abc'>
                                <Link to={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                    <button onClick={handleRegister} className='btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static font-abc'>Register</button>
                    <button onClick={handleLogin} className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static font-abc'>Login</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
