// src/pages/InternationalStudents.jsx

import React from 'react';
import { BookOpen, Mail, PlaneTakeoff, Home, HelpCircle, Globe, Banknote, Landmark, ArrowBigDown} from 'lucide-react';
import PageHero from '../components/PageHero';
import sectionImg from '../assets/food2.jpg';
import { Link } from 'react-router-dom';
import WhatToExpect from '@/components/WhatToExpect';
import UsefulLink from '@/components/ui/usefulLink';

const InternationalStudents = () => {
  return (
    <section>
      <PageHero image={sectionImg} title={'International Students'} desc={'Support and guidance for students studying from abroad'} />

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Why Study in London */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2"><Globe className="text-blue-600" /> Why Study in London?</h2>
            <p className="text-gray-700 max-w-3xl">
              London is a global culinary capital filled with opportunities. Studying here places you at the heart of the hospitality world—surrounded by Michelin-starred restaurants, diverse cuisines, and career-making internships. London also offers rich culture, world-class infrastructure, and vibrant student life.
            </p>
          </div>

          {/* Video why us */}
            <div>
                <WhatToExpect/>
            </div>


          {/* Visa Information */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><PlaneTakeoff className="text-green-600" /> Visa Information</h2>
            <p className="text-gray-700 mb-2">
              If you're a non-UK student, you may need a Standard Visitor visa or Short-term Study visa depending on your course duration. We recommend applying 3–6 months in advance.
            </p>
            <span className='text-sm text-gray-500 font-semibold' >Useful links <ArrowBigDown/></span>

            <p className="w-max leading-0">
                <UsefulLink title={'UK Standard Visitor Visa Info'} url={'https://www.gov.uk/standard-visitor '}/>
              <br />
                <UsefulLink title={'Short-term Study Visa Info'} url={'https://www.gov.uk/study-visit-visa'} />
            </p>
          </div>

          {/* Application Process */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><BookOpen className="text-purple-600" /> Application Process</h2>
            <p className="text-gray-700">
              You can apply for our programmes through the online application form. Once submitted, our team will review and get back to you via email within 5 business days. For application questions, contact:
            </p>
            <p className="mt-2 text-blue-700 flex items-center gap-2"><Mail /> admissions@chefacademylondon.com</p>
          </div>

          {/* Fee & Payment Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Banknote className="text-amber-500" /> Tuition Fees & Payment</h2>
            <p className="text-gray-700">
              Course fees must be paid in full 30 days before course start. We offer secure payment via bank transfer and accept GBP only.
            </p>
          </div>

          {/* Accommodation Help */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Home className="text-red-500" /> Accommodation & Insurance</h2>
            <p className="text-gray-700">
              While we don’t provide on-campus housing, we work with trusted student housing providers in London. We also recommend travel and health insurance during your stay.
            </p>
            <span className='text-sm text-gray-500 font-semibold' >Useful links <ArrowBigDown/></span>
            <p className="w-max leading-0">
                <UsefulLink title={'Unite Students'} url={'https://www.unitestudents.com/'}/>
              <br /> 
                <UsefulLink title={'Student.com'} url={'https://www.student.com/uk/london'}/>
            </p>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><HelpCircle className="text-indigo-600" /> FAQs for International Students</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Can I work while I study? — If you hold a Standard Visitor visa, working is not permitted.</li>
              <li>Do you provide visa sponsorship? — No, but we guide you through the process.</li>
              <li>What language is the instruction in? — All programmes are taught in English.</li>
              <li>What is the minimum English requirement? — Intermediate spoken and written English is required.</li>
            </ul>
          </div>

          {/* Apply or Contact */}
          <div className="flex flex-wrap gap-6 mt-10">
            <Link
              to="/courses"
              className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
            >
              Browse courses
            </Link>
            <Link
              to="/contact"
              className="border border-black text-black px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Talk to an Advisor
            </Link>
          </div>

          {/* Additional Info (UK Life) */}
          <div className="pt-20">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2"><Landmark className="text-gray-800" /> Life in the UK (Coming Soon)</h2>
            <p className="text-gray-600">
              We’ll soon share more helpful information on London’s weather, public transport, local culture, and tips to make the most of your UK study experience.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default InternationalStudents;
