import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useAuthStore } from "../store/useAuthStore";

export default function NavBar() {
  const navigate = useNavigate();
  const { authUser, fetchUser } = useAuthStore();

  useEffect(() => {
    if (!authUser) {
      fetchUser();
    }
  }, [authUser, fetchUser]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProfileClick = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="Lnavbar">
      <div className='Lnavbar-container'>
        <ul className="Lnavbar-links">
          <li><Link className="home" to="/">Home</Link></li>
          <li><button onClick={() => scrollToSection("features")}>Features</button></li>
          <li><Link className='ai-tools' to="/ai-tools">AI Tools</Link></li>
          <li><Link className='platform' to="/it-jobs/ITjobsearch-platform">Job-Search</Link></li>
          <li><button onClick={() => scrollToSection("footer")}>Contact</button></li>
          <li><button onClick={() => scrollToSection("faq")}>FAQ's</button></li>
        </ul>

        <div className="Lnavbar-auth-buttons">
          {!authUser ? (
            <Link to="/login" className="Llogin-btn">Login</Link>
          ) : (
            <button className="Lprofile-btn" onClick={handleProfileClick}>
              {authUser.profilepic ? (
                <img
                  src={authUser.profilepic}
                  alt="Profile"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <FaUserCircle size={38} color="#333" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
