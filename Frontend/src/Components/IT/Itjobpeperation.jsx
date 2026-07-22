import { NavLink } from "react-router-dom";
import { LuPuzzle, LuRoute, LuBriefcase, LuCode } from "react-icons/lu";
import '../Government/Preperation.css';

export default function Itjobpeperation() {
  return (
    <section className="G-preparation-section">
      <div className="G-section-title">
        <span className="G-eyebrow">Candidate Handbook</span>
        <h2>Your Career Dashboard</h2>
        <div className="title-line"></div>
        <p>All your tools, insights, and goals — in one place. Track progress like a pro.</p>
      </div>

      <div className="G-preparation-list">
        <NavLink to="/it-jobs/ITJobSection-platform" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <LuPuzzle />
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">IT Role Matcher</h3>
            <p className="G-preparation-description">
              Unsure where to start? Match your skills with top tech roles and find your perfect IT path.
            </p>
          </span>
          <span className="G-prep-cta">
            Explore <i className="fas fa-arrow-right"></i>
          </span>
        </NavLink>

        <NavLink to="/it-jobs/practical-roadmap" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <LuRoute />
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">Jobs Roadmap</h3>
            <p className="G-preparation-description">
              Follow a clear roadmap with key skills and tools to grow your IT career step by step.
            </p>
          </span>
          <span className="G-prep-cta">
            Explore <i className="fas fa-arrow-right"></i>
          </span>
        </NavLink>

        <NavLink to="/it-jobs/ITjobsearch-platform" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <LuBriefcase />
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">Top Hiring Platforms</h3>
            <p className="G-preparation-description">
              Explore top tech jobs from India’s best platforms — faster, smarter, all in one place.
            </p>
          </span>
          <span className="G-prep-cta">
            Explore <i className="fas fa-arrow-right"></i>
          </span>
        </NavLink>

        <NavLink to="/it-jobs/ITJobresources-platform" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <LuCode />
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">IT Job Resources</h3>
            <p className="G-preparation-description">
              Access the best tools for resumes, coding, aptitude, interviews, and open-source work.
            </p>
          </span>
          <span className="G-prep-cta">
            Explore <i className="fas fa-arrow-right"></i>
          </span>
        </NavLink>
      </div>
    </section>
  );
}