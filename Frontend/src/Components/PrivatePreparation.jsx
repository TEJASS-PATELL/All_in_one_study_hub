import React from 'react';
import { NavLink } from 'react-router-dom';
import './Preperation.css';

const PrivatePreparation = () => {
  return (
    <div className="G-preparation-section">
      <div className="G-section-title">
        <h2>Preparing for Private Jobs</h2>
        <p>Essential skills and strategies to crack MNC and startup job roles</p>
      </div>

      <div className="G-preparation-grid">
        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-tools"></i>
          </div>
          <h3>Domain-Specific Skills</h3>
          <p>
            Master the key tools, software, and concepts required in your chosen field.
          </p>
          <NavLink to="/government-jobs/practice-paper" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-id-card"></i>
          </div>
          <h3>Resume & LinkedIn</h3>
          <p>
            Create an impressive resume and build a strong LinkedIn profile to attract recruiters.
          </p>
          <NavLink to="/government-jobs/practice-paper" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-microphone"></i>
          </div>
          <h3>Interview Preparation</h3>
          <p>
            Prepare for both technical and HR rounds with real-world questions and tips.
          </p>
          <NavLink to="/government-jobs/practice-paper" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3>Aptitude & Soft Skills</h3>
          <p>
            Improve your logical thinking, communication, and problem-solving skills.
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
