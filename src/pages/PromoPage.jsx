import React, { useMemo } from 'react'
import sectionImg from '../assets/food4.jpg'
import PageHero from '@/components/PageHero'
import mockDb from '@/data/mockDb'
import { applyPromotionsToCourses } from '@/lib/applyPromotionsToCourses'
import DetailSwapCard from '@/components/shsfui/cards/course-swap-card'


const PromoPage = () => {
  // const [promoCourses, setPromoCourses] = useState([])
  const onlineCourses = applyPromotionsToCourses(
  mockDb.courses.onlineCourses,
  mockDb.promotions
);

const cookingCourses = applyPromotionsToCourses(
  mockDb.courses.cookingCourses,
  mockDb.promotions
);



// use this when i have a db
// useEffect(() => {
//   const allcourses = [...cookingCourses, ...onlineCourses]
//   const filteredcourses = allcourses.filter(course => course.isOnPromo)

//   setPromoCourses(filteredcourses)
  
// },[cookingCourses, onlineCourses])

const promoCourses = useMemo(() => {
  return [...onlineCourses, ...cookingCourses].filter(course => course.isOnPromo);
}, [onlineCourses, cookingCourses]);

console.log(promoCourses)

  

  return (

    <section>
      <PageHero image={sectionImg} title={'Promotions'} desc={'Discover promotions and discounts here?'}/>

      <div className="max-w-7xl mx-auto">

      {/* courses on promotions */}
      <div className="grid justify-center sm:justify-between sm:grid-cols-2 lg:grid-cols-3 gap-8 shadow-lg">
        {promoCourses.map((course) => (
                        <DetailSwapCard key={course.id} data={course} />
                      ))}
      </div>
    </div>
    </section>
  )
}

export default PromoPage
