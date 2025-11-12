import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import WhatWeDo from "../components/WhatWeDo";
import { Link } from "react-router-dom";
import { FaLightbulb, FaRocket } from "react-icons/fa"; 
import { FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO BANNER IMAGE */}
      <motion.div
        className="about-hero-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">About PAYANTECH</h1>
          <p className="hero-subtitle">
PAYANTECH helps businesses succeed in the digital world.
We design, build, and manage software, cloud systems, and digital tools that make operations simple, boost efficiency, and support growth.
<br/><br/>
We work with businesses of all sizes from startups to established companies providing practical, secure, and reliable technology solutions tailored to their needs.          </p>
        </div>
      </motion.div>

      

      {/* Mission Card */}
       <section className="mission-vision-section">
      <div className="mission-vision-container">

        {/* Mission Card */}
        <motion.div 
          className="mv-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mv-icon">
            <FaLightbulb size={50} />
          </div>
          <h3>Our Mission</h3>
          <p>
            We exist to make technology work for your business. We help you grow, serve your customers better, and focus on what matters most without the stress of complicated systems.
 We simplify, we support, and we deliver solutions that make your business run smoother.
          </p>
        </motion.div>

        {/* Connecting Line */}
        <div className="mv-connector"></div>

        {/* Vision Card */}
        <motion.div 
          className="mv-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mv-icon">
            <FaRocket size={50}  />
          </div>
          <h3>Our Vision</h3>
          <p>
            We want a world where technology helps every business succeed. Our goal is to create solutions that are simple, reliable, and practical, so companies of all sizes can thrive without being held back by tech.
          </p>
        </motion.div>

      </div>

      {/* Tagline */}
      <p className="mv-tagline">
        PAYANTECH delivers technology solutions that empower growth and innovation.
      </p>
    </section>
    {/*Our Promise*/}
      <section className="promise-section">
      <motion.div
        className="promise-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="promise-heading">Our Promise to You</h2>
        <FaShieldAlt className="promise-icon" />
        <p className="promise-text">
          Delivering practical technology solutions that simplify your business.  
          We are with you every step of the way.
        </p>
      </motion.div>
    </section>
      {/* WHAT WE DO SECTION */}
      <WhatWeDo/>

      {/* CALL TO ACTION */}
      <motion.div
        className="about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Let’s Build the Future Together</h2>
        <p>Have an idea? Let’s turn it into something extraordinary.</p>
        <Link to="/contact" className="cta-btn">Contact Us</Link>
      </motion.div>
      <br/><br/><br/><br/><br/><br/>
    </section>
  );
};

export default About;
