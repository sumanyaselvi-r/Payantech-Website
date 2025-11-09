import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
import LogoImg from "../assets/Logo.png"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="logo">
    <Link to="/">
          <img src={LogoImg} alt="Logo" />
          </Link>
        </div>

        <div className="footer-links">
      <FaMapMarkerAlt/>Tenkasi Main Road, Punnaiyapuram, Puliyangudi, Tenkasi - 627855
        </div>

        <div className="footer-socials">
          <a href="#contact"><FaFacebookF /></a>
          <a href="#contact"><FaTwitter /></a>
          <a href="#contact"><FaLinkedinIn /></a>
          <a href="#contact"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PAYANTECH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
