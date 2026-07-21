import { NavLink } from "react-router-dom";
import { LuPuzzle, LuRoute, LuBriefcase, LuCode } from "react-icons/lu"; 
import '../GovernmentJobs/Preperation.css';

export default function Itjobpeperation() {
  return (
    <section className="G-preparation-section">
      <div className="G-section-title">
        <h2>Your Career Dashboard</h2>
        <p>All your tools, insights, and goals — in one place. Track progress like a pro.</p>
      </div>

      <div className="G-preparation-grid">
        <div className="G-preparation-card">
          <div className="preparation-icon">
            <LuPuzzle />
          </div>
          <h3 className="G-preparation-title">IT Role Matcher</h3>
          <p className="G-preparation-description">
            Unsure where to start? Match your skills with top tech roles and find your perfect IT path.
          </p>
          <NavLink to="/it-jobs/ITJobSection-platform" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <LuRoute />
          </div>
          <h3 className="G-preparation-title">Jobs Roadmap</h3>
          <p className="G-preparation-description">
            Follow a clear roadmap with key skills and tools to grow your IT career step by step.
          </p>
          <NavLink to="/it-jobs/practical-roadmap" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <LuBriefcase />
          </div>
          <h3 className="G-preparation-title">Top Hiring Platforms</h3>
          <p className="G-preparation-description">
            Explore top tech jobs from India’s best platforms — faster, smarter, all in one place.
          </p>
          <NavLink to="/it-jobs/ITjobsearch-platform" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <LuCode /> 
          </div>
          <h3 className="G-preparation-title">IT Job Resources</h3>
          <p className="G-preparation-description">
            Access the best tools for resumes, coding, aptitude, interviews, and open-source work.
          </p>
          <NavLink to="/it-jobs/ITJobresources-platform" className="cards-button">
            Explore
          </NavLink>
        </div>
      </div>
    </section>
  );
}