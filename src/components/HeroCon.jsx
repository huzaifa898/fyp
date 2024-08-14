import React from 'react';
import herocon from '../images/herocon.jpg'; // replace with your own image

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background Image with Gradient Overlay and Blur Effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${herocon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) blur(4px)', // Apply brightness and blur
          zIndex: -1,
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-teal-500 to-teal-600 opacity-60"
          style={{
            zIndex: -1,
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 shadow-lg">
          CONTACT US <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
            WE ARE LISTENING
          </span>
        </h1>

        <p className="mt-6 font-palanquin text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight leading-relaxed max-w-4xl">
          Welcome to IERRS, a cutting-edge platform designed to revolutionize the way investors and entrepreneurs connect.
        </p>

        <h2 className="mt-8 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold shadow-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">I</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">E</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">E</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">R</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">S</span>
        </h2>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-sm text-center">
        <p className="font-palanquin">© 2023 IERRS. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Hero;
