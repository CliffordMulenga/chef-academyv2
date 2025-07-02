import React from 'react'
import PageHero from '../components/PageHero'
import sectionImg from '../assets/food3.jpg'
import ResturantCard from '../components/ui/ResturantCard'

import corebyclaresmythlondon from '../assets/resturantImgs/corebyclaresmythlondon.jpg'
import bibendumlondon from '../assets/resturantImgs/bibendumlondon.jpg'
import StoryRestaurant from '../assets/resturantImgs/StoryRestaurant.jpg'
import pollenstreetsocial from '../assets/resturantImgs/pollenstreetsocial.png'

import hakkasan from '../assets/resturantImgs/hakkasan.jpg'
import socialeatinghouse from '../assets/resturantImgs/socialeatinghouse.jpg'

import piedaterre from '../assets/resturantImgs/pied-a-terre.png'
import theninth from '../assets/resturantImgs/the-ninth.jpg'
import adams from '../assets/resturantImgs/adams.jpg'



const resturantData = [
  {
    id:1,
    name: 'Core by Clare Smyth',
    img: corebyclaresmythlondon,
    map: 'https://maps.app.goo.gl/cCopkzRqyHak83UV9',
    website: 'https://www.corebyclaresmyth.com',
    location: `92 Kensington Park Road London - W11 2PN `,
    contact: '020 3937 5086'
  },

  {
    id:2,
    name: 'Bibendum',
    img: bibendumlondon,
    map: 'https://maps.app.goo.gl/BTBEycYXvDvkBcek6',
    website: 'https://www.bibendum.co.uk',
    location: `Michelin House 81 Fulham Rd Chelsea - London SW3 6RD `,
    contact: '020 7581 5817'
  },

  {
    id:3,
    name: 'Story Restaurant',
    img: StoryRestaurant,
    map: 'https://maps.app.goo.gl/KP4chPCUPbfYazij8',
    website: 'https://www.restaurantstory.co.uk',
    location: `199 Tooley Street London, SE1 2JX `,
    contact: '020 7183 2117'
  },

  {
    id:4,
    name: 'Pollen Street Social',
    img: pollenstreetsocial,
    map: 'https://maps.app.goo.gl/5EMn2Tbqpw84w8yBA',
    website: 'https://www.pollenstreetsocial.com',
    location: `8 Pollen Street London W1S 1NQ`,
    contact: '0207 290 7600'
  },

  {
    id:5,
    name: 'Hakkasan',
    img: hakkasan,
    map: 'https://maps.app.goo.gl/aQ9ETx5pXrqBjjjt8',
    website: 'https://www.hakkasan.com',
    location: `17 Bruton St - Mayfair London W1J 6QB`,
    contact: '020 7907 1888'
  },

  {
    id:6,
    name: 'Social Eating House',
    img: socialeatinghouse,
    map: 'https://maps.app.goo.gl/jcFx3Bf4xe48WG8s5',
    website: 'https://www.socialeatinghouse.com',
    location: `58 Poland Street, Soho London W1F 7NR`,
    contact: '020 7993 3251'
  },

  {
    id:7,
    name: 'Pied à Terre',
    img: piedaterre,
    map: 'https://maps.app.goo.gl/UoVKNPnToH2Gi5WP9',
    website: 'https://www.socialeatinghouse.com',
    location: `34 Charlotte Street London W1T 2NH`,
    contact: '020 7636 1178'
  },

  {
    id:8,
    name: 'The Ninth London',
    img: theninth,
    map: 'https://maps.app.goo.gl/TT9cTNyiqFqD6gfU9',
    website: 'https://www.theninthlondon.com',
    location: `22 Charlotte Street London W1T 2NB`,
    contact: '020 3019 0880'
  },

  {
    id:9,
    name: 'Adam\'s',
    img: adams,
    map: '/',
    website: 'https://www.adamsrestaurant.co.uk',
    location: `New Oxford House, 16 Waterloo Street, Birmingham, B2 5UG`,
    contact: '(---) --- ----'
  },





]
const Restaurants = () => {
  return (
    <section>
      <PageHero image={sectionImg} title={'Our Partner Restaurants'} desc={''} />

      <div className="py-20 px-4 bg-white grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          resturantData.map((resturant) => {
            return (
              <div key={resturant.id} className='px-2'>
                <ResturantCard
                  image={resturant.img}
                  name={resturant.name}
                  map={resturant.map}
                  website={resturant.website}
                  location={resturant.location}
                  phone={resturant.contact}
                />
              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default Restaurants
