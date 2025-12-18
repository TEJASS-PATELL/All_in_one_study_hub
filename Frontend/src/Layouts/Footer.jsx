import './Footer.css';
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="social-links">
            <a
              href="https://mail.google.com/mail/?view=cm&to=tejasspatell2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaEnvelope size={30} />
            </a>

            <a href="https://linkedin.com/in/tejasspatell"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn size={30} />
            </a>

            <a href="https://github.com/TEJASS-PATELL"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
          <p className="copyright">
            © 2025 Career Hub by Tejas PateL | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
