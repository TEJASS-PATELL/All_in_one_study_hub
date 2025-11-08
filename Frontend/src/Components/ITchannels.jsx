import React, { useState } from "react";
import './ITchannels.css';
import data from '../data/ITResourceData';

export default function ITchannels() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  return (
    <div className="ITs-category-section">
      <div className="ITs-section-title">
        <h1>Top IT Job Preparation Resources</h1>
        <p>Choose a category to explore the best learning channels</p>
      </div>

      <div className="ITs-category-filter">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={`ITs-filter-button ${selectedCategory === category ? "active" : ""
              } ${category === "Data Structures & Algorithms" ? "dsa" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`ITs-resources-wrapper ${selectedCategory ? "open" : ""}`}>
        <div className="ITs-resources-grid">
          {data[selectedCategory]?.resources?.map((item, index) => (
            <div key={index} className="ITs-resource-card">
              <div className="ITs-resource-title">{item.title}</div>
              <div className="ITs-resource-description">{item.description}</div>
              <a
                className="ITs-resource-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Channel →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="ITdocs-header">
        <h1 className="ITdocs-heading">Best Platforms to Learn Through Docs</h1>
        <p className="ITdocs-description">
          The best way to grow in tech is by learning on your own — these platforms make self-learning simple, accessible, and effective.
        </p>
      </div>

      <div className="ITs-fixed-resources-grid">
        <div className="ITs-resource-card">
          <div className="ITs-resource-title">GeeksforGeeks</div>
          <div className="ITs-resource-description">
            Extensive tutorials, examples & guides for DSA, OS, DBMS, Web Dev, System Design, AI/ML, and more.
          </div>
          <a href="https://www.geeksforgeeks.org/" className="ITs-resource-link" target="_blank" rel="noopener noreferrer">
            Visit Docs →
          </a>
        </div>

        <div className="ITs-resource-card">
          <div className="ITs-resource-title">W3Schools</div>
          <div className="ITs-resource-description">
            Self-paced interactive tutorials for Web Dev basics like HTML, CSS, JavaScript, SQL, and more.
          </div>
          <a href="https://www.w3schools.com/" className="ITs-resource-link" target="_blank" rel="noopener noreferrer">
            Visit Docs →
          </a>
        </div>

        <div className="ITs-resource-card">
          <div className="ITs-resource-title">freeCodeCamp</div>
          <div className="ITs-resource-description">
            Hands-on coding tutorials, certifications, and projects for Web Dev, Data Science, AI/ML, and DSA.
          </div>
          <a href="https://www.freecodecamp.org/learn/" className="ITs-resource-link" target="_blank" rel="noopener noreferrer">
            Visit Docs →
          </a>
        </div>

        <div className="ITs-resource-card">
          <div className="ITs-resource-title">CodeWithHarry</div>
          <div className="ITs-resource-description">
            Hindi + English tutorials (video + docs) on Web Dev, Python, DSA, Java, DBMS, and more — completely free.
          </div>
          <a href="https://www.codewithharry.com/" className="ITs-resource-link" target="_blank" rel="noopener noreferrer">
            Visit Docs →
          </a>
        </div>
      </div>
    </div>
  );
}
