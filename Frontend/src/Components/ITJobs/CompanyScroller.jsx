import React from 'react';
import './CompanyScroller.css';

const CompanyScroller = () => {
  const companies = [
    'paypal.png',
    'microsoft.png',
    'google.png',
    'amazon.png',
    'ibm.png',
    'uber.png',
    'meta.png',
    'netflix (1).png',
    'adobe.png',
    'oracle.png',
    'intel.png',
    'salesforce.png',
    'paypal.png',
    'zomato.png',
    'swiggy.png',
    'phonepe.png',
    'nvidia.png',
    'flipkart.png',
    'atlassian.png',

  ];

  return (
    <div className="logo-container">
      <div className="heading-section">
        <h1 className="main-heading">Global Tech Industry Leaders</h1>
        <p className="sub-heading">
          Kickstart your journey to top <span className="highlight">IT jobs</span> — the best resources are waiting for you.
        </p>
        <p>Trusted by industry giants that shape the future of technology</p>
      </div>
      <div className="infinite-slider-wrapper">
        <div className="infinite-slider reverse">
          {[...companies, ...companies].map((logo, index) => (
            <img loading='lazy'
              key={index}
              src={`/companies/${logo}`}
              alt={`Company ${index}`}
              className="slider-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyScroller;
