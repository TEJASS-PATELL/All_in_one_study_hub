import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import './Exam.css';
import axios from 'axios';
import ExamMetadataAccordion from './ExamMetadataAccordion';
import Loading from '../../Layouts/Loading';

const categories = [
  'Engineering',
  'Medical',
  'Civil Services',
  'Law Exams',
  'Banking & Finance',
  'Defense Exams',
  'Railway Exams',
  'Teaching & Education'
];

const ExamCard = React.memo(({ exam }) => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <li className="exam-card-item">
      <div className="exam-info">
        <h4 className="exam-title">{exam.title || "Untitled Exam"}</h4>
        <p className="exam-desc">{exam.desc || "No description available."}</p>

        {exam.name && exam.link && (
          <a
            href={exam.link}
            target="_blank"
            rel="noopener noreferrer"
            className="exam-link"
          >
            Official Link: {exam.name}
          </a>
        )}
      </div>

      <button onClick={toggle} className="toggle-btn">
        {open ? "Hide Exam Details" : "View Exam Details"}
      </button>

      {open && (
        <div className="accordion-wrapper open">
          <ExamMetadataAccordion exam={exam} />
        </div>
      )}
    </li>
  );
});

const Exams = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!activeCategory) {
      setExams([]);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    axios.get(
        `${import.meta.env.VITE_API_URL}/api/exam/government-jobs/${activeCategory}`,
        { signal: controller.signal }
      )
      .then((res) => setExams(res.data))
      .catch((err) => {
        if (err.name !== 'CanceledError') {
          console.error(err);
          setExams([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [activeCategory]);

  const handleCategoryClick = useCallback((cat) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }, []);

  return (
    <div className="G-category-section">
      <div className="section-titlee">
        <h2>Explore By Category</h2>
        <p>Find the perfect exam pathway for your career goals</p>
      </div>

      <div className="G-category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`G-filter-button ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="exam-category-card">
          <h3 className="exam-card-title">
            {activeCategory} Government Job Exams
            {!loading && ` (${exams.length} found)`}
          </h3>

          {loading && <Loading />}

          {!loading && exams.length === 0 && (
            <p className="no-exams-found">
              No exams found for {activeCategory}
            </p>
          )}

          {!loading && exams.length > 0 && (
            <ul className="exam-list">
              {exams.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Exams;
