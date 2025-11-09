import React from "react";
import { motion } from "framer-motion";
import "../styles/WhatWeDo.css";

const services = [
  {
    title: "Innovation",
    description: "We think ahead to build future solution.",
  },
  {
    title: "Simplicity",
    description: "We make complex technology easy to use.",
  },
  {
    title: "Security",
    description: "We protect what matters most—your data.",
  },
  {
    title: "Trust",
    description: "We grow through honesty, reliability.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="whatwedo">
      <h2 className="whatwedo-title">Our Values</h2>
      <div className="whatwedo-flow">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="whatwedo-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>

            {index < services.length - 1 && (
              <div className="connector-line">
                <span className="glow-pulse"></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
