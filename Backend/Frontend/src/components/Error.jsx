import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import "../style/Error.css";

function Error() {
  const navigate = useNavigate();
  const goToPreviousPage = () => navigate(-1);

  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className="error-page">
        <div className="error-image">
          <img src="./a.jpg" alt="404 Page Not Found" />
        </div>
        <div className="error-content">
          <h2>Oops! The page you are looking for is not found.</h2>
          <div className="error-buttons">
            <NavLink className="btn primary-btn" to="/">
              Back to Home
            </NavLink>
            <button onClick={goToPreviousPage} className="btn secondary-btn">
              Back to Previous Page
            </button>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default Error;
