import React from 'react'
import './ItJobsPrep.css';
import { FaPuzzlePiece, FaBriefcase, FaRobot, FaCodeBranch } from "react-icons/fa";
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
            <h3 className="widget-title">IT Role Matcher</h3>
            <p className="widget-text">
              Not sure where to start? Explore how your skills fit into today’s top tech careers — and uncover personalized paths for future-ready IT journey.
            </p>
            <NavLink to="/it-jobs/ITJobSection-platform" className="widget-btn">Explore</NavLink>
          </div>

          <div className="dashboard-widget">
            <LuRoute />
            <h3 className="widget-title">
              Jobs Roadmap
            </h3>
            <p className="widget-text">
              Discover the ultimate roadmap for IT jobs — covering every essential skill, tool, and step you need to build a successful tech career.
            </p>

            <NavLink to="/it-jobs/practical-roadmap" className="widget-btn">Explore</NavLink>
          </div>

          <div className="dashboard-widget">
            <FaBriefcase />
            <h3 className="widget-title">
              Top Hiring Platforms
            </h3>
            <p className="widget-text">
              Ready to get hired? Explore top tech jobs across India’s best platforms — faster, smarter, and all in one powerful platform.
            </p>
            <NavLink to="/it-jobs/ITjobsearch-platform" className="widget-btn">Explore</NavLink>
          </div>

          <div className="dashboard-widget">
            <FaCodeBranch className="widget-icon" />
            <h3 className="widget-title">IT Job Resources</h3>
            <p className="widget-text">
              Explore top platforms for resume building, coding practice, aptitude prep, mock interviews, and open-source contributions.
            </p>
            <NavLink to="/it-jobs/ITJobresources-platform" className="widget-btn">
              Explore
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  )
}
