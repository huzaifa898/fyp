import React from 'react';
import ppl from '../images/ppl.jpg'; // Replace with appropriate image paths
import ppl2 from '../images/ppl2.jpg';
import ppl3 from '../images/ppl3.jpg';
import ppl4 from '../images/ppl4.jpg';
import ppl5 from '../images/ppl5.jpg';
import ppl6 from '../images/ppl6.jpg';

const Recommended = () => {
    const entrepreneurs = [
        {
            name: 'John Smith',
            role: 'Seasoned Investor',
            description: 'I am a seasoned investor with over 15 years of experience in venture capital and private equity. My investment philosophy centers around supporting innovative startups that have the potential to disrupt traditional industries and drive positive societal impact. I specialize in early-stage investments and enjoy working closely with founders to provide strategic guidance and mentorship.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl,
        },
        {
            name: 'Nicola Gorani',
            role: 'Founder / CEO',
            description: 'Oversees overall business strategy, operations, and partnerships. Leads product development initiatives, manages investor relations, and sets the long-term vision for the company.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl2,
        },
        {
            name: 'Jeremi Stralt',
            role: 'Founder / CEO',
            description: 'Leads technology and product development. Manages research and development of sustainable wood products, oversees manufacturing processes, and ensures product quality and innovation.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl3,
        },
        {
            name: 'Colin Nizurb',
            role: 'CFO',
            description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl4,
        },
        {
            name: 'Steve Jobs',
            role: 'Co-Founder / Former CEO',
            description: 'Known for co-founding Apple Inc. and driving innovations such as the iPhone and iPad. His entrepreneurial spirit and vision revolutionized the tech industry.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl5,
        },
        {
            name: 'Tech Entrepreneur',
            role: 'Innovator',
            description: 'An entrepreneur leading the way in technology innovation. Focused on developing solutions that address global challenges and improve everyday lives.',
            investmentFocus: {
                industries: ['Artificial Intelligence', 'HealthTech', 'Education'],
                stages: ['Seed', 'Pre-Seed'],
                typicalInvestmentSize: '$50,000 - $250,000',
            },
            image: ppl6,
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl mt-4 font-bold text-center mb-4 font-abc">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {entrepreneurs.map((entrepreneur, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={entrepreneur.image}
                            alt={entrepreneur.name}
                            className="w-full h-96 object-cover rounded-t-md"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mt-4">{entrepreneur.name}</h3>
                            <p className="text-gray-600 mt-2">{entrepreneur.role}</p>
                            <p className="text-gray-600 mt-2">{entrepreneur.description}</p>
                            {entrepreneur.investmentFocus && (
                                <div className="mt-4">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;
