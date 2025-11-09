import React from "react";
import { motion } from "framer-motion";
import Services from "../components/Services";
import "../styles/ServicesPage.css";

import {
  FaLaptopCode,
  FaUsersCog,
  FaChartLine,
} from "react-icons/fa";
const processSteps = [
  { icon: <FaUsersCog />, title: "Consultation", desc: "We understand your goals and challenges." },
  { icon: <FaLaptopCode />, title: "Design & Development", desc: "We create efficient, scalable, and beautiful solutions." },
  { icon: <FaChartLine />, title: "Launch & Scale", desc: "We deploy, monitor, and help you grow confidently." },
];
const Servicepage = () => {
  return (
    <section className="services-page">
      {/* Hero Section */}
      <motion.div
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Smart Solutions That Help Your Business Grow
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We make technology simple — from software and payments to cloud and marketing. Our goal is to help you save time, work smarter, and grow faster.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
       <div className="service-content">
       <br/><br/>
       <h2 className="services-title">Our Core Services</h2>
        <Services/>
      </div>

      {/* How We Work */}
      <div className="process-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h2>

        <div className="process-grid">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="process-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Build Something Extraordinary?</h2>
        <p>Let’s collaborate and turn your ideas into powerful solutions.</p>
 <a href="/contact" className="cta-btn">Contact Us</a>      </motion.div>
    </section>
  );
};

export default Servicepage;