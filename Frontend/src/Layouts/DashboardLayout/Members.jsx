import React, { useState, useEffect } from 'react';
import './Members.css';
import { useAuthStore } from "../../Store/useAuthStore";
import Loading from '../Loading';

const Members = () => {
  const allUsers = useAuthStore.getState().allUsers; 
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        console.log("hweeee");
        const res = await allUsers();
        if (mounted) {
          setUsers(res?.data || []);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => (mounted = false);
  }, []);

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
              <img src={user.profilepic || "./user.png"} alt="User Avatar" className="avatar" />
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
