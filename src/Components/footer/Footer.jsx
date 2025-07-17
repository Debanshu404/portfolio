import React, { forwardRef } from 'react'
import './footer.css'
import { Mail } from 'lucide-react';
import footerbg from '../../assets/footerbg.png'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiCodesandbox, SiLeetcode } from "react-icons/si";

const Footer = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref} 
      
      id='footer'
    >
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Left Side - Contact Info */}
          <div className="footer-left">
            <div className="footer-logo">
              <img src="" alt="" />
              <h3>Debanshu Pati</h3>
            </div>

            <div className="footer-message">
              <h4>Don't hesitate to drop me an email</h4>
              <p>or contact me via my social profiles 👋</p>
            </div>

            <div className="footer-email">
              <button className="email-button" onClick={() => window.location.href = 'mailto:work@debanshupati.com'}>
                <Mail size={16} />
                <span>work@debanshupati.com</span>
              </button>
            </div>

            <div className="footer-social">
              <a href="https://www.linkedin.com/in/debanshu-pati-043636282/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Debanshu404" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://codesandbox.io/u/debanshupati12345" target="_blank" rel="noopener noreferrer">
                <SiCodesandbox />
              </a>
              <a href="https://leetcode.com/u/Debanshu_pati/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
              </a>
              <a href="https://www.instagram.com/resolved_proggrammer/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Side - Navigation */}
          <div className="footer-right">
            <div className="footer-nav">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-credits">
            <p>Handmade with ❤️ in Bhubaneswar</p>
            <p>©2024 Debanshu Pati</p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Footer