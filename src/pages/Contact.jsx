import React from "react";
import { motion } from "framer-motion";
import "../styles/ContactPage.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
    <h2 className="contact-title">Let’s Build Something Great Together</h2>
        <p className="contact-subtitle">
          We’d love to hear from you! Send us a message and we’ll get back soon.
        </p>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
