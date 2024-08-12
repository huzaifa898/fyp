import React from 'react';
import heroent from '../images/heroent.jpg'; // replace with your own image

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex justify-center items-center relative"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroent})`,
          filter: 'brightness(0.5)', // Reduce brightness for overlay effect
          zIndex: -1,
        }}
      ></div>
      <div className="container mx-auto p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700">
          FROM CONCEPT <span className="text-teal-500">TO</span> CONQUEST
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-8 font-palanquin">
          Welcome to <span className="font-semibold text-teal-500">IERRS</span>, a cutting-edge platform designed to
          revolutionize the way <span className="font-semibold text-teal-500">Investor and Enterpeneur</span> connect.
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-teal-600 font-montserrat">
          <span className="text-teal-500">I</span>
          <span className="text-teal-600">E</span>
          <span className="text-teal-500">R</span>
          <span className="text-teal-600">R</span>
          <span className="text-teal-500">S</span>
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-sm text-gray-300 font-palanquin">
          &copy; 2023 <span className="font-semibold text-teal-500">IERRS</span>. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Hero;
