import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';

const About = () => {
  // Animation variants for cards and sections
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const timelineVariants = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const founderVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const cards = [
    {
      title: 'Our Mission',
      content: 'Connecting visionary entrepreneurs with strategic investors to bring innovative ideas to life.',
      image: 'https://cdn.pixabay.com/photo/2018/07/13/09/33/target-3535311_1280.png', // Replace with your image path
    },
    {
      title: 'How It Works',
      content: 'Providing a seamless experience for entrepreneurs and investors through our advanced platform.',
      image: 'https://cdn.pixabay.com/photo/2024/04/24/14/19/work-from-home-8717863_1280.jpg', // Replace with your image path
    },
    {
      title: 'Success Stories',
      content: 'Transforming groundbreaking ideas into reality and making a positive impact.',
      image: 'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg', // Replace with your image path
    },
    {
      title: 'Our Vision',
      content: 'Empowering individuals and communities by supporting innovative projects.',
      image: 'https://cdn.pixabay.com/photo/2017/06/04/20/48/vision-2372177_1280.jpg', // Replace with your image path
    },
    {
      title: 'Our Team',
      content: 'A dedicated team committed to helping you succeed.',
      image: 'https://cdn.pixabay.com/photo/2023/03/27/05/08/air-jump-7879749_1280.png', // Replace with your image path
    },
    {
      title: 'Join Us',
      content: 'Be part of a community that values creativity and collaboration.',
      image: 'https://cdn.pixabay.com/photo/2018/07/11/14/09/hiring-3531130_1280.jpg', // Replace with your image path
    },
  ];

  return (
    <div>
        <Header/>
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
        
        {/* Timeline Section */}
        <motion.div 
          className="timeline mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={timelineVariants}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <div className="timeline-content">
            {/* Example Timeline - Replace with actual events */}
            <div className="timeline-item">
              <h3 className="text-xl">2020 - Founded</h3>
              <p>Our platform was founded with the vision to connect entrepreneurs and investors globally.</p>
            </div>
            <div className="timeline-item">
              <h3 className="text-xl">2021 - First Milestone</h3>
              <p>Reached 10,000 registered users and secured our first major investment round.</p>
            </div>
            <div className="timeline-item">
              <h3 className="text-xl">2022 - Global Expansion</h3>
              <p>Expanded our services to multiple countries, helping entrepreneurs worldwide.</p>
            </div>
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${card.image})`,
                height: '300px',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <div className="absolute bottom-0 p-6">
                <h2 className="text-2xl font-semibold mb-2 text-white">{card.title}</h2>
                <p className="text-lg leading-relaxed text-white">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder's Message Section */}
        <motion.div 
          className="founder-message mt-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={founderVariants}
        >
          <h2 className="text-3xl font-semibold mb-4">A Message from Our Founder</h2>
          <p className="text-lg">
            "Our journey has been driven by the passion to create a platform that empowers innovators and visionaries.
            We believe in the power of collaboration and strive to provide the best support to entrepreneurs and investors alike."
          </p>
          <p className="mt-4 text-right font-bold">- [Founder's Name]</p>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default About;
