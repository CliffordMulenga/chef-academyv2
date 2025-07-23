import React from 'react';
import { useParams } from 'react-router-dom';
import mockDb from '../data/mockDb';
import PageHero from '../components/PageHero';
import sectionImg from '../assets/food2.jpg';

const CourseDetails = () => {
  const { id } = useParams();

  const allCourses = [
    ...mockDb.courses.onlineCourses,
    ...mockDb.courses.cookingCourses,
  ];

  const course = allCourses.find(course => course.id === id);

  if (!course) {
    return (
      <div className="p-10 text-center text-red-600">
        <h2>Course not found</h2>
      </div>
    );
  }

  return (
    <section>
      <PageHero image={sectionImg} title={course.title} desc={''}/>

      <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-6">{course.description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="text-gray-600">{course.courseOverview}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Schedule</h3>
          <p className="text-gray-600">{course.courseSchedule}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Price</h3>
          <p className="text-gray-600">{course.price}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Duration</h3>
          <p className="text-gray-600">{course.duration}</p>
        </div>
        {course.location && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">{course.location}</p>
          </div>
        )}
        {course.studyType && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Study Type</h3>
            <p className="text-gray-600">{course.studyType}</p>
          </div>
        )}
      </div>

      {course.entryRequirements?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Entry Requirements</h3>
          <ul className="list-disc list-inside text-gray-600">
            {course.entryRequirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {course.certificate && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Certificate</h3>
          <p className="text-gray-600">{course.certificate}</p>
        </div>
      )}

      <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
        Apply Now
      </button>
    </section>
    </section>
    
  );
};

export default CourseDetails;
