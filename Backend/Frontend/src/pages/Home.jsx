import { Link } from "react-router-dom";
import "../style/Home.css";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Services from "../components/Services";
import Review from "../components/Review";
import { useAuthStore } from "../stores/useAuth";
import Loading from "../layout/Loading";
import { useUserData } from "../stores/useUserData";
import { useEffect, useState } from "react";

export default function Home() {

  const { isAuthenticated, isLoading } = useAuthStore();
  const { userDetail } = useUserData();
  const [User, SetUser] = useState("");

  useEffect(() => {
    if(!isAuthenticated) return;
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        const Userdata = await userDetail();
        if (isMounted && Userdata) {
          SetUser(Userdata);
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, [userDetail, isAuthenticated]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>
            Welcome <span>{isAuthenticated ? `${User.name}` : "-------"} </span> to our website
          </h1>
          <p>
            Build, learn, and explore modern web apps with React — fast, clean, and powerful.
          </p>
          {isAuthenticated ? (
            <div className="home-buttons">
              <Link to="/dashboard" className="home-btn primary-btn">
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="home-buttons">
              <Link to="/login" className="home-btn primary-btn">
                Login
              </Link>
              <Link to="/signup" className="home-btn secondary-btn">
                Sign-Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <Services />
      <Features />
      <Review />
      <FAQ />
    </>
  );
}
