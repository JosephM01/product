import React from 'react'

const Name = ({
  children,
  className
}) => 
  <div>
    <h6 className={className}>{ children }</h6>
  </div>

export default Name