import React from 'react';
import { Link } from 'react-router-dom';
const HomePageSection = () => {
  return (
    <section
      className="relative  h-4/5 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2018/08/15/08/49/company-3607511_1280.jpg)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Link to="/getqoutes">
          <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-96 mb-4 py-3 px-6 font-abc rounded-full focus:outline-none focus:shadow-outline">
            SHARE SUCCESS
          </button>
          </Link>
         
          
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;