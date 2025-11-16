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
            We deliver smart IT solutions designed to support your growth and simplify your daily operations.
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
            <p>High-quality technology that fits your budget.</p>
          </div>

          <div className="value-card">
            
            <h3>Quick and Reliable</h3>
            <p>Projects delivered on time, every time.</p>
          </div>

          <div className="value-card">
            
            <h3>Experienced Team</h3>
            <p> Skilled professionals who understand your goals.</p>
          </div>

           <div className="value-card">
            
            <h3>Always Here for You</h3>
            <p>Dependable support whenever you need us.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
