import React from 'react'
import { Link } from 'react-router-dom'

const MainBtn = ({
    styles,
    title,
    to
}) => {
  return (
    <Link to={to} className={`${styles}`}>
      {title}
    </Link>
  )
}

export default MainBtn
