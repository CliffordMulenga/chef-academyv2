import React from 'react'
import sectionImg from '../assets/food4.jpg'
import PageHero from '@/components/PageHero'


const PromoPage = () => {
  return (
    <div>
      <PageHero image={sectionImg} title={'Promotions'} desc={'Discover promotions and discounts here?'}/>

      {/* courses on promotions */}
      <div>
        this is where the courses will appear
      </div>
    </div>
  )
}

export default PromoPage
