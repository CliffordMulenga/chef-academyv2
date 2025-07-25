import { useEffect, useRef } from 'react';

const WhatToExpect = () => {
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
        <section className="bg-white py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
                        Come behind the scenes...
                    </h2>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Step inside our kitchens and discover what it's like to train with Michelin-star chefs,
                        work with premium ingredients, and master real-world culinary skills that take your career global.
                    </p>
                    <a
                        href="#apply"
                        className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
                    >
                        Apply Now
                    </a>
                </div>

                {/* YouTube Video */}
                <div className="relative w-full h-[320px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        ref={iframeRef}
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/bHgccVub1BM?autoplay=1&mute=1&enablejsapi=1&rel=0&loop=1&playlist=bHgccVub1BM"
                        title="Chef Academy Promo Video"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
