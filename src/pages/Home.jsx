import React from "react";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Services from "../components/Services";
import ValueProposition from "../components/ValueProposition";
import "../styles/Services.css";
import Cta from "../components/Cta";
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Services Section */}
      <br/><br/>
      <h2 className="services-title">Smart Solutions for Every Business</h2>
      <p className="services-subtitle">
        We connect innovation with performance — powering businesses with
        intelligent, scalable, and secure technology.
      </p>
      <Services />

      {/* Value Proposition Section */}
      <ValueProposition />
 
      {/* Contact Section */}
      <Cta />
    </div>
  );
};

export default Home;
