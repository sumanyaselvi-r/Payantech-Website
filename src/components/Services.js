import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCreditCard,
  FaCloud,
  FaPalette,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import "../styles/Services.css";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Software",
    desc: "We build software tailored to your needs.",
  },
  {
    icon: <FaCreditCard />,
    title: "Payment Solutions",
    desc: "We provide secure, smart payment systems.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration",
    desc: "We design scalable, cost-effective cloud environments.",
  },
  {
    icon: <FaPalette />,
    title: "Design Solutions",
    desc: "We create intuitive interfaces and strong visual identities.",
  },
  {
    icon: <FaServer />,
    title: "IT Management",
    desc: "We handle your IT infrastructure end-to-end.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    desc: "We craft to reach the right audience and grow fast.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(100, 220, 255, 0.7)",
            }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
