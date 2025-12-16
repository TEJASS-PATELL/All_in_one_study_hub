import React from 'react';
import { NavLink } from 'react-router-dom';
import '../GovernmentJobs/Preperation.css';
import { FaCodeBranch } from 'react-icons/fa';

const PrivatePreparation = () => {
  return (
    <div className="G-preparation-section">
      <div className="G-section-title">
        <h2>Preparing for Private Jobs</h2>
        <p className="G-preparation-description">Essential skills and strategies to crack MNC and startup job roles</p>
      </div>

      <div className="G-preparation-grid">
        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3 className="G-preparation-title">Post & Apply for Jobs</h3>
          <p className="G-preparation-description">
            Find private job opportunities or post openings to hire qualified candidates effortlessly.
          </p>
          <NavLink to="/private-jobs/searching" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <h3 className="G-preparation-title">Best Free Study Resources</h3>
          <p className="G-preparation-description">
            Access top-quality free learning materials to prepare for private sector jobs effectively.
          </p>
          <NavLink to="/private-jobs/free-study-resources" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <FaCodeBranch />
          </div>

          <h3 className="G-preparation-title">Various Tool's</h3>
          <p className="G-preparation-description">
            Access the best tools for resumes, coding, aptitude, interviews, and open-source work.
          </p>

          <NavLink to="/it-jobs/ITJobresources-platform" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3 className="G-preparation-title">Top Platform for Practice</h3>
          <p className="G-preparation-description">
            India’s top platform to practice real papers and crack your exam.
          </p>

          <NavLink to="/government-jobs/practice-paper" className="cards-button">
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PrivatePreparation;
