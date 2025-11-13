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
      <h2 className="services-title">Services We Provide</h2>
      <p className="services-subtitle">
        Here’s how we help startups and growing businesses with solutions that fit your workflow and fuel your growth.
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
