import React, { useEffect, useRef} from 'react'
import sectionImg from '../assets/food5.jpg'
import PageHero from '../components/PageHero'

const VideoReviews =
  [
    {
      name: 'Daniel Lizarazo',
      location: 'Colombia',
      youtube: 'BnLvCkn6EKo',
    },
    {
      name: 'Leonidas Argyrou',
      location: 'Greece',
      youtube: 'CnxtvI3c8AA',
    },
    {
      name: 'Nicholas Rodgers',
      location: 'Uk',
      youtube: 'KSAu3Ct1LoI',
    },
    {
      name: 'Kenetha Ashton',
      location: 'Virgin Islands',
      youtube: 'uEaCrJj1eZ8',
    }
  ]

const Testimonials = ({isOnHomePage}) => {
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
    <section>
      {isOnHomePage ? "" : (
        <PageHero image={sectionImg} title={'Testimonials'} desc={''} />
      )}
      <div className='mt-10  flex justify-center'>
        <div className='w-full md:w-[90%]'>
          <h1 className='poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>Real Stories from real students</h1>

          {/* testimonials */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {
              VideoReviews.map((review) => {
                return (
                  <div>
                    <h3>{review.name} • <span className='text-sm text-gray-500 mb-2'>{review.location}</span></h3>
                    <iframe
                      ref={iframeRef}
                      className="w-full h-50 rounded-lg border border-gray-400"
                      src={`https://www.youtube.com/embed/${review.youtube}?autoplay=0&mute=1&enablejsapi=1&rel=0&loop=1&playlist=${review.youtube}`}
                      title={`${review.name} Video`}
                      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )
              })
            }

          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials
