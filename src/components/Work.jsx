import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

function Work() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSeeMore = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const cards = [
    {
      title: 'User Registration',
      imageUrl: 'https://cdn.pixabay.com/photo/2022/06/17/16/48/subscribe-7268360_1280.jpg',
      description: 'Users sign up with their email or social media accounts, providing basic information to create their profiles.'
    },
    {
      title: 'Profile Creation and Verification',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/04/26/16/30/id-4157974_640.jpg',
      description: 'Users complete their profiles with detailed information, and our system verifies their identities to ensure authenticity.'
    },
    {
      title: 'Algorithmic Matching',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/07/10/09/31/ai-generated-8885342_1280.jpg',
      description: 'Our advanced algorithms analyze user profiles and preferences to suggest the most relevant and promising connections.'
    },
    {
      title: 'Communication and Collaboration',
      imageUrl: 'https://assets.website-files.com/5e09ef60edb75467a1a7c683/5e78df7adccf08fee8ece75d_cover2303.jpg',
      description: 'Users can communicate through messaging and video calls, facilitating seamless collaboration and interaction.'
    },
    {
      title: 'Closing the Deal',
      imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20170609174440-GettyImages-540525198.jpeg?format=pjeg&auto=webp',
      description: 'Investors and entrepreneurs finalize agreements through our platform, with tools to manage and document the deal-making process.'
    },
    {
      title: 'Success Stories and Impact',
      imageUrl: 'https://i.dawn.com/primary/2020/09/5f59304bbc378.jpg',
      description: 'We highlight successful partnerships and their impact, showcasing the positive outcomes and growth facilitated by our platform.'
    },
  ];

  return (
    <div id="block" className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-800 via-gray-900 to-black">
      <div className="container mx-auto py-12 px-4">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          HOW IT WORKS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={card.imageUrl}
                alt={card.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h1 className="text-3xl font-bold text-teal-200 font-palanquin">{card.title}</h1>
                <p className="mt-4 text-lg text-teal-100 font-montserrat">{card.description}</p>
                <button
                  className="mt-4 rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-teal-700"
                  onClick={() => handleSeeMore(card)}
                >
                  See More 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-4 relative">
            <motion.h2
              className="text-3xl font-bold mb-4 text-teal-600 font-palanquin"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {selectedCard.title}
            </motion.h2>
            <img src={selectedCard.imageUrl} alt={selectedCard.title} className="mb-4 w-full h-96 object-cover rounded-lg" />
            <p className="text-lg text-gray-700 mb-4 font-montserrat">{selectedCard.description}</p>
            <button
              className="absolute top-4 right-4 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-teal-700"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
