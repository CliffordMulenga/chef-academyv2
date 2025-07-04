import React from 'react'

const FAQAccordion = () => {
  return (
    <section className="bg-white py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[{
          q: "Will my qualifications be recognised?",
          a: "Yes, Chef Academy London issues a diploma accredited by ASIC UK, widely respected in the culinary industry."
        }, {
          q: "How much are the tuition fees?",
          a: "Fees vary by course. Please refer to each course page for detailed pricing."
        }, {
          q: "How do I apply for courses?",
          a: "You can apply online through our website or request an application form from us directly."
        }, {
          q: "Do I need a Visa?",
          a: "Yes. We support short term study visas and provide documentation upon full course payment."
        }].map((item, i) => (
          <details key={i} className="bg-gray-100 p-4 rounded-md">
            <summary className="font-medium cursor-pointer">{item.q}</summary>
            <p className="mt-2 text-sm text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FAQAccordion
