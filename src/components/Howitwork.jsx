import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';
// import './index.css';

const HowItWorks = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 80 } },
    hover: { scale: 1.05, rotate: 0.5, boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)', transition: { duration: 0.4 } },
  };

  const faqVariants = {
    expanded: { height: 'auto', opacity: 1, transition: { duration: 0.4 } },
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.4 } },
  };

  // Steps data
  const steps = [
    { title: 'Step 1', description: 'Register on our platform.', image: 'https://cdn.pixabay.com/photo/2022/06/17/16/48/subscribe-7268360_1280.jpg' },
    { title: 'Step 2', description: 'Complete your profile.', image: 'https://cdn.pixabay.com/photo/2019/04/26/16/30/id-4157974_640.jpg' },
    { title: 'Step 3', description: 'Start connecting with potential partners.', image: 'https://cdn.pixabay.com/photo/2024/07/10/09/31/ai-generated-8885342_1280.jpg' },
    { title: 'Step 4', description: 'Join relevant groups and discussions.', image: 'https://assets.website-files.com/5e09ef60edb75467a1a7c683/5e78df7adccf08fee8ece75d_cover2303.jpg' },
    { title: 'Step 5', description: 'Attend networking events.', image: 'https://assets.entrepreneur.com/content/3x2/2000/20170609174440-GettyImages-540525198.jpeg?format=pjeg&auto=webp' },
    { title: 'Step 6', description: 'Close deals and track your progress.', image: 'https://i.dawn.com/primary/2020/09/5f59304bbc378.jpg' },
  ];

  // FAQs data
  const faqs = [
    { question: 'What is our mission?', answer: 'Our mission is to connect visionary entrepreneurs with strategic investors.' },
    { question: 'How can I register?', answer: 'Click on the register button and fill out the required details.' },
    { question: 'What benefits do I get?', answer: 'You get access to a network of investors and a platform for your ideas.' },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <div>
      <Header />
      <section className="how-it-works py-20 px-6 md:px-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto">
          {/* Steps Section */}
          <motion.div
            className="steps mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
          >
            <h2 className="text-4xl font-extrabold text-center mt-8 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
                  style={{ backgroundImage: `url(${step.image})`, width: '100%', height: '300px' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6 text-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-md text-white">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

           {/* New Section Below Cards */}
           <div className="info-images flex flex-col md:flex-row items-center justify-center md:justify-between mb-16 relative">
            <div className="text-section md:w-1/2 p-6 md:pr-12">
              <h2 className="text-4xl font-extrabold mb-4">Explore Our Platform</h2>
              <p className="text-base mb-4 font-light">
                Discover how our platform helps you connect with the right partners and grow your ventures. We offer a range of features to facilitate networking, collaboration, and deal-closing.
              </p>
              <p className="text-base font-light">
                Whether you're an investor seeking new opportunities or an entrepreneur looking for strategic support, our platform provides the tools you need to succeed.
              </p>
            </div>
            <div className="images-section md:w-1/2 flex justify-center md:justify-end relative">
              <div className="desktop-image hidden md:block absolute top-0 right-0 w-3/4 h-auto">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Desktop View"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mobile-image md:hidden absolute top-0 right-0 w-3/4 h-auto">
                <img
                  src="https://via.placeholder.com/400x600"
                  alt="Mobile View"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq mt-32">
            <h2 className="text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
            <div className="faq-list space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className="faq-question cursor-pointer bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700"
                    onClick={() => setActiveFAQ(index === activeFAQ ? null : index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                  </motion.div>
                  <motion.div
                    className="faq-answer mt-2 bg-gray-700 text-white p-4 rounded-lg"
                    variants={faqVariants}
                    initial={activeFAQ === index ? 'expanded' : 'collapsed'}
                    animate={activeFAQ === index ? 'expanded' : 'collapsed'}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorks;