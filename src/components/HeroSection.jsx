/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
// import heroVideo from '../assets/hero-video.mp4'; // replace with your video
import heroVideo from '../assets/hero-video1.mp4'; // replace with your video
import { Link } from 'react-router-dom';
import MainBtn from './ui/MainBtn';

const HeroSection = () => {
  return (
    <div className="flex justify-center mt-28 md:mt-32 px-4">
      <section className="relative w-full  rounded-3xl h-[25rem] md:h-[30rem] md:max-w-[90%] overflow-hidden">
        {/* 🔊 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* 🔲 Overlay */}
        <div className="absolute inset-0 bg-black opacity-90 z-10" />

        {/* ✍️ Content */}
        <div className="relative z-20 h-full w-[100%] flex flex-col justify-center px-6 md:w-[80%] md:px-12 text-white ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            This isn't a classroom it,s a kitchen.
            <span className="text-amber-600 font-extrabold"> Practice starts on day one.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="montserrat text-base sm:text-lg md:text-xl max-w-2xl mb-8"
          >
            Train with Michelin-star chefs and earn your international culinary certification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <MainBtn to={'#apply'} title={'Apply Now'} styles={'bg-white text-black px-5 py-3 text-sm md:text-base rounded-md font-medium hover:bg-gray-200 transition'}/>

            <MainBtn to={'/courses'} title={'View Courses'} styles={'border border-white text-white px-5 py-3 text-sm md:text-base rounded-md font-medium hover:bg-white hover:text-black transition'}/>  
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
