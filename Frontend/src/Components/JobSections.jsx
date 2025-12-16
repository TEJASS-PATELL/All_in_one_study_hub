import React from "react";
import { NavLink } from "react-router-dom";
import "./JobSections.css";

const JobSections = () => {
  return (
    <main className="main-content">
      <div className="main-container">
        <h2 className="Job-section-title">Explore Job Sectors</h2>

        <p className="p-title">
          Discover top job sectors across Government and Private domains. From
          Engineering and Healthcare to Finance and IT, explore career paths,
          required skills, and opportunities tailored to your interests. Find
          out what suits you best and plan your journey with confidence.
        </p>

        <div className="G-job-cards">
          <div className="G-card">
            <div className="G-card-header govt">
              <i className="fas fa-landmark icon"></i>
            </div>

            <div className="G-card-body">
              <h3 className="G-card-title">Government Jobs</h3>
              <p className="G-card-text">
                Explore various government examinations and job opportunities
                with stable career growth, long-term benefits, and strong job
                security.
              </p>
              <NavLink to="/government-jobs" className="G-btn btn-primary">
                Explore <i className="fas fa-arrow-right btn-icon"></i>
              </NavLink>
            </div>
          </div>

          <div className="G-card">
            <div className="G-card-header private">
              <i className="fas fa-building icon"></i>
            </div>

            <div className="G-card-body">
              <h3 className="G-card-title">Private Jobs</h3>
              <p className="G-card-text">
                Discover exciting opportunities in multiple private sector fields
                with competitive salaries, fast growth potential, diverse career
                paths, and industry recognition.
              </p>
              <NavLink to="/private-jobs" className="G-btn btn-primary">
                Explore <i className="fas fa-arrow-right btn-icon"></i>
              </NavLink>
            </div>
          </div>

          <div className="G-card">
            <div className="G-card-header remote">
              <i className="fas fa-laptop-house icon"></i>
            </div>

            <div className="G-card-body">
              <h3 className="G-card-title">IT Jobs</h3>
              <p className="G-card-text">
                Build a successful tech career with remote-friendly IT roles,
                flexible schedules, global exposure, and strong growth in leading
                innovative companies.
              </p>
              <NavLink to="/it-jobs" className="G-btn btn-primary">
                Explore <i className="fas fa-arrow-right btn-icon"></i>
              </NavLink>
            </div>
          </div>

          <div className="G-card">
            <div className="G-card-header foreign">
              <i className="fas fa-globe icon"></i>
            </div>

            <div className="G-card-body">
              <h3 className="G-card-title">Foreign Jobs</h3>
              <p className="G-card-text">
                Discover international roles across tech, healthcare, finance,
                and more, and unlock a rewarding global career with long-term
                growth and exposure.
              </p>
              <NavLink to="/foreign-jobs" className="G-btn btn-primary">
                Explore <i className="fas fa-arrow-right btn-icon"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobSections;
