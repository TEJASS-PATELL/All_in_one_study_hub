import { useEffect, useRef, useState } from 'react';
import './Exam.css';
import axios from 'axios';
import ExamMetadataAccordion from './ExamMetadataAccordion';
import Loading from '../../Layouts/Loading';

const Exams = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [exams, setExams] = useState([]);
  const [loadingExams, setLoadingExams] = useState(false);
  const cardRefs = useRef([]);
  const [openExamIndex, setOpenExamIndex] = useState(null);

  const categories = ['Engineering', 'Medical', 'Civil Services', 'Law Exams', 'Banking & Finance', 'Defense Exams', 'Railway Exams', 'Teaching & Education'];

  useEffect(() => {
    if (activeCategory) {
      setLoadingExams(true);
      axios.get('http://localhost:4001/api/exam/government-jobs', { params: { category: activeCategory } })
        .then((res) => {
          setExams(res.data);
        })
        .catch((err) => {
          console.error("Error fetching exams:", err);
          setExams([]);
        })
        .finally(() => {
          setLoadingExams(false);
        });
    } else {
      setExams([]);
    }
  }, [activeCategory]);

  const filterCards = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    if (category) {
      const index = categories.indexOf(category);
    }
  };

  const handleToggle = (index) => {
    setOpenExamIndex(openExamIndex === index ? null : index);
  };

  return (
    <div className="G-category-section">
      <div className="section-titlee">
        <div className="G-float-icon-container">
          <img src="answers.png" alt="Explore exams" className="floating-icon-exam" />
        </div>
        <h2>Explore By Category</h2>
        <p>Find the perfect exam pathway for your career goals</p>
      </div>

      <div className="exam-categories">
        <div className="G-category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`G-filter-button ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => filterCards(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div
            key={activeCategory}
            className="exam-category-card"
            ref={(el) => (cardRefs.current[categories.indexOf(activeCategory)] = el)}
          >
            <div className="exam-card-header">
              <h3 className="exam-card-title">
                {activeCategory} Government Job Exams ({loadingExams ? 'Loading...' : `${exams.length} found`})
              </h3>
            </div>

            {loadingExams && (
              <div className="loading-container">
                <Loading />
              </div>
            )}
            
            {!loadingExams && exams.length === 0 && <p className="no-exams-found">No exams found for {activeCategory}.</p>}

            {!loadingExams && exams.length > 0 && (
              <div className="exam-card-body">
                <ul className="exam-list">
                  {exams.map((exam, index) => (
                    <li className="exam-card-item" key={exam.id || index}>
                      <div className="exam-info">
                        <h4 className="exam-title">{exam.title || "Untitled Exam"}</h4>
                        <p className="exam-desc">{exam.desc || "No description available."}</p>
                        {exam.name && exam.link && (
                          <a href={exam.link} target="_blank" rel="noopener noreferrer" className="exam-link">
                            Official Link: {exam.name}
                          </a>
                        )}
                      </div>
                      <button onClick={() => handleToggle(index)} className="toggle-btn">
                        {openExamIndex === index ? "Hide Exam Details" : "View Exam Details"}
                      </button>
                      <div className={`accordion-wrapper ${openExamIndex === index ? "open" : ""}`}>
                        <ExamMetadataAccordion exam={exam} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exams;