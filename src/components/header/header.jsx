import React from 'react'
import './header.css'
import CTA from './cta'
import P from '../../assests/p.JPG'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
<header>
  <div className="container   header__container" >
    <h5>Hello I'm</h5>
<h1>Phup Lamu Bhutia</h1>
<h5 className='text-light'>Fullstack developer</h5>
  <CTA/ >
  <HeaderSocials/ >
   <div className="P">
    <img src={P} alt="P"/> 
   </div>
   <a href='#contact' className='scroll-down'>Scroll__Down</a>
  </div>
</header>
  )
}

export default header
