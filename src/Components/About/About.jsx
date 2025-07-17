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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            fugit placeat repudiandae porro in aliquid eaque consequuntur ipsam
            eos assumenda dolores similique magni, voluptate at quidem omnis
            magnam quod laborum perferendis error atque veniam vitae voluptates
            exercitationem? Ratione, reprehenderit iusto.
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
