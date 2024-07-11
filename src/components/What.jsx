import React from "react";

const What = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 font-abc">WHAT WE DO</h2>
          <h3 className="text-2xl font-medium text-gray-600 mt-2">
           <span className='text-secondary font-cursive text-3xl'>EXPERTS</span> 
          </h3>
          <p className="text-lg text-black-500 font-bold mt-4 font-abc">
            Personalized Recommendations.
          </p>
          <div className="h-1 w-16 bg-gray-300 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white-600 shadow-md rounded-lg p-8">
            <h4 className="text-xl  mb-4 text-secondary font-cursive">
              USER ENGAGEMENT AND INTERACTION
            </h4>
            <p className="text-black-500 leading-relaxed text-justify font-semibold font-abc">
            Our platform is designed to foster meaningful connections between investors and entrepreneurs. We utilize intuitive user interfaces, personalized recommendations, and interactive features such as messaging and video calls to ensure a seamless and engaging user experience. By encouraging active participation and feedback, we aim to create a dynamic community where users can easily discover and connect with potential partners.
            </p>
            
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h4 className="text-xl  mb-4 text-secondary font-cursive">
              DATA SECURITY AND PRIVACY
            </h4>
            <p className=" text-justify font-semibold font-abc">
            We prioritize the privacy and security of our users' data. Our system implements robust encryption methods and adheres to strict data protection regulations to ensure that personal and sensitive information remains secure. Users have control over their data, with clear consent mechanisms and transparency about how their information is used and stored.
            </p>
            
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h4 className="text-xl  mb-4 text-secondary font-cursive">
              ANALYTICS AND INSIGHTS
            </h4>
            <p className=" text-justify font-semibold font-abc">
            Leveraging advanced analytics, our platform provides valuable insights to both investors and entrepreneurs. By analyzing user behavior, preferences, and interactions, we offer actionable recommendations and trends that help users make informed decisions. Our data-driven approach ensures that users receive the most relevant matches and opportunities, enhancing their overall experience.
            </p>
            
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h4 className="text-xl  mb-4 text-secondary font-cursive">
              USER SATISFACTION AND RETENTION
            </h4>
            <p className=" text-justify font-semibold font-abc">
            User satisfaction is at the core of our mission. We continuously gather feedback and monitor user engagement to refine and improve our services. By addressing user needs and preferences promptly, we aim to build long-term relationships and ensure high levels of satisfaction and retention. Regular updates and enhancements keep our platform fresh and responsive to the evolving needs of our community.
            </p>
            
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h4 className="text-xl  mb-4 text-secondary font-cursive">
              SCALABILITY AND PERFORMANCE
            </h4>
            <p className=" text-justify font-semibold font-abc">
            Our platform is built to scale efficiently, accommodating a growing user base without compromising performance. We utilize cloud-based infrastructure and optimized algorithms to ensure fast and reliable service. Whether you're a new user or a long-time member, our system is designed to handle increasing demand and deliver a consistent, high-quality experience.
            </p>
            
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h4 className="text-xl  mb-4 text-secondary font-cursive">
              PERSNOLIAZED RECOMMENDATION
            </h4>
            <p className=" text-justify font-semibold font-abc">
            Our platform uses advanced machine learning to offer personalized recommendations for both investors and entrepreneurs. By analyzing profiles, preferences, and past interactions, we ensure users receive the most relevant connections. Entrepreneurs find the right investors for their ideas, and investors discover promising opportunities. This feature saves time and enhances the success rate of connections on our platform.


            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;