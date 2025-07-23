import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import sectionImg from '../assets/food2.jpg';
import mockDb from '../data/mockDb';
import DetailSwapCard from '../components/shsfui/cards/course-swap-card';
import { CookingPot, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotSureHowToApplyCard from '@/components/NotSureHowToApplyCard';


const Courses = () => {
  const [activeTab, setActiveTab] = useState('online');
  // const navigate = useNavigate();
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
              className={`px-6 py-2 rounded-full text-sm font-medium transition flex items-center gap-1 ${activeTab === 'online' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
             <Globe size={16}/> Online Courses
            </button>
            <button
              onClick={() => setActiveTab('cooking')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition flex items-center gap-1  ${activeTab === 'cooking' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
              <CookingPot size={16}/> Cooking Courses
            </button>
          </div>

          {/* Online Courses */}
          {activeTab === 'online' && (
            <>
              <div className=" grid justify-center sm:justify-between sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {onlineCourses.map((course) => (
                  
                    <DetailSwapCard key={course.id} data={course} />
                  
                  
                ))}

              </div>
              <div className="md:col-span-2 bg-yellow-100 p-4 rounded-lg text-center text-sm text-gray-700 mt-5">
                Save 10% when you purchase both online courses together.
              </div>
            </>

          )}

          {/* Cooking Courses */}
          {activeTab === 'cooking' && (
            <div className="grid md:grid-cols-3 gap-8 shadow-lg">
              {cookingCourses.map((course) => (
                <DetailSwapCard data={course} />
              ))}
            </div>
          )}
        </div>

        <NotSureHowToApplyCard/>
      </section>
    </section>
  );
};

export default Courses;
