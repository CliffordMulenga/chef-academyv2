import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedCoursesSlider from '../components/FeaturedCoursesSlider'
import WhatToExpect from '../components/WhatToExpect'
import Testimonials from './Testimonials'



const Homepage = () => {
  
  return (
    <section className='relative'>
      <section className="pb-16"><HeroSection /></section>
      <section className=""> <WhyChooseUs /></section>
      <section className="">   <FeaturedCoursesSlider /></section>
      <section className=""><WhatToExpect /></section>
      <section><Testimonials isOnHomePage={true} /></section>
    </section>
  )
}

export default Homepage
