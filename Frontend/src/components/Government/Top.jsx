import React from 'react';
import './Top.css';
import Motivation from '../Motivation';

const noticeItems = [
  "GATE 2026 registration window now open",
  "UPSC Prelims 2026 results declared",
  "SSC CGL 2026 notification expected soon",
  "Banking exam calendar updated for 2026",
];

const Top = () => {
  return (
    <main className="top-main">
      <section className="top-hero">
        <div className="top-hero-inner">

          <img className="top-img" src="path.png" alt="CareerHub" />

          <h1 className="top-title">
            Find Your Perfect <span className="top-highlight">Exam Path</span>
          </h1>

          <p className="top-subtext">
            Discover comprehensive guides for government job exams across various sectors. Your career journey starts here.
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
            <strong>GATE</strong>
            <strong>UPSC</strong>
            <strong>SSC</strong>
            <strong>Banking</strong>
            <strong>Medical</strong>
            <strong>Defense</strong>
          </p>
        </div>
      </section>

      <section className="top-stats">
        <div className="top-stat-card">
          <p className="top-stat-value">60+</p>
          <p className="top-stat-label">Exam Categories</p>
        </div>
        <div className="top-stat-card">
          <p className="top-stat-value">90%</p>
          <p className="top-stat-label">Student Satisfaction</p>
        </div>
        <div className="top-stat-card">
          <p className="top-stat-value">--</p>
          <p className="top-stat-label">Success Rate</p>
        </div>
        <div className="top-stat-card">
          <p className="top-stat-value">24/7</p>
          <p className="top-stat-label">Learning Support</p>
        </div>
      </section>
    </main>
  );
};

export default Top;