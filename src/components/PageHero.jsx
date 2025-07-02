/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const PageHero = ({image, title, desc}) => {
  return (
    <div className='flex justify-center mt-28 md:mt-32 px-4'>
        <section className='relative w-full   pt-10 rounded-3xl h-[8rem] sm:pb-0 md:h-[16rem] md:max-w-[90%] overflow-hidden'>


        {/* image */}
        <img src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-70 z-10'></div>


        {/* content */}
        <div className='relative z-20 h-full w-[100%] flex flex-col justify-center px-6 md:[70%] md:px-12 text-white'>
            <motion.h1
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.8}}

                className='poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'
            >
            {title}
            </motion.h1>

            {/* if i need to add the brief description for the current page */}

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[12px] montserrat sm:text-lg md:text-xl max-w-2xl mb-8"
          >
            {desc}
          </motion.p>
        </div>
        </section>
    </div>
  )
}

export default PageHero
