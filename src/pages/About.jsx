import React from 'react'
import { useEffect, useRef } from 'react';

import PageHero from '../components/PageHero'
import sectionImg from '../assets/food1.jpg'

import { FaCheckCircle } from 'react-icons/fa';
import AboutFaq from '../components/AboutFaq';
import HospitalityAcademy from '../assets/hospitality-academy.png'; // placeholder
import ChefAcademy from '../assets/logo-newyork.png'; // placeholder
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

        {/* Mission & Accreditation */}
        <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We aim to transform aspiring cooks into professional chefs by providing an immersive learning environment inside live working kitchens. With real-time mentoring from professional chefs, our students are industry-ready.
            </p>
            <p className="text-gray-700">
              Chef Academy is proudly accredited by ASIC as a Premier Institution, reinforcing our quality and global reputation.
            </p>
          </div>

          {/* about us video */}
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
            </ul>
          </div>
        </section>

        {/* Schools Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto text-center">
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
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <AboutFaq />
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
