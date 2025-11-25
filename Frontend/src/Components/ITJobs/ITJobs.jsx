import React from 'react';
import './ITJobs.css';
import Motivation from '../Motivation';
import '../GovernmentJobs/Top.css';
import GoogleSearch from '../GoogleSearch';

const ITJobList = () => {
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

        <Motivation />

        <div className="top-form">
          <GoogleSearch />
        </div>

        <p className="top-popular-searches">
          Popular Searches:
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
