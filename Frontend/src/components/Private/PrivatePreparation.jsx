import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Government/Preperation.css';
import { FaCodeBranch } from 'react-icons/fa';

const PrivatePreparation = () => {
  return (
    <section className="G-preparation-section">
  <div className="G-section-title">
    <span className="G-eyebrow">Candidate Handbook</span>
    <h2>Preparing for Private Jobs</h2>
    <div className="title-line"></div>
    <p>Essential skills and strategies to crack MNC and startup job roles</p>
  </div>

  <div className="G-preparation-list">
    <NavLink to="/private-jobs/searching" className="G-prep-row">
      <span className="G-prep-num"></span>
      <span className="G-prep-icon-bg" aria-hidden="true">
        <i className="fas fa-briefcase"></i>
      </span>
      <span className="G-prep-body">
        <h3 className="G-preparation-title">Post & Apply for Jobs</h3>
        <p className="G-preparation-description">
          Find private job opportunities or post openings to hire qualified candidates effortlessly.
        </p>
      </span>
      <span className="G-prep-cta">
        Explore <i className="fas fa-arrow-right"></i>
      </span>
    </NavLink>

    <NavLink to="/private-jobs/free-study-resources" className="G-prep-row">
      <span className="G-prep-num"></span>
      <span className="G-prep-icon-bg" aria-hidden="true">
        <i className="fas fa-book-open"></i>
      </span>
      <span className="G-prep-body">
        <h3 className="G-preparation-title">Study Resources</h3>
        <p className="G-preparation-description">
          Access top-quality free learning materials to prepare for private sector jobs effectively.
        </p>
      </span>
      <span className="G-prep-cta">
        Explore <i className="fas fa-arrow-right"></i>
      </span>
    </NavLink>

    <NavLink to="/it-jobs/ITJobresources-platform" className="G-prep-row">
      <span className="G-prep-num"></span>
      <span className="G-prep-icon-bg" aria-hidden="true">
        <FaCodeBranch />
      </span>
      <span className="G-prep-body">
        <h3 className="G-preparation-title">Various Tool's</h3>
        <p className="G-preparation-description">
          Access the best tools for resumes, coding, aptitude, interviews, and open-source work.
        </p>
      </span>
      <span className="G-prep-cta">
        Explore <i className="fas fa-arrow-right"></i>
      </span>
    </NavLink>

    <NavLink to="/government-jobs/practice-paper" className="G-prep-row">
      <span className="G-prep-num"></span>
      <span className="G-prep-icon-bg" aria-hidden="true">
        <i className="fas fa-file-alt"></i>
      </span>
      <span className="G-prep-body">
        <h3 className="G-preparation-title">Top Platform for Practice</h3>
        <p className="G-preparation-description">
          India’s top platform to practice real papers and crack your exam.
        </p>
      </span>
      <span className="G-prep-cta">
        Explore <i className="fas fa-arrow-right"></i>
      </span>
    </NavLink>
  </div>
</section>
  );
};

export default PrivatePreparation;
