import React from 'react'
import './ItJobsPrep.css';
import { FaPuzzlePiece, FaBriefcase, FaRobot } from "react-icons/fa";
import { LuRoute } from "react-icons/lu";

import { Navigate, NavLink } from 'react-router-dom';

export default function Itjobpeperation() {
  return (
    <section className="career-dashboard">
      <div className="float-icon-containerr">
          <img
            src="people.png"
            alt="Floating Icon"
            className="floating-icon-preperation"
          />
        </div>
      <div className="it-dashboard-container">
        <h2 className="dashboard-title">Your Career Dashboard</h2>
        <p className="dashboard-subtitle">All your tools, insights, and goals — in one place. Track progress like a pro.</p>

        <div className="dashboard-grid">
          <div className="dashboard-widget">
            <FaPuzzlePiece />
            <h3 className="widget-title">
              IT Role Matcher
            </h3>
            <p className="widget-text">
              Not sure where to start? See how your skills align with top tech roles — and unlock your career path.
            </p>
            <NavLink to="/it-jobs/ITJobSection-platform" className="widget-btn">Explore</NavLink>
          </div>

          <div className="dashboard-widget">
            <LuRoute />
            <h3 className="widget-title">
              Roadmap Builder
            </h3>
            <p className="widget-text">
              Build your career journey step by step. Use auto-generated roadmaps or create your own custom path to reach your goal.
            </p>

            <NavLink to="/it-jobs/practical-roadmap" className="widget-btn">Explore</NavLink>
          </div>

          <div className="dashboard-widget">
            <FaBriefcase />
            <h3 className="widget-title">
              Top Hiring Platforms
            </h3>
            <p className="widget-text">
              Ready to get hired? Explore top tech jobs across India’s best platforms — faster, smarter, and all in one spot.
            </p>
            <NavLink to="/it-jobs/ITjobsearch-platform" className="widget-btn">Explore</NavLink>
          </div>

          <div className="dashboard-widget">
            <FaRobot />
            <h3 className="widget-title">
              Career AI Chat
            </h3>
            <p className="widget-text">
              Talk to our smart assistant for real-time advice, feedback, and insights.
            </p>
            <NavLink to="/it-jobs/ITJobresources-platform" className="widget-btn">Explore</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
