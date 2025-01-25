import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaGraduationCap, FaCalendarAlt, FaBook, FaClipboard, FaPencilAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    semester: '',
    subject: '',
    unit: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      year: '',
      semester: '',
      subject: '',
      unit: '',
      message: '',
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8" id="contact-form">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <div className="flex items-center border rounded-lg focus-within:border-blue-500">
          <FaUser className="text-gray-500 ml-2" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <div className="flex items-center border rounded-lg focus-within:border-blue-500">
          <FaEnvelope className="text-gray-500 ml-2" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year</label>
        <div className="flex items-center border rounded-lg focus-within:border-blue-500">
          <FaGraduationCap className="text-gray-500 ml-2" />
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
          >
            <option value="">Select Year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="semester" className="block text-gray-700 font-bold mb-2">Semester</label>
        <div className="flex items-center border rounded-lg focus-within:border-blue-500">
          <FaCalendarAlt className="text-gray-500 ml-2" />
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
          >
            <option value="">Select Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
        <div className="flex items-center border rounded-lg focus-within:border-blue-500">
          <FaBook className="text-gray-500 ml-2" />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="unit" className="block text-gray-700 font-bold mb-2">Unit (Optional)</label>
        <div className="flex items-center border rounded-lg focus-within:border-blue-500">
          <FaClipboard className="text-gray-500 ml-2" />
          <input
            type="text"
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <div className="flex items-start border rounded-lg focus-within:border-blue-500">
          <FaPencilAlt className="text-gray-500 ml-2 mt-2" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 focus:outline-none"
            rows="4"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
