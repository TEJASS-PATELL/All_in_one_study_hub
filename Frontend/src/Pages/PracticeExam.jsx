import React from 'react';
import { useState } from 'react';
import './PracticeTests.css';
import { FaFileAlt, FaGlobe, FaInfoCircle, FaUsers } from 'react-icons/fa';

const PracticeExam = () => {
    const platforms = [
        {
            name: 'Testbook',
            exams: 'SSC, Banking, Railways, State PCS, Defence',
            users: '25M+ users',
            link: 'https://testbook.com',
            desc: 'Known for its structured test series, real exam interface, and daily practice quizzes for major government exams.'
        },
        {
            name: 'Adda247',
            exams: 'Banking, SSC, Teaching, Defence, Railways',
            users: '20M+ users',
            link: 'https://www.adda247.com',
            desc: 'Offers bilingual content, live classes, and a massive collection of topic-wise mocks and video solutions.'
        },
        {
            name: "BYJU's Exam Prep",
            exams: 'UPSC, GATE, SSC, Banking, Teaching',
            users: '15M+ users',
            link: 'https://byjusexamprep.com',
            desc: 'Features expert-led strategy sessions, full-length mocks, and structured revision plans for serious aspirants.'
        },
        {
            name: 'Oliveboard',
            exams: 'Banking, Insurance, SSC, MBA, CAT',
            users: '10M+ users',
            link: 'https://www.oliveboard.in/',
            desc: 'Best known for its high-level mocks, analytics dashboard, and all-India ranking system for self-assessment.'
        },
        {
            name: 'PracticeMock',
            exams: 'Banking, SSC, Insurance, Railways',
            users: '8M+ users',
            link: 'https://www.practicemock.com',
            desc: 'Specializes in speed-based mock tests with section-wise timing, in-depth analysis, and performance reports.'
        },
        {
            name: 'Unacademy',
            exams: 'UPSC, SSC, IIT-JEE, NEET, State Exams',
            users: '18M+ users',
            link: 'https://www.unacademy.com',
            desc: 'Delivers live classes, test series, and structured courses from India’s top educators with discussion forums.'
        },
        {
            name: 'Physics Wallah',
            exams: 'GATE, ESE, State AE/JE, SSC JE',
            users: '10M+ users',
            link: 'https://www.pw.live',
            desc: 'Comprehensive engineering test series with subject-wise quizzes, PYQs, live doubt sessions, and performance analytics tailored for GATE, ESE, and SSC JE aspirants.'
        },
        {
            name: 'EduTap',
            exams: 'RBI Grade B, NABARD, SEBI, EPFO',
            users: '500K+ niche users',
            link: 'https://www.edutap.co.in',
            desc: 'Focused platform for regulatory body exams with exam-relevant mocks, descriptive practice, and doubt-solving.'
        },
        {
            name: 'StudyIQ',
            exams: 'UPSC, State PSC, SSC, Banking, Railways',
            users: '8M+ users',
            link: 'https://www.studyiq.com',
            desc: 'Renowned for in-depth mock test series and free video lectures. Includes topic-wise tests and current affairs quizzes ideal for UPSC and State Exams.'
        },
        {
            name: 'Examपुर',
            exams: 'SSC, UPPSC, Defence, Railway, Teaching',
            users: '6M+ users',
            link: 'https://www.exampur.com',
            desc: 'Provides mock test series in multiple regional languages with a focus on State-level and Central competitive exams.'
        },
        {
            name: 'Embibe',
            exams: 'JEE, NEET, Railways, Banking, SSC',
            users: '5M+ users',
            link: 'https://www.embibe.com',
            desc: 'AI-powered platform that personalizes test attempts and gives feedback on weak areas. Includes exam simulations and predictive analytics.'
        },
        {
            name: 'EduTap',
            exams: 'RBI Grade B, NABARD, SEBI, UPSC EPFO',
            users: '1M+ users',
            link: 'https://edutap.in/',
            desc: 'Focused on regulatory body exams and finance sector mocks with expert-curated questions, video solutions, and detailed explanations.'
        },
        {
            name: 'PrepLadder',
            exams: 'NEET PG, INI-CET, FMGE, UPSC CMS',
            users: '1.2M+ users',
            link: 'https://prepladder.com',
            desc: 'India’s top choice for medical PG aspirants. Offers clinical pattern-based tests, NEET-PG mock exams, and subject-wise analytics.'
        },
        {
            name: 'Marrow',
            exams: 'NEET PG, FMGE, INI-CET',
            users: '2M+ users',
            link: 'https://marrow.com',
            desc: 'Known for its QBank, grand tests, and video lectures by top faculty. Offers in-depth test solutions with peer comparison.'
        },
        {
            name: 'DAMS',
            exams: 'NEET PG, INI-CET, UPSC CMS',
            users: '600K+ users',
            link: 'https://damsdelhi.com',
            desc: 'Trusted for its structured test series and live discussion classes. Ideal for NEET PG and government medical entrance exams.'
        },
        {
            name: 'eGurukul',
            exams: 'NEET PG, INI-CET, FMGE',
            users: '1M+ users',
            link: 'https://egurukulapp.com',
            desc: 'Offers conceptual videos, image-based tests, clinical case practice, and PYQs tailored for NEET PG and related exams.'
        },
        {
            name: 'EduGorilla',
            exams: 'NEET UG/PG, UPSC CMS, ESIC IMO, FMGE',
            users: '500K+ users',
            link: 'https://edugorilla.com',
            desc: 'Affordable and multilingual test series with adaptive testing and detailed explanations for a wide range of government medical exams.'
        },
        {
            name: 'LawSikho',
            exams: 'CLAT, Judiciary, State PSC Law',
            users: '200K+ users',
            link: 'https://www.lawsikho.com',
            desc: 'Offers live classes, mock tests, and personalized mentorship for law entrance and judicial exams.'
        }, {
            name: 'Career Launcher',
            exams: 'CLAT, Judiciary Exams',
            users: '5M+ users (overall)',
            link: 'https://www.careerlauncher.com/law',
            desc: 'Offers full-length mock tests, sectional tests, and strategies tailored for law competitive exams.'
        },
        {
            name: 'CLAT Possible',
            exams: 'CLAT UG/PG',
            users: '150K+ users',
            link: 'https://www.clatpossible.com',
            desc: 'Specialized platform with mock tests, video lectures, and comprehensive study material for CLAT aspirants.'
        },
        {
            name: 'CLATapult',
            exams: 'CLAT, AILET',
            users: '20K+ users',
            link: 'https://www.clatapult.com',
            desc: 'Online test series and preparation platform focused exclusively on CLAT with real-time feedback.'
        },
        {
            name: 'Pariksha',
            exams: 'State PSC, SSC, Teaching, Police',
            users: '1M+ regional users',
            link: 'https://www.pariksha.co',
            desc: 'India’s leading regional language mock test platform focused on state-level exams with affordable pricing and live doubt sessions.'
        },
        {
            name: 'Wifistudy (part of Unacademy)',
            exams: 'SSC, Railway, Banking, State Exams',
            users: '10M+ users',
            link: 'https://unacademy.com/@wifistudy',
            desc: 'Started as a YouTube channel, now a top test prep brand under Unacademy with regular mocks and daily challenge quizzes.'
        },
        {
            name: 'Testzone by Smartkeeda',
            exams: 'Banking, SSC, Insurance, RBI, SEBI',
            users: '1M+ focused users',
            link: 'https://testzone.smartkeeda.com/',
            desc: 'Known for its advanced performance analytics, topper benchmarking, and accuracy-speed mapping. Ideal for serious Banking and SSC aspirants.'
        },
        {
            name: 'TalentSprint',
            exams: 'Banking, SSC, GATE, RRB',
            users: '800K+ users',
            link: 'https://www.talentsprint.com',
            desc: 'Technology-driven mock platform with advanced analytics and AI-powered feedback for government job aspirants.'
        },
        {
            name: 'KopyKitab',
            exams: 'UPSC, SSC, Railways, GATE, Medical',
            users: '2M+ users',
            link: 'https://www.kopykitab.com',
            desc: 'Primarily an eBook provider, also offers mock test series with adaptive learning paths and video lectures for competitive exams.'
        }









    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlatforms = platforms.filter(platform =>
        platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.exams.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="practice-container">
            {/* Hero */}
            <section className="practice-hero">
                <h1 className="hero-title">Top Platforms for Government Exam Mocks</h1>
                <p className="hero-subtitle">
                    Practice on India’s most trusted mock test platforms — Handpicked for UPSC, SSC, Banking, Railways, and State PSC aspirants.
                </p>
                <img src='internet.png' className='internet'></img>
            </section>

            {/* Search Input */}
            <section className="search-section">
                <input
                    type="text"
                    placeholder="Search platforms or exams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </section>

            {/* Platform Cards */}
            <section className="test-grid">
                {filteredPlatforms.length > 0 ? (
                    filteredPlatforms.map((p, idx) => (
                        <div className="test-card" key={idx}>
                            <h3 className="test-title"><FaFileAlt style={{ marginRight: '8px' }} /> {p.name}</h3>
                            <p className="test-infoo">{p.exams}</p>
                            <p className="test-attempts"> <FaUsers style={{ marginRight: '7px' }} />{p.users}</p>
                            <p className="test-info">{p.desc}</p>
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="take-test-btn"
                            >
                                <FaGlobe style={{ marginRight: '6px' }} /> Visit Platform
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No platforms match your search.</p>
                )}
            </section>

            {/* Stats */}
            <section className="stats-section">
                <div className="stat-card">
                    <h2 className="stat-number">1,20,000+</h2>
                    <p className="stat-label">Topic-Wise Mock Tests</p>
                    <p className="stat-desc">Covering SSC, Banking, UPSC, Medical, and more with real exam patterns.</p>
                </div>
                <div className="stat-card">
                    <h2 className="stat-number">93%</h2>
                    <p className="stat-label">Avg. Score Improvement</p>
                    <p className="stat-desc">Based on feedback from over 50,000+ enrolled students.</p>
                </div>
                <div className="stat-card">
                    <h2 className="stat-number">4.8/5</h2>
                    <p className="stat-label">Learner Satisfaction Rating</p>
                    <p className="stat-desc">Trusted by millions across India for test preparation.</p>
                </div>
            </section>
        </div>
    );
};

export default PracticeExam;
