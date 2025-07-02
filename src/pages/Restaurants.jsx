import React from 'react'
import PageHero from '../components/PageHero'
import sectionImg from '../assets/food3.jpg'
import ResturantCard from '../components/ui/ResturantCard'

import corebyclaresmythlondon from '../assets/resturantImgs/corebyclaresmythlondon.jpg'

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
    img: corebyclaresmythlondon,
    map: 'https://maps.app.goo.gl/cCopkzRqyHak83UV9',
    website: 'https://www.bibendum.co.uk',
    location: `Michelin House 81 Fulham Rd Chelsea - London SW3 6RD `,
    contact: '020 7581 5817'
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
