import React from 'react'
import p1 from "../../assets/portfolio1.jpg"
import p2 from "../../assets/portfolio2.jpg"
import p3 from "../../assets/portfolio3.jpg"
import p4 from "../../assets/portfolio4.jpg"
// import p5 from "../../assets/portfolio1.png"
// import p6 from "../../assets/portfolio1.jpg"
import projects from './data.js'
// css 
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id="portfolio">
<h5>Portfolio</h5>
<h2>Projects</h2>
<div className="container portfolio-container">
 
{
  projects.map(({id,image,title,demo,github})=>{
   return (
   
  <article className="portfolio-details">
<div className="portfolioimage">
  <img src={image} alt={title} />
</div>
<h3>{title}</h3>
<div className="cta">

<a href={github} className='btn'>github</a>
<a href={github} className='btn btn-primary '>live-demo</a>


</div>

  </article>
   )
  })
}

 
 
</div>
    </section>
  )
}

export default Portfolio