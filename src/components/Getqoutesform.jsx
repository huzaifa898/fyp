import React, { useState } from 'react';
import qoutes from "../images/qoutes.jpg"
import Header from './Header';
const Getqoutesform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }
    // Send form data to server or perform other actions
    console.log('Form submitted:', { name, email, phone, message });
  };

  return (
    <div>
        <Header/>
    <div
      className="h-screen w-screen bg-cover bg-center mt-4"
      style={{
        backgroundImage: `url(${qoutes})`
      }}
    >
      <div className="container mx-auto p-8 pt-64 flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-center font-abc">Share Success Stories</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-wrap -mx-4 mb-6">
              <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-6">
              <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white"
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Getqoutesform;