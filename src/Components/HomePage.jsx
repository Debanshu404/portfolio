// HomePage.js
import React, { useRef, useEffect, useState } from 'react';
import Header from '../Components/header/Header';
import Nav from '../Components/nav/Nav';
import About from '../Components/About/About';
import Experience from '../Components/experience/Experience';
import Portfolio from '../Components/portfolio/Portfolio';
import Contact from '../Components/contact/Contact';
import Footer from '../Components/footer/Footer';
import Testimonials from '../Components/testimonials/Testonomials';
import UserHead from './uSERhEAD.JSX';


const HomePage = () => {
  const [hidenav, setHideNav] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      setHideNav(rect.top <= 550);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
<UserHead/>
      <Header />
      {!hidenav && <Nav />}
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer ref={footerRef} />
    </>
  );
};

export default HomePage;
