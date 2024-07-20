import React from 'react';

const HomePageSection = () => {
  return (
    <section
      className="relative h-5/6 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2019/03/02/11/23/startup-4029671_1280.jpg)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-56 mb-12 py-3 px-6 font-abc rounded-full focus:outline-none focus:shadow-outline">
            GET QUOTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;