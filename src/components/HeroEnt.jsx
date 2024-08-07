import React from 'react';
import heroent from '../images/heroent.jpg'; // replace with your own image
const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex justify-center items-center relative"
    >
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${heroent})`,
          filter: 'brightness(0.5)', // reduce brightness of the image only
          zIndex: -1, // send the image to the back
        }}
      ></div>
      <div className="container mx-auto p-4 md:p-8 lg:p-12 xl:p-16">
        <div className="flex flex-col items-center text-center mt-48">
          <h1 className="text-xl font-mono font-light font-medium md:text-6xl lg:text-7xl xl:text-5xl text-white font-abc">
          FROM CONCEPT  <span className='text-secondary  text-6xl font-abc'> TO </span>  CONQUEST
          </h1>
          
          <p className="mt-6 text-lg tracking-tighter md:text-xl lg:text-2xl xl:text-xl text-white font-abc">
            Welcome to IERRS, a cutting-edge platform designed to
            revolutionize the way investors and entrepreneurs connect.
          </p>
          <h2 className="text-2xl font-bold mt-5 md:text-4xl lg:text-5xl xl:text-6xl text-white">
            <span className="text-blue-500">I</span>
            <span className="text-green-500">E</span>
            <span className="text-yellow-500">R</span>
            <span className="text-red-500">R</span>
            <span className="text-purple-500">S</span>
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="text-sm">
          &copy; 2023 IERRS. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Hero;