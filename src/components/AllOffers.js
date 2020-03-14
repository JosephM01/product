import React from 'react'

const AllOffers = ({
  children,
  className
}) =>
  <div className={className}>
    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><span>{ children }</span></a>
  </div>

export default AllOffers