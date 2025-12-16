import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PrivateJobs.css';
import '../GovernmentJobs/Exam.css';
import Loading from '../../Layouts/Loading';

const PrivateExams = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    'Core Engineering',
    'Sales & Marketing',
    'Finance & Accounting',
    'Customer Support',
    'Human Resources',
    'Design & Multimedia'
  ];

  useEffect(() => {
    if (!activeCategory) {
      setExams([]);
      return;
    }

    let isMounted = true;
    setLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/exam/private-jobs/${activeCategory}`)
      .then((res) => {
        if (!isMounted) return;
        setExams(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error('Error fetching private jobs:', err);
        if (isMounted) setExams([]);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

  const filterCards = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="G-category-section">
      <div className="section-titlee">
        <h2>Explore Private Job Categories</h2>
        <p>Find the best private job roles based on your interest</p>
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
          <div className="exam-category-card">
            <div className="exam-card-header">
              <h3 className="exam-card-title">
                {activeCategory} Jobs{' '}
                {!loading && `(${exams.length} found)`}
              </h3>
            </div>

            {loading && (
              <div className="loading-container">
                <Loading />
              </div>
            )}

            {!loading && exams.length === 0 && (
              <p className="no-exams-found">
                No jobs found for {activeCategory}.
              </p>
            )}

            {!loading && exams.length > 0 && (
              <div className="exam-card-body">
                <ul className="exam-list">
                  {exams.map((exam, index) => (
                    <li className="exam-card-item" key={exam.id || index}>
                      <div className="exam-info">
                        <h4 className="p-exam-title">
                          {exam.title || 'Untitled Job'}
                        </h4>

                        <p className="p-exam-desc">
                          {exam.desc || 'No description available.'}
                        </p>

                        {exam.syllabus && (
                          <p className="exam-detail">
                            <strong>Syllabus:</strong> {exam.syllabus}
                          </p>
                        )}

                        {exam.selectionStage && (
                          <p className="exam-detail">
                            <strong>Selection Process:</strong> {exam.selectionStage}
                          </p>
                        )}

                        {exam.skills && (
                          <p className="exam-detail">
                            <strong>Required Skills:</strong> {exam.skills}
                          </p>
                        )}

                        {exam.tips && (
                          <p className="exam-detail">
                            <strong>Preparation Tips:</strong> {exam.tips}
                          </p>
                        )}
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

export default PrivateExams;
