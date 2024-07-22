import React from 'react';

const Successstories = () => {
  const stories = [
    {
      image: 'https://cdn.pixabay.com/photo/2019/03/18/15/36/man-4063383_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/04/21/20/15/portrait-3339399_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Positive Response on Refusal',
      description:
        'We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-abc mb-8">
          Customer success is our success
        </h2>
        <div className="flex flex-wrap justify-center mb-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 transform transition-transform duration-500 hover:-translate-x-2"
            >
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Successstories;
