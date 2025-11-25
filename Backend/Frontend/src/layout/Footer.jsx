import { FaBrain, FaHeart } from "react-icons/fa";
import "../style/Layout.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <a
          href="https://github.com/TEJASS-PATELL"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://linkedin.com/in/tejasspatell"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      <p className="footer-center">
        © {new Date().getFullYear()} Made by <span className="author">Tejas Patel</span> with{" "}
        <FaBrain size={17} className="brain-icon" /> All rights reserved.
      </p>

      <div className="footer-right"></div>
    </footer>
  );
}
