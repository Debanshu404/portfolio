import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './experience.css'
const Experience = () => {
  return (
    <section id="experience">
<h2>What skill do i have</h2>
<h5>My experience</h5>
<div className="container experience-container">
  <div className="frontend-container">
   <h3>Frontend SKills</h3>
    <div className="experience-content">
      <article className="experince-detail">
        <FaHtml5 className='experince-detail-icon'/>
        <h4>HTML</h4>
      </article>
      <article className="experince-detail">
        <FaCss3Alt className='experince-detail-icon'/>
        <h4>CSS</h4>
      </article>
      <article className="experince-detail">
        <FaJs className='experince-detail-icon'/>
        <h4>JavaScript</h4>
      </article>
      <article className="experince-detail">
        <FaReact className='experince-detail-icon'/>
        <h4>React</h4>
      </article>
      <article className="experince-detail">
        <SiRedux className='experince-detail-icon'/>
        <h4>Redux Toolkit</h4>
      </article>
      <article className="experince-detail">
        <SiTailwindcss className='experince-detail-icon'/>
        <h4>Tailwind CSS</h4>
      </article>
    </div>
  </div>
  <div className="backend-container">
   
   <h3> backend SKills</h3>
    <div className="experience-content">
      <article className="experince-detail">
        <FaNodeJs className='experince-detail-icon'/>
        <h4>Node.js</h4>
      </article>
      <article className="experince-detail">
        <SiExpress className='experince-detail-icon'/>
        <h4>Express.js</h4>
      </article>
      <article className="experince-detail">
        <SiMongodb className='experince-detail-icon'/>
        <h4>MongoDB</h4>
      </article>
      <article className="experince-detail">
        <FaDatabase className='experince-detail-icon'/>
        <h4>SQL Databases (optional)</h4>
      </article>
    </div>
  </div>
  </div>





    </section >
  )
}

export default Experience