import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./StudyMaterial.css";
import {
  FaYoutube,
  FaLightbulb,
  FaBookOpen,
  FaFlagCheckered,
  FaBriefcase,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaArrowAltCircleRight,
} from 'react-icons/fa';

import { cardsData } from "../../data/GovJobData";

const StudyMaterial = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (cardIndex, sectionName) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [cardIndex]: prevState[cardIndex] === sectionName ? null : sectionName,
    }));
  };

  return (
    <div className="a-container">
      <div className="a-study-section">
        <div className="a-hero-content">
          <div className="a-hero-text">
            <h2 className="a-hero-title">Study Material for Various Exams</h2>
            <p className="a-hero-description">
              Curated resources and recommended books for each exam preparation path.
            </p>
            <p className="a-category-description">
              Browse through our comprehensive collection of study materials categorized by different government examinations.
            </p>
          </div>
        </div>
      </div>
      
      {cardsData.map((card, index) => (
        <div key={index} className="image-cardd-container">
          <div className="card-section">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>

            {card.youtubeChannels && card.youtubeChannels.length > 0 && (
              <div className="toggle-section">
                <button
                  className={`toggle-button ${openSections[index] === 'youtube' ? 'open' : ''}`}
                  onClick={() => toggleSection(index, 'youtube')}
                >
                  <span className="button-left">
                    <FaYoutube style={{ marginRight: '12px' }} />
                    Top YouTube Channels
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "youtube" ? "open" : ""}`}>
                  <ul className="youtube-channels-list">
                    {card.youtubeChannels.map((channel, i) => (
                      <li key={i}>
                        <NavLink to={channel.link} target="_blank" rel="noopener noreferrer">
                          {channel.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.preparationStrategy && card.preparationStrategy.length > 0 && (
              <div className="toggle-section">
                <button 
                  className={`toggle-button ${openSections[index] === 'strategy' ? 'open' : ''}`}
                  onClick={() => toggleSection(index, "strategy")}
                >
                  <span className="button-left">
                    <FaFlagCheckered style={{ marginRight: '12px' }} />
                    Preparation Strategy & Sprints
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "strategy" ? "open" : ""}`}>
                  <ul className="opportunityList">
                    {card.preparationStrategy.map((phase, i) => (
                      <li key={i} className="LopportunityItem">
                        <strong>{phase.phase}</strong>
                        <p style={{ fontSize: '1.05rem', color: '#555', margin: '5px 0 10px 0px' }}>
                          <em>Goal: {phase.goal}</em>
                        </p>
                        <ul className="subOpportunityList">
                          {phase.actionPoints.map((point, j) => (
                            <li key={j} className="LsubItem">{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.ExamOpportunities && card.ExamOpportunities.length > 0 && (
              <div className="toggle-section">
                <button 
                  className={`toggle-button ${openSections[index] === 'opportunities' ? 'open' : ''}`}
                  onClick={() => toggleSection(index, "opportunities")}
                >
                   <span className="button-left">
                    <FaBriefcase style={{ marginRight: '12px' }} />
                    Top Opportunities
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "opportunities" ? "open" : ""}`}>
                  <ul className="opportunityList">
                    {card.ExamOpportunities.map((item, i) => (
                      <li key={i} className="LopportunityItem">
                        <strong>{item.exam}</strong>
                        <ul className="subOpportunityList">
                          {item.opportunities.map((op, j) => (
                            <li key={j} className="LsubItem">{op}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.coachingData && card.coachingData.length > 0 && (
              <div className="toggle-section">
                <button 
                  className={`toggle-button ${openSections[index] === 'coaching' ? 'open' : ''}`}
                  onClick={() => toggleSection(index, "coaching")}
                >
                  <span className="button-left">
                    <FaChalkboardTeacher style={{ marginRight: '12px' }} />
                    Top Coaching Institutes
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "coaching" ? "open" : ""}`}>
                  {card.coachingData.map((coaching, idx) => (
                    <div key={idx} className="LcoachingCard">
                      <div className="LcoachingTitle"><FaGraduationCap /> {coaching.name}</div>
                      <div className="LcoachingTagline">"{coaching.tagline}"</div>
                      <div className="LcoachingLocation"><FaMapMarkerAlt /> {coaching.location}</div>
                      <div className="LcoachingFees">Fees: {coaching.fees}</div>
                      <a href={coaching.website} className="LcoachingWebsite" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Visit Website 
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {card.coursesData && card.coursesData.length > 0 && (
              <div className="toggle-section">
                <button 
                  className={`toggle-button ${openSections[index] === 'courses' ? 'open' : ''}`}
                  onClick={() => toggleSection(index, "courses")}
                >
                  <span className="button-left">
                    <FaBookOpen style={{ marginRight: '12px' }} />
                    Top Online Course Platforms
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "courses" ? "open" : ""}`}>
                  {card.coursesData.map((course, i) => (
                    <div key={i} className="LcourseCard">
                      <div className="LcourseTitle"><FaBookOpen /> <span className="Llabel">{course.name}</span></div>
                      <div className="LcourseTagline"><FaCheckCircle /> <span className="Llabel">Exams :</span> {course.exams}</div>
                      <div className="LcourseFees"><FaRupeeSign /> <span className="Llabel">Fees :</span> {course.feeRange}</div>
                      <a href={course.website} className="LcourseWebsite" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Visit Website
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudyMaterial;