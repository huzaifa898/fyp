import React, { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically submit the form data to a backend server
    console.log('Form submitted:', { email, message });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl mt-4 font-bold text-gray-800 text-center mb-8 font-abc">
        Get in Touch With Us
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-bold font-abc">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-600 font-bold font-abc">
            Message *
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 "
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-44 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline font-abc"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;