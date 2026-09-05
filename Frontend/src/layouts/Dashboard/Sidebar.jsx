import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaMapSigns, FaTrash, FaRobot, FaPaperPlane, FaClipboardCheck, FaUserCircle, FaBars, FaTimes, FaBriefcase } from "react-icons/fa";
import { useAuthStore } from "../../Store/useAuthStore";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 768);
  const { authUser: user, logout, deleteAccount } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      deleteAccount();
      navigate("/");
    }
  };

  return (
    <>
      <button className={`mobile-menu-icon ${isOpen ? "expanded" : "collapsed"}`} onClick={toggleSidebar} aria-label={isOpen ? "Collapse sidebar" : "Open sidebar"}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`dashboard-sidebar ${isOpen ? "open" : ""}`}>
        <div className="dashboard-brand">
          <span className="dashboard-brand-mark">P</span>
          <span className="dashboard-brand-name">Prep<span>Room</span></span>
        </div>

        <div className="dashboard-user-info">
          <div className="avatar-upload">
            <div className="avatar-wrapper">
              <FaUserCircle className="avatar-img" />
            </div>
          </div>
          <p className="username">{user?.name || "Learner"}</p>
          <p className="user-email">{user?.email}</p>
          <p className="user-joined">
            <strong>Joined: </strong>
            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Today"}
          </p>
        </div>

        <nav className="dashboard-nav">
          <span className="dashboard-nav-label">Navigate</span>
          <NavLink to="/" title="Home" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaHome /><span>Home</span></NavLink>
          <NavLink to="/dashboard" title="Daily Task" className="dashboard-nav-item" onClick={() => setIsOpen(false)}>
            <FaClipboardCheck /><span>Daily Task</span></NavLink>
          <NavLink to="/dashboard/roadmap" title="Roadmap" className="dashboard-nav-item" onClick={() => setIsOpen(false)}>
            <FaMapSigns /><span>Roadmap</span></NavLink>
          <NavLink to="/dashboard/experience" title="Experience" className="dashboard-nav-item" onClick={() => setIsOpen(false)}>
            <FaBriefcase /><span>Experience</span></NavLink>
          <NavLink to="/dashboard/chatroom" title="ChatRoom" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaPaperPlane /><span>ChatRoom</span></NavLink>
          <NavLink to="/dashboard/ai-interview" title="AI Interview" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaRobot /><span>AI Interview</span></NavLink>
          <span className="dashboard-nav-label dashboard-nav-label-account">Account</span>
          <button className="dashboard-nav-item logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /><span>Logout</span>
          </button>
          <button className="dashboard-nav-item delete-btn" onClick={handleDelete}>
            <FaTrash /><span>Delete Account</span>
          </button>
        </nav>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;