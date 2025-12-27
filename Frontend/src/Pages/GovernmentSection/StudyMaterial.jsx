import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./StudyMaterial.css";
import {
  FaYoutube,
  FaLightbulb,
  FaGlobe,
  FaBookOpen,
  FaSmile,
  FaFlagCheckered,
  FaBriefcase,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaExternalLinkAlt,
  FaCheckCircle,
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
        <div
          key={index}
          className="image-cardd-container"
        >
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

            {card.tips && card.tips.length > 0 && (
              <div className="toggle-section">
                <button className="toggle-button" onClick={() => toggleSection(index, "tips")}>
                  <span className="button-left">
                    <FaLightbulb style={{ marginRight: '12px' }} />
                    Top Tips
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "tips" ? "open" : ""}`}>
                  <ul className="tips-list">
                    {card.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.bestWebsitesForPreparation && card.bestWebsitesForPreparation.length > 0 && (
              <div className="toggle-section">
                <button className="toggle-button" onClick={() => toggleSection(index, "websites")}>
                  <span className="button-left">
                    <FaGlobe style={{ marginRight: '12px' }} />
                    Best Preparation Websites
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "websites" ? "open" : ""}`}>
                  <ul className="websites-list">
                    {card.bestWebsitesForPreparation.map((site, i) => (
                      <li key={i} className="website-item">
                        <h4 className="website-name">
                          {site.name} –{" "}
                          <a
                            href={site.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="website-link"
                          >
                            Visit Site <FaExternalLinkAlt size={10} />
                          </a>
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.keyAreasInSyllabus && card.keyAreasInSyllabus.length > 0 && (
              <div className="toggle-section">
                <button className="toggle-button" onClick={() => toggleSection(index, "syllabus")}>
                 <span className="button-left">
                    <FaBookOpen style={{ marginRight: '12px' }} />
                    Key Areas in Syllabus
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "syllabus" ? "open" : ""}`}>
                  <ul className="syllabus-list">
                    {card.keyAreasInSyllabus.map((area, i) => (
                      <li className="li" key={i}>{area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.stressBusters && card.stressBusters.length > 0 && (
              <div className="toggle-section">
                <button className="toggle-button" onClick={() => toggleSection(index, "stress")}>
                  <span className="button-left">
                    <FaSmile style={{ marginRight: '12px' }} />
                    Stress Buster Tips
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "stress" ? "open" : ""}`}>
                  <ul className="stress-list">
                    {card.stressBusters.map((tip, i) => (
                      <li className="li" key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.studySprints && card.studySprints.length > 0 && (
              <div className="toggle-section">
                <button className="toggle-button" onClick={() => toggleSection(index, "sprint")}>
                  <span className="button-left">
                    <FaFlagCheckered style={{ marginRight: '12px' }} />
                    Study Sprint Challenges
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "sprint" ? "open" : ""}`}>
                  <ul className="study-list">
                    {card.studySprints.map((sprint, i) => (
                      <li className="li" key={i}>
                        <strong>{sprint.name}:</strong> {sprint.goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {card.ExamOpportunities && card.ExamOpportunities.length > 0 && (
              <div className="toggle-section">
                <button className="toggle-button" onClick={() => toggleSection(index, "opportunities")}>
                   <span className="button-left">
                    <FaBriefcase style={{ marginRight: '12px' }} />
                    Top Opportunities
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "opportunities" ? "open" : ""}`}>
                  <ul className="opportunityList">
                    {card.ExamOpportunities.map((item, i) => (
                      <li key={i} className="LopportunityItem">
                        <strong><FaCheckCircle style={{ marginRight: "6px" }} /> {item.exam}</strong>
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
                <button className="toggle-button" onClick={() => toggleSection(index, "coaching")}>
                  <span className="button-left">
                    <FaChalkboardTeacher style={{ marginRight: '12px' }} />
                    Top Coaching Institutes
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "coaching" ? "open" : ""}`}>
                  {card.coachingData.map((coaching) => (
                    <div key={index} className="LcoachingCard">
                      <div className="LcoachingTitle"><FaGraduationCap /> {coaching.name}</div>
                      <div className="LcoachingTagline">"{coaching.tagline}"</div>
                      <div className="LcoachingLocation"><FaMapMarkerAlt /> {coaching.location}</div>
                      <div className="LcoachingCourses">
                        <span className="LcoachingLabel"><FaBookOpen /> Courses :</span> {coaching.courses.join(', ')}
                      </div>
                      <div className="LcoachingFees"><FaRupeeSign /> Fees: {coaching.fees}</div>
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
                <button className="toggle-button" onClick={() => toggleSection(index, "courses")}>
                  <span className="button-left">
                    <FaBookOpen style={{ marginRight: '12px' }} />
                    Top Online Courses
                  </span>
                </button>
                <div className={`collapsible-content ${openSections[index] === "courses" ? "open" : ""}`}>
                  {card.coursesData.map((course, i) => (
                    <div key={i} className="LcourseCard">
                      <div className="LcourseTitle"><FaBookOpen /> <span className="Llabel">{course.name}</span></div>
                      <div className="LcourseTagline"><FaCheckCircle /> <span className="Llabel">Exams :</span> {course.exams}</div>
                      <div className="LcourseLocation"><FaLightbulb /> <span className="Llabel">Features :</span> {course.features}</div>
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
