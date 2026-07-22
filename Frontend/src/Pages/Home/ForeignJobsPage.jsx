import "./ForeignJobsPage.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const ForeignJobsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="foreign-jobs-container">

      <div className="foreign-jobs-box">
        <div className="foreign-jobs-photo-frame">
          <img
            src="./gloab.webp"
            alt="Foreign Jobs"
            className="foreign-jobs-image"
          />
        </div>

        <h1 className="foreign-jobs-title">Foreign Job Portal</h1>

        <span className="foreign-jobs-subtitle">Launching Soon</span>

        <p className="foreign-jobs-text">
          We're building a platform to help you find the best international jobs
          across tech, finance, research, and more. Stay tuned for global
          opportunities from top countries!
        </p>

        <button className="go-back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ForeignJobsPage;