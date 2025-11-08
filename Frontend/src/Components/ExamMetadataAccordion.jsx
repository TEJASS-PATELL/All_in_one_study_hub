import React, { useState, useMemo, use } from 'react';
import './ExamMetadataAccordion.css';
import {
    FaRupeeSign,
    FaCheckCircle,
    FaSyncAlt,
} from 'react-icons/fa';

import {
    Briefcase,
    LayoutList,
    Laptop,
    FileCheck2,
    TrendingUp,
    BadgeIndianRupee,
    Dot,
} from "lucide-react";

const AccordionSection = ({ title, children, isOpen, onToggle, icon }) => {
    return (
        <div className={`accordion-section ${isOpen ? 'open' : ''}`}>
            <button className="accordion-header" onClick={onToggle} aria-expanded={isOpen}>
                <span className="accordion-title">
                    {icon && <span className="accordion-icon">{icon}</span>}
                    {title}
                </span>
                <span className="accordion-toggle-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="accordion-content-wrapper">
                <div className="accordion-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ExamMetadataAccordion = ({ exam }) => {
    const [openSectionKey, setOpenSectionKey] = useState(null);

    const handleToggle = (key) => {
        setOpenSectionKey(openSectionKey === key ? null : key);
    };

    const examPattern = exam.examPattern ? JSON.parse(exam.examPattern) : [];
    const eligibility = exam.eligibility ? JSON.parse(exam.eligibility) : [];

    const sections = [
        {
            key: 'fees',
            title: 'Exam Fees',
            icon: <BadgeIndianRupee className="accordion-icon" />,
            condition: exam.fees,
            content: <p>{exam.fees}</p>
        },
        {
            key: 'pattern',
            title: 'Exam Pattern',
            icon: <LayoutList className="accordion-icon" />,
            condition: exam.examPattern,
            content: (
                Array.isArray(examPattern) ? (
                    <ul className="pattern-list">
                        {examPattern.map((pattern, idx) => (
                            <li key={idx} className="pattern-item">
                                <FaCheckCircle style={{ marginRight: '8px', color: 'green' }} />
                                {pattern}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="pattern-text">{exam.examPattern}</p>
                )
            ),
        },
        {
            key: 'mode',
            title: 'Exam Mode',
            icon: <Laptop className="accordion-icon" />,
            condition: exam.examMode,
            content: <p className="mode-text"><Dot size={40} color='black' />{exam.examMode}</p>,
        },
        {
            key: 'attemptLimit',
            title: 'Attempt Limit',
            icon: <FaSyncAlt className="accordion-icon" />,
            condition: exam.attemptLimit,
            content: <p className="attempt-text"><Dot size={40} color='black' />{exam.attemptLimit}</p>,
        },
        {
            key: 'salary',
            title: 'Average Salary',
            icon: <Briefcase className="accordion-icon" />,
            condition: exam.salary,
            content: <p className="mode-text">{exam.salary}</p>,
        },
        {
            key: 'examDate',
            title: 'Exam Date',
            icon: <Briefcase className="accordion-icon" />,
            condition: exam.examDate,
            content: <p className="mode-text">{exam.examDate}</p>,
        },
        {
            key: 'cutoff',
            title: 'Exam Cutoff',
            icon: <Briefcase className="accordion-icon" />,
            condition: "cutoff",
            content: <p className="mode-text">The cutoff for the exam varies every year based on several factors such as the difficulty level of the paper, the number of candidates appearing for the exam, and the total number of available seats. Generally, a tougher paper results in a lower cutoff, while higher participation may raise it slightly.</p>,
        },

        {
            key: 'eligibilityCriteria',
            title: 'Eligibility Criteria',
            icon: <FileCheck2 className="accordion-icon" />,
            condition: eligibility && Array.isArray(eligibility) && eligibility.length > 0,
            content: (
                <ul className="eligibility-list">
                    {eligibility.map((item, idx) => (
                        <li key={idx} className="eligibility-item" style={{ display: 'flex', alignItems: 'center' }}>
                            <Dot size={40} color="green" style={{ marginRight: '8px' }} />
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
    ];

    return (
        <div className="exam-meta-accordion-container">
            {sections.map((section) =>
                section.condition ? (
                    <AccordionSection
                        key={section.key}
                        title={section.title}
                        icon={section.icon}
                        isOpen={openSectionKey === section.key}
                        onToggle={() => handleToggle(section.key)}>
                        {section.content}
                    </AccordionSection>
                ) : null
            )}
        </div>
    );
};

export default ExamMetadataAccordion;