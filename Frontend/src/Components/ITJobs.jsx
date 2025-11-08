import './ITJobs.css';
import Motivation from './Motivation';
import './Top.css'

const ITJobList = () => {
  const companies = [
    'paypal.png', 'microsoft.png', 'google.png', 'amazon.png',
    'ibm.png', 'uber.png', 'meta.png', 'netflix (1).png',
    'adobe.png', 'oracle.png', 'intel.png', 'salesforce.png',
    'zomato.png', 'swiggy.png', 'phonepe.png', 'Walmart.png',
    'flipkart.png', 'atlassian.png',
  ];

  return (
    <main className="ittop-main">
      <section className="top-hero">
        <img className="top-img" src="information-technology.png"></img>
        <h1 className="top-title">
          Find Your Perfect <span className="top-highlight">IT Path</span>
        </h1>
        <p className="top-subtext">
          Explore real-world IT job data, salaries, and career paths — your inspiring tech journey starts today with confidence.
        </p>
        <Motivation />

        <form className="top-form">
          <label htmlFor="job-search" className="top-sr-only">Search Jobs</label>
          <div className="it-search-wrapper">
            <input
              id="job-search"
              type="search"
              placeholder="Search for job roles, skills, or salaries..."
              className="it-search-input"
            />
            <button type="submit" className="top-search-button">
              Search Jobs
            </button>
          </div>
        </form>

        <p className="top-popular-searches">
          Popular Searches:
          <a href="#">Frontend</a>
          <a href="#">Backend</a>
          <a href="#">Cloud</a>
          <a href="#">AI/ML</a>
          <a href="#">Cybersecurity</a>
          <a href="#">DevOps</a>
        </p>
      </section>

      <div className="infinite-slider-wrapper">
        <div className="infinite-slider">
          {[...companies, ...companies].map((logo, index) => {
            const logoName = logo
              .replace(/\s*\(.*\)/, '')
              .replace('.png', '')
              .toLowerCase();

            return (
              <div className="slider-logo-wrapper" key={index}>
                <img
                  src={`/companies/${logo}`}
                  alt={`Company ${index}`}
                  className={`slider-logo logo-${logoName}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ITJobList;
