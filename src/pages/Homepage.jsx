import React from 'react'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedCoursesSlider from '../components/FeaturedCoursesSlider'
import WhatToExpect from '../components/WhatToExpect'


const Homepage = () => {
  return (
    <section className=''>
      <section className="pb-16"><HeroSection /></section>
      <section className=""> <WhyChooseUs /></section>
      <section className="">   <FeaturedCoursesSlider /></section>
      <section className=""><WhatToExpect /></section>




    </section>
  )
}

export default Homepage
