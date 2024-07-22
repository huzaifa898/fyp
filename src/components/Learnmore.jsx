import React from 'react';
import { Link } from 'react-router-dom';
import './LearnMore.css'; // Import custom CSS for animations

const LearnMore = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-7xl p-8 mx-auto">
                <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">Learn More About Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "User Engagement and Interaction",
                            description: "Our platform fosters user engagement and interaction by providing intuitive tools and features that help investors and entrepreneurs connect seamlessly. Engage through real-time messaging, forums, and collaboration spaces designed to enhance the user experience.",
                        },
                        {
                            title: "Data Security and Privacy",
                            description: "We prioritize your data security and privacy. Our platform is built with robust security protocols to ensure that your personal and financial information is protected at all times. We comply with industry standards and regulations to maintain your trust and confidence.",
                        },
                        {
                            title: "Personalized Recommendation",
                            description: "Experience the power of personalized recommendations. Our advanced algorithms analyze user preferences and behaviors to provide tailored suggestions for investments and entrepreneurial ventures, ensuring you find the perfect match to meet your goals.",
                        },
                        {
                            title: "Advanced Analytics",
                            description: "Utilize our advanced analytics tools to gain insights into market trends and investment opportunities. Our analytics platform provides real-time data and comprehensive reports to help you make informed decisions.",
                        },
                        {
                            title: "Networking Opportunities",
                            description: "Expand your network by connecting with other investors and entrepreneurs on our platform. Attend virtual events, participate in discussions, and collaborate on projects to grow your professional network.",
                        },
                        {
                            title: "Comprehensive Support",
                            description: "Benefit from our comprehensive support services, including customer support, educational resources, and mentorship programs. We are here to help you achieve success every step of the way.",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200"
                        >
                            <div className="absolute top-0 left-0 w-20 h-20 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                            <h3 className="text-2xl font-semibold text-blue-600">{feature.title}</h3>
                            <p className="mt-4 text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link to="/contact">
                        <span className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300 cursor-pointer">Contact us</span> for more information.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
