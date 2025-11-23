import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
import LogoImg from "../assets/Logo.png"; 
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

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
         

   <a 
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter (X)"
  >
    <FaXTwitter />
  </a>

  <a 
    href="https://www.linkedin.com/in/payantech-solutions-079a35391/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a 
    href="https://instagram.com"
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PAYANTECH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
