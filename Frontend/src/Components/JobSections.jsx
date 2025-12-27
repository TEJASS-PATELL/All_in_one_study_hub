import React from "react";
import { NavLink } from "react-router-dom";
import "./JobSections.css";

const JobSections = () => {
const jobSectors = [
  {
    title: "Government Sector",
    desc: "Strategic opportunities in public services with long-term stability, guaranteed benefits, and secure career growth.",
    path: "/government-jobs",
    icon: "fas fa-landmark"
  },
  {
    title: "Private Sector",
    desc: "Dynamic roles across top corporations featuring competitive compensation, rapid advancement, and industry exposure.",
    path: "/private-jobs",
    icon: "fas fa-building"
  },
  {
    title: "IT & Tech Hub",
    desc: "Cutting-edge technology careers with remote-first options, global networking, and innovation-led growth.",
    path: "/it-jobs",
    icon: "fas fa-laptop-code"
  },
  {
    title: "Global Careers",
    desc: "International employment pathways in finance, healthcare, and tech to build a truly borderless professional profile.",
    path: "/foreign-jobs",
    icon: "fas fa-globe"
  }
];

  return (
    <main className="job-sec-wrapper">
      <div className="job-sec-container">
        <div className="job-sec-header">
          <h2 className="job-sec-title">Explore Job Sectors</h2>
          <div className="title-line"></div>
          <p className="job-sec-subtitle">
            Discover top job sectors across Government and Private domains. Plan your journey with confidence and explore career paths tailored to your interests.
          </p>
        </div>

        <div className="job-grid-bw">
          {jobSectors.map((sector, index) => (
            <div className="job-card-bw" key={index}>
              <div className="job-card-icon">
                <i className={sector.icon}></i>
              </div>
              <h3 className="job-card-title">{sector.title}</h3>
              <p className="job-card-desc">{sector.desc}</p>
              <NavLink to={sector.path} className="job-explore-btn">
                Explore <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JobSections;