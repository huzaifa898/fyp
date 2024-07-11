import React from 'react';

const HomePageSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://organizenapratica.com.br/wp-content/uploads/2021/02/Produtividade-e-trabalho-em-equipe.jpg)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white md:text-6xl mt-96 font-abc">
            EMPOWERING VISIONARIES
          </h2>
          <p className="mt-8 text-xl font-abc font-bold text-white md:text-3xl">
            to connect, collaborate, and catalyze innovation!
          </p>
          <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 font-abc rounded-full focus:outline-none focus:shadow-outline">
            GET QUOTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;