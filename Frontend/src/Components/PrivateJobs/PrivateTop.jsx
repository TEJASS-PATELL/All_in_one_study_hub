import '../GovernmentJobs/Top.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Motivation from '../Motivation';
import GoogleSearch from '../GoogleSearch';

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
        <div className="top-form">
          <GoogleSearch />
        </div>
        <p className="top-popular-searches">
          Popular Searches:
          <strong>Banking</strong>
          <strong>Consulting</strong>
          <strong>Finance</strong>
          <strong>Manufacturing</strong>
          <strong>Hospitality</strong>
          <strong>Telecom</strong>
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
