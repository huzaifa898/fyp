import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Motivation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id='block'
      className="py-16"
      style={{ 
        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.8), rgba(16, 185, 129, 0.8))', // Adjusted background gradient
        backgroundColor: '#e6f8f7', // Fallback background color
      }}
    >
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-semibold text-center mb-6 font-palanquin" data-aos="fade-up">
          Invest in Tomorrow's <span className='text-teal-200'>Innovators Today</span>
        </h2>
        <p className="font-montserrat text-2xl leading-8 mb-14 text-center" data-aos="fade-up" data-aos-delay="200">
          Lovely people with a knack for design creativity flourish here.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex items-center justify-center h-96" data-aos="fade-left">
            <img
              src="http://hintergrundbild.org/wallpaper/full/d/1/4/10554-motivation-wallpapers-1920x1080-fuer-telefon.jpg"
              alt="Motivational"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
          <div className="flex-1 h-96 flex items-center justify-center" data-aos="fade-right">
            <p className="font-montserrat text-teal-100 text-lg leading-8 text-left p-4 transition-transform transform hover:scale-105">
              Investing in startups offers an incredible opportunity to influence the future and realize significant growth. Our platform provides access to a curated selection of investment opportunities that align with your interests and financial goals. By utilizing our sophisticated matching algorithms, you can discover high-potential ventures poised for success. Supporting these innovative enterprises helps drive progress and fosters impactful change. Collaborate with us to support visionary entrepreneurs and contribute to a vibrant ecosystem of growth and innovation. Embrace this chance to be a part of transformative advancements and build a prosperous future together. Your involvement makes a tangible difference in shaping the next wave of industry leaders and groundbreaking ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
