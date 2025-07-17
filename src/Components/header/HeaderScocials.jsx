import React from 'react'
// react icons socials import 
import '../header/header.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
const HeaderScocials = () => {
  return (
   <>
    <div className="header-socials">
        <a href=""><CiLinkedin/></a>
        <a href=""><FaGithub/></a>
        <a href=""><SiLeetcode/></a>
        <a href=""><GrInstagram/></a>
   
         </div>
   
   
   </>
  )
}

export default HeaderScocials