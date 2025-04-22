import React, { useState } from 'react';

function ContactCard() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your email sending logic here
    const mailTo = `mailto:bmmankar25@gmail.com?subject=New Contact Submission&body=Email: ${email}%0ADescription: ${description}`;
    window.location.href = mailTo;
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white">Description:</label>
          <textarea
            id="description"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}

export default ContactCard;
