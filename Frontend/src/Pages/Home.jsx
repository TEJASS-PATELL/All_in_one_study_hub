import './JobSearch.css';
import { Link, NavLink } from 'react-router-dom';
import React from "react";
import BenefitsSection from '../Components/BenefitsSection';
import JobSections from '../Components/JobSections';

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

            <img className="home-img" src="right.png" alt="Home" />
          <div className="luser-badge">
            <strong>STUDY SMART • GROW CONFIDENT • GET HIRED</strong>
          </div>
        </div>
      </section>

      <JobSections />
      <BenefitsSection />
      
      <div className="Gfaq-section" id='faq'>
        <h2 className="Gfaq-title">Frequently Asked Questions</h2>
        <div className="Gfaq-container">
          {[
            {
              question: "What if I forget my password?",
              answer: "No worries! Use the 'Forgot Password' option on the login page to reset it via your registered email."
            },
            {
              question: "Is there a mobile app available?",
              answer: "We are currently working on a dedicated mobile app. Meanwhile, our website is fully responsive and works smoothly on mobile devices."
            },
            {
              question: "Can I get IT job preparation materials?",
              answer: "Yes, once logged in, you can access and save IT job preparation resources directly."
            },
            {
              question: "How do I create an account on the website?",
              answer: "Click on the 'Sign Up' button at the top right corner and follow the instructions. You’ll need a valid email address to register."
            },
            {
              question: "How can I contact support if I face any issues?",
              answer: "You can reach out through our contact form, email us at support@example.com, or use the live chat available on the website."
            },
            {
              question: "Can I generate a personalized study roadmap?",
              answer:
                "Yes! Our platform allows you to generate AI-powered personalized study roadmaps based on your goals, timeline, and preferred learning style.",
            },

            {
              question: "Do you offer mock tests and previous year papers?",
              answer: "Our website provides various platforms for mock tests and previous year papers at one place, along with detailed analysis to help you practice effectively."
            },
            {
              question: "Can users share their job experiences or preparation journey?",
              answer: "Yes! Users can post their job experiences, preparation strategies, and success stories to inspire and guide other learners in the community."
            },
          ].map((item, index) => (
            <div className="Gfaq-item" key={index}>
              <input type="checkbox" id={`faq-${index}`} className="Gfaq-toggle" />
              <label htmlFor={`faq-${index}`} className="Gfaq-question">
                {item.question}
              </label>
              <div className="Gfaq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>

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
