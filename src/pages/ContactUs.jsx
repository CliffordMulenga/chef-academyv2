import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <section className="bg-white mt-[5rem] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700">We'd love to hear from you! Reach out with any questions or inquiries.</p>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-black" />
              <span>+44 0 208 087 2501</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black" />
              <span>info@chefacademyoflondon.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-black" />
              <span>Central London, UK</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-black"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaXTwitter /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
