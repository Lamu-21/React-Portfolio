import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
const[activeNav,setActiveNav] = useState('#')
    return (
   <nav> 
<a href="# " onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><BiHomeSmile/></a> 
<a href="#about"onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''} ><BiUserCircle/> </a>
<a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBookBookmark/></a>
<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

   </nav>
  )
}

export default Nav
