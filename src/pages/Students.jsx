import React from 'react'
import sectionImg from '../assets/food4.jpg'
import PageHero from '../components/PageHero'
import Accreditation from '../components/Accreditation'
import WhyStudy from '../components/WhyStudy '
import FAQAccordion from '../components/FAQAccordion'
import InfoCards from '../components/InfoCards'
import MainBtn from '../components/ui/MainBtn'

const Students = () => {

  

  return (
    <section>
    <PageHero image={sectionImg} title={'Students'} desc={'Discover opportunities to train as a world-class chef in one of the most vibrant culinary cities in the world London.'}/>

       <div className="bg-white">
      <Accreditation />
      <WhyStudy />
      <FAQAccordion />
      <InfoCards />
    </div>

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
