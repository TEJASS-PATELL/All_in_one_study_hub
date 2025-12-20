import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaComments, FaMapSigns, FaTrash, FaRobot, FaPaperPlane, FaClipboardCheck, FaUserCircle } from "react-icons/fa";
import { useAuthStore } from "../../Store/useAuthStore";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { authUser: user, logout, deleteAccount } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      deleteAccount();
      navigate("/");
    }
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-user-info">
        <div className="avatar-upload">
          <div className="avatar-wrapper">
              <FaUserCircle className="avatar-img"/>
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
        <NavLink to="/" className="dashboard-nav-item"><FaHome /> Home</NavLink>
        <NavLink to="/dashboard" className="dashboard-nav-item"><FaClipboardCheck />Daily-Task</NavLink>
        <NavLink to="/dashboard/roadmap" className="dashboard-nav-item"><FaMapSigns /> Roadmap</NavLink>
        <NavLink to="/dashboard/discussion" className="dashboard-nav-item"><FaComments /> Discussion</NavLink>
        <NavLink to="/dashboard/chatroom" className="dashboard-nav-item"><FaPaperPlane /> ChatRoom</NavLink>
        <NavLink to="/dashboard/ai-interview" className="dashboard-nav-item"><FaRobot /> AI-Interview</NavLink>
        <button className="dashboard-nav-item logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
        <button className="dashboard-nav-item delete-btn" onClick={handleDelete}>
          <FaTrash /> Delete Account
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
