import React from 'react';

function Work() {
  const cards = [
    {
      title: 'User Registration',
      imageUrl: 'https://cdn-proxy.slickplan.com/wp-content/uploads/2017/11/Registration_Form_Feature.jpg',
      description: 'Users sign up with their email or social media accounts, providing basic information to create their profiles.'
    },
    {
      title: 'Profile Creation and Verification',
      imageUrl: 'http://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dmVyaWZpY2F0aW9ufHwwfHx8fDE2Mjg4Njg3MDE&ixlib=rb-1.2.1&q=80&w=1080',
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
      imageUrl: 'https://weaver1888.files.wordpress.com/2020/07/success-failure.png',
      description: 'We highlight successful partnerships and their impact, showcasing the positive outcomes and growth facilitated by our platform.'
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">HOW IT WORKS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={card.imageUrl} alt={card.title} className="w-full rounded-lg mb-4 w-full h-72" />
            <h3 className="text-1xl text-secondary font-cursive mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
