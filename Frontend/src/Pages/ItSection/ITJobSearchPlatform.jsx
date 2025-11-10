import './JobPlatformsPage.css';
import { platforms } from '../../data/ITJobSearchPlatform';

function JobPlatformsPage() {
  return (
    <div className="itplatform-job-page">
      <h1>Top Job Searching Platforms</h1>
      <p className='itplatform-p'>
       Explore 30+ top job platforms trusted by freshers and professionals alike. From job listings and internships to hiring contests, remote roles, and skill-based hiring — sites like LinkedIn, Naukri, and Unstop connect you directly with top employers and industry leaders for better career growth.
     </p>
    <div className="itplatform-cards-container">
        {platforms.map((platform, index) => (
          <div className="itplatform-job-card" key={index}>
            <div className="platform-logo">
              <img
                className={`platform-img ${platform.customClass}`}
                src={platform.logo}
                alt="Platform Logo"
              />
            </div>
            <p><strong>About:</strong> {platform.description}</p>
            <p><strong>Type:</strong> {platform.type}</p>
            <p><strong>Best For:</strong> {platform.idealFor}</p>
            <p><strong>Active Users:</strong> {platform.activeUsers}</p>

            <p><strong>Rating:</strong> <span className="platform-rating">{platform.rating}</span></p>
            <p><strong>Starts:</strong> <span className="platform-stars">{platform.starDisplay}</span></p>

            <p><strong>Key Features:</strong></p>
            <ul>
              {platform.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              Visit Platform
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPlatformsPage;
