import React from "react";
import "./contact.css";
import me from "../../assets/happydebu.webp";
import { BsAward } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
const About = () => {
  return (
    <section id="about" className="aboutsection">
      <h5>know me well</h5>
      <h2>hi</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="aboutme_image">
            <img src={me} alt="meimg" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="about-icon" />
              <h5>experience</h5>
              <small>3+years of 
                working

              </small>
            </article>
            <article className="about-card">
              <IoMdPeople className="about-icon"/>
              <h5>Clients</h5>
              <small className="smallcard">2 clients</small>
            </article>
            <article className="about-card">
              <GrProjects className="about-icon" />
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p className="aboutp">
            Hello! I’m a passionate and driven BTech student with a strong interest in full stack development. As an emerging developer, I enjoy building web applications that combine creative front-end design with robust back-end functionality. I am currently honing my skills in Data Structures and Algorithms to enhance my problem-solving abilities and write efficient code.

I thrive on learning new technologies and tackling challenges head-on. My academic journey has given me the foundation to understand core computer science concepts, and I’m eager to apply this knowledge to real-world projects. Whether working independently or collaborating in a team, I am committed to continuous growth and delivering high-quality solutions.

I’m looking for opportunities where I can contribute, learn, and further grow as a developer. Let’s connect and build something amazing together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Lert's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
