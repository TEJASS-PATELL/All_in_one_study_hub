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
      description: "Access diverse opportunities across IT, private, and government sectors from multiple portals in one central place.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Premium Study Vault",
      description: "Unlock high-quality preparation guides and curated study materials tailored for competitive and government exams.",
      icon: <FaBookOpen />,
    },
    {
      title: "Adaptive Practice Suite",
      description: "Sharpen your skills with interactive mock tests, quizzes, and specialized tools from over 20+ leading platforms.",
      icon: <FaPencilAlt />,
    },
    {
      title: "Strategic Exam Insights",
      description: "Stay ahead with structured data and reliable updates on government, private, and IT exam trends and patterns.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Smart Daily Planner",
      description: "Optimize your routine with a personalized dashboard to set goals, manage tasks, and monitor preparation progress.",
      icon: <FaClipboardList />,
    },
    {
      title: "Integrated AI Toolkit",
      description: "Boost your productivity and learning speed with a curated suite of powerful AI utilities on a single page.",
      icon: <FaRobot />,
    },
    {
      title: "Professional Roadmap",
      description: "Design a step-by-step career path to achieve your professional milestones with clarity and confidence.",
      icon: <FaRoute />,
    },
    {
      title: "Community Spotlights",
      description: "Share your career milestones and exam strategies to inspire and empower fellow aspirants in the community.",
      icon: <FaUsers />,
    },
    {
      title: "Real-Time Fun Chat",
      description: "Engage in a real-time chat space for casual conversations, peer interaction, and stress-free breaks across different sections.",
      icon: <FaComments />,
    },
    {
      title: "Interview Prep",
      description: "Practice AI-driven mock interviews with role-based questions and instant feedback to build confidence.",
      icon: <FaUserTie />,
    },
  ];

  return (
    <section className="skills-section" id='features'>
      <div className="skills-container">
        <h2 className="skills-title">Explore Skill Categories</h2>
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