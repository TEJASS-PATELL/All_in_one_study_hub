import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaComments, FaMapSigns, FaTrash, FaRobot, FaPaperPlane, FaClipboardCheck, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useAuthStore } from "../../Store/useAuthStore";
import { useState } from "react"; 
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 
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
      <button className="mobile-menu-icon" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`dashboard-sidebar ${isOpen ? "open" : ""}`}>
        <div className="dashboard-user-info">
          <div className="avatar-upload">
            <div className="avatar-wrapper">
              <FaUserCircle className="avatar-img" />
            </div>
          </div>
          <p className="username">{user?.name}</p>
          <p className="user-email">{user?.email}</p>
          <p className="user-joined">
            <strong>Joined: </strong>
            {new Date(user?.createdAt).toLocaleDateString()}
          </p>
        </div>

        <nav className="dashboard-nav">
          <NavLink to="/" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaHome /> Home</NavLink>
          <NavLink to="/dashboard" className="dashboard-nav-item" onClick={() => setIsOpen(false)}>
          <FaClipboardCheck />Daily-Task</NavLink>
          <NavLink to="/dashboard/roadmap" className="dashboard-nav-item" onClick={() => setIsOpen(false)}>
          <FaMapSigns /> Roadmap</NavLink>
          <NavLink to="/dashboard/discussion" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaComments /> Discussion</NavLink>
          <NavLink to="/dashboard/chatroom" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaPaperPlane /> ChatRoom</NavLink>
          <NavLink to="/dashboard/ai-interview" className="dashboard-nav-item" onClick={() => setIsOpen(false)}><FaRobot /> AI-Interview</NavLink>
          <button className="dashboard-nav-item logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
          <button className="dashboard-nav-item delete-btn" onClick={handleDelete}>
            <FaTrash /> Delete Account
          </button>
        </nav>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;