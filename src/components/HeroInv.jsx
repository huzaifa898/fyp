import React from 'react';
import heroinv1 from '../images/heroinv1.jpg'; // Replace with your own image

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center flex justify-center items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroinv1})`,
          filter: 'brightness(0.4)', // Adjust brightness for better text visibility
          zIndex: -1, // Send the image to the back
        }}
      ></div>
      <div className="container mx-auto p-4 md:p-8 lg:p-12 xl:p-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 leading-tight font-montserrat">
            INVEST SMART <span className="text-teal-300">IMPACT</span> BIG
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-white tracking-tight font-palanquin">
            Welcome to <span className="font-semibold text-teal-500">IERRS</span>, a cutting-edge platform designed to
            revolutionize the way  <span className="font-semibold text-teal-500">Investor and Enterpeneur</span> connect.
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 font-montserrat">
            <span className="text-teal-500">I</span>
            <span className="text-teal-400">E</span>
            <span className="text-teal-300">R</span>
            <span className="text-teal-200">R</span>
            <span className="text-teal-100">S</span>
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-sm text-teal-400 font-palanquin">
          &copy; 2023 <span className="font-semibold text-teal-500">IERRS</span>. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Hero;
