import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useAuthStore } from "../Store/useAuthStore";

export default function NavBar() {
  const navigate = useNavigate();
  const { authUser } = useAuthStore();

  return (
    <nav className="Lnavbar">
      <div className='Lnavbar-container'>
        
        <div className="Lnav-logo" onClick={() => navigate("/")}>
          ALL-IN<span>-ONE</span>
        </div>

        <ul className="Lnavbar-links">
          <li><Link to="/government-jobs/Study-Material" className="nav-link">Prep-Resources</Link></li>
          <li><Link to="/ai-tools" className="nav-link ai-tools">AI-Tools</Link></li>
          <li><Link to="/it-jobs/ITjobsearch-platform" className="nav-link">Job-Search</Link></li>
          <li><Link to="/dashboard/roadmap" className="nav-link">RoadMap</Link></li>
          <li><Link to="/dashboard/chatroom" className="nav-link">Chat-Room</Link></li>
        </ul>

        <div className="Lnavbar-auth-buttons">
          {authUser ? (
            <div className="Lprofile-wrapper" onClick={() => navigate("/dashboard")} title="Dashboard">
              <FaUserCircle className="nav-profile-icon" />
            </div>
          ) : (
            <Link to="/login" className="Llogin-btn">Login</Link>
          )}
        </div>

      </div>
    </nav>
  );
}