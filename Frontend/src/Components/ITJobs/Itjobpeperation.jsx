import './ItJobsPrep.css';
import { FaPuzzlePiece, FaBriefcase, FaRobot, FaCodeBranch } from "react-icons/fa";
import { LuRoute } from "react-icons/lu";

import { NavLink } from 'react-router-dom';

export default function Itjobpeperation() {
  return (
    <section className="career-dashboard">
      <div className="it-section-title">
        <h2>Your Career Dashboard</h2>
        <p>All your tools, insights, and goals — in one place. Track progress like a pro.</p>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-widget">
          <div className="it-preparation-icon">
            <FaPuzzlePiece />
          </div>
          <h3 className="widget-title">IT Role Matcher</h3>
          <p className="widget-text">
            Unsure where to start? Match your skills with top tech roles and find your perfect IT path.
          </p>

          <NavLink to="/it-jobs/ITJobSection-platform" className="widget-btn">Explore</NavLink>
        </div>

        <div className="dashboard-widget">
          <div className="it-preparation-icon">
            <LuRoute />
          </div>
          <h3 className="widget-title">
            Jobs Roadmap
          </h3>
          <p className="widget-text">
            Follow a clear roadmap with key skills and tools to grow your IT career step by step.
          </p>

          <NavLink to="/it-jobs/practical-roadmap" className="widget-btn">Explore</NavLink>
        </div>

        <div className="dashboard-widget">
          <div className="it-preparation-icon">
            <FaBriefcase />
          </div>

          <h3 className="widget-title">
            Top Hiring Platforms
          </h3>
          <p className="widget-text">
            Explore top tech jobs from India’s best platforms — faster, smarter, all in one place.
          </p>

          <NavLink to="/it-jobs/ITjobsearch-platform" className="widget-btn">Explore</NavLink>
        </div>

        <div className="dashboard-widget">
          <div className="it-preparation-icon">
            <FaCodeBranch />
          </div>

          <h3 className="widget-title">IT Job Resources</h3>
          <p className="widget-text">
            Access the best tools for resumes, coding, aptitude, interviews, and open-source work.
          </p>

          <NavLink to="/it-jobs/ITJobresources-platform" className="widget-btn">
            Explore
          </NavLink>
        </div>

      </div>
    </section>
  )
}
