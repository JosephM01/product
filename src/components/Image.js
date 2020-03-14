import React from 'react'

const Image = ({
  src,
  alt,
  height,
  width
}) =>
  <div>
    <div>
        <img src={src} alt={alt} height={height} width={width} />
    </div>
  </div>

export default Image