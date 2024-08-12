import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';

// Import Google Fonts
// import '@fontsource/roboto';
// import '@fontsource/lora';

const About = () => {
  // Animation variants for cards and sections
  const cardVariants = {
    offscreen: {
      scale: 0.9,
      opacity: 0,
      y: 50,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      y: 0,
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

  const testimonialVariants = {
    offscreen: { scale: 0.9, opacity: 0 },
    onscreen: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cards = [
    {
      title: 'Our Mission',
      content: 'Connecting visionary entrepreneurs with strategic investors to bring innovative ideas to life.',
      image: 'https://cdn.pixabay.com/photo/2018/07/13/09/33/target-3535311_1280.png', 
    },
    {
      title: 'How It Works',
      content: 'Providing a seamless experience for entrepreneurs and investors through our advanced platform.',
      image: 'https://cdn.pixabay.com/photo/2024/04/24/14/19/work-from-home-8717863_1280.jpg', 
    },
    {
      title: 'Success Stories',
      content: 'Transforming groundbreaking ideas into reality and making a positive impact.',
      image: 'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg', 
    },
    {
      title: 'Our Vision',
      content: 'Empowering individuals and communities by supporting innovative projects.',
      image: 'https://cdn.pixabay.com/photo/2017/06/04/20/48/vision-2372177_1280.jpg', 
    },
    {
      title: 'Our Team',
      content: 'A dedicated team committed to helping you succeed.',
      image: 'https://cdn.pixabay.com/photo/2023/03/27/05/08/air-jump-7879749_1280.png', 
    },
    {
      title: 'Join Us',
      content: 'Be part of a community that values creativity and collaboration.',
      image: 'https://cdn.pixabay.com/photo/2018/07/11/14/09/hiring-3531130_1280.jpg', 
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This platform has completely transformed my business. The support and resources provided were top-notch.',
      image: 'https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_1280.jpg',
    },
    {
      name: 'Jane Smith',
      feedback: 'I found the perfect investor for my startup here. The experience was seamless and professional.',
      image: 'https://cdn.pixabay.com/photo/2017/08/05/12/44/people-2583280_1280.jpg',
    },
    {
      name: 'Michael Johnson',
      feedback: 'Thanks to this platform, I was able to bring my vision to life and make a positive impact.',
      image: 'https://cdn.pixabay.com/photo/2022/07/11/16/31/woman-7315525_1280.jpg',
    },
  ];

  return (
    <div className="font-roboto bg-gray-100 text-gray-800">
      <Header />
      <section className="bg-gray-900 text-white py-16 px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mt-8 mb-12 text-center">About Us</h1>
          
          {/* Timeline Section */}
          <motion.div 
            className="timeline mb-16"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={timelineVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">Our Journey</h2>
            <div className="timeline-content">
              <div className="timeline-item border-l-4 border-teal-500 pl-4 mb-6">
                <h3 className="text-xl font-semibold">2020 - Founded</h3>
                <p className="text-lg">Our platform was founded with the vision to connect entrepreneurs and investors globally.</p>
              </div>
              <div className="timeline-item border-l-4 border-teal-500 pl-4 mb-6">
                <h3 className="text-xl font-semibold">2021 - First Milestone</h3>
                <p className="text-lg">Reached 10,000 registered users and secured our first major investment round.</p>
              </div>
              <div className="timeline-item border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-semibold">2022 - Global Expansion</h3>
                <p className="text-lg">Expanded our services to multiple countries, helping entrepreneurs worldwide.</p>
              </div>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative bg-cover bg-center rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
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
            className="founder-message mt-16 p-8 bg-white text-gray-900 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={founderVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">A Message from Our Founder</h2>
            <p className="text-lg mb-4">
              "Our journey has been driven by the passion to create a platform that empowers innovators and visionaries.
              We believe in the power of collaboration and strive to provide the best support to entrepreneurs and investors alike."
            </p>
            <p className="mt-4 text-right text-xl font-bold">- [Founder's Name]</p>
          </motion.div>

          {/* Video Introduction Section */}
          <motion.div 
            className="video-introduction mt-16"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={timelineVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">Introduction Video</h2>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="Introduction Video"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className="testimonials mt-16"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={testimonialVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">What Our Users Say</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative bg-cover bg-center rounded-lg shadow-lg p-6 text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    height: '300px',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={testimonialVariants}
                >
                  <p className="text-lg font-semibold mt-20 text-white">{testimonial.feedback}</p>
                  <h3 className="text-xl mt-4 text-white font-bold">{testimonial.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
