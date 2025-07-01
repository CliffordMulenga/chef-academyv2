/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaGlobeEurope, FaUtensils, FaCertificate } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserTie className="accent text-3xl" />,
    title: 'Taught by Expert Chefs',
    description: 'Learn from Michelin-starred and world-class culinary professionals.',
  },
  {
    icon: <FaUtensils className="accent text-3xl" />,
    title: 'Restaurant Partnerships',
    description: 'Train with our industry partners for hands-on restaurant experience.',
  },
  {
    icon: <FaGlobeEurope className="accent text-3xl" />,
    title: 'International Students Welcome',
    description: 'Join a global community with students from over 40 countries.',
  },
  {
    icon: <FaCertificate className="accent text-3xl" />,
    title: 'Recognized Accreditation',
    description: 'Earn an internationally recognized culinary certificate in London.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why Choose Chef Academy of London?
        </motion.h2>
        <p className="text-gray-600 text-base md:text-lg">
          Discover the key advantages of joining one of Europe’s top culinary schools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-50 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
