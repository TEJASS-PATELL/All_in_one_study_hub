import './Preperation.css';
import { NavLink } from 'react-router-dom';

const PreparationSection = () => {
  return (
    <section className="G-preparation-section">
      <div className="G-section-title">
        <span className="G-eyebrow">Candidate Handbook</span>
        <h2>Preparing for Government Exams</h2>
        <div className="title-line"></div>
        <p>Smart resources and proven techniques for cracking top government jobs</p>
      </div>

      <div className="G-preparation-list">
        <NavLink to="/government-jobs/Study-Material" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <i className="fas fa-book-open"></i>
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">Smart Study Resources</h3>
            <p className="G-preparation-description">
              Best books, concise notes, and trusted YouTube Channel's, tips—all in one place.
            </p>
          </span>
          <span className="G-prep-cta">
            Explore <i className="fas fa-arrow-right"></i>
          </span>
        </NavLink>

        <NavLink to="/government-jobs/time-management" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <i className="fas fa-hourglass-half"></i>
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">Time Management</h3>
            <p className="G-preparation-description">
              Master your study plan, daily goals, and revision for peak productivity.
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
              India's top platform to practice real papers and crack your exam with confidence.
            </p>
          </span>
          <span className="G-prep-cta">
            Explore <i className="fas fa-arrow-right"></i>
          </span>
        </NavLink>

        <NavLink to="/government-jobs/exam-day" className="G-prep-row">
          <span className="G-prep-num"></span>
          <span className="G-prep-icon-bg" aria-hidden="true">
            <i className="fas fa-lightbulb"></i>
          </span>
          <span className="G-prep-body">
            <h3 className="G-preparation-title">Exam-Day Strategy</h3>
            <p className="G-preparation-description">
              Excel under pressure with smart choices, time control, and focused execution.
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

export default PreparationSection;