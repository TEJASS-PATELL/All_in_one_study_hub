import './Footer.css';
import { FaBriefcase, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="social-links">
            <a
              href="https://yourportfolio.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBriefcase size={30}/>
            </a>

            <a
              href="mailto:yourmail@example.com"
              className="social-link"
            >
              <FaEnvelope size={30}/>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={30}/>
            </a>

            <a
              href="https://github.com/yourusername"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30}/>
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
