import { motion } from "framer-motion";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import HeroAnimation from "../assets/hero-animation.json";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Text */}
      <div className="hero-left">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Smart IT Solutions for Every Business
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle"
        >
          We make technology easy to use so your business can work better every day.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-cta"
        >
          <Link to="/services">Explore Services</Link>
        </motion.button>
      </div>

      {/* Right Lottie Animation */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          animationData={HeroAnimation}
          loop={true}
          style={{ width: "100%", maxWidth: 600 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
