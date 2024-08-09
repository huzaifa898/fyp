<div className="container mx-auto">
<div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-800 font-abc">WHAT WE DO</h2>
  <h3 className="text-2xl font-medium text-gray-600 mt-2">
    <span className="text-green-500 text-3xl">EXPERTS</span>
  </h3>
  {/* <p className="text-2xl font-palanquin font-semibold text-gray-800  mt-4 ">
    Personalized Recommendations.
  </p> */}
  <div className="h-1 w-20 bg-gray-300 mx-auto mt-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "USER ENGAGEMENT AND INTERACTION",
      description:
        "Our platform is designed to foster meaningful connections between investors and entrepreneurs. We utilize intuitive user interfaces, personalized recommendations, "
        // and interactive features such as messaging and video calls to ensure a seamless and engaging user experience. By encouraging active participation and feedback, we aim to create a dynamic community where users can easily discover and connect with potential partners.",
    },
    {
      title: "DATA SECURITY AND PRIVACY",
      description:
        "We prioritize the privacy and security of our users' data. Our system implements robust encryption methods and adheres to .",
    },
    {
      title: "ANALYTICS AND INSIGHTS",
      description:
        "Leveraging advanced analytics, our platform provides valuable insights to both investors and entrepreneurs. By analyzing user behavior, preferences,",
    },
    {
      title: "USER SATISFACTION AND RETENTION",
      description:
        "User satisfaction is at the core of our mission. We continuously gather feedback and monitor user engagement to refine and improve our services.",
    },
    {
      title: "SCALABILITY AND PERFORMANCE",
      description:
        "Our platform is built to scale efficiently, accommodating a growing user base without compromising performance. We utilize cloud-based infrastructure ",
    },
    {
      title: "PERSONALIZED RECOMMENDATION",
      description:
        "Our platform uses advanced machine learning to offer personalized recommendations for both investors and entrepreneurs. By analyzing profiles, preferences, ",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="relative bg-white shadow-md rounded-lg p-8 overflow-hidden transform transition-transform duration-500 hover:-translate-y-4 hover:shadow-lg"
    >
      {/* Top-left green circle */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <h4 className="font-palanquin text-xl leading-normal font-semibold text-green-600 mb-4">
        {feature.title}
      </h4>
      <p className="font-montserrat text-slate-gray text-lg leading-7">
        {feature.description}
      </p>
    </div>
  ))}
</div>
</div>




// Works 
<div
    id='block'
     className="container mx-auto py-12 px-4 ">
      <h2 className="text-3xl font-bold text-gray-800 font-palanquin text-center mb-10">HOW IT WORKS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-64">
              <img 
                src={card.imageUrl} 
                alt={card.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>
            <div className="p-6">
              <h3 className="font-palanquin text-xl leading-normal font-semibold text-green-600 mb-4">{card.title}</h3>
              <p className="font-montserrat text-slate-gray text-lg leading-6 ">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>