import '../GovernmentJobs/Top.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Motivation from '../Motivation';

const PrivateTop = () => {
  return (
    <main className="top-main">
      <section className="top-hero">
        <img className="top-img" src="building.png"></img>
        <h1 className="top-title">
          Find Your Perfect <span className="top-highlight">Career Path</span>
        </h1>
        <p className="top-subtext">
          Explore comprehensive guides for India’s top private sector jobs across diverse industries. 
          Build your future with the right career direction.
        </p>
        <Motivation />
        <form className="top-form">
          <label htmlFor="search" className="top-sr-only">Search Jobs</label>
          <div className="top-search-wrapper">
            <FontAwesomeIcon className="top-search-icon" />
            <input
              id="search"
              type="search"
              placeholder="Search for jobs, industries, or qualifications..."
              className="top-search-input"
            />
          </div>
          <button type="submit" className="top-search-button">
            Search Jobs
          </button>
        </form>
        <p className="top-popular-searches">
          Popular Searches:
          <a href="#">Banking</a>
          <a href="#">Consulting</a>
          <a href="#">Finance</a>
          <a href="#">Manufacturing</a>
          <a href="#">Hospitality</a>
          <a href="#">Telecom</a>
        </p>
      </section>

      <section className="top-stats">
        <div className="top-stat-card">
          <p className="top-stat-value">40+</p>
          <p className="top-stat-label">Job Details</p>
        </div>
        <div className="top-stat-card">
          <p className="top-stat-value">10,000+</p>
          <p className="top-stat-label">Professionals Placed</p>
        </div>
        <div className="top-stat-card">
          <p className="top-stat-value">90%</p>
          <p className="top-stat-label">Career Satisfaction</p>
        </div>
        <div className="top-stat-card">
          <p className="top-stat-value">24/7</p>
          <p className="top-stat-label">Career Guidance</p>
        </div>
      </section>
    </main>
  );
};

export default PrivateTop;
