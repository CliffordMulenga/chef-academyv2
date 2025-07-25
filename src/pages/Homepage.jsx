import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedCoursesSlider from '../components/FeaturedCoursesSlider'
import WhatToExpect from '../components/WhatToExpect'
import Testimonials from './Testimonials'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'




const Homepage = () => {
  const navigate = useNavigate()

  
  return (
    <section className='relative'>
      <section className="pb-16"><HeroSection /></section>
      <section className=""> <WhyChooseUs /></section>
      <section className="">   <FeaturedCoursesSlider /></section>
      <section className=""><WhatToExpect /></section>

      <div className='py-10'>
        {/* call for international students */}
      <div className='w-full flex justify-center'>
        <div className='w-[90%] sm:w-[60%] text-center flex flex-col gap-2 items-center'>
          <h1 className='text-3xl font-bold text-gray-800'>Are you not in UK?</h1>
          <p className='text-sm text-gray-700 w-[90%] sm:w-[70%]'>Don't worry we have you covered, vist the international students page and learn how you can join us</p>

          <Button onClick={()=>navigate('/international-student')} className={'w-[90%] sm:w-[50%] cursor-pointer'}>International Students</Button>
          </div>
      </div>
      </div>
      <section><Testimonials isOnHomePage={true} /></section>
    </section>
  )
}

export default Homepage
