import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import bg from '../../assets/background.webp'

import { useUserAuth } from '../../Context/UserAuthContext'; 
import aboutbg from '../../assets/aboutRight.png'
import "./contact.css"; 
import { IoIosMail } from "react-icons/io";
import { IoVideocamSharp } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
const Contact = () => {
   const navigate = useNavigate();
    const { user } = useUserAuth();
  const [formdata,setformdata]=useState({
   name: "",
        email: "",
        message: "",
        company: "",
        access_key: "1bbba832-6fd2-40b4-95f2-2174589d3cdb",
  })
  const[loading,setloading]=useState(false)
  const[success,setsuccess]=useState(false)
  const handleChange=(e)=>{
    setformdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }
 const handlesubmit = async (e) => {
  e.preventDefault();

  if (!user) {
    alert("Please login to submit the form.");
    navigate("/Signup");
    return;
  }

  setloading(true);
  try {
    const response = await axios.post("https://api.web3forms.com/submit", formdata);
    if (response.data.success) {
      setsuccess(true);
      setformdata({
        name: "",
        email: "",
        message: "",
        company: "",
        access_key: "1bbba832-6fd2-40b4-95f2-2174589d3cdb",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
  setloading(false);
};

  return (
   <section 
   style={{
    "background":`url(${bg})`,
     backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
width: '100%',
   }}
   id="contact">
   {
   <div 
    className="container contact-container ">
      <div className="left">
<h1 className="text-[#7367F0]"> Let's Partner Up!</h1>
<h2 className="text-[#7367F0]"> Together for a better solution </h2>
<div className=" form-container bg-[#ffffff] min-h-[83]  flex items-center justify-center p-6 mt-[10]">
<form  onSubmit={handlesubmit}className=" flex flex-col gap-2 w-full space-y-5" >
<div className="flex flex-col gap-3">
  
  <label className="block text-gray-700 text-sm font-medium" >Name</label>
  
  <input name="name" type="text" 
  placeholder="Enter Your Name"
  className="w-full rounded text-gray-800 bg-[#e0d4f7] placeholder-gray-400 outline-none "
  value={formdata.name}
  onChange={handleChange}
  required
  />
</div>
<div
className=""
>
  <label className="block text-gray-700 text-sm font-medium" >Company</label>
  <input type="text" 
  name="company"
  placeholder="Enter Your Company Name"
  className="w-full rounded text-gray-800 bg-[#e0d4f7] placeholder-gray-400  p-3 outline-none "
  value={formdata.company}
  onChange={handleChange}
  required
  />
</div>
<div

>
  <label className="block text-gray-700 text-sm font-medium" >Email</label>
  <input type="text" 
  name="email"
  placeholder="Enter Your email"
  className="w-full rounded text-gray-800 bg-[#e0d4f7] placeholder-gray-400 outline-none "
   value={formdata.email}
  onChange={handleChange}
  required

  />
</div>



  
    {/* <!-- Interests --> */}
    <div className="button-interest">
      <label class="block text-sm font-medium text-gray-700 mb-2">Interests</label>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="interest-button">
          User Experience
        </button>
        <button type="button" class="interest-button">
          User Interface
        </button>
        <button type="button" class="interest-button">
          Service Design
        </button>
        <button type="button" class="interest-button">
          Design System
        </button>
        <button type="button" className="interest-button">
          User Test
        </button>
      </div>
    </div>

    {/* <!-- Other Textarea --> */}
    <div className="other">
      <label class="block text-sm font-medium text-gray-700 mb-2">Other</label>
      <textarea
      name="message"
        rows="3"
        placeholder="Tell me, I'm all ears"
        class="w-full p-3 rounded-md bg-[#e0d4f7] text-gray-800 placeholder-gray-500 outline-none"
         value={formdata.message}
  onChange={handleChange}
  required
      ></textarea>
    </div>

    {/* <!-- Submit Button --> */}
    <button
      type="submit"
      disabled={loading}
      className=" submit-btn w-full py-5 bg-[#7367F0] text-white font-semibold rounded-md hover:bg-[#4c2fd1] transition"
    >
     {loading?"sending.....":"send message"}
    </button>
{success && (
  <p className="text-green-600 font-medium text-center">
    Message sent successfully!
  </p>
)}
</form>



  
  
</div>
























      </div>
      <div 
      style={{
        "background":"rgb(210 206 255)",
        "border-radius":"36px"
      }}
      
      
      className="right">
        <h2 >Contacts</h2>
<div className="socials">
  <div className="social-content">
    <span className="social-icon">
<IoIosMail /></span>
<h3>debanshupati12345@gmail.com</h3>

  </div>
  <div className="social-content">
    <span className="social-icon">
<IoVideocamSharp /></span>
<h3>My response time is good</h3>

  </div>
  <div className="social-content">
    <span className="social-icon">
<IoIosMail /></span>
<h3>debanshupati12345@gmail.com</h3>

  </div>
 
 
</div>
 <div className="rightimg">
    <img src={aboutbg} alt="rightimage" />
  </div>
      </div>
    </div>
   }
   </section>
  );
};

export default Contact;
