import React from 'react';
import './JobSearch.css';
import { Link, NavLink } from 'react-router-dom';
import LoginPage from './Login';

function JobSearch() {
  return (
    <>
      <section className="Lhero">
        <div className="ltop-container">
          <div className="lhero-content">
            <h1>
              Your All-In-One Career & <span className="litalic-style">Study Platform</span>
            </h1>

            <p>
              From Sarkari Naukri, Private sector to MNC Jobs — Find your dream job with our advanced search platform. Roadmaps to AI Tools, Interview Prep to Syllabus Guides — everything you need in one single platform.
            </p>

            <div className="lbutton-group">
              <Link to="/government-jobs" className="lbtn lbtn-dark">Explore Now</Link>
              <a href="#features" className="lbtn lbtn-light">Why Choose Us?</a>
            </div>
          </div>

          <div className="luser-badge">
            <strong>STUDY SMART • GET HIRED</strong>
          </div>


          <button
            className="scroll-down"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            aria-label="Scroll Down"
          >
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </section>

      <main className="main-content">
        <div className="main-container">
          <h2 className="Job-section-title">Explore Job Sectors</h2>
          <p className='p-title'>
            Discover top job sectors across Government and Private domains. From Engineering and Healthcare to Finance and IT, explore career paths, required skills, and opportunities tailored to your interests. Find out what suits you best and plan your journey with confidence.
          </p>

          <div className="G-job-cards">
            <div className="G-card">
              <div className="G-card-header govt">
                <i className="fas fa-landmark icon"></i>
              </div>
              <div className="G-card-body">
                <h3 className="G-card-title">Government Jobs</h3>
                <p className="G-card-text">Explore various government examinations and job opportunities with stable career growth and benefits.</p>
                <NavLink to="/government-jobs" className="G-btn btn-primary">
                  Explore <i className="fas fa-arrow-right btn-icon"></i>
                </NavLink>
              </div>
            </div>

            <div className="G-card">
              <div className="G-card-header private">
                <i className="fas fa-building icon"></i>
              </div>
              <div className="G-card-body">
                <h3 className="G-card-title">Private Jobs</h3>
                <p className="G-card-text">
                  Discover exciting opportunities in various private sector fields with competitive salaries and strong growth potential.
                </p>

                <NavLink to="/private-jobs" className="G-btn btn-primary">
                  Explore <i className="fas fa-arrow-right btn-icon"></i>
                </NavLink>
              </div>
            </div>

            <div className="G-card">
              <div className="G-card-header remote">
                <i className="fas fa-laptop-house icon"></i>
              </div>
              <div className="G-card-body">
                <h3 className="G-card-title">Remote Jobs</h3>
                <p className="G-card-text">
                  Work comfortably from anywhere with flexible schedules and global opportunities from leading top-tier companies.
                </p>

                <NavLink to="/it-jobs" className="G-btn btn-primary">
                  Explore <i className="fas fa-arrow-right btn-icon"></i>
                </NavLink>
              </div>
            </div>

            <div className="G-card">
              <div className="G-card-header foreign">
                <i className="fas fa-globe icon"></i>
              </div>
              <div className="G-card-body">
                <h3 className="G-card-title">Foreign Jobs</h3>
                <p className="G-card-text">
                  Apply confidently for international roles in tech, healthcare, finance, and more. Open doors to an exciting global career today.
                </p>

                <NavLink to="/foreign-jobs" className="G-btn btn-primary">
                  Explore <i className="fas fa-arrow-right btn-icon"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features" id='features'>
        <div className="feature-container">
          <h2 className="section-title">Why Choose CareerHub</h2>
          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="feature-title">Multiple Job Platforms</h3>
              <p className="feature-text">
                Explore exciting career opportunities from various platforms whether IT, private, or government sectors — all in one convenient place.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3 className="feature-title">Top Preparation Resources</h3>
              <p className="feature-text">
                Access the best preparation materials and resources for government and competitive exams to stay ahead.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <h3 className="feature-title">Practice Platforms</h3>
              <p className="feature-text">
                Boost your exam readiness with comprehensive mock tests, quizzes, and practice sections designed for government and competitive exams.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 className="feature-title">Category-Wise Exam Insights</h3>
              <p className="feature-text">
                Get detailed explanations of exams — government, private, and IT — organized neatly by category for easy navigation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="feature-title">AI Tools Access</h3>
              <p className="feature-text">
                Explore our AI Tools page to quickly access powerful AI utilities for learning, productivity, and creativity.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3 className="feature-title">Roadmap Builder</h3>
              <p className="feature-text">
                Design your personalized career roadmap with milestones and resources to achieve your professional goals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="feature-title">Share Your Journey</h3>
              <p className="feature-text">
                Inspire others by sharing your job or exam experiences, tips, and real-life insights with the CareerHub community.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hourglass-half"></i>
              </div>
              <h3 className="feature-title">Upcoming Features</h3>
              <p className="feature-text">
                Exciting tools like AI-powered interview simulation and live career chat are coming soon — stay tuned!
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="stars">
          {Array(5).fill(0).map((_, index) => (
            <svg
              key={index}
              className="star-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 
                1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 
                3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 
                00-1.175 0l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 
                1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 
                1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
        </div>
        <p className="testimonial-quote">
          “This platform helped me plan my career, crack interviews, and stay on track with my studies — all in one place.”
        </p>
        <div className="testimonial-user">

          <span className="user-name">Rohan Mehta – B.Tech Student</span>
        </div>
      </section>

      <div className="Gfaq-section" id='faq'>
        <h2 className="Gfaq-title">Frequently Asked Questions</h2>
        <div className="Gfaq-container">
          {[
            {
              question: "How do I create an account on the website?",
              answer: "Click on the 'Sign Up' button at the top right corner and follow the instructions. You’ll need a valid email address to register."
            },
            {
              question: "Can I get IT job preparation materials?",
              answer: "Yes, once logged in, you can access and save IT job preparation resources directly."
            },
            {
              question: "What if I forget my password?",
              answer: "No worries! Use the 'Forgot Password' option on the login page to reset it via your registered email."
            },
            {
              question: "Is there a mobile app available?",
              answer: "We are currently working on a dedicated mobile app. Meanwhile, our website is fully responsive and works smoothly on mobile devices."
            },
            {
              question: "Do you offer mock tests and previous year papers?",
              answer: "Our website provides various platforms for mock tests and previous year papers at one place, along with detailed analysis to help you practice effectively."
            },
            {
              question: "Can users share their job experiences or preparation journey?",
              answer: "Yes! Users can post their job experiences, preparation strategies, and success stories to inspire and guide other learners in the community."
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
        <div className="container">
          <h2>Ready to find your dream job?</h2>
          <p>Join thousands of successful job seekers who found their perfect career match with CareerHub</p>
        </div>
      </section>
    </>
  );
}

export default JobSearch;
