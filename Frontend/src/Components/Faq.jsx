import React from 'react'

function Faq() {
    return (
        <section className="Gfaq-section" id='faq'>
            <h2 className="Gfaq-title">Frequently Asked Questions</h2>
            <div className="Gfaq-container">
                {[
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
                        answer:
                            "Yes! Our platform allows you to generate AI-powered personalized study roadmaps based on your goals, timeline, and preferred learning style.",
                    },

                    {
                        question: "Do you offer mock tests and previous year papers?",
                        answer: "Our website provides various platforms for mock tests and previous year papers at one place, along with detailed analysis to help you practice effectively."
                    },
                    {
                        question: "Can users share their job experiences or preparation journey?",
                        answer: "Yes! Users can post their job experiences, preparation strategies, and success stories to inspire and guide other learners in the community."
                    },
                ].map((item, index) => (
                    <div className="Gfaq-item" key={index}>
                        <input type="checkbox" id={`faq-${index}`} className="Gfaq-toggle" />
                        <label htmlFor={`faq-${index}`} className="Gfaq-question">
                            {item.question}
                        </label>
                        <div className="Gfaq-answer">{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq