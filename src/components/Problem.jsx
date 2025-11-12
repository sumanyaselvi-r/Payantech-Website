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
          Every business starts with a dream to grow, to reach more people, to make a difference. But as things move faster, technology often gets in the way. Systems don’t work together, projects take longer, and it becomes harder to keep up.
          <br /><br />
          Payantech Solution is here to make things easier. We bring clarity, speed, and simplicity to your technology, helping your business run better every day.
        </p>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
