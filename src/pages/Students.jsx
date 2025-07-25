import React from 'react'
import sectionImg from '../assets/food4.jpg'
import PageHero from '../components/PageHero'
import Accreditation from '../components/Accreditation'
import WhyStudy from '../components/WhyStudy '
import FAQAccordion from '../components/FAQAccordion'
import InfoCards from '../components/InfoCards'
import MainBtn from '../components/ui/MainBtn'
import NotSureHowToApplyCard from '@/components/NotSureHowToApplyCard'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Students = () => {
  const navigate = useNavigate()

  

  return (
    <section>
    <PageHero image={sectionImg} title={'Students'} desc={'Discover opportunities to train as a world-class chef in one of the most vibrant culinary cities in the world London.'}/>

    <div className="bg-white">
      <Accreditation />

      {/* call for international students */}
      <div className='w-full flex justify-center'>
        <div className='w-[90%] sm:w-[60%] text-center flex flex-col gap-2 items-center'>
          <h1 className='text-3xl font-bold text-gray-800'>Are you not in UK?</h1>
          <p className='text-sm text-gray-700 w-[90%] sm:w-[70%]'>Don't worry we have you covered, vist the international students page and learn how you can join us</p>

          <Button onClick={()=>navigate('/international-student')} className={'w-[90%] sm:w-[50%]'}>International Students</Button>
          </div>
      </div>
      <WhyStudy />
      <InfoCards />
      <NotSureHowToApplyCard/>
    </div>

    
    
    <FAQAccordion />

    <section className="bg-black/90 text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions or Need Help Applying?</h2>
        <p className="mb-6 text-gray-300">Contact us at <a href="mailto:admin@chefacademyoflondon.com" className="underline">admin@chefacademyoflondon.com</a> or <a href="mailto:info@chefacademyoflondon.com" className="underline">info@chefacademyoflondon.com</a></p>

        <div className="flex justify-center flex-wrap gap-4">
          <MainBtn to={'#apply'} title={'Apply Now'} styles={'bg-white text-black px-5 py-3 text-sm md:text-base rounded-md font-medium hover:bg-gray-200 transition'}/>

            <MainBtn to={'/contact'} title={'Contact us'} styles={'border border-white text-white px-5 py-3 text-sm md:text-base rounded-md font-medium hover:bg-white hover:text-black transition'}/> 
        </div>
    </section>
    </section>

     
  )
}

export default Students
