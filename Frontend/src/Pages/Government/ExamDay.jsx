import React from "react";
import "./ExamDay.css";

const ExamDay = () => {
  return (
    <div className="strategy-page">
      <header className="strategy-header">
        <h1>Ultimate Exam-Day Strategy</h1>
        <p>
          A clear, practical plan to help you maximize marks through smarter question selection,
          disciplined time control, and calm decision-making under pressure.
        </p>
      </header>

      <section className="strategy-cards">
        <div className="strategy-card">
          <h2>1. Smart Question Selection</h2>
          <p>
            Never start an exam randomly. Your first few minutes decide momentum. Quickly identify
            where you are strongest and build confidence early.
          </p>
          <ul>
            <li><strong>Easy:</strong> Solve immediately to secure quick marks.</li>
            <li><strong>Moderate:</strong> Attempt once momentum is built.</li>
            <li><strong>Difficult:</strong> Skip initially and revisit later.</li>
            <li><strong>Trap questions:</strong> If clarity doesn’t come fast, move on.</li>
          </ul>
          <p>
            This approach prevents early time drain and keeps your confidence high throughout the paper.
          </p>
        </div>

        <div className="strategy-card">
          <h2>2. Structured Time Management</h2>
          <p>
            Time is fixed; marks are flexible. Plan your exam in blocks so no section dominates unfairly.
          </p>
          <ul>
            <li><strong>First 10 minutes:</strong> Scan the full paper and mark priorities.</li>
            <li><strong>Next 50–60% time:</strong> Complete all easy and familiar questions.</li>
            <li><strong>Remaining time:</strong> Tackle moderate and selected difficult ones.</li>
            <li><strong>Last 5–10 minutes:</strong> Review and finalize answers.</li>
          </ul>
          <p>
            Keep an eye on the clock and set a mental limit per question to avoid over-investment.
          </p>
        </div>

        <div className="strategy-card">
          <h2>3. Control Exam Pressure</h2>
          <p>
            Stress impacts accuracy, recall, and decision-making more than most students realize.
            Managing pressure is not about eliminating stress completely, but about keeping it within
            a controllable range so your preparation can actually work.
          </p>
          <ul>
            <li>Before starting, take 3–4 slow breaths to settle your heartbeat.</li>
            <li>If your mind goes blank, stop writing, pause for 5 seconds, and restart step-by-step.</li>
            <li>Break difficult questions into smaller logical steps instead of rushing.</li>
            <li>Use calm internal reminders to avoid panic-driven mistakes.</li>
          </ul>
        </div>

        <div className="strategy-card">
          <h2>4. Maintain a Clear Attempt Order</h2>
          <p>
            A fixed attempt order keeps your brain in flow mode. Random switching between sections
            increases fatigue and wastes mental energy that should be used for solving.
          </p>
          <ul>
            <li>Begin with sections you have practiced the most.</li>
            <li>Secure guaranteed marks before moving to uncertain areas.</li>
            <li>Leave negative-marking or time-consuming questions for later rounds.</li>
            <li>Mark difficult questions and return only if time permits.</li>
            <li>Follow the same order you practiced during mock tests.</li>
          </ul>
        </div>

        <div className="strategy-card">
          <h2>5. Keep Mind and Body Exam-Ready</h2>
          <p>
            Preparation doesn’t end with studying. Physical readiness matters on exam day.
          </p>
          <ul>
            <li>Sleep at least 6–7 hours the night before.</li>
            <li>Eat light, nutritious food and stay hydrated.</li>
            <li>Arrive early with all required documents.</li>
          </ul>
          <p>
            A rested body supports sharper thinking and better concentration.
          </p>
        </div>

        <div className="strategy-card">
          <h2>6. Adapt to the Paper in Real Time</h2>
          <p>
            If the paper feels difficult, remember it’s the same for everyone. Adapt, don’t panic.
          </p>
          <ul>
            <li>Re-prioritize questions based on difficulty.</li>
            <li>Slow down slightly to improve accuracy.</li>
            <li>Stick to logic, not emotions.</li>
          </ul>
          <p>
            Smart adaptation often matters more than raw speed.
          </p>
        </div>

        <div className="strategy-card">
          <h2>7. Apply Elimination Techniques</h2>
          <p>
            When unsure, avoid blind guessing. Use logic to improve probability.
          </p>
          <ul>
            <li>Eliminate clearly incorrect options.</li>
            <li>Check units, signs, and extreme values.</li>
            <li>Use rough calculations to support choices.</li>
          </ul>
          <p>
            This reduces negative marking and increases MCQ accuracy.
          </p>
        </div>

        <div className="strategy-card">
          <h2>8. Keep a Safety Buffer</h2>
          <p>
            Aim to finish early. A buffer is your insurance against mistakes and surprises.
          </p>
          <ul>
            <li>Recheck calculations and assumptions.</li>
            <li>Verify answer marking or submission steps.</li>
            <li>Use remaining time to improve clarity and presentation of answers.</li>
          </ul>
          <p>
            Many top scores are decided in the final review minutes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExamDay;