import './Footer.css';
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        
        <p className="copyright">
          © {new Date().getFullYear()} Career Hub by <span>Tejas Patel</span> | All rights reserved
        </p>

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
        
      </div>
    </footer>
  );
};

export default Footer;