import React from 'react'
import './HomeTop.css'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen, FaGraduationCap, FaLaptopCode, FaLightbulb, FaPlayCircle, FaRobot, FaStar } from 'react-icons/fa';

export default function HomeTop() {
    return (
        <section className="Lhero">
            <div className="ltop-container">
                <div className="lhero-content">
                    <h1>
                        Empower Your <span className="litalic-style">Career Journey</span>, Academic Growth
                    </h1>
                    <p>
                        Discover everything you need to build your future — from <strong>Government Exams</strong> and <strong>Private Job Openings</strong> to <strong>AI-Powered Tools</strong>, <strong>Interview Preparation</strong>, and <strong>Career Roadmaps</strong>.
                        Learn, plan, and apply — all in one platform designed for <em>students and professionals alike</em>.
                    </p>

                    <div className="lbutton-group">
                        <Link to="/government-jobs" className="lbtn lbtn-dark">
                            Start Exploring <FaArrowRight className="btn-icon" />
                        </Link>
                        <a href="#features" className="lbtn lbtn-light">
                             Why Choose Us?
                        </a>
                    </div>

                    <div className="lsocial-proof">
                        <div className="lavatar-group">
                            <div className="tech-icon-circle" style={{ color: '#4b5563' }}><FaLaptopCode /></div>
                            <div className="tech-icon-circle" style={{ color: '#4b5563' }}><FaBookOpen /></div>
                            <div className="tech-icon-circle" style={{ color: '#4b5563' }}><FaRobot /></div>
                            <span className="lavatar-count">10+</span>
                        </div>
                        <div className="lproof-text">
                            <div className="lstars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p>Premium <strong>Features Integrated</strong></p>
                        </div>
                    </div>
                </div>

                <div className="luser-badge">
                    <FaGraduationCap className="badge-top-cap" />
                    <strong>STUDY SMART • GROW CONFIDENT • GET HIRED</strong>
                </div>
            </div>
        </section>
    )
}
