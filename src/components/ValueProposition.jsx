import React from "react";
import { motion } from "framer-motion";
import "../styles/ValueProposition.css";

const ValueProposition = () => {
  return (
    <section className="value-section" id="value">
      <div className="value-container">
        <motion.div
          className="value-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="value-title">Why Choose Us</h2>
          <p className="value-subtitle">
            We understand your challenges and make technology easy and stress-free.
          </p>
        </motion.div>

        <motion.div
          className="value-cards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="value-card">
           
            <h3>Affordable Solutions</h3>
            <p>Smart technology that fits your budget.</p>
          </div>

          <div className="value-card">
            
            <h3>Quick and Reliable</h3>
            <p>Projects done on time, every time.</p>
          </div>

          <div className="value-card">
            
            <h3>Experienced Team</h3>
            <p>Experts who understand your goals.</p>
          </div>

           <div className="value-card">
            
            <h3>Always Here for You</h3>
            <p>Support you can actually rely on.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
