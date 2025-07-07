/* eslint-disable no-unused-vars */
// FeaturedCoursesSlider.jsx
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import {  FaExternalLinkAlt } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

// videos 
import course1 from '../assets/course1.mp4';
import course2 from '../assets/course2.mp4';
import course3 from '../assets/course3.mp4';
import course4 from '../assets/course4.mp4';
import course5 from '../assets/course5.mp4';

// logos
import corebyclaresmyth from '../assets/corebyclaresmyth.png';
import bibendum from '../assets/Bibendum.png';
import story from '../assets/story.png';
import saellondon from '../assets/saellondon.png';
import hakkasan from '../assets/hak.svg';
import piedaterre from '../assets/PiedàTerre.png';
import { Link } from 'react-router-dom';

const restaurantLogos = [
  corebyclaresmyth,
  bibendum,
  story,
  saellondon,
  hakkasan,
  piedaterre,
];

// featured course data
const courseData = [
  {
    title: 'Michelin Star Chef Course',
    category: 'Cooking Course',
    duration: '300 Hours',
    media: course1,
    to:'#course'
  },
  {
    title: 'Introduction to the Professional Chef Online Course',
    category: 'Online Course',
    duration: '6 Weeks',
    media: course2,
    to:'#course'

  },
  {
    title: 'Advanced Pastry & Confectionary Course',
    category: 'Cooking Course',
    duration: '840 Hours',
    media: course3,
    to:'#course'

  },
  {
    title: 'Kosher Professional Chef Course',
    category: 'Cooking Course',
    duration: '400 Hours',
    media: course4,
    to:'#course'

  },
  {
    title: 'Halal Advanced Professional Chef Course',
    category: 'Cooking Course',
    duration: '550 Hours',
    media: course5,
    to:'#course'

  }
];

const FeaturedCoursesSlider = () => {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const allVideos = document.querySelectorAll('.slick-center video');

    allVideos.forEach((video) => {
      setTimeout(() => {
        video.play().catch(() => {});
      }, 100);
    });

    document.querySelectorAll('.course-slider video').forEach((video) => {
      if (!video.closest('.slick-center')) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Courses</h2>
          <p className="text-gray-600">Explore our top programs</p>
        </div>

        <Slider {...settings} ref={sliderRef} className="course-slider">
          {courseData.map((course, index) => {
            const isActive = index === activeIndex % courseData.length;

            return (
              <div key={index} className="px-2">
                <motion.div
                  className={`relative h-[22rem] md:h-[28rem] rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 ${
                    isActive ? 'scale-100' : 'scale-95 opacity-70'
                  }`}
                >
                  {/* Arrow */}
                  <Link to={course.to}className={`cursor-pointer absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-full
                    ${isActive ? 'z-30' : 'z-20'}
                    `}>
                    <FaExternalLinkAlt className="text-black " />
                  </Link>

                  {/* Media */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={course.media}
                    muted
                    loop
                    playsInline
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-70 z-10" />

                  {/* Content */}
                  <div className="relative z-20 h-full w-full flex flex-col justify-end p-6 text-left text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-200">{course.category} • {course.duration}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </section>

      {/* Trusted by Banner */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-6">Trusted by World-Class Restaurants</h3>

          <div className="overflow-hidden relative">
            <div className="animate-scroll flex items-center gap-12 whitespace-nowrap">
              {[...restaurantLogos, ...restaurantLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`partner-${i}`}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 7s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default FeaturedCoursesSlider;
