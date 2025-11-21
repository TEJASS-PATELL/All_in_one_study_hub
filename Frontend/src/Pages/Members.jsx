import React, { useState, useEffect } from 'react';
import './Members.css';
import { useAuthStore } from "../Store/useAuthStore";

const Members = () => {
  const {allUsers} = useAuthStore();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const res = allUsers();
    setUsers(res.data);
  }, []);

  const getStatus = (user) => {
    if (user.isLogin) return "Active now";
    if (user.lastLogout) return `Last seen: ${new Date(user.lastLogout).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })}`;
  };

  return (
    <div className="active-users-container">
      <div className="members-header">
        <p>See who's currently active or recently logged out.</p>
      </div>

      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <div key={user.id} className="user-card">
                <img src={user.profilepic ? user.profilepic : "./user.png"} alt="User Avatar" className="avatar" />
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-date">
                    Joined: {new Date(user.createdAt).toLocaleDateString("en-IN")}
                  </span>
                  <span className={`user-status ${getStatus(user) === "Active now" ? "active" : "inactive"}`}>
                    {getStatus(user)}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-users">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Members;
