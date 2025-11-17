import { NavLink, useNavigate } from "react-router-dom";
import './Dashboard.css';
import React from "react";

import {
  FaChartBar, FaSignOutAlt, FaHome,
  FaUsers, FaComments,
  FaClipboardList,
  FaMapSigns,
  FaTrash,
  FaRobot,
  FaPaperPlane
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Loading from "../Layouts/Loading";
import { useAuthStore } from "../Store/useAuthStore";
import ImageUpload from "../Components/ImageUpload";

const Dashboard = () => {
  const navigate = useNavigate();
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("userTodos");
    return stored ? JSON.parse(stored) : [];
  });

  const { authUser: user, isLoading, fetchUser, logout, deleteAccount } = useAuthStore();

  useEffect(() => {
    if (!user && !isLoading) fetchUser();
  }, [user, isLoading, fetchUser]);

  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(todos));
  }, [todos]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) return;
    deleteAccount();
    navigate("/");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = todoText.trim();
    if (!trimmed) return;
    if (trimmed.length > 200) {
      alert("Task cannot exceed 200 characters.");
      return;
    }
    if (todos.length >= 10) {
      alert("You can only add up to 10 tasks.");
      return;
    }
    setTodos([...todos, trimmed]);
    setTodoText("");
  };

  if (isLoading || !user) return <Loading />;

  return (
    <div className="dashboard-container">
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
          <NavLink to="/roadmap" className="dashboard-nav-item"><FaMapSigns /> Roadmap</NavLink>
          <NavLink to="/dashboard" className="dashboard-nav-item"><FaChartBar /> Dashboard</NavLink>
          <NavLink to="/aiinterview" className="dashboard-nav-item"><FaRobot /> AI-Interview</NavLink>
          <NavLink to="/chatroom" className="dashboard-nav-item"><FaPaperPlane /> ChatRoom</NavLink>
          <NavLink to="/members" className="dashboard-nav-item"><FaUsers /> Members</NavLink>
          <NavLink to="/discussion" className="dashboard-nav-item"><FaComments /> Discussion</NavLink>
          <button className="dashboard-nav-item logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
          <button className="dashboard-nav-item delete-btn" onClick={handleDelete}>
            <FaTrash /> Delete Account
          </button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h3>
            <FaClipboardList style={{ marginRight: "6px" }} />
            Todo List
          </h3>
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              placeholder="Add a task..."
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              className="todo-input"
              maxLength={200}
              required
            />
            <button type="submit" className="todo-add-btn">Add</button>
          </form>
          <ul className="todo-list">
            {todos.map((todo, idx) => (
              <li key={idx} className="todo-item">

                <span className="todo-text">{todo}</span>
                <button
                  className="todo-delete-btn"
                  onClick={() => {
                    const updatedTodos = todos.filter((_, i) => i !== idx);
                    setTodos(updatedTodos);
                  }}
                  title="Delete task"
                >
                  <FaTrash />
                </button>
              </li>
            ))}

          </ul>
          <p style={{ fontSize: "12px", color: "#666" }}>
            {todos.length}/10 tasks added. Max 200 characters per task.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
