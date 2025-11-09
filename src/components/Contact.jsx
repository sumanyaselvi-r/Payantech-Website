import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
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
            <br></br>
            <br/><br/><br/>
          </motion.div>
    </div>
  );
};

export default Contact;
