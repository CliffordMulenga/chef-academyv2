import { Link2Icon } from 'lucide-react'
import React from 'react'

const UsefulLink = ({title, url, className}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={`mb-4 transition-all duration-300 hover:font-semibold hover:translate-y-[-5px] flex gap-2 items-center text-blue-600  ${className}`}> <Link2Icon size={16}/> <span>{title}</span></a>
  )
}

export default UsefulLink
