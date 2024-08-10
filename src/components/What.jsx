import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const What = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const features = [
    {
      title: "USER ENGAGEMENT AND INTERACTION",
      description:
        "Our platform enhances user engagement by creating meaningful connections between investors and entrepreneurs through intuitive interfaces. Personalized dashboards and smart recommendations ensure relevant interactions, fostering productive collaborations. We continuously gather user feedback to refine these features, ensuring high levels of engagement and effective communication. This approach promotes valuable connections and business growth, creating a dynamic and interactive environment for all users.",
    },
    {
      title: "DATA SECURITY AND PRIVACY",
      description:
        "We prioritize data security with advanced encryption and strict adherence to industry standards. Our platform ensures user privacy through secure data transmission and encryption at rest. Regular security audits and transparent privacy policies give users control over their information, building trust and ensuring a safe environment. This comprehensive approach protects user data from potential threats and maintains high standards of privacy and security.",
    },
    {
      title: "ANALYTICS AND INSIGHTS",
      description:
        "Our platform provides valuable insights through advanced analytics tools. By analyzing user behavior and engagement, we offer detailed reports and visualizations that highlight trends and patterns. These insights support informed decision-making and strategy refinement. Continuous improvements to our analytics capabilities ensure accurate and relevant data, helping users optimize their efforts and identify new opportunities for growth and engagement.",
    },
    {
      title: "USER SATISFACTION AND RETENTION",
      description:
        "We focus on user satisfaction and retention by gathering feedback and providing personalized support. Regular updates and tailored services enhance the user experience, while rewards and incentives encourage loyalty. Our commitment to refining the platform ensures a positive environment that fosters long-term engagement. By prioritizing user satisfaction, we build strong relationships and maintain a valuable service for all users.",
    },
    {
      title: "SCALABILITY AND PERFORMANCE",
      description:
        "Our platform is designed for scalability and high performance. Using cloud-based infrastructure, we dynamically adjust resources to handle growing user demands without compromising speed. Regular performance monitoring and stress testing optimize our system for efficiency and reliability. This focus on scalability ensures a smooth and responsive experience, accommodating growth and maintaining high-quality service for all users.",
    },
    {
      title: "PERSONALIZED RECOMMENDATIONS",
      description:
        "Personalized recommendations are driven by advanced machine learning algorithms. We analyze user data to provide tailored suggestions for investments and connections. This customization enhances user experience by offering relevant opportunities based on individual preferences. Our recommendation engine is continually improved to ensure accuracy and relevance, helping users discover opportunities that align with their goals and interests.",
    },
  ];
  return (
    <section  className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <motion.h2
            className="text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-teal-500 via-teal-600 to-green-600 bg-clip-text text-transparent"
            data-aos="zoom-in"
            data-aos-duration="1200"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            WHAT WE DO
          </motion.h2>
          <motion.h3
            className="text-4xl font-semibold text-gray-800 mt-4"
            data-aos="fade-up"
            data-aos-duration="1200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-teal-600">EXPERTS</span> in the Field
          </motion.h3>
          <motion.div
            className="h-1 w-24 bg-teal-600 mx-auto mt-4 rounded"
            data-aos="fade-right"
            data-aos-duration="1200"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '6rem' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-xl p-8 overflow-hidden transform transition-transform duration-700 hover:-translate-y-3 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-teal-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default What;
