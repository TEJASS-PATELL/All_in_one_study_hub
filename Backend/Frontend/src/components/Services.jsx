import React from 'react'
import "../style/Services.css";
import { Link, useNavigate } from 'react-router';

export default function Services() {
    const navigate = useNavigate();
    const handleBuy = () => {
      alert("Payment Successful! Redirecting to Premium Page...");
      navigate("/premium-feature");
    }
  return (
    <section id="pricing-section">
      {/* <h1>Service's Section</h1> */}
      <div className="cards-wrapper">
      <div className="pricing-cards">
        <div className="pricing-card free-card">
          <h3>Free Plan</h3>
          <p>Get access to basic features and start exploring.</p>
          <ul>
            <li>✔ Basic Dashboard</li>
            <li>✔ Email Login</li>
            <li>❌ No Premium Features</li>
          </ul>
          <Link to="/free-feature" className="plan-btn">
            Get Started
          </Link>
        </div>

        <div className="pricing-card paid-card">
          <h3>Pro Plan- $1</h3>
          <p>Unlock all premium tools and exclusive access.</p>
          <ul>
            <li>✔ All Free Features</li>
            <li>✔ Priority Support</li>
            <li>✔ Premium Dashboard</li>
          </ul>
          <button className="plan-btn paid" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}
