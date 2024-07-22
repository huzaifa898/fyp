import React from 'react';
import './LearnMore.css'; // Import custom CSS for animations

const LearnMore = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-7xl p-8">
                <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">Learn More About Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="feature-card">
                        <h3 className="text-2xl font-semibold text-blue-600">User Engagement and Interaction</h3>
                        <p className="mt-4 text-gray-700">
                            Our platform fosters user engagement and interaction by providing intuitive tools and features that help investors and entrepreneurs connect seamlessly. Engage through real-time messaging, forums, and collaboration spaces designed to enhance the user experience.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-2xl font-semibold text-blue-600">Data Security and Privacy</h3>
                        <p className="mt-4 text-gray-700">
                            We prioritize your data security and privacy. Our platform is built with robust security protocols to ensure that your personal and financial information is protected at all times. We comply with industry standards and regulations to maintain your trust and confidence.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-2xl font-semibold text-blue-600">Personalized Recommendation</h3>
                        <p className="mt-4 text-gray-700">
                            Experience the power of personalized recommendations. Our advanced algorithms analyze user preferences and behaviors to provide tailored suggestions for investments and entrepreneurial ventures, ensuring you find the perfect match to meet your goals.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-2xl font-semibold text-blue-600">Advanced Analytics</h3>
                        <p className="mt-4 text-gray-700">
                            Utilize our advanced analytics tools to gain insights into market trends and investment opportunities. Our analytics platform provides real-time data and comprehensive reports to help you make informed decisions.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-2xl font-semibold text-blue-600">Networking Opportunities</h3>
                        <p className="mt-4 text-gray-700">
                            Expand your network by connecting with other investors and entrepreneurs on our platform. Attend virtual events, participate in discussions, and collaborate on projects to grow your professional network.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-2xl font-semibold text-blue-600">Comprehensive Support</h3>
                        <p className="mt-4 text-gray-700">
                            Benefit from our comprehensive support services, including customer support, educational resources, and mentorship programs. We are here to help you achieve success every step of the way.
                        </p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a href="/contact" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">Contact us</a> for more information.
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
