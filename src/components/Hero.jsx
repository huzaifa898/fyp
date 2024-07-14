import React from 'react';
import hero from '../images/hero.jpg'; // replace with your own image
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex justify-center items-center relative"
    >
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${hero})`,
          filter: 'brightness(0.5)', // reduce brightness of the image only
          zIndex: -1, // send the image to the back
        }}
      ></div>
      <div className="container mx-auto p-4 md:p-8 lg:p-12 xl:p-16">
        <div className="flex flex-col items-center text-center mt-48">
          <h1 className="text-xl font-mono font-light font-medium md:text-6xl lg:text-7xl xl:text-5xl tracking-tighter text-white font-abc">
            CONNECTING INVESTORS WITH <span className='text-secondary  text-6xl font-abc'>PROMISING</span>  VENTURES
          </h1>
          
          <p className="mt-6 text-lg md:text-xl tracking-tighter lg:text-2xl xl:text-xl text-white font-abc">
            Welcome to IERRS, a cutting-edge platform designed to
            revolutionize the way investors and entrepreneurs connect.
          </p>
          <h2 className="text-2xl font-bold mt-5 md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight ">
            <span className="text-blue-500">I</span>
            <span className="text-green-500">E</span>
            <span className="text-yellow-500">R</span>
            <span className="text-red-500">R</span>
            <span className="text-purple-500">S</span>
          </h2>
          <Link to="/learn-more"> {/* Replace '/about' with your desired route */}
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-abc py-2 px-8 rounded mt-8 font-abc"
            >
              Learn More
            </button>
          </Link>
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