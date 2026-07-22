import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComingSoon.css";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>
          Coming <span className="cs-highlight">Soon</span>
        </h1>

        <p>Our amazing project is on its way. Stay tuned!</p>

        <div className="buttons">
          <button className="cs-btn cs-btn-light" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="cs-btn cs-btn-dark" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;