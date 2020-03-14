import React from 'react'

const Header = ({
  children,
  className = ''
}) => 
  <div>
    <h3 className={className}>{ children }</h3>
  </div>

export default Header