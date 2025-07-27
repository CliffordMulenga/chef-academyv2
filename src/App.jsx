import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Restaurants from './pages/Restaurants'
import Testimonials from './pages/Testimonials'
import Courses from './pages/Courses'
import Students from './pages/Students'
import ContactUs from './pages/ContactUs'
import CourseDetails from './pages/CourseDetails'
import InternationalStudent from './pages/InternationalStudent'
import mockDb from './data/mockDb'
import { useEffect, useState } from 'react'
import NewCoursePromoBanner from './components/newCoursePromoBanner'
import DiscountPromoBanner from './components/promoBanner'
import PromoPage from './pages/PromoPage'
import Loader from './components/Loader'


function App() {
  const [isPromoActive, setIsPromoActive] = useState(false);
  const [loading, setLoading] = useState(true);

  const promos = mockDb.promotions
  const isPromos = promos.length

  


  useEffect(() => {
    if (isPromos > 0) {
      setIsPromoActive(true)
    }
  }, [isPromos])

  useEffect(() => {
    // simulate delay or fetch check
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  

  return (
    <>
    <main className='relative'>
       
      <Router>
        {/* for dispalying promotions */}
      <div className='fixed bottom-2 left-0 z-50 w-full flex flex-col gap-2'>
        {isPromoActive &&
          promos.map((promo) => {
            if (promo.type === 'new-course') {
              return <NewCoursePromoBanner key={promo.id} data={promo} />;
            }

            if (promo.type === 'discount') {
              return <DiscountPromoBanner key={promo.id} data={promo} to={'/promotions'}/>;
            }
            return null; // Skip unknown types
          })}


      </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/international-student' element={<InternationalStudent />} />
          <Route path='/promotions' element={<PromoPage />} />

          <Route path="/courses/:id" element={<CourseDetails />} />

        </Routes>

        <Footer />

      </Router>
    </main>
      
    </>
  )
}

export default App
