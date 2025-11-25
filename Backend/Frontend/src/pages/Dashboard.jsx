import "../style/Profile.css";
import ImageUpload from "../components/ImageUpload";
import { useAuthStore } from "../stores/useAuth";
import { useUserData } from "../stores/useUserData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../layout/Loading";
import toast from "react-hot-toast";

export default function Dashboard() {
  const { logout, deleteAccount, isLoading } = useAuthStore();
  const navigator = useNavigate();
  const [UserInformation, SetUserInformation] = useState("");
  const { userDetail } = useUserData();

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        const Userdata = await userDetail();
        if (isMounted && Userdata) {
          SetUserInformation(Userdata);
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, [userDetail]);

  if(isLoading) return <Loading />

  const handleLogout = async () => {
    await logout();
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure to delete account?")) {
      await deleteAccount();
      toast.success("Account deleted successfully!")
      navigator("/login");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-info">
          <div className="profile-avatar">
            <ImageUpload />
          </div>
          <h2 className="profile-name">{UserInformation?.name}</h2>
          <p className="profile-email">{UserInformation?.email}</p>
        </div>

        <div className="profile-buttons">
          <button className="profile-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <button className="profile-btn delete-btn" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>

      <div className="profile-right"></div>
    </div>
  );
}
