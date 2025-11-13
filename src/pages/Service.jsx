import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaCode,
  FaCreditCard,
  FaCloud,
  FaPaintBrush,
  FaServer,
  FaBullhorn,
  FaRobot,
  FaChartBar,
  FaLightbulb,
  FaSearch,
  FaCogs,
  FaRocket,
  FaPaperPlane,
} from "react-icons/fa";
import "../styles/ServicesPage.css";

const ServicePage = () => {
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
      title: "Design solution",
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
    {
      title: "Automation Tools",
      icon: <FaRobot />,
      short: "Automate tasks and boost efficiency.",
      details: {
        intro:
          "Save time by automating repetitive tasks. We design custom automation tools that work with your existing systems.",
        list: [
          "Workflow automation",
          "CRM integrations",
          "Data synchronization",
          "Custom automation scripting",
        ],
        tagline: "💬 Work smarter, not harder.",
      },
    },
    {
      title: "Data Analytics",
      icon: <FaChartBar />,
      short: "Turn your data into decisions.",
      details: {
        intro:
          "We help you make sense of your data with interactive dashboards and smart insights to guide your growth.",
        list: [
          "Custom analytics dashboards",
          "Real-time data visualization",
          "KPI and performance tracking",
          "Predictive insights and reports",
        ],
        tagline: "💬 Data that drives smarter decisions.",
      },
    },
    {
      title: "Tech Consulting",
      icon: <FaLightbulb />,
      short: "Expert advice for smarter tech strategies.",
      details: {
        intro:
          "We guide you through the right technology choices to align with your business goals practical, scalable, and future-ready.",
        list: [
          "Technology roadmap planning",
          "System audits and optimization",
          "Cost and efficiency analysis",
          "Implementation support",
        ],
        tagline: "💬 Build a smarter, stronger tech foundation.",
      },
    },
  ];

  return (
    <section className="services-page">
      {/* HERO SECTION */}
      <section className="service-hero">
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Big ideas meet smart technology</h1>
          <p>
            Every big idea needs the right foundation. We help you build it, launch it, and scale it with smart, reliable, and modern technology built around your goals.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <div className="services-section">
        <h2 className="services-title">What We Provide</h2>
        <p>We turn complex ideas into simple, powerful solutions built to help your business grow, adapt, and move faster.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
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
      </div>

      {/* POPUP DETAILS */}
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
              <p className="popup-tagline">{selectedService.details.tagline}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h2>
        <p className="process-subtitle">
          Here’s how we turn your ideas into working technology.
        </p>

        <div className="process-flow">
          <motion.div
            className="process-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaSearch className="process-icon" />
            <div className="process-content">
              <h3>Discover</h3>
              <p>We start by learning about your business goals and challenges.</p>
            </div>
          </motion.div>

          <div className="process-line"></div>

          <motion.div
            className="process-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaCogs className="process-icon" />
            <div className="process-content">
              <h3>Build</h3>
              <p>We design and develop smooth, secure, and scalable solutions.</p>
            </div>
          </motion.div>

          <div className="process-line"></div>

          <motion.div
            className="process-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <FaRocket className="process-icon" />
            <div className="process-content">
              <h3>Launch</h3>
              <p>We deploy your project and support it as your business grows.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaPaperPlane className="cta-icon" />
          <h2>Ready to Build Something Great?</h2>
          <p>
            Let’s bring your ideas to life with smart, secure, and scalable
            solutions.
          </p>
          <a href="/contact" className="cta-link">
            Contact Us
          </a>
        </motion.div>
      </section>
    </section>
  );
};

export default ServicePage;
