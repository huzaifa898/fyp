import React from 'react';
import { Link } from 'react-router-dom';

const HomePageSection = () => {
  return (
    <section
    id='block'
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2018/08/15/08/49/company-3607511_1280.jpg)`,
      }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">
            Achieve Your Goals with Us
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover the path to success and share your achievements.
          </p>
          <Link to="/getquotes">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
              SHARE SUCCESS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
