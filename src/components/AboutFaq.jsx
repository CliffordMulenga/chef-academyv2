// AboutFaq.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the admission requirements?',
    answer: 'Students must be at least 18 years old and demonstrate intermediate English proficiency if it is not their first language.',
  },
  {
    question: 'Is previous culinary experience necessary?',
    answer: 'Experience is needed for the Michelin Star and Advanced Cooking Techniques courses. Applicants will undergo an assessment to verify suitability.',
  },
  {
    question: 'How do I book?',
    answer: 'You can book via phone, email, or our contact form online. A 10% deposit is required to secure a place.',
  },
  {
    question: 'Do you offer financial aid?',
    answer: 'As a private school, we do not offer financial aid. However, some Job Centres may provide assistance.',
  },
  {
    question: 'Is there a job placement programme?',
    answer: 'Yes! Chef Academy boasts a 100% employment success rate for students who complete their programs.',
  },
  {
    question: 'Do you offer accommodation?',
    answer: 'Yes, we collaborate with a trusted real estate agency to help students find accommodation.',
  },
  {
    question: 'Can I change my start date?',
    answer: 'Yes, with at least 30 working days notice. If there’s no availability, a refund excluding the deposit will be issued.',
  },
];

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 bg-gray-50 font-medium flex justify-between items-center text-gray-800 hover:bg-gray-100"
                onClick={() => toggleFAQ(i)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === i ? '-' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 text-sm text-gray-600 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
