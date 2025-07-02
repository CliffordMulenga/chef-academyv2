import React from 'react'
import { Link } from 'react-router-dom'

const MainBtn = ({
    styles,
    title
}) => {
  return (
    <Link className={`${styles}`}>
      {title}
    </Link>
  )
}

export default MainBtn
