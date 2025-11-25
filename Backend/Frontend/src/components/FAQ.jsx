import React, { useState } from 'react'
import "../style/FAQ.css"

{/* Change questions and answer according to your application */}
const faq = [
  {
    question: "What is this project about?",
    answer: "This is a skeleton web app template including all essential components like login, signup, features, pricing, FAQ, and reviews to quickly start a full-stack project."
  },
  {
    question: "Does it include authentication?",
    answer: "Yes, it comes with a fully functional login, signup, forgot password, and OTP-based authentication system."
  },
  {
    question: "Are premium features included?",
    answer: "Yes, the app includes a sample premium/pro plan with payment integration and restricted access demonstration."
  },
  {
    question: "Is this project responsive?",
    answer: "Absolutely! All sections including hero, features, pricing, FAQ, and review cards are fully responsive and mobile-friendly."
  },
  {
    question: "Can I customize this skeleton for my own project?",
    answer: "Yes, this project is designed to be modular and reusable, so you can easily modify or extend components for your own full-stack applications."
  }
];

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(null);

  const toogleFaq = (index) => {
    if(isOpen === index){
      setIsOpen(null);
    }
    else{
      setIsOpen(index);
    }
  }

   return (
    <section id='faq'>
        {/* <h1>FAQ Section</h1> */}
        <div className='faq-container'>
          {faq.map((item, index) => (
            <div
            key={index}
            className={`faq-item ${isOpen === index ? "open" : ""}`}>
            <div
              className="faq-question"
              onClick={() => toogleFaq(index)}>
              {item.question}
              <span className="faq-toggle">{isOpen === index ? "−" : "+"}</span>
            </div>
            {isOpen === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
          ))}
        </div>
    </section>
  )
}
