import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Background from "./components/TechBackground";
import Contact from "./pages/Contact";
import Services from "./pages/Service";
const App = () => {
  return (
    <>

      {/* Fixed Navbar across all pages */}
      <Navbar />

      {/* Define your routes */}
      <Background/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes>

      {/* Common Footer */}
      <Footer />
    </>
  );
};

export default App;
