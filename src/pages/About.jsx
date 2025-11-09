import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import WhatWeDo from "../components/WhatWeDo";

const About = () => {
  return (
    <section className="about-page">
      {/* HERO SECTION */}
      <br/><br/><br/><br/><br/>
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="about-title">Who We Are</h1>
        <p className="about-subtitle">
         PAYANTECH is a technology solutions company dedicated to helping businesses simplify operations and reach their goals faster.
From custom software and secure payments to cloud systems and digital marketing, we bring everything together so your business runs smoothly and efficiently.
        </p>
      </motion.div>
      <br/><br/><br/><br/><br/>

      {/* MISSION / VISION */}
      <motion.div
        className="about-mission"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Mission</h2>
        <p>
         To empower businesses with innovative and reliable technology that saves time, strengthens security, and drives growth.
        </p>
      </motion.div>

      <motion.div
        className="about-vision"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Vision</h2>
        <p>
          A future where every business — big or small — can use smart technology to achieve more with less effort.
        </p>
      </motion.div>

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
        <a href="/contact" className="cta-btn">Contact Us</a>
      </motion.div>
      
    </section>
  );
};

export default About;
