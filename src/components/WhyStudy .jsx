import React from 'react'
import { useEffect, useRef } from 'react';

// import studylondon from '../assets/study-london.jpg'

const WhyStudy  = () => {

  const iframeRef = useRef(null);
  
      useEffect(() => {
          const iframe = iframeRef.current;
          const observer = new IntersectionObserver(
              ([entry]) => {
                  if (entry.isIntersecting) {
                      iframe.contentWindow.postMessage(
                          '{"event":"command","func":"playVideo","args":""}',
                          '*'
                      );
                  } else {
                      iframe.contentWindow.postMessage(
                          '{"event":"command","func":"pauseVideo","args":""}',
                          '*'
                      );
                  }
              },
              { threshold: 0.5 }
          );
  
          if (iframe) observer.observe(iframe);
  
          return () => {
              if (iframe) observer.unobserve(iframe);
          };
      }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div >
        <h2 className="text-2xl font-bold mb-4">Why Study in London?</h2>
        <p className="text-gray-600">
          London is a world-class culinary hub with opportunities to train in Michelin-starred kitchens, make global connections, and expand your career potential.
        </p>
      </div>
      {/* <img src={studylondon} alt="Study in London" className="rounded-lg shadow-md p" /> */}

                {/* about us video */}
          <div className="relative w-full h-[320px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              ref={iframeRef}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/O296SsJ5rR8?autoplay=1&mute=1&enablejsapi=1&rel=0&loop=1&playlist=O296SsJ5rR8"
              title="Chef Academy Promo Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
    </div>
  </section>
  )
}

export default WhyStudy 
