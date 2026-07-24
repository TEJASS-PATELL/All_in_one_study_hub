import React from 'react';
import './BenefitsSection.css';
import {
  FaLaptopCode,
  FaBookOpen,
  FaPencilAlt,
  FaLayerGroup,
  FaClipboardList,
  FaRobot,
  FaRoute,
  FaUsers,
  FaHourglassHalf,
  FaCommentDots,
  FaComments,
  FaUserTie,
} from "react-icons/fa";

const BenefitsSection = () => {
  const features = [
    {
      title: "Unified Job Hub",
      description: "Access diverse opportunities across IT, private, and government sectors from multiple portals in one central place to save your valuable time.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Prep & Practice",
      description: "Unlock high-quality prep guides and sharpen your skills with interactive mock tests, quizzes, and specialized tools from 20+ platforms.",
      icon: <FaBookOpen />,
    },
    {
      title: "Strategic Exam Insights",
      description: "Stay ahead with structured data and reliable updates on government, private, and IT exam trends and patterns to maximize your success.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Smart Daily Planner",
      description: "Optimize your routine with a personalized dashboard to set goals, manage tasks, and monitor preparation progress.",
      icon: <FaClipboardList />,
    },
    {
      title: "Integrated AI Toolkit",
      description: "Boost your productivity and learning speed with a curated suite of powerful AI utilities all on a single page to maximize your daily efficiency.",
      icon: <FaRobot />,
    },
    {
      title: "Professional Roadmap",
      description: "Design a step-by-step career path to achieve your professional milestones with clarity and confidence to secure your dream job and future growth.",
      icon: <FaRoute />,
    },
    {
      title: "Social Connect",
      description: "Share career milestones to inspire fellow aspirants, and engage in a real-time chat space for peer interaction and stress-free breaks.",
      icon: <FaUsers />,
    },
    {
      title: "AI Interview Prep",
      description: "Practice AI-driven mock interviews with role-based questions and receive instant feedback to build confidence and ace real interviews with ease.",
      icon: <FaUserTie />,
    }
  ];

  return (
    <section className="skills-section" id='features'>
      <div className="skills-container">
        <span className="skills-eyebrow">Schedule of Benefits</span>
        <h2 className="skills-title">Explore Skill Categories</h2>
        <div className="title-line"></div>
        <p className="skills-subtitle">
          Discover thousands of skills across diverse categories, taught by passionate community members from around the world.
        </p>

        <div className="features-grid-custom">
          {features.map((feature, index) => (
            <div key={index} className={`feature-item ${index === 0 || index === 4 || index === 8 ? 'lg-border-l' : ''} ${index < 4 ? 'lg-border-b' : ''}`}>
              <div className={`hover-gradient ${index < 4 ? 'grad-top' : 'grad-bottom'}`} />

              <div className="feature-content">
                <div className="feature-icon-box">{feature.icon}</div>
                <div className="feature-title-box">
                  <div className="indicator-bar" />
                  <span className="feature-title-text">{feature.title}</span>
                </div>
                <p className="feature-description-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;