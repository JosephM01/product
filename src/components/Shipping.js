import React from 'react'

const Shipping = ({
  children,
  className
}) =>
  <div>
    <span className={className}>{ children }</span>
  </div>

export default Shipping