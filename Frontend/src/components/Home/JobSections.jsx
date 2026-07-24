import React from "react";
import { NavLink } from "react-router-dom";
import "./JobSections.css";

const JobSections = () => {
  const jobSectors = [
    {
      title: "Government Sector",
      desc: "Strategic opportunities in public services with long-term stability, guaranteed benefits, and secure career growth.",
      path: "/government-jobs",
      icon: "fas fa-landmark",
      code: "GOVT"
    },
    {
      title: "Private Sector",
      desc: "Dynamic roles across top corporations featuring competitive compensation, rapid advancement, and industry exposure.",
      path: "/private-jobs",
      icon: "fas fa-building",
      code: "PVT"
    },
    {
      title: "IT & Tech Hub",
      desc: "Cutting-edge technology careers with remote-first options, global networking, and innovation-led growth.",
      path: "/it-jobs",
      icon: "fas fa-laptop-code",
      code: "TECH"
    },
    {
      title: "Global Careers",
      desc: "International employment pathways in finance, healthcare, and tech to build a truly borderless professional profile.",
      path: "/foreign-jobs",
      icon: "fas fa-globe",
      code: "INTL"
    }
  ];

  return (
    <main className="job-sec-wrapper">
      <div className="job-sec-container">
        <div className="job-sec-header">
          <span className="job-sec-eyebrow">Sector Directory</span>
          <h2 className="job-sec-title">Explore Job Sectors</h2>
          <div className="title-line"></div>
          <p className="job-sec-subtitle">
            Discover top job sectors across Government and Private domains. Plan your journey with confidence and explore career paths tailored to your interests.
          </p>
        </div>

        <div className="job-index-list">
          {jobSectors.map((sector, index) => (
            <NavLink to={sector.path} className="job-index-row" key={index}>
              <span className="job-index-num"></span>

              <span className="job-index-icon-bg" aria-hidden="true">
                <i className={sector.icon}></i>
              </span>

              <span className="job-index-body">
                <span className="job-index-code">{sector.code} · SECTOR FILE</span>
                <h3 className="job-index-title">{sector.title}</h3>
                <p className="job-index-desc">{sector.desc}</p>
              </span>

              <span className="job-index-cta">
                Explore <i className="fas fa-arrow-right"></i>
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JobSections;