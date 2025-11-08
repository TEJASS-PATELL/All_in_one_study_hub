import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-container">
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Career Hub by Tejas PateL | All rights reserved
          </p>
    
          <div className="social-links">
            <a href="https://yourportfolio.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-briefcase"></i>
            </a>

            <a href="mailto:yourmail@example.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>

            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
