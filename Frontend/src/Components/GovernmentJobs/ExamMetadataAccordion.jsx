import React from 'react';
import './ExamMetadataAccordion.css';
import { FaCheckCircle, FaSyncAlt } from 'react-icons/fa';
import { Dot } from "lucide-react";

const Section = ({ children }) => {
  return <div className="exam-section">{children}</div>;
};

const ExamMetadataAccordion = ({ exam }) => {
  const examPattern = exam.examPattern ? JSON.parse(exam.examPattern) : [];
  const eligibility = exam.eligibility ? JSON.parse(exam.eligibility) : [];

  return (
    <div className="exam-meta-accordion-container">

      {exam.fees && (
        <Section>
          <p>
            <strong>Exam Fees</strong> – {exam.fees}
          </p>
        </Section>
      )}

      {exam.examPattern && (
        <Section>
          <p>
            <strong>Exam Pattern</strong>
          </p>

          {Array.isArray(examPattern) ? (
            <ul className="pattern-list">
              {examPattern.map((pattern, idx) => (
                <li key={idx} className="pattern-item">
                  <FaCheckCircle style={{ marginRight: 8, color: 'blue' }} />
                  {pattern}
                </li>
              ))}
            </ul>
          ) : (
            <p>{exam.examPattern}</p>
          )}
        </Section>
      )}

      {exam.examMode && (
        <Section>
          <p>
            <strong>Exam Mode</strong> – {exam.examMode}
          </p>
        </Section>
      )}

      {exam.attemptLimit && (
        <Section>
          <p>
            <strong>Attempt Limit</strong> – {exam.attemptLimit}
          </p>
        </Section>
      )}

      {exam.salary && (
        <Section>
          <p>
            <strong>Average Salary</strong> – {exam.salary}
          </p>
        </Section>
      )}

      {exam.examDate && (
        <Section>
          <p>
            <strong>Exam Date</strong> – {exam.examDate}
          </p>
        </Section>
      )}

      <Section>
        <p>
          <strong>Exam Cutoff</strong> – The cutoff for the exam varies every year
          based on difficulty level, number of candidates, and available seats.
        </p>
      </Section>

      {eligibility.length > 0 && (
        <Section>
          <p>
            <strong>Eligibility Criteria</strong>
          </p>

          <ul className="eligibility-list">
            {eligibility.map((item, idx) => (
              <li key={idx} className="eligibility-item">
                <Dot size={24} color="blue" style={{ marginRight: 6 }} />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

    </div>
  );
};

export default ExamMetadataAccordion;
