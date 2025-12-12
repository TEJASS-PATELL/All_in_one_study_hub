import React, { useState, useEffect } from 'react';
import './Members.css';
import { useAuthStore } from "../../Store/useAuthStore";
import Loading from '../Loading';

const Members = () => {
  const allUsers = useAuthStore((state) => state.allUsers);
  const users = useAuthStore((state) => state.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await allUsers(); 
      setLoading(false);
    })();
  }, [allUsers]);
  console.log(users);

  if (loading) return <Loading />;

  return (
    <div className="active-users-container">
      <div className="members-header">
        <p>See who's currently active or recently logged out.</p>
      </div>

      <div className="user-list">
        {users.length ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <h1></h1>
              <img src={user.profilepic || "/user.png"} alt="User Avatar" className="avatar" />
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-date">
                  Joined: {new Date(user.createdAt).toLocaleDateString("en-IN")}
                </span>
                <span className={`user-status ${user.isLogin ? "active" : "inactive"}`}>
                  {user.isLogin
                    ? "Active now"
                    : user.lastLogout
                      ? `Last seen: ${new Date(user.lastLogout).toLocaleDateString("en-IN")}`
                      : "Status unavailable"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-users">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Members;
