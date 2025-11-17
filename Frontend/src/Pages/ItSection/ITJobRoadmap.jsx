import './roadmap.css';
import React from "react";


const roadmapData = [
  {
    phase: 'Phase 1: Foundation & Exploration',
    description: 'This initial phase is about understanding the vast landscape of IT and discovering where your interests and aptitudes lie.',
    steps: [
      {
        title: 'Step 1: Explore the IT Fields',
        description: 'The IT industry is not a monolith. It encompasses a wide range of specializations. Research fields like Web Development (Front-end, Back-end, Full-stack), Data Science & Analytics, Cybersecurity, Cloud Computing (AWS, Azure, Google Cloud), DevOps, and UI/UX Design.',
        action: 'Action: Read articles, watch introductory videos, and explore "day in the life" content for each role.'
      },
      {
        title: 'Step 2: Identify Your Path',
        description: 'Based on your research, identify a field that genuinely excites you. Consider your problem-solving style, creative inclinations, and long-term career goals.',
        action: 'Action: Choose one or two primary areas of interest to focus your initial learning.'
      },
      {
        title: 'Step 3: Master the Fundamentals',
        description: 'Every IT professional needs a solid understanding of core concepts.',
        actionItems: [
          'Learn a versatile programming language: Python is an excellent starting point due to its readability and wide range of applications.',
          'Understand basic data structures and algorithms: These are the building blocks of efficient software.',
          'Grasp the basics of networking: Learn about IP addresses, DNS, and how the internet works.',
          'Familiarize yourself with the command line: A fundamental tool for most IT roles.'
        ]
      }
    ]
  },
  {
    phase: 'Phase 2: Skill Acquisition & Deep Dive',
    description: "With a chosen path, it's time to build a strong technical skillset. This phase is about focused learning and hands-on practice.",
    steps: [
      {
        title: 'Step 4: Structured Learning',
        description: 'Follow a structured curriculum to learn the technologies relevant to your chosen field.',
        action: 'Action: Enroll in online courses (Coursera, Udemy, edX), attend a coding bootcamp, or follow a reputable online roadmap like those found on roadmap.sh.'
      },
      {
        title: 'Step 5: Build Foundational Projects',
        description: 'Theoretical knowledge is important, but practical application is crucial. Start building small projects to solidify your understanding.',
        actionItems: [
          'Web Developer: Build a personal portfolio website, a simple to-do list app, or a weather application.',
          'Data Scientist: Analyze a public dataset and visualize your findings.',
          'Cybersecurity Analyst: Set up a home lab to practice network analysis.'
        ]
      },
      {
        title: 'Step 6: Gain In-Demand Skills (2025 Focus)',
        description: 'Stay ahead of the curve by learning skills that are highly sought after by employers.',
        actionItems: [
          'Artificial Intelligence and Machine Learning: Basic understanding of AI concepts is becoming increasingly valuable across many IT roles.',
          'Cloud Computing: Familiarity with a major cloud platform (AWS, Azure, or GCP) is essential.',
          'Cybersecurity Fundamentals: Even for non-security roles, a basic understanding of security best practices is a significant plus.'
        ]
      }
    ]
  },
  {
    phase: 'Phase 3: Portfolio & Personal Branding',
    description: 'This phase is about showcasing your skills and creating a professional identity that will attract potential employers.',
    steps: [
      {
        title: 'Step 7: Develop a Capstone Project',
        description: 'Build a more complex, in-depth project that demonstrates a wider range of your skills.',
        action: 'Action: Create a full-stack web application with a database, develop a predictive model with a user-friendly interface, or conduct a thorough security audit of a sample application.'
      },
      {
        title: 'Step 8: Curate Your Online Presence',
        description: 'Your online presence is your modern-day resume.',
        actionItems: [
          'GitHub: Consistently push your code to GitHub. A well-maintained profile is a powerful testament to your coding abilities.',
          'LinkedIn: Create a professional LinkedIn profile that highlights your skills, projects, and learning journey.'
        ]
      },
      {
        title: 'Step 9: Craft a Compelling Resume',
        description: 'Your resume is often the first impression you make on a recruiter.',
        action: 'Action: Tailor your resume for each job application, highlighting the skills and projects most relevant to the role. Use a clean, professional template.'
      }
    ]
  },
  {
    phase: 'Phase 4: Core & Universal IT Skills',
    description: 'These are fundamental skills that help in any IT job, regardless of the specific role you pursue.',
    steps: [
      {
        title: 'Step 10: Learn Git & GitHub',
        description: 'Version control is essential for collaborating and tracking code changes.',
        actionItems: [
          'Understand how to clone, commit, push, pull, and create branches.',
          'Work on collaborative projects and manage pull requests.'
        ]
      },
      {
        title: 'Step 11: Understand Core Computer Science Subjects',
        description: 'Basic knowledge of core subjects strengthens your understanding and boosts confidence during interviews.',
        actionItems: [
          'Operating Systems: Learn about process management, memory management, and file systems.',
          'Computer Networks: Understand protocols, OSI/TCP-IP models, and routing basics.',
          'Database Management Systems: Learn SQL, normalization, and transactions.'
        ]
      },
      {
        title: 'Step 12: Develop Soft Skills & English Communication',
        description: 'Communication is key to working in a team and handling clients or stakeholders.',
        actionItems: [
          'Practice writing clean and understandable documentation.',
          'Work on your spoken English and presentation skills.',
          'Participate in group discussions and mock interviews.'
        ]
      }
    ]
  },
  {
    phase: 'Phase 5: Networking & Job Application',
    description: "With a strong portfolio in hand, it's time to actively seek opportunities and connect with the industry.",
    steps: [
      {
        title: 'Step 13: Engage with the Tech Community',
        description: 'Networking is a powerful tool for discovering unlisted job opportunities and gaining valuable insights.',
        actionItems: [
          'Attend local tech meetups and virtual conferences.',
          "Participate in online forums and communities (e.g., Reddit's r/cscareerquestions, Stack Overflow).",
          'Connect with professionals in your field on LinkedIn.'
        ]
      },
      {
        title: 'Step 14: Strategic Job Applications',
        description: "Don't just spray and pray. Be strategic in your job search.",
        actionItems: [
          'Target companies that align with your career goals and values.',
          'Write personalized cover letters for each application.',
          'Keep track of your applications in a spreadsheet.'
        ]
      }
    ]
  },
  {
    phase: 'Phase 6: Interview & Offer',
    description: 'This is the final hurdle. Preparation is key to converting an interview into a job offer.',
    steps: [
      {
        title: 'Step 15: Prepare for Technical Interviews',
        description: 'Technical interviews test your problem-solving abilities and technical knowledge.',
        actionItems: [
          'Practice coding challenges on platforms like LeetCode and HackerRank.',
          'Review common data structures and algorithms questions.',
          'Be prepared to discuss your projects in detail.'
        ]
      },
      {
        title: 'Step 16: Hone Your Behavioral Interview Skills',
        description: "Employers want to know if you're a good fit for their team culture.",
        action: 'Action: Prepare to answer questions about your strengths, weaknesses, teamwork experience, and how you handle challenges. Use the STAR method (Situation, Task, Action, Result) to structure your answers.'
      },
      {
        title: 'Step 17: The Offer Stage',
        description: "Congratulations! You've received an offer.",
        action: "Action: Carefully review the offer, and don't be afraid to negotiate. Once you're satisfied, accept the offer and prepare to start your exciting new career in IT."
      }
    ]
  }
];

const ItRoadmapPage = () => {
  return (
    <div className="it-roadmap-container">
      <h1>Embark on Your IT Journey: A Step-by-Step Roadmap</h1>
      <p style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 40px auto', fontSize: '1.35rem' }}>
        Navigating an IT career can feel overwhelming. This clear, minimalist roadmap helps you build a strong foundation and confidently move toward your first role in tech.
      </p>
      {roadmapData.map((phase, index) => (
        <div key={index} className="it-phase">
          <h2 className="it-phase-title">{phase.phase}</h2>
          <p className="it-phase-description">{phase.description}</p>
          <hr className="it-divider" />
          {phase.steps.map((step, stepIndex) => (
            <div key={stepIndex} className="it-step">
              <h3 className="it-step-title">{step.title}</h3>
              <p className="it-step-description">{step.description}</p>
              {step.action && <p className="it-step-action">{step.action}</p>}
              {step.actionItems && (
                <div className="it-step-actions">
                  <strong>Action Items:</strong>
                  <ul className="it-action-list">
                    {step.actionItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="it-action-item">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItRoadmapPage;