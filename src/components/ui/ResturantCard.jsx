import React from 'react'
import { FaExternalLinkAlt, FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResturantCard = ({ image, website, name, map, location, phone }) => {
    return (
        <div className='relative h-[22rem] md:h-[28rem] rounded-3xl overflow-hidden shadow-lg transition-transform duration-500'>

            {/* Arrow */}

            <div className='absolute top-4 right-4 flex gap-4 z-50'>

            <Link to={map} className={`cursor-pointer  bg-white/80 backdrop-blur-sm p-4 rounded-full
                    `}>
                <FaMapMarker className="text-black " />
            </Link>

            <Link to={website} target='_blank' rel='noopener noreferrer' className={`cursor-pointer  bg-white/80 backdrop-blur-sm p-4 rounded-full
                    `}>
                <FaExternalLinkAlt className="text-black " />
            </Link>
            </div>
            

            {/* Hotel Image */}
            <img 
            src={image} 
            alt={name} 
            className='absolute inset-0 w-full h-full object-cover'
            
            />

             {/*Overlay  */}
            <div className="absolute inset-0 bg-black opacity-70 z-10" />

            <div className="relative z-20 h-full w-full flex flex-col justify-end p-6 text-left text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">{name}</h3>
                    <p className="text-sm text-gray-200">{location} • {phone}</p>
                  </div>

        </div>
    )
}

export default ResturantCard
