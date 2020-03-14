import React from 'react'

const Price = ({
  children,
  className
}) =>
  <div>
    <span className={className}>{ children }</span>
  </div>

export default Price