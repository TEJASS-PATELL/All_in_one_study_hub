import './ITJobresources.css';
import { FaBook, FaCalculator, FaClipboardCheck, FaClock, FaCodeBranch, FaCogs, FaComments, FaDatabase, FaGlobe, FaUserTie } from 'react-icons/fa';
import { FaFileAlt, FaCode, FaWrench, FaLaptopCode, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import React from "react";

import { resumePlatforms,
  codingPracticePlatforms,
  aptitudePlatforms,
  mockInterviewPlatforms,
  openSourceContributionPlatforms,
  freelancingPlatforms,
} from "../../data/ITResource";

const ITJobresources = () => {
    return (
        <div className="jobresou-container">
            <h1 className="jobresources-heading">Best Tools & Resources to Get an IT Job</h1>
            <p className="jobresources-subheading">
                Explore the most effective platforms for resume building, interview prep, upskilling, and job search — all in one place.
            </p>

            <section className="resources-section">
                <h2 className="section-heading"><FaFileAlt /> Top Resume Platforms</h2>
                <div className="card-jobresources">
                    {resumePlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="note resume-note">
                    <strong>Note:</strong> Always keep your resume simple, clean, and ATS-friendly. Avoid fancy designs unless you're applying for a creative role.
                </p>
            </section>

            <section className="resources-section">
                <h2 className="section-heading"><FaCode /> Top Coding Practice Platforms</h2>
                <div className="card-jobresources">
                    {codingPracticePlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="note coding-note">
                    <strong>Note:</strong> Focus on <strong>quality over quantity</strong>. Solve fewer questions but understand the <strong>pattern</strong> deeply. Learn how to approach problems, not just memorize solutions.
                </p>
            </section>

            <section className="resources-section">
                <h2 className="section-heading"><FaCalculator /> Aptitude Practice Platforms</h2>
                <div className="card-jobresources">
                    {aptitudePlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="note aptitude-note">
                    <strong>Note:</strong> Don't just memorize formulas — understand the logic behind each topic like percentages, ratios, or time & work. Practice with a timer and focus on improving speed + accuracy.
                </p>
            </section>

            <section className="resources-section">
                <h2 className="section-heading"><FaUserTie /> Mock Interview Platforms</h2>
                <div className="card-jobresources">
                    {mockInterviewPlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="note mock-note">
                    <strong>Note:</strong> Mock interviews help reduce fear and improve communication. Don’t wait to feel “ready” — start practicing early to build real confidence.
                </p>
            </section>

            <section className="resources-section">
                <h2 className="section-heading"><FaCodeBranch /> Open Source Contribution Platforms</h2>
                <div className="card-jobresources">
                    {openSourceContributionPlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="note open-source">
                    <strong>Note:</strong> Contributing to open-source projects not only improves your coding skills, but also builds your portfolio and strengthens your collaborative experience.
                </p>
            </section>

            <section className="main-resources-section">
                <h2 className="section-heading"><MdWork /> Most Important Things</h2>
                <ul>
                    <li><FaLinkedin className="icon" /> Build a professional <strong>LinkedIn Profile</strong></li>
                    <li><FaGithub className="icon" /> Push projects to <strong>GitHub</strong> regularly</li>
                    <li><FaCode className="icon" /> Make 2-3 strong <strong>Projects</strong></li>
                    <li><FaFileAlt className="icon" /> Customize <strong>Resume for each job</strong></li>
                    <li><FaBook className="icon" /> Master <strong>Data Structures & Algorithms (DSA)</strong></li>
                    <li><FaWrench className="icon" /> Be <strong>strong in your core field</strong> like Web Dev, ML, etc.</li>
                    <li><FaCogs className="icon" /> Learn basic <strong>System Design</strong> concepts</li>
                    <li><FaDatabase className="icon" /> Understand <strong>Databases</strong> & SQL queries</li>
                    <li><FaGlobe className="icon" /> Learn about <strong>Networking basics</strong></li>
                    <li><FaComments className="icon" /> Practice <strong>Behavioral Interview Questions</strong></li>
                    <li><FaLaptopCode className="icon" /> Consistently solve <strong>LeetCode / GFG</strong> problems</li>
                    <li><FaClipboardCheck className="icon" /> Give <strong>Mock Interviews</strong> to improve confidence</li>
                    <li><FaClock className="icon" /> Make a consistent <strong>Preparation Routine</strong></li>
                </ul>

            </section>

            <section className="resources-section">
                <h2 className="section-heading"><FaLaptopCode /> Top Freelancing Platforms</h2>
                <div className="card-jobresources">
                    {freelancingPlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="note freelance-note">
                    <strong>Note:</strong> Start with small freelance projects to build confidence and portfolio. Even 1–2 successful client projects can make your resume stand out.
                </p>
            </section>
        </div>
    );
};

export default ITJobresources;
