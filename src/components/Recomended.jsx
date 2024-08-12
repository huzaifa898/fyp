import React, { useState } from "react";
import { motion } from "framer-motion";
import ppl from "../images/ppl.jpg"; // Replace with appropriate image paths
import ppl2 from "../images/ppl2.jpg";
import ppl3 from "../images/ppl3.jpg";
import ppl4 from "../images/ppl4.jpg";
import ppl5 from "../images/ppl5.jpg";
import ppl6 from "../images/ppl6.jpg";
import "./Recommended.css"; // Import custom CSS

const Recommended = () => {
    const [selectedEntrepreneur, setSelectedEntrepreneur] = useState(null);

    const handleLearnMore = (entrepreneur) => {
        setSelectedEntrepreneur(entrepreneur);
      };
    
      const handleCloseModal = () => {
        setSelectedEntrepreneur(null);
      };

  const entrepreneurs = [
    {
      name: "John Smith",
      role: "Seasoned Investor",
      description:
        "I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.",
      investmentFocus: {
        industries: ["Artificial Intelligence", "HealthTech", "Education"],
        stages: ["Seed", "Pre-Seed"],
        typicalInvestmentSize: "$50,000 - $250,000",
      },
      image: ppl,
      whatsapp: "https://wa.me/1234567890", // Replace with real number
    },
    {
      name: "John Smith",
      role: "Seasoned Investor",
      description:
        "I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.",
      investmentFocus: {
        industries: ["Artificial Intelligence", "HealthTech", "Education"],
        stages: ["Seed", "Pre-Seed"],
        typicalInvestmentSize: "$50,000 - $250,000",
      },
      image: ppl2,
      whatsapp: "https://wa.me/1234567890", // Replace with real number
    },
    {
      name: "John Smith",
      role: "Seasoned Investor",
      description:
        "I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.",
      investmentFocus: {
        industries: ["Artificial Intelligence", "HealthTech", "Education"],
        stages: ["Seed", "Pre-Seed"],
        typicalInvestmentSize: "$50,000 - $250,000",
      },
      image: ppl3,
      whatsapp: "https://wa.me/1234567890", // Replace with real number
    },
    {
      name: "John Smith",
      role: "Seasoned Investor",
      description:
        "I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.",
      investmentFocus: {
        industries: ["Artificial Intelligence", "HealthTech", "Education"],
        stages: ["Seed", "Pre-Seed"],
        typicalInvestmentSize: "$50,000 - $250,000",
      },
      image: ppl4,
      whatsapp: "https://wa.me/1234567890", // Replace with real number
    },
    {
      name: "John Smith",
      role: "Seasoned Investor",
      description:
        "I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.",
      investmentFocus: {
        industries: ["Artificial Intelligence", "HealthTech", "Education"],
        stages: ["Seed", "Pre-Seed"],
        typicalInvestmentSize: "$50,000 - $250,000",
      },
      image: ppl5,
      whatsapp: "https://wa.me/1234567890", // Replace with real number
    },
    {
      name: "John Smith",
      role: "Seasoned Investor",
      description:
        "I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.",
      investmentFocus: {
        industries: ["Artificial Intelligence", "HealthTech", "Education"],
        stages: ["Seed", "Pre-Seed"],
        typicalInvestmentSize: "$50,000 - $250,000",
      },
      image: ppl6,
      whatsapp: "https://wa.me/1234567890", // Replace with real number
    },
    // ... other entrepreneurs
  ];

  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-800 via-gray-900 to-black">
      <div className="container mx-auto py-12 px-4">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Recommended for You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {entrepreneurs.map((entrepreneur, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={entrepreneur.image}
                alt={entrepreneur.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-teal-200 font-montserrat">{entrepreneur.name}</h3>
                <p className="mt-4 text-lg text-teal-100 font-palanquin">{entrepreneur.role}</p>
                <button
                  className="mt-4 rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-teal-700"
                  onClick={() => handleLearnMore(entrepreneur)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEntrepreneur && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
    <div className="bg-gradient-to-br from-teal-700 via-gray-800 to-black p-8 rounded-lg max-w-lg mx-4 relative">
      <motion.h2
        className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 font-palanquin"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {selectedEntrepreneur.name}
      </motion.h2>
      <img
        src={selectedEntrepreneur.image}
        alt={selectedEntrepreneur.name}
        className="mb-4 w-full h-96 object-cover rounded-lg"
      />
      <p className="text-lg text-teal-200 mb-4 font-montserrat">
        {selectedEntrepreneur.role}
      </p>
      <div className="mb-4 text-sm font-palanquin text-gray-200">
  <p className="text-lg font-semibold text-teal-400 mb-2">
    Investment Focus 
  </p>
  <p className="text-sm mb-2">
    <span className="font-montserrat font-semibold text-teal-300">
      Industries : 
    </span>{" "}
    {selectedEntrepreneur.investmentFocus.industries.join(", ")}
  </p>
  <p className="text-sm mb-2">
    <span className="font-montserrat font-semibold text-teal-300">
      Stages : 
    </span>{" "}
    {selectedEntrepreneur.investmentFocus.stages.join(", ")}
  </p>
  <p className="text-sm">
    <span className="font-montserrat font-semibold text-teal-300">
      Typical Investment Size:
    </span>{" "}
    {selectedEntrepreneur.investmentFocus.typicalInvestmentSize}
  </p>
</div>
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
};

export default Recommended;