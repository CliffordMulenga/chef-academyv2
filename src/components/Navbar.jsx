/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Courses', to: '/courses' },
    { name: 'Students', to: '/students' },
    { name: 'Restaurant Partners', to: '/restaurants' },
    { name: 'Testimonials', to: '/testimonials' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Chef Academy Logo" className="w-10 h-10 object-contain" />
        {/* <span className="text-lg font-semibold text-gray-900 hidden md:block">Chef Academy</span> */}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.to}
            className="text-sm text-gray-700 hover:text-black transition-colors relative"
          >
            {link.name}
            <span className="block h-[2px] w-0 bg-black transition-all duration-300 hover:w-full"></span>
          </Link>
        ))}
        {/* set how people should apply maybe with a form or instrustions */}
        <Link
          to="#apply"
          className="text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Apply Now
        </Link>
      </nav>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-[5px] focus:outline-none"
        aria-label="Toggle navigation"
      >
        <span className={`h-0.5 w-6 bg-black rounded transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`h-0.5 w-6 bg-black rounded transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-black rounded transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white px-6 py-4 flex flex-col gap-4 shadow-md md:hidden"
          >
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 text-sm hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="#apply"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white text-sm text-center px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Apply Now
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
