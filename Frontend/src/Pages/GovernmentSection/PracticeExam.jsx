import React from 'react';
import { useState } from 'react';
import './PracticeTests.css';
import {platforms} from "../../data/GovernmentResources";
import { FaFileAlt, FaGlobe, FaUsers } from 'react-icons/fa';

const PracticeExam = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlatforms = platforms.filter(platform =>
        platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.exams.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="practice-container">
            <section className="practice-hero">
                <h1 className="hero-title">Top Platforms for Government Exam Mocks</h1>
                <p className="hero-subtitle">
                    Practice on India’s most trusted mock test platforms — Handpicked for UPSC, SSC, Banking, Railways, and State PSC aspirants.
                </p>
            </section>

            <section className="search-section">
                <input
                    type="text"
                    placeholder="Search platforms or exams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input" />
            </section>

            <section className="test-grid">
                {filteredPlatforms.length > 0 ? (
                    filteredPlatforms.map((p, idx) => (
                        <div className="test-card" key={idx}>
                            <h3 className="test-title"><FaFileAlt style={{ marginRight: '8px' }} /> {p.name}</h3>
                            <p className="test-infoo">{p.exams}</p>
                            <p className="test-attempts"> <FaUsers style={{ marginRight: '7px' }} />{p.users}</p>
                            <p className="test-info">{p.desc}</p>
                            <a href={p.link} target="_blank" rel="noopener noreferrer" className="take-test-btn">
                                <FaGlobe style={{ marginRight: '6px' }} /> Visit Platform
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No platforms match your search.</p>
                )}
            </section>
        </div>
    );
};

export default PracticeExam;
