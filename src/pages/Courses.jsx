import React, { useState } from 'react';
import sectionImg from '../assets/food2.jpg'
import PageHero from '../components/PageHero'


const onlineCourses = [
  {
    title: 'Introduction to the Professional Chef Online Course',
    price: '£1495',
    duration: '6 months to complete',
    studyType: 'Online but Fully supported',
    certificate: 'Culinary reference document provided',
    description: 'You can train at your own speed.'
  },
  {
    title: 'Michelin Star Advanced Techniques Online Course',
    price: '£1495',
    duration: '6 months to complete',
    studyType: 'Online but Fully supported',
    certificate: 'Culinary reference document provided',
    description: 'You can train at your own speed.'
  }
];

const cookingCourses = [
    {
      title: 'Hospitality Management and Advanced Food Science',
      price: '£19200',
      duration: '600 hours / 6 months',
      location: 'London',
    },
    {
      title: 'Advanced Professional Chef Course',
      price: '£15200',
      duration: '550 hours / 6 months',
      location: 'London',
    },
    {
      title: 'Michelin Star Chef Course',
      price: '£12500',
      duration: '300 hours / 3 months',
      location: 'London',
    },
    {
      title: 'Professional Chef Course',
      price: '£9600',
      duration: '325 hours / 3 months',
      location: 'London',
    },
    {
      title: 'Kosher Professional Chef Course',
      price: '£15700',
      duration: '400 hours / 4 months',
      location: 'London',
    },
    {
      title: 'Halal Advanced Professional Chef Course',
      price: '£15200',
      duration: '550 hours / 6 months',
      location: 'London',
    },
    {
      title: 'Professional Chef Course - Italian cuisine',
      price: '£9600',
      duration: '325 hours / 3 months',
      location: 'London',
    },
    {
      title: 'Professional Patisserie and Confectionary Course',
      price: '£20500',
      duration: '840 hours / 6 months',
      location: 'London',
    },
    {
      title: 'Introduction to the Professional Chef Course',
      price: '£5300',
      duration: '80 hours / 2 weeks',
      location: 'London',
    },
    {
      title: 'Advanced Cooking Techniques',
      price: '£5300',
      duration: '80 hours / 2 weeks',
      location: 'London',
    },
    {
      title: 'Intensive Professional Pastry Programme',
      price: '£7200',
      duration: '80 hours / 2 weeks',
      location: 'London',
    },
  ];


const Courses = () => {
  const [activeTab, setActiveTab] = useState('online');
  return (
    <section>
    <PageHero image={sectionImg} title={'Explore Our Courses'} desc={''}/>


      <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('online')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === 'online' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Online Courses
          </button>
          <button
            onClick={() => setActiveTab('cooking')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === 'cooking' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Cooking Courses
          </button>
        </div>

        {/* Content */}
        {activeTab === 'online' && (
          <div className="grid md:grid-cols-2 gap-8">
            {onlineCourses.map((course, idx) => (
              <div key={idx} className="border rounded-xl p-6 shadow-sm bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Price:</strong> {course.price}</p>
                <p className="text-gray-600 mb-1"><strong>Duration:</strong> {course.duration}</p>
                <p className="text-gray-600 mb-1"><strong>Study Type:</strong> {course.studyType}</p>
                <p className="text-gray-600 mb-1"><strong>Certificate:</strong> {course.certificate}</p>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            ))}
            <div className="md:col-span-2 bg-yellow-100 p-4 rounded-lg text-center text-sm text-gray-700">
              Save 10% when you purchase both online courses together.
            </div>
          </div>
        )}

        {activeTab === 'cooking' && (
          <div className="grid md:grid-cols-2 gap-8">
            {cookingCourses.map((course, idx) => (
              <div key={idx} className="border rounded-xl p-6 shadow-sm bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Price:</strong> {course.price}</p>
                <p className="text-gray-600 mb-1"><strong>Duration:</strong> {course.duration}</p>
                <p className="text-gray-600 mb-1"><strong>Location:</strong> {course.location}</p>
                <p className="text-gray-600 mb-1"><strong>Certificate:</strong> {'Yes'}</p>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    </section>
  )
}

export default Courses
