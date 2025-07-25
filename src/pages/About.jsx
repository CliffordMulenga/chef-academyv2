import React from 'react'
import { useEffect, useRef } from 'react';

import PageHero from '../components/PageHero'
import sectionImg from '../assets/food1.jpg'

import { FaCheckCircle } from 'react-icons/fa';
import AboutFaq from '../components/AboutFaq';
import HospitalityAcademy from '../assets/hospitality-academy.png';
import ChefAcademy from '../assets/logo-newyork.png';
import TeamSection from '@/components/TeamSection';
import {  CirclePlus, MoveRight } from 'lucide-react';

const About = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            '*'
          );
        } else {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*'
          );
        }
      },
      { threshold: 0.5 }
    );

    if (iframe) observer.observe(iframe);

    return () => {
      if (iframe) observer.unobserve(iframe);
    };
  }, []);

  return (
    <section>
      <PageHero image={sectionImg} title={'About Us'} desc={'Learn what makes us who we are!'} />

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-gray-100 py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">World-Class Culinary Education</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Since 2007, Chef Academy of London has trained aspiring chefs through hands-on, real kitchen experience.
          </p>
        </section>

        {/* History of chef academy of london */}
        <section className="px-4 max-w-7xl mx-auto flex justify-center gap-12 text-center">
          <div className='w-[98%] md:w-[70%]'>
              <h2 className="text-3xl font-bold mb-4">Hisory of Chef Academy of London</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2007, Chef Academy of London has steadily risen to global prominence as one of the world’s most respected culinary institutions. Located in the vibrant culinary hub of central London, the academy was established with a vision to bridge the gap between classroom learning and real-world kitchen experience.

              Over the past decade and a half, Chef Academy has trained thousands of aspiring chefs from around the globe, empowering them with practical skills through its unique live-restaurant training model. This hands-on approach has set the standard for culinary education in the UK and beyond.
            </p>
            <p className="text-gray-700 mb-6">
              Today, the academy is accredited as a Premier Institution by ASIC, an internationally recognized body that validates excellence in academic quality and institutional integrity. As we continue to grow, we remain committed to delivering world-class training to the next generation of professional chefs.
            </p>
            </div>
        </section>

        {/* Mission & vision */}
        <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-2">
              At Chef Academy of London, our mission is to provide exceptional culinary training through real-world kitchen immersion, expert mentorship, and a tailored learning experience. We are dedicated to:
            </p>
            
            <ul className="text-gray-700 mb-6 grid gap-2">
              <li className='flex gap-1 items-center text-sm sm:text-[14px]'> <CirclePlus size={'14'} className='text-gray-900'/> Delivering industry-relevant, hands-on education in professional culinary environments.</li>

              <li className='flex gap-1 items-center text-sm sm:text-[14px]'> <CirclePlus size={'14'} className='text-gray-900'/> Cultivating creativity, precision, and professionalism in every student.</li>
              
              <li className='flex gap-1 items-center text-sm sm:text-[14px]'> <CirclePlus size={'14'} className='text-gray-900'/> Supporting students with career development and job placement assistance after graduation.</li>
              <li className='flex gap-1 items-center text-sm sm:text-[14px]'> <CirclePlus size={'14'} className='text-gray-900'/> Maintaining the highest standards of food safety, sustainability, and culinary innovation.</li>

            </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-6">
              To be a global leader in culinary education, recognised for transforming passionate individuals into confident, skilled, and industry-ready chefs. We aim to redefine professional chef training through hands-on experience, innovation, and excellence—preparing our students for successful careers in top-tier kitchens worldwide.
            </p>
            </div>
            
          </div>

          <div className="relative w-full h-[320px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              ref={iframeRef}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/hRDrLqtoBp0?autoplay=1&mute=1&enablejsapi=1&rel=0&loop=1&playlist=hRDrLqtoBp0"
              title="Chef Academy Promo Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Chef Academy?</h2>
            <ul className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />Live restaurant kitchen training system</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />Global recognition & ASIC accreditation</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />Hands-on, real-world experience</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />Personalised course structure & flexibility</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />100% employment rate post-graduation</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />Career support & job placement guidance</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />Learn with professional ingredients from day one</li>
              <li className="flex gap-3"><FaCheckCircle className="text-green-600 mt-1" />This isn’t a classroom—it’s a kitchen. Practice starts on day one.</li>
            </ul>
          </div>
        </section>

        {/* Team */}
        <section className="">
              <TeamSection/>
        </section>

        {/* Schools Section */}
        <section className="py-10 md:py-20 px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Schools</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Founded in Italy, Chef Academy expanded to the UK, quickly gaining global interest. Our unique model of practical, real-kitchen training has shaped chefs around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src={HospitalityAcademy} alt="Hospitality Academy" className="h-16 object-contain" />
            <img src={ChefAcademy} alt="Chef Academy London" className="h-16 object-contain" />
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-100 py-10 md:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <AboutFaq />
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
