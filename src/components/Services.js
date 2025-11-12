import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaCreditCard,
  FaCloud,
  FaPaintBrush,
  FaServer,
  FaBullhorn,
} from "react-icons/fa";
import "../styles/ServicesPage.css";
import { Link } from "react-router-dom";



const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Custom Software",
      icon: <FaCode />,
      short: "We build software tailored to your needs.",
      details: {
        intro:
          "Your business deserves software that fits not the other way around. We design and build software that works the way you do. Whether you need a web app, dashboard, or automation tool, we make it simple and effective.",
        list: [
          "Business management software",
          "Web and mobile app development",
          "Automation and workflow tools",
          "API integrations with your systems",
        ],
        tagline: "💬 Simple software that saves time and gets work done.",
      },
    },
    {
      title: "Payment Solutions",
      icon: <FaCreditCard />,
      short: "Smart, secure, and fast payment systems.",
      details: {
        intro:
          "Getting paid should be easy and safe. We build secure, flexible systems that make transactions smooth and reliable.",
        list: [
          "Payment gateway setup and integration",
          "POS (Point of Sale) systems",
          "Subscription and billing platforms",
          "Secure digital transactions",
        ],
        tagline: "💬 Fast, flexible, and built for trust.",
      },
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud />,
      short: "Reliable, scalable cloud systems.",
      details: {
        intro:
          "Work from anywhere, anytime. We help you move to the cloud, keep your data secure, and scale effortlessly.",
        list: [
          "Cloud setup and migration",
          "Data storage and backup",
          "Cloud security and monitoring",
          "Scalable infrastructure",
        ],
        tagline: "💬 Always connected. Always protected.",
      },
    },
    {
      title: "Design solutions",
      icon: <FaPaintBrush />,
      short: "Modern designs that tell your story.",
      details: {
        intro:
          "Your brand deserves to stand out. We create visuals that communicate clarity, confidence, and creativity.",
        list: [
          "UI/UX design for apps and websites",
          "Logo and brand identity",
          "Marketing and social media visuals",
        ],
        tagline: "💬 Designs that look good and work better.",
      },
    },
    {
      title: "IT Management",
      icon: <FaServer />,
      short: "Reliable IT systems, stress-free management.",
      details: {
        intro:
          "No more tech worries. We manage your infrastructure, updates, and support so your business keeps running smoothly.",
        list: [
          "Network and server setup",
          "System monitoring and updates",
          "Backup and recovery",
          "Tech support and troubleshooting",
        ],
        tagline: "💬 We handle your tech, so you don’t have to.",
      },
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn />,
      short: "Grow your presence and reach your audience.",
      details: {
        intro:
          "We help your brand get noticed. From SEO to social media, we drive traffic, leads, and growth.",
        list: [
          "SEO & website optimization",
          "Social media management",
          "Content and email marketing",
          "Ad campaigns (Google, Meta, etc.)",
        ],
        tagline: "💬 Get noticed. Get customers. Grow faster.",
      },
    },
    
  ];

  return (
    <section className="services-page">
     

      <div className="services-section">
       
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="service-icon neon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <span
                className="learn-more-text"
                onClick={() => setSelectedService(service)}
              >
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
<br/><br/><br/>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-cta"
        >
<Link to="/services">Explore more </Link>        </motion.button>
      </div>
 
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedService(null)}
              >
                ×
              </button>
              <div className="popup-icon neon">{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
              <p className="popup-intro">{selectedService.details.intro}</p>
              <ul className="popup-list">
                {selectedService.details.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="popup-tagline">
                {selectedService.details.tagline}
              </p>
            </motion.div>
          </motion.div>


        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
