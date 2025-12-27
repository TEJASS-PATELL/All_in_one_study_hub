import React from 'react';
import './Faq.css';

function Faq() {
    const faqData = [
        {
            question: "What if I forget my password?",
            answer: "No worries! Use the 'Forgot Password' option on the login page to reset it via your registered email."
        },
        {
            question: "Is there a mobile app available?",
            answer: "We are currently working on a dedicated mobile app. Meanwhile, our website is fully responsive and works smoothly on mobile devices."
        },
        {
            question: "Can I get IT job preparation materials?",
            answer: "Yes, once logged in, you can access and save IT job preparation resources directly."
        },
        {
            question: "How do I create an account on the website?",
            answer: "Click on the 'Sign Up' button at the top right corner and follow the instructions. You’ll need a valid email address to register."
        },
        {
            question: "How can I contact support if I face any issues?",
            answer: "You can reach out through our contact form, email us at support@example.com, or use the live chat available on the website."
        },
        {
            question: "Can I generate a personalized study roadmap?",
            answer: "Yes! Our platform allows you to generate AI-powered personalized study roadmaps based on your goals, timeline, and preferred learning style.",
        },
        {
            question: "Do you offer mock tests and previous year papers?",
            answer: "Our website provides various platforms for mock tests and previous year papers at one place, along with detailed analysis to help you practice effectively."
        },
        {
            question: "Can users share their job experiences?",
            answer: "Yes! Users can post their job experiences, preparation strategies, and success stories to inspire and guide other learners in the community."
        }
    ];

    return (
        <section className="faq-wrapper" id='faq'>
            <div className="faq-container">
                <h2 className="faq-main-title">Frequently Asked Questions</h2>
                <p className="faq-subtitle">Everything you need to know about CareerHub</p>
                
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <input type="checkbox" id={`faq-${index}`} className="faq-toggle" />
                            <label htmlFor={`faq-${index}`} className="faq-question">
                                {item.question}
                                <span className="faq-icon"></span>
                            </label>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;