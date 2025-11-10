import React, { useState } from 'react';
import './ITJobSection.css';
import itJobData from '../data/ITJobData';

function ITJobSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = itJobData.map((section) => {
    const filteredSkills = section.skills.filter((skill) => {
      const query = searchQuery.toLowerCase();
      return (
        skill.title.toLowerCase().includes(query) ||
        skill.tech.some((t) => t.toLowerCase().includes(query)) ||
        skill.why.toLowerCase().includes(query) ||
        skill.demand.toLowerCase().includes(query) ||
        skill.future.toLowerCase().includes(query)
      );
    });

    return { ...section, skills: filteredSkills };
  }).filter(section => section.skills.length > 0);

  return (
    <div className="IT-container">
      <div className="IT-header-section">
        <h1 className="IT-main-title">In-Demand IT Skills for Today & Tomorrow</h1>
        <p className="IT-subtitle">
          Explore high-paying, future-proof technologies in the IT industry. Start your journey today with the most in-demand skills!
        </p>

        <input
          type="text"
          placeholder="Search a skill, tech, or role..."
          className="IT-search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredData.map((section, i) => (
        <section className="IT-category-section" key={i}>
          <h2 className={`IT-category-title ${section.className}`}>
            {section.category}
          </h2>
          <div className="IT-grid-container">
            {section.skills.map((skill, j) => (
              <div className="IT-skill-card" key={j}>
                <div className="IT-card-content">
                  <div className="IT-card-header">
                    <svg className={skill.iconClass} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                      <path d="M16 2v4M8 2v4M2 10h20" />
                    </svg>
                    <h3 className="IT-skill-title">{skill.title}</h3>
                  </div>

                  <div className="IT-tech-section">
                    <p className="IT-tech-label">Master These Core Technologies:</p>
                    <div className="IT-tech-tags">
                      {skill.tech.map((t, k) => (
                        <span className="IT-tech-tag" key={k}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="IT-salary-section">
                    <p className="IT-salary-label">Average Salary (India, 2024-25):</p>
                    <p className="IT-salary-value">{skill.salary}</p>
                  </div>

                  <div className="IT-card-footer-stats">
                    <div>
                      <p className="IT-stat-label">Demand:</p>
                      <span className="IT-stat-value IT-demand-very-high">{skill.demand}</span>
                    </div>
                    <div>
                      <p className="IT-stat-label">Future:</p>
                      <span className="IT-stat-value IT-future-proof">{skill.future}</span>
                    </div>
                  </div>

                  <div className="IT-why-learn-section">
                    <p className="IT-why-learn-label">Why learn it?</p>
                    <p className="IT-why-learn-text">{skill.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ITJobSection;
