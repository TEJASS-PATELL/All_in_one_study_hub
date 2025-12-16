import './Preperation.css';
import { NavLink } from 'react-router-dom';

const PreparationSection = () => {
  return (
    <div className="G-preparation-section">
      <div className="G-section-title">
        <h2>Preparing for Government Exams</h2>
        <p>Smart resources and proven techniques for cracking top government jobs</p>
      </div>

      <div className="G-preparation-grid">
        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <h3 className="G-preparation-title">Smart Study Resources</h3>
          <p className="G-preparation-description">
            Best books, concise notes, and trusted YouTube Channel's, tips—all in one place.
          </p>
          <NavLink to="/government-jobs/Study-Material" className="cards-button">
            Explore
          </NavLink>
        </div>

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-hourglass-half"></i>
          </div>
          <h3 className="G-preparation-title">Time Management</h3>
          <p className="G-preparation-description">
            Master your study plan, daily goals, and revision for peak productivity.
          </p>
          <NavLink to="/government-jobs/time-management" className="cards-button">
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

        <div className="G-preparation-card">
          <div className="preparation-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="G-preparation-title">Exam-Day Strategy</h3>
          <p className="G-preparation-description">
            Excel under pressure with smart choices, time control, and focused execution.
          </p>
          <NavLink to="/government-jobs/exam-day" className="cards-button">
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );

};

export default PreparationSection;
