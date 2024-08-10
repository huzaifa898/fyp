import React from 'react';
import { motion } from 'framer-motion';
import ppl from '../images/ppl.jpg'; // Replace with appropriate image paths
import ppl2 from '../images/ppl2.jpg';
import ppl3 from '../images/ppl3.jpg';
import ppl4 from '../images/ppl4.jpg';
import ppl5 from '../images/ppl5.jpg';
import ppl6 from '../images/ppl6.jpg';
import './Recommended.css'; // Import custom CSS

const Recommended = () => {
    const entrepreneurs = [
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl,
            whatsapp: 'https://wa.me/1234567890' // Replace with real number
        },
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl2,
            whatsapp: 'https://wa.me/1234567890' // Replace with real number
        },
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl3,
            whatsapp: 'https://wa.me/1234567890' // Replace with real number
        },
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl4,
            whatsapp: 'https://wa.me/1234567890' // Replace with real number
        },
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl5,
            whatsapp: 'https://wa.me/1234567890' // Replace with real number
        },
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl6,
            whatsapp: 'https://wa.me/1234567890' // Replace with real number
        },
    ];

    return (
        <div className="recommended-container bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen p-4">
            <h2 className="text-2xl mt-4 font-bold text-center mb-4 font-abc text-white">Recommended for You</h2>
            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {entrepreneurs.map((entrepreneur, index) => (
                    <motion.div
                        key={index}
                        className="card flex flex-col items-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={entrepreneur.image}
                            alt={entrepreneur.name}
                            className="w-full h-40 object-cover rounded-t-md"
                        />
                        <div className="p-3 bg-gray-900 text-white">
                            <h3 className="text-lg font-bold mt-2">{entrepreneur.name}</h3>
                            <p className="text-gray-400 mt-1 text-sm">{entrepreneur.role}</p>
                            <p className="text-gray-400 mt-1 text-xs">{entrepreneur.description}</p>
                            {entrepreneur.investmentFocus && (
                                <div className="mt-2 text-xs">
                                    <p className="font-bold">Investment Focus:</p>
                                    <p>
                                        <span className="font-bold">Industries:</span> {entrepreneur.investmentFocus.industries.join(', ')}
                                    </p>
                                    <p>
                                        <span className="font-bold">Stages:</span> {entrepreneur.investmentFocus.stages.join(', ')}
                                    </p>
                                    <p>
                                        <span className="font-bold">Typical Investment Size:</span> {entrepreneur.investmentFocus.typicalInvestmentSize}
                                    </p>
                                </div>
                            )}
                            <a
                                href={entrepreneur.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg inline-block text-center hover:bg-green-600 transition"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;
