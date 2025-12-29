import React, { useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useAuthStore } from "../Store/useAuthStore";
import Loading from './Loading';

export default function NavBar() {
  const navigate = useNavigate();
  const { authUser, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <nav className="Lnavbar">
      <div className='Lnavbar-container'>
        <div className="Lnav-logo" onClick={() => navigate("/")}>
          ALL-IN<span>-ONE</span>
        </div>

        <ul className="Lnavbar-links">
          <li><Link to="/government-jobs/Study-Material" className="nav-btn-link">Prep-Resources</Link></li>
          <li><Link className="ai-tools" to="/ai-tools">AI-Tools</Link></li>
          <li><Link to="/it-jobs/ITjobsearch-platform">Job-Search</Link></li>
          <li><Link to="/dashboard/roadmap">RoadMap</Link></li>
          <li><Link to="/dashboard/chatroom" className="nav-btn-link">Chat-Room</Link></li>
        </ul>

        <div className="Lnavbar-auth-buttons">
          {authUser ? (
            <div className="Lprofile-wrapper" onClick={() => navigate("/dashboard")}>
              <FaUserCircle size={38} />
            </div>
          ) : (
            <Link to="/login" className="Llogin-btn">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}