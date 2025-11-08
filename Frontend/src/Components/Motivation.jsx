import React, { useEffect, useState } from 'react';
import './Motivation.css';

const quotes = [
  "The only way to do great work is to love what you do.",
  "Push yourself, because no one else is going to do it for you.",
  "Believe you can and you're halfway there.",
  "Success doesn't just find you. You have to go out and get it.",
  "Your limitation—it's only your imagination.",
  "Dream it. Wish it. Do it."
];

const Motivation = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [fade, setFade] = useState(false);

  const getNewQuote = () => {
    let newQuote;
    do {
      const random = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[random];
    } while (newQuote === quote);
    setFade(false); 
    setTimeout(() => {
      setQuote(newQuote);
      setFade(true); 
    }, 50); 
  };

  useEffect(() => {
    const interval = setInterval(getNewQuote, 10000);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="inspiration-body">
      <div className="motivation-card">
        <div className="quote-container">
          <p id="quote" className={`quote ${fade ? 'fade-in' : ''}`}> " {quote} " </p>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
