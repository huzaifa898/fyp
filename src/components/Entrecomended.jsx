import React from 'react';

const Entrecommended = () => {
  const entrepreneurs = [
    {
      name: 'Nicola Gorani',
      role: 'Founder / CEO',
      description: 'Oversees overall business strategy, operations, and partnerships. Leads product development initiatives, manages investor relations, and sets the long-term vision for the company.',
      image: 'https://lh6.googleusercontent.com/WFA0lhovgjoetooGhkn5tfdxEcRPBfpMlCRBQxU60GSFe6Uxr1-b318q3_jRodSHZZIQpMA-pFbUcLWZRPae5LBhKdTUhIJOL5PTH9P4jhiIXd4-0F2eo3Yl8rXMBt2xnOaI7UJb',
    },
    {
      name: 'Jeremi Stralt',
      role: 'Founder / CEO',
      description: 'Leads technology and product development. Manages research and development of sustainable wood products, oversees manufacturing processes, and ensures product quality and innovation.',
      image: 'https://www.forbesindia.com/media/images/2020/Feb/img_128679_womanentrepreneur.jpg',
    },
    {
      name: 'Colin Nizurb',
      role: 'Manager',
      description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
      image: 'https://www.raffertypendery.com/wp-content/uploads/2017/08/Tech-Entrepreneur.jpg',
    },
    {
        name: 'Colin Nizurb',
        role: 'CEO',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: 'https://www.raffertypendery.com/wp-content/uploads/2017/08/Tech-Entrepreneur.jpg',
      },
      {
        name: 'Colin Nizurb',
        role: 'CFO',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: 'https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2020/01/stevejobs2.jpg',
      },
      {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: 'https://assets.entrepreneur.com/content/3x2/1300/9-famous-entrepreneur-philantropists.jpg',
      },
  ];

  return (
    <div className="container mx-auto p-4">
        
      <h1 className="text-3xl font-bold text-center mb-8 font-abc">Entrepreneur Recommended For You</h1>
      <h1 className='text-xl font-bold text-center mb-8 font-abc'>StartUp:Enhance Wood Bussiness</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entrepreneurs.map((entrepreneur) => (
          <div key={entrepreneur.name} className="bg-white rounded-lg shadow-md overflow-hidden ">
            <img
              src={entrepreneur.image}
              alt={entrepreneur.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 font-abc">{entrepreneur.name}</h2>
              <p className="text-gray-700 mb-4 font-abc">{entrepreneur.role}</p>
              <p className="text-gray-600 font-abc">{entrepreneur.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entrecommended;