// src/components/LearnMore.jsx
import React from 'react';

const LearnMore = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-4xl font-semibold mb-12 text-center">Learn More About Our Features</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-600">User Engagement and Interaction</h3>
                        <p className="mt-2 text-gray-700">
                            Our platform fosters user engagement and interaction by providing intuitive tools and features that help investors and entrepreneurs connect seamlessly. Engage through real-time messaging, forums, and collaboration spaces designed to enhance the user experience.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-600">Data Security and Privacy</h3>
                        <p className="mt-2 text-gray-700">
                            We prioritize your data security and privacy. Our platform is built with robust security protocols to ensure that your personal and financial information is protected at all times. We comply with industry standards and regulations to maintain your trust and confidence.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-600">Personalized Recommendation</h3>
                        <p className="mt-2 text-gray-700">
                            Experience the power of personalized recommendations. Our advanced algorithms analyze user preferences and behaviors to provide tailored suggestions for investments and entrepreneurial ventures, ensuring you find the perfect match to meet your goals.
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a href="/contact" className="text-blue-500 underline">Contact us</a> for more information.
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
