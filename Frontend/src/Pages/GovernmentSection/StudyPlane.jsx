import React, { useState } from "react";
import "./StudyPlan.css"; 
import { BarChart2, Brain, Calendar1Icon, Flame, Focus, Leaf, RefreshCcw, Target, Zap } from "lucide-react";

const tips = [
  "Plan your day the night before. It reduces decision fatigue and sets a clear path for the morning.",
  "Use 25–5 Pomodoro bursts for intense focus. Short breaks prevent burnout and maintain high energy.",
  "Don’t chase motivation, build discipline by showing up daily, even when you don't feel like it.",
  "Mornings are for deep work—protect them fiercely. Schedule your most demanding tasks first.",
  "Use ‘Time Blocking’ to assign every hour a task. This creates structure and accountability.",
  "Rest is productive—schedule short breaks (5-10 mins every hour) and full reset days (1 day/week).",
  "Reflect weekly: What worked? What didn’t? What will you improve next week? Continuous improvement is key.",
  "Batch similar tasks (e.g., emails, errands, research) to reduce context switching and improve efficiency.",
  "Start with the hardest task (Eat That Frog). Accomplishing it first builds momentum for the rest of the day.",
  "Track your energy levels throughout the day to optimize study sessions. Schedule demanding tasks for peak energy times.",
  "Use the 80/20 rule (Pareto Principle): Focus on the 20% of activities that yield 80% of the results.",
  "Hydrate and eat nutritious snacks. Your brain needs fuel to perform optimally.",
  "Practice active recall instead of passive re-reading. Test yourself frequently.",
  "Teach what you learn. Explaining concepts to others solidifies your own understanding.",
  "Break down large projects into smaller, manageable steps to avoid overwhelm and maintain motivation."
];

const StudyPlan = () => {
  const [sections, setSections] = useState({
    planning: false,
    dailyGoals: false,
    revision: false,
    productivity: false,
    mindset: false,
    environment: false,
    focus: false,
    weeklyReview: false,
  });

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="Gstudy-plan-wrapper">
        <section className="Gwhy-time-matters">
           <h1>Become the Master of Your Time</h1>
          <p>
            Time is your most valuable, non-renewable asset. Mastering it doesn't
            just improve grades; it reduces stress, prevents burnout, and unlocks
            your true potential. The most successful students aren't necessarily
            the busiest—they are the most <strong>Intentional</strong> and{" "}
            <strong>Strategic</strong> with their time.
          </p>
        </section>
      </div>

      <div className="Gdivide">
        <section className="Gsection-toggle-container">
          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("planning")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar1Icon size={20} color="blue" /> Strategic Weekly Planning
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.planning ? "▲" : "▼"}</span>
            </h2>
            {sections.planning && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Enter each week with absolute clarity and a proactive roadmap.
                </p>
                <ul>
                  <li>
                    <strong>Sunday Ritual (30-60 mins) :</strong> Review the past week (wins/challenges), brain-dump all tasks, identify 3-5 Key Weekly Objectives (KWOs).
                  </li>
                  <li>
                    <strong>Time-Blocking :</strong> Assign specific blocks in your digital/physical calendar for deep work, subject study, revision, breaks, and personal time. Color-code for visual ease.
                  </li>
                  <li>
                    <strong>Peak Energy Alignment :</strong> Schedule your most demanding tasks during your natural peak energy windows.
                  </li>
                  <li>
                    <strong>Buffer Zones :</strong> Incorporate 10-15% buffer time for unexpected delays or tasks that run over.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("dailyGoals")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Target size={20} color="blue" /> Daily Goal Execution & Prioritization
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.dailyGoals ? "▲" : "▼"}</span>
            </h2>

            {sections.dailyGoals && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Ensure consistent, focused progress on high-impact activities every single day.
                </p>
                <ul>
                  <li>
                    <strong>Morning "Top 3" :</strong> Each morning, define the 3 Most Important Tasks (MITs) that will make the day a success. Ensure at least one aligns with your KWOs.
                  </li>
                  <li>
                    <strong>"Eat That Frog" :</strong> Tackle your most challenging or procrastinated MIT first to build momentum.
                  </li>
                  <li>
                    <strong>Minimum Viable Plan :</strong> On low-energy days, commit to 1-2 essential tasks. Any progress is better than none.
                  </li>
                  <li>
                    <strong>End-of-Day Review (5 mins) :</strong> Briefly assess accomplishments, carry over unfinished tasks, and lightly plan for tomorrow.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("revision")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <RefreshCcw size={20} color="blue" /> Effective Revision Techniques
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.revision ? "▲" : "▼"}</span>
            </h2>
            {sections.revision && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Embed knowledge deeply for long-term recall, not just short-term memorization.
                </p>
                <ul>
                  <li>
                    <strong>Active Recall :</strong> Force your brain to retrieve information. Close notes and explain concepts, use flashcards (Anki, Quizlet), do practice questions *before* checking answers.
                  </li>
                  <li>
                    <strong>Spaced Repetition :</strong> Review material at increasing intervals (e.g., 1 day, 3 days, 7 days, 2 weeks). This combats the forgetting curve.
                  </li>
                  <li>
                    <strong>Feynman Technique :</strong> Teach the concept in simple terms to a (real or imaginary) student. Gaps in your explanation reveal gaps in your understanding.
                  </li>
                  <li>
                    <strong>Mistake Journal :</strong> Log errors from practice tests. Analyze *why* you made them and review these regularly to avoid repetition.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("productivity")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Zap size={20} color="blue" /> Productivity Frameworks & Boosters
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.productivity ? "▲" : "▼"}</span>
            </h2>
            {sections.productivity && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Maximize focused output and minimize wasted time and energy.
                </p>
                <ul>
                  <li>
                    <strong>Pomodoro Technique :</strong> Work in 25-minute focused sprints, then take a 5-minute break. After 4 cycles, take a longer 15-30 minute break.
                  </li>
                  <li>
                    <strong>2-Minute Rule :</strong> If a task takes less than two minutes, do it immediately to prevent small tasks from piling up.
                  </li>
                  <li>
                    <strong>Task Batching :</strong> Group similar small tasks (emails, admin, calls) and do them in one dedicated block.
                  </li>
                  <li>
                    <strong>Parkinson's Law Awareness :</strong> Set clear deadlines for tasks to prevent them from expanding to fill all available time.
                  </li>
                  <li>
                    <strong>Energy Management :</strong> Identify your ultradian rhythms (natural energy peaks and troughs) and schedule tasks accordingly.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("mindset")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Brain size={20} color="blue" /> Cultivating a Growth Mindset
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.mindset ? "▲" : "▼"}</span>
            </h2>
            {sections.mindset && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Develop resilience, embrace challenges, and believe in your capacity for continuous improvement.
                </p>
                <ul>
                  <li>
                    <strong>"Not Yet" Philosophy :</strong> Reframe failures or difficulties as "I'm not there *yet*," implying future success with continued effort.
                  </li>
                  <li>
                    <strong>Effort as the Path :</strong> Focus on the process and the effort invested, not just the outcome. Effort builds skill.
                  </li>
                  <li>
                    <strong>Learn from Setbacks :</strong> Analyze what went wrong without judgment. Extract lessons and apply them forward.
                  </li>
                  <li>
                    <strong>Seek Constructive Feedback :</strong> View criticism as a gift that helps you grow.
                  </li>
                  <li>
                    <strong>Positive Affirmations & Visualization :</strong> Regularly affirm your capabilities and visualize your success to build self-belief.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">

            <h2 onClick={() => toggleSection("environment")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Leaf size={20} color="blue" /> Optimized Study Environment
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.environment ? "▲" : "▼"}</span>
            </h2>
            {sections.environment && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Design your physical and digital spaces to actively support focus and minimize distractions.
                </p>
                <ul>
                  <li>
                    <strong>Dedicated & Tidy Space :</strong> Have a specific study zone. Keep it clean and organized. A cluttered space often leads to a cluttered mind.
                  </li>
                  <li>
                    <strong>Ergonomics :</strong> Invest in a comfortable chair and ensure your desk setup supports good posture.
                  </li>
                  <li>
                    <strong>Minimize Distractions :</strong>
                    <ul>
                      <li><strong>Physical :</strong> Inform family/roommates of study times. Use noise-canceling headphones.</li>
                      <li><strong>Digital :</strong> Turn off non-essential notifications. Use apps like Freedom or Forest to block distracting sites/apps. Keep your phone out of sight or in another room.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cue for Focus :</strong> Use specific lighting (e.g., a desk lamp only for study), music (Lo-Fi, classical), or even a particular scent (e.g., peppermint oil) to signal to your brain it's time to focus.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("focus")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Focus size={20} color="blue" /> Laser-Focus Techniques
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.focus ? "▲" : "▼"}</span>
            </h2>
            {sections.focus && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Train your attention to achieve deep, uninterrupted concentration for optimal learning.
                </p>
                <ul>
                  <li>
                    <strong>Single-Tasking Supremacy :</strong> Commit to doing only one thing at a time. Multitasking fragments attention and reduces quality.
                  </li>
                  <li>
                    <strong>Deep Work Blocks :</strong> Schedule 90-120 minute blocks for your most cognitively demanding tasks, free from all interruptions.
                  </li>
                  <li>
                    <strong>Distraction Log :</strong> Keep a paper/digital note. When an off-task thought or urge arises, quickly jot it down to address *after* your focus block.
                  </li>
                  <li>
                    <strong>Intentional Transitions :</strong> Before starting a focus block, take 1-2 minutes to mentally prepare, set a clear intention for the session, and take a few deep breaths.
                  </li>
                  <li>
                    <strong>Limit Input :</strong> Be mindful of information consumption (social media, news). Constant input can overwhelm your cognitive capacity.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="Gsection-item">
            <h2 onClick={() => toggleSection("weeklyReview")} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BarChart2 size={20} color="blue" /> Weekly Review & Reset Ritual
              <span style={{ marginLeft: "auto", color: "blue" }}>{sections.weeklyReview ? "▲" : "▼"}</span>
            </h2>
            {sections.weeklyReview && (
              <div className="Gsection-content">
                <p>
                  <strong>Goal :</strong> Systematically learn from your experiences to refine your strategies and ensure continuous improvement.
                </p>
                <ul>
                  <li>
                    <strong>Dedicated Time (30-60 mins weekly) :</strong> Schedule this like any other important appointment.
                  </li>
                  <li>
                    <strong>Key Questions :</strong>
                    <ul>
                      <li>What went well this week? (Celebrate wins!)</li>
                      <li>What were the biggest challenges or roadblocks?</li>
                      <li>What did I learn from these challenges?</li>
                      <li>What tasks did I procrastinate on, and why?</li>
                      <li>How was my energy and focus throughout the week?</li>
                      <li>What will I do differently or improve next week?</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Adjust & Adapt :</strong> Based on your reflections, tweak your schedule, strategies, or goals for the upcoming week.
                  </li>
                  <li>
                    <strong>Reconnect with "Why" :</strong> Remind yourself of your larger goals and motivations to stay inspired.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default StudyPlan;