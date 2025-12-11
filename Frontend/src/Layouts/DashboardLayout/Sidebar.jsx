import { NavLink, useNavigate } from "react-router-dom";
import { FaChartBar, FaSignOutAlt, FaHome, FaUsers, FaComments, FaMapSigns, FaTrash, FaRobot, FaPaperPlane, FaClipboardCheck } from "react-icons/fa";
import { useAuthStore } from "../../Store/useAuthStore";
import ImageUpload from "../../Components/ImageUpload";
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
        <ImageUpload />
        <p className="username">{user?.name}</p>
        <p className="user-email">{user?.email}</p>
        <p className="user-joined">
          <strong>Joined: </strong>
          {new Date(user?.createdAt).toLocaleDateString()}
        </p>
      </div>

      <nav className="dashboard-nav">
        <NavLink to="/" className="dashboard-nav-item"><FaHome /> Home</NavLink>
        <NavLink to="/dailytask" className="dashboard-nav-item"><FaClipboardCheck />Daily-Task</NavLink>
        <NavLink to="/roadmap" className="dashboard-nav-item"><FaMapSigns /> Roadmap</NavLink>
        <NavLink to="/members" className="dashboard-nav-item"><FaUsers /> Members</NavLink>
        <NavLink to="/discussion" className="dashboard-nav-item"><FaComments /> Discussion</NavLink>
        <NavLink to="/chatroom" className="dashboard-nav-item"><FaPaperPlane /> ChatRoom</NavLink>
        <NavLink to="/aiinterview" className="dashboard-nav-item"><FaRobot /> AI-Interview</NavLink>
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
