import React from 'react'

const Discount = ({
  children,
  className
}) =>
  <div>
    <span className={className}>{ children } OFF</span>
  </div>

export default Discount