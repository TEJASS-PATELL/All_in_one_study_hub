import React from "react";
import "./ExamDay.css";
import { FaClock, FaCheckCircle, FaBrain, FaListAlt, FaRegSmile, FaSyncAlt, FaLightbulb, FaUserShield } from "react-icons/fa";

const ExamDay = () => {
  return (
    <div className="strategy-page">
      <header className="strategy-header">
        <h1>Ultimate Exam-Day Strategy</h1>
        <p>
          Maximize your performance with proven strategies for question selection, time management, and pressure control.
        </p>
      </header>

      <section className="strategy-cards">

        <div className="strategy-card">
          <FaCheckCircle className="strategy-icon" />
          <h2>1. Smart Question Selection</h2>
          <p>
            Don’t dive into the paper blindly. Start with sections you're most confident in. Categorize questions as:
          </p>
          <ul>
            <li><strong>Easy :</strong> Attempt immediately.</li>
            <li><strong>Moderate :</strong> Attempt after easy ones.</li>
            <li><strong>Difficult :</strong> Skip & revisit if time allows.</li>
            <li><strong>Trap Questions :</strong> Avoid overthinking or spending too long — move on quickly.</li>
          </ul>
          <p>
            This reduces time wasted on tough questions early on and boosts confidence right away.
          </p>
        </div>


        <div className="strategy-card">
          <FaClock className="strategy-icon" />
          <h2>2. Time Management Plan</h2>
          <p>
            Divide total exam duration smartly. For example, in a 3-hour paper:
          </p>
          <ul>
            <li><strong>First 10 mins : </strong> Quick scan of the entire paper.</li>
            <li><strong>Next 90 mins : </strong> Solve all easy and known questions.</li>
            <li><strong>Next 50 mins : </strong> Attempt moderate/difficult questions.</li>
            <li><strong>Last 10 mins : </strong> Review flagged/left-out questions.</li>
          </ul>
          <p>
            Use a timer/watch to track progress and avoid spending too long on a single section.
          </p>
        </div>

        <div className="strategy-card">
          <FaBrain className="strategy-icon" />
          <h2>3. Pressure Handling Techniques</h2>
          <p>
            Exam halls can trigger panic. Master emotional control:
          </p>
          <ul>
            <li>Take 3 deep breaths before the test begins.</li>
            <li>If you blank out, close your eyes and re-center for 5 seconds.</li>
            <li>Remind yourself: “I've prepared. I can do this.”</li>
          </ul>
          <p>
            A calm brain works faster and makes fewer mistakes.
          </p>
        </div>

        <div className="strategy-card">
          <FaListAlt className="strategy-icon" />
          <h2>4. Follow a Clear Attempt Order</h2>
          <p>
            Don’t break flow by jumping across sections randomly. Plan your section order in advance.
            If it’s a mixed paper, always:
          </p>
          <ul>
            <li>Attempt high-scoring topics first.</li>
            <li>Leave negative-marking risky questions last.</li>
            <li>Keep 5–10 minutes at the end for quick revision and unanswered questions.</li>
            <li>Mark tough questions to revisit later instead of wasting time initially.</li>
          </ul>
        </div>

        <div className="strategy-card">
          <FaRegSmile className="strategy-icon" />
          <h2>5. Keep Your Mind & Body Fresh</h2>
          <p>
            The night before matters! Sleep at least 6–7 hours, avoid junk food, and stay hydrated.
            On exam day:
          </p>
          <ul>
            <li>Reach early to avoid last-minute stress.</li>
            <li>Carry all required documents and stationery.</li>
            <li>Eat a light, nutritious breakfast.</li>
          </ul>
          <p>
            A calm and well-rested mind performs far better under pressure than an exhausted one.
          </p>
        </div>

        <div className="strategy-card">
          <FaSyncAlt className="strategy-icon" />
          <h2>6. Adapt on the Spot</h2>
          <p>
            If the paper is tougher than expected, stay flexible. Everyone's facing it, not just you.
          </p>
          <ul>
            <li>Adjust your attempt plan based on paper difficulty.</li>
            <li>Don’t panic if section order or pattern changes slightly.</li>
            <li>Focus on accuracy over speed when the paper feels challenging.</li>
          </ul>
          <p>
            Stay calm, trust your preparation, and handle unexpected twists with confidence.
          </p>
        </div>



        <div className="strategy-card">
          <FaLightbulb className="strategy-icon" />
          <h2>7. Use Elimination Tactics</h2>
          <p>
            When unsure of an answer, don’t guess blindly. Narrow down choices by:
          </p>
          <ul>
            <li>Eliminating obviously wrong options first.</li>
            <li>Looking for logical contradictions in remaining choices.</li>
            <li>Using formulas or rough work to support educated guesses.</li>
          </ul>
          <p>
            This technique increases your odds in MCQs and reduces negative marking risk.
          </p>
        </div>

        <div className="strategy-card">
          <FaUserShield className="strategy-icon" />
          <h2>8. Secure a Buffer Zone</h2>
          <p>
            Always aim to finish 5–10 minutes early. This safety margin helps you:
          </p>
          <ul>
            <li>Double-check calculations or logical steps.</li>
            <li>Fix bubbling errors in OMR sheets or digital interfaces.</li>
            <li>Calmly handle last-minute surprises or technical issues.</li>
          </ul>
          <p>
            This habit can save precious marks and avoid silly mistakes.
          </p>
        </div>
      </section>
    </div>

  );
};

export default ExamDay;