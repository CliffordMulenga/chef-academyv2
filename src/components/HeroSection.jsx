/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero-video.mp4'; // replace with your video

const HeroSection = () => {
  return (
    <div className="flex justify-center mt-28 md:mt-32 px-4">
      <section className="relative w-full max-w-[90%] rounded-3xl h-[25rem] md:h-[28rem] overflow-hidden">
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
        <div className="absolute inset-0 bg-black opacity-70 z-10" />

        {/* ✍️ Content */}
        <div className="relative z-20 h-full w-[70%] flex flex-col justify-center px-6 md:px-12 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Become a <span className="accent font-extrabold">World-Class</span> Chef in London
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mb-8"
          >
            Train with Michelin-star chefs and earn your international culinary certification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#apply"
              className="bg-white text-black px-5 py-3 text-sm md:text-base rounded-md font-medium hover:bg-gray-200 transition"
            >
              Apply Now
            </a>
            <a
              href="#courses"
              className="border border-white text-white px-5 py-3 text-sm md:text-base rounded-md font-medium hover:bg-white hover:text-black transition"
            >
              View Courses
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
