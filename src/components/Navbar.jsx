/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.png';
import { Link } from 'react-router-dom';
import MainBtn from './ui/MainBtn';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, EllipsisIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Courses', to: '/courses' },
    {
      name: 'Students',
      type: 'dropdown',
      items: [
        { label: 'Student Centre', to: '/students' },
        { label: 'International Students', to: '/international-student' }
      ]
    },
    { name: 'Restaurant Partners', to: '/restaurants' },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Contact Us', to: '/contact' },
  ];

  

  

  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 md:px-12 py-4 '>
       
      <header className=" flex items-center justify-between">

     
      {/* Logo */}
      <div className=''>
        <Link to="/" className=" flex items-center gap-2 top-[1rem] left-[2rem]">
          <img src={logo} alt="Chef Academy Logo" className="w-12 h-12 object-contain" />
          <span className=" font-semibold text-gray-900 text-sm text-center">Chef Academy <br /><span className='playfair font-extralight'>london</span></span>
        </Link>
      </div>


      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map(link => {
          if (link.type === 'dropdown') {
            return (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild className={'text-gray-700 hover:text-black transition-colors cursor-pointer'}>
                  <button className="text-sm relative flex gap-1 items-center">
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={'mt-4'}>
                  {link.items.map(item => (
                    <DropdownMenuItem key={item.to} asChild >
                      <Link to={item.to} className='cursor-pointer'>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              key={link.name}
              to={link.to}
              className="text-sm text-gray-700 hover:text-black transition-colors relative"
            >
              {link.name}
              <span className="block h-[2px] w-0 bg-black transition-all duration-300 hover:w-full"></span>
            </Link>
          );
        })}



        {/* set how people should apply maybe with a form or instrustions */}
        <MainBtn
          title={'Apply Now'}
          to={'#apply'}
          styles={"text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"}
        />
      </nav>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col justify-center items-center gap-[5px] focus:outline-none"
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
            className="absolute top-full left-0 w-full bg-white px-6 py-4 flex flex-col gap-4 shadow-md lg:hidden"
          >
            {navLinks.map(link => {
              if (link.type === 'dropdown') {
                return (
                  <div key={link.name} className="flex flex-col gap-2">
                    <p className="text-gray-700 font-semibold">{link.name}</p>
                    {link.items.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="pl-4 text-gray-800 text-sm hover:text-black transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 text-sm hover:text-black transition"
                >
                  {link.name}
                </Link>
              );
            })}

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
    </div>
    
    </>
    
  );
};

export default Navbar;
