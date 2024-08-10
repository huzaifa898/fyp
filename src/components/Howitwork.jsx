import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';

const HowItWorks = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, rotate: 5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } },
  };

  const faqVariants = {
    expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
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
      <section className="how-it-works py-16 px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto">
          {/* Steps Section */}
          <motion.div
            className="steps mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <h2 className="text-4xl font-bold text-center mt-8 mb-12">How It Works</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step relative bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${step.image})`, width: '300px', height: '300px' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 text-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-lg text-white">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* New Section Below Cards */}
          <div className="info-images relative flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="text-section md:w-1/2 p-6 md:pr-12 z-10">
              <h2 className="text-3xl font-bold mt-52 mb-4">Explore Our Platform</h2>
              <p className="text-lg mb-4">
                Discover how our platform helps you connect with the right partners and grow your ventures. We offer a range of features to facilitate networking, collaboration, and deal-closing.
              </p>
              <p className="text-lg">
                Whether you're an investor seeking new opportunities or an entrepreneur looking for strategic support, our platform provides the tools you need to succeed.
              </p>
            </div>
            <div className="images-section md:w-1/2 flex justify-center relative">
              <div className="desktop-image hidden md:block absolute top-0 right-0 w-1/2 z-0">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Desktop View"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mobile-image md:hidden absolute top-0 right-0 w-1/2 z-10">
                <img
                  src="https://via.placeholder.com/400x600"
                  alt="Mobile View"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq mt-32">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item mb-4">
                  <motion.div
                    className="faq-question cursor-pointer bg-gray-800 text-white p-4 rounded-lg"
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
                </div>
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
