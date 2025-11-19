import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/ContactPage.css";

const Contact = () => {
  const [status, setStatus] = useState(null); // success | error | loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", "0a1edd81-cffc-4de4-a8cb-3e7ecd1471db");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Let’s Build Something Great Together</h2>
      <p className="contact-subtitle">
        We’d love to hear from you! Send us a message and we’ll get back soon.
      </p>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="contact-btn">
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Apple Style Modal */}
      {(status === "success" || status === "error") && (
        <div className="apple-modal-overlay">
          <motion.div
            className="apple-modal"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="modal-icon">
              {status === "success" ? (
                <AiOutlineCheckCircle className="success-icon" />
              ) : (
                <AiOutlineCloseCircle className="error-icon" />
              )}
            </div>

            <h3 className="modal-title">
              {status === "success" ? "Message Sent!" : "Something Went Wrong"}
            </h3>

            <p className="modal-text">
              {status === "success"
                ? "Thank you for reaching out to PayanTech! We’ve received your message and our team will get back to you shortly."

                : "Please try again later."}
            </p>

            <button className="modal-btn" onClick={() => setStatus(null)}>
              OK
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
