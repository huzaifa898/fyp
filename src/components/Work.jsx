import React from 'react';

function Work() {
  const cards = [
    {
      title: 'User Registration',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_1280.jpg',
      description: 'Users sign up with their email or social media accounts, providing basic information to create their profiles.'
    },
    {
      title: 'Profile Creation and Verification',
      imageUrl: 'https://www.thewebhospitality.com/wp-content/uploads/2020/05/High-DA-Dofollow-Profile-Creation-Sites-List.png',
      description: 'Users complete their profiles with detailed information, and our system verifies their identities to ensure authenticity.'
    },
    {
      title: 'Algorithmic Matching',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.qPQTHqif5Ree575AoM6RcQHaE8&pid=Api&P=0&h=220',
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
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 font-abc">HOW IT WORKS</h2>
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
              <h3 className="text-xl text-secondary font-cursive mb-4">{card.title}</h3>
              <p className="text-gray-700 font-abc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
