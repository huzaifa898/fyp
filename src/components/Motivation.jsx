import React from 'react';

const Motivation = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Invest in Tomorrow' <span className='text-secondary font-cursive'>Innovators Today</span> </h2>
        <p className="text-lg text-gray-600 text-center mb-12">Lovely people with a knack for design creativity flourish here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">

            <img
              src="http://hintergrundbild.org/wallpaper/full/d/1/4/10554-motivation-wallpapers-1920x1080-fuer-telefon.jpg"
              alt="Motivational"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-black text-justify">
              As an investor, you have the opportunity to shape the future by supporting innovative startups and visionary entrepreneurs. Our platform provides you with carefully curated investment opportunities that align with your interests and goals. By leveraging our advanced matching algorithms, you can discover promising ventures that are poised for success, ensuring that your investments drive meaningful impact and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;