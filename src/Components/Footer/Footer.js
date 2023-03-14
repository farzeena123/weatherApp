import React from 'react';
import  Wave from 'react-wavify'


function Footer() {
  return (
    <div className='footer'>

        <Wave mask="url(#mask)" fill="orange" >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="150" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>
    

    </div>
  )
}

export default Footer