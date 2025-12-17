import './JobSearch.css';
import { Link, NavLink } from 'react-router-dom';
import React from "react";
import BenefitsSection from '../Components/BenefitsSection';
import JobSections from '../Components/JobSections';
import Faq from '../Components/Faq';

function JobSearch() {
  return (
    <section className='main-section'> 
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
              <Link to="/government-jobs" className="lbtn lbtn-dark">Start Exploring</Link>
              <a href="#features" className="lbtn lbtn-light">Why Choose Us?</a>
            </div>
          </div>
          <div className="luser-badge">
            <strong>STUDY SMART • GROW CONFIDENT • GET HIRED</strong>
          </div>
        </div>
      </section>

      <JobSections />
      <BenefitsSection />
      <Faq />

      <section className="cta">
        <div className="cta-container">
          <h2>Ready to find your dream job?</h2>
          <p>Join thousands of successful job seekers who found their perfect career match with CareerHub</p>
        </div>
      </section>
    </section>
  );
}

export default JobSearch;
