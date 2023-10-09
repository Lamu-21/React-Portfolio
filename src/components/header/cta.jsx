import React from 'react'
import cv from '../../assests/cv.pdf'

const cta = () => {
  return (
    <div className='cta'>
        <a href={cv} download  className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>

      
    </div> 
  )
}

export default cta
