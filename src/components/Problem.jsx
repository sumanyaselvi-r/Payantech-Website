import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import "../styles/Problem.css";
import ProblemAnimation from "../assets/problem-animation.json"; // Lottie JSON

const ProblemSection = () => {
  return (
    <section className="problem-section">
      {/* Left Lottie Animation */}
      <motion.div
        className="problem-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={ProblemAnimation} loop={true} />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="problem-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="problem-title">Tech Holding You Back</h2>
        <p className="problem-subtitle">
      
 Every business dreams of growth and impact, but today’s fast-moving digital world makes technology complicated.
          <br></br><br></br>
That’s where <span>Payantech Solution</span> comes in.
We make technology simple and fast, so your business can run smoothly and grow.
        </p>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
