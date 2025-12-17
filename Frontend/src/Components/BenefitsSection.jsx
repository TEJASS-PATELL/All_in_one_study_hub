import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const features = [
    {
      title: 'Multiple Job Platforms',
      desc:
        'Explore opportunities from various job portals including IT, private and government sectors all in one place.',
      icon: <i className="fas fa-laptop-code"></i>,
    },
    {
      title: 'Top Preparation Resources',
      desc:
        'Find high-quality study materials and preparation guides for competitive and government exams.',
      icon: <i className="fas fa-book-open"></i>,
    },
    {
      title: 'Practice Platforms',
      desc:
        'Boost your readiness with mock tests, quizzes, and topic-wise practice tools with 20+ platforms.',
      icon: <i className="fas fa-pencil-alt"></i>,
    },
    {
      title: 'Category-Wise Exam Insights',
      desc:
  'Get structured exam information across government, private, and IT categories clearly and reliably.',

      icon: <i className="fas fa-layer-group"></i>,
    },
    {
      title: 'Personalized Daily Planner',
      desc:
        'Use the dashboard to create daily study tasks, manage goals, and track your overall preparation progress efficiently.',
      icon: <i className="fas fa-clipboard-list"></i>,
    },
    {
      title: 'AI Tools Access',
      desc:
        'Access powerful AI utilities for productivity, learning, and creativity on one page.',
      icon: <i className="fas fa-robot"></i>,
    },
    {
      title: 'Roadmap Builder',
     desc: 'Create a personalized roadmap to achieve your professional goals step-by-step efficiently and confidently.',
      icon: <i className="fas fa-route"></i>,
    },
    {
      title: 'Share Your Journey',
      desc:'Inspire others by sharing your career stories, exam experiences, and tips confidently and authentically.',
      icon: <i className="fas fa-users"></i>,
    },
    {
      title: 'Upcoming Features',
      desc:'Exciting updates like AI-powered virtual interview simulator and live chat  coming soon worldwide.',
      icon: <i className="fas fa-hourglass-half"></i>,
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">Why You'll Love CareerHub</h2>
        <p className="features-subtitle">
          CareerHub simplifies your job search and exam preparation by putting opportunities,
          resources, and tools together in one place.
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <div>
                <h3 className="feature-heading">{item.title}</h3>
                <p className="feature-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;
