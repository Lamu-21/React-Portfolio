import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
<section id='experience'>
 <center> <h5 className='top'> What skills i Have</h5></center>
  <h2>My Experience</h2>
<div className='container experience__container'>

<div className='experience__frontend'>
    <h3>Frontend Development</h3>
    <div className='experience__content'>
        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'/>
<div><h4>HTML</h4>
<small className='Text-light'>Experienced</small></div>
</article>

        <article className='experience__details'>
<BsFillPatchCheckFill className='experience__detail-icon'/>
<div><h4>JavaScript</h4>
<small className='text-light'>Intermediate</small></div>
        </article>  
    
        <article className='experience__details'>
<BsFillPatchCheckFill className='experience__detail-icon'/>
<div><h4>CSS</h4>
<small className='text-light'>Intermediate</small></div>
 </article>
        <article className='experience__details'>
<BsFillPatchCheckFill className='experience__detail-icon'/>
<div><h4>Bootstrap</h4>
<small className='Text-light'>Intermediate</small></div>
 </article>
        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'/>
<div><h4>React</h4>
<small className='Text-light'>Intermediate</small></div>


        </article>

    </div>
   </div>

<div className='experience__backend'>
<h3>Backend Development</h3>
    <div className='experience__content'>
        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'/>
<div><h4>MySQL</h4>
<small className='Text-light'>Intermediate</small></div>
</article>

        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'l/>
<div><h4>Node JS</h4>
<small className='Text-light'>Intermediate</small></div>
        </article>  
    
        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'/>
<div><h4>Java</h4>
<small className='Text-light'>Intermediate</small></div>
 </article>
        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'/>
<div><h4>SQL</h4>
<small className='Text-light'>Intermediate</small></div>
 </article>
        <article className='experience__details'>
<BsFillPatchCheckFill  className='experience__detail-icon'/>
<div><h4>MongoDB</h4>
<small className='Text-light'>Intermediate</small></div>


        </article>

    </div>




</div>

</div>

</section>
  
)}

export default experience

