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
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a 
              href="https://linkedin.com/in/tejasspatell"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a 
              href="https://github.com/TEJASS-PATELL"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <p className="copyright">
            © 2025 Career Hub by <span>Tejas PateL</span> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;