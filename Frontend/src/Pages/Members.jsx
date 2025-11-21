import React, { useState, useEffect } from 'react';
import './Members.css';
import { useAuthStore } from "../Store/useAuthStore";
import Loading from '../Layouts/Loading';

const Members = () => {
  const allUsers = useAuthStore((state) => state.allUsers);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        console.log("hweeee"); 
        const res = await allUsers();
        console.log(res);

        if (isMounted && res?.data) {
          setUsers(res.data);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []); 

  const getStatus = (user) => {
    if (user?.isLogin) return "Active now";
    if (user?.lastLogout)
      return `Last seen: ${new Date(user.lastLogout).toLocaleDateString(
        "en-IN",
        { day: "numeric", month: "long", year: "numeric" }
      )}`;
    return "Status unavailable";
  };

  if (loading) return <Loading />;

  return (
    <div className="active-users-container">
      <div className="members-header">
        <p>See who's currently active or recently logged out.</p>
      </div>

      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.profilepic || "./user.png"}
                alt="User Avatar"
                className="avatar"
              />
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-date">
                  Joined: {new Date(user.createdAt).toLocaleDateString("en-IN")}
                </span>
                <span
                  className={`user-status ${
                    getStatus(user) === "Active now" ? "active" : "inactive"
                  }`}
                >
                  {getStatus(user)}
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
