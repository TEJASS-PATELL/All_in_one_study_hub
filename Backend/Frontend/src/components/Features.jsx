import React from 'react';
import { FaUserAlt, FaMobileAlt, FaDollarSign, FaQuestionCircle, FaStar, FaCogs, FaLock, FaServer } from "react-icons/fa";
import "../style/Features.css";

const features = [
  { title: "Login & Signup", desc: "Secure authentication with OTP, email login, and forgot password.", icon: <FaUserAlt /> },
  { title: "Responsive Design", desc: "Fully responsive layout for mobile, tablet, and desktop.", icon: <FaMobileAlt /> },
  { title: "Pricing Plans", desc: "Free and Pro plan with premium features and payment integration.", icon: <FaDollarSign /> },
  { title: "FAQ Section", desc: "Accordion style FAQ to answer common questions.", icon: <FaQuestionCircle /> },
  { title: "Review Section", desc: "Showcase testimonials with star ratings for your project.", icon: <FaStar /> },
  { title: "Modular Components", desc: "Reusable and flexible components for quick project setup.", icon: <FaCogs /> },
    { title: "High Backend Security", desc: "Secure backend with proper authentication, encryption, and token validation.", icon: <FaLock /> },
  { title: "Server Optimization", desc: "Optimized server performance and fast response times for better UX.", icon: <FaServer /> }
];

export default function Features() {
  return (
    <section id='features'>
      {/* <h1>Features Section</h1> */}
      <div className='features-container'>
        {features.map((feature, index) => (
          <div key={index} className='feature-card'>
            <div className="feature-title">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
            </div>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
