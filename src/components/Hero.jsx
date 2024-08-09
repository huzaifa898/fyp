import React from 'react';
import hero from '../images/hero.jpg'; // replace with your own image
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hero})`,
          filter: 'brightness(0.5)', // Adjust brightness for better text visibility
          zIndex: -1, // Send the image to the back
        }}
      ></div>

      <div className="relative container mx-auto p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center text-center">
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight mt-24 md:mt-32 lg:mt-64">
            CONNECTING INVESTORS WITH{' '}
            <span className="text-teal-400 text-5xl md:text-6xl lg:text-7xl font-bold">
              PROMISING
            </span>{' '}
            VENTURES
          </h1>

          <p className="text-teal-100 font-montserrat text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mt-4 md:mt-6 lg:mt-8 xl:mt-6">
            Welcome to IEERS, a cutting-edge platform designed to revolutionize the way investors and entrepreneurs connect and thrive together. Discover new opportunities and build lasting relationships in a dynamic environment.
          </p>

          {/* IEER text */}
          <div className="relative mt-12 md:mt-10 lg:mt-12">
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight flex leading-4 justify-center">
              <span className="text-teal-300">I</span>
              <span className="text-teal-400">E</span>
              <span className="text-teal-500">E</span>
              <span className="text-teal-600">R</span>
              {/* <span className="text-teal-800">S</span> */}
            </h2>
          </div>
        </div>

        <Link to="/learn-more">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 font-palanquin mt-6">
            Learn More
          </button>
        </Link>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p className="text-xs md:text-sm">
          &copy; 2024 IERRS. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Hero;
