import React, { useState } from 'react'

import './nav.css'
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { BiBook } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { LuMessageSquareDiff } from "react-icons/lu";
const Nav = () => {
  const [active,setactive]=useState("#")

  return (
    <nav style={
      {

      }
    }>
      <a href="#" onClick={()=>setactive("#")} className={active==="#"?"active":""}><FiHome /></a>
      <a href="#about"onClick={()=>setactive("#about")} className={active==="#about"?"active":""}><FaRegUser /></a>
      <a href="#experience "onClick={()=>setactive("#experience")} className={active==="#experience"?"active":""}><BiBook /></a>
      <a href="#testimonial"onClick={()=>setactive("#testimonial")} className={active==="#testimonial"?"active":""}><MdDesignServices /></a>
      <a href="#contact"onClick={()=>setactive("#contact")} className={active==="#contact"?"active":""}><LuMessageSquareDiff /></a>
    </nav>
  )
}

export default Nav