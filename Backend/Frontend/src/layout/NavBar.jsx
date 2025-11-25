import React from "react";
import { Link } from "react-router-dom";
import "../style/Layout.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Review</Link></li>
        <li><Link to="/">Section</Link></li>
        <li><Link to="/">Feature</Link></li>
        <li><Link to="/">Faq's</Link></li>
      </ul>
    </nav>
  );
}
