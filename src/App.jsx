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

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />} />
          <Route path='/contact' element={<ContactUs />} />

          <Route path="/courses/:id" element={<CourseDetails />} />

        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App
