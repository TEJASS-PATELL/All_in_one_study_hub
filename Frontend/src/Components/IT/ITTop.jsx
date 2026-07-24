import React from 'react';
import './ITJobs.css';
import Motivation from '../Motivation';
import '../Government/Top.css';

const ITJobList = () => {
  const noticeItems = [
    "Cloud certifications trending across 2026 hiring",
    "AI/ML roles surging this quarter",
    "DevOps hiring up sharply year-over-year",
    "Cybersecurity demand at an all-time high",
  ];

  const companies = [
    'paypal.png', 'microsoft.png', 'google.png', 'amazon.png',
    'ibm.png', 'uber.png', 'meta.png', 'netflix (1).png',
    'adobe.png', 'oracle.png', 'intel.png', 'salesforce.png',
    'zomato.png', 'swiggy.png', 'phonepe.png', 'Walmart.png',
    'flipkart.png', 'atlassian.png',
  ];

  return (
    <main className="top-main">
      <section className="top-hero">
        <img className="top-img" src="information-technology.png" alt="IT Path" />

        <h1 className="top-title">
          Find Your Perfect <span className="top-highlight">IT Path</span>
        </h1>

        <p className="top-subtext">
          Explore real-world IT job roles, salaries & career paths — your tech journey starts now.
        </p>

        <div className="top-motivation">
          <Motivation />
        </div>

        <div className="top-ticker">
          <span className="top-ticker-label">
            <span className="top-ticker-dot" aria-hidden="true"></span>
            Live Updates
          </span>
          <div className="top-ticker-track">
            <div className="top-ticker-content">
              {[...noticeItems, ...noticeItems].map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="top-popular-searches">
          <strong>Frontend</strong>
          <strong>Backend</strong>
          <strong>Cloud</strong>
          <strong>AI/ML</strong>
          <strong>Cybersecurity</strong>
          <strong>DevOps</strong>
        </p>
      </section>

      <div className="infinite-slider-wrapper">
        <div className="infinite-slider">
          {[...companies, ...companies].map((logo, index) => {
            const logoName = logo.replace(/\s*\(.*\)/, '').replace('.png', '').toLowerCase();

            return (
              <div className="slider-logo-wrapper" key={index}>
                <img
                  src={`/companies/${logo}`}
                  alt={logoName}
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
