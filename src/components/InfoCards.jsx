import React from 'react'

const InfoCards = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h1 className='text-2xl md:text-3xl font-bold mb-4 text-center'>Need to Know?</h1>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
      
      {[
        { title: "Finances", text: "Ensure you can cover tuition and living costs during your study in London." },
        { title: "Accommodation", text: "We help students find nearby housing or you're free to make arrangements personally." },
        { title: "Insurance", text: "We recommend international students have valid personal insurance coverage." }
      ].map((card, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
          <p className="text-gray-600 text-sm">{card.text}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default InfoCards
