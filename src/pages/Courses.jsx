import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import sectionImg from '../assets/food2.jpg';
import mockDb from '../data/mockDb';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('online');
  const navigate = useNavigate();

  const onlineCourses = mockDb.courses.onlineCourses;
  const cookingCourses = mockDb.courses.cookingCourses;

  return (
    <section>
      <PageHero image={sectionImg} title={'Explore Our Courses'} desc={''} />

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

          {/* Online Courses */}
          {activeTab === 'online' && (
            <div className="grid md:grid-cols-2 gap-8">
              {onlineCourses.map((course) => (
                <div key={course.id} className="border rounded-xl p-6 shadow-sm bg-gray-50">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-1"><strong>Price:</strong> {course.price}</p>
                  <p className="text-gray-600 mb-2">{course.courseOverview}</p>
                  <div className="flex gap-4 mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded text-sm">Apply Now</button>
                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
              <div className="md:col-span-2 bg-yellow-100 p-4 rounded-lg text-center text-sm text-gray-700">
                Save 10% when you purchase both online courses together.
              </div>
            </div>
          )}

          {/* Cooking Courses */}
          {activeTab === 'cooking' && (
            <div className="grid md:grid-cols-2 gap-8">
              {cookingCourses.map((course) => (
                <div key={course.id} className="border rounded-xl p-6 shadow-sm bg-gray-50">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-1"><strong>Price:</strong> {course.price}</p>
                  <p className="text-gray-600 mb-2">{course.courseOverview}</p>
                  <div className="flex gap-4 mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded text-sm">Apply Now</button>
                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Courses;
