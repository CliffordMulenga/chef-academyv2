import React from 'react'
import PageHero from '../components/PageHero'
import sectionImg from '../assets/food1.jpg'
const About = () => {
  return (
   <section>
    <PageHero image={sectionImg} title={'About Us'} desc={'Learn what makes us who we are!'}/>
   </section>
  )
}

export default About
