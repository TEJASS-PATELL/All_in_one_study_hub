import React, { useEffect, useRef, useState } from 'react';
import "./Interview.css";

const TYPE_META = [
    { key: 'technical', label: 'Technical', code: 'TCH' },
    { key: 'hr', label: 'HR Round', code: 'HR' },
    { key: 'behavioral', label: 'Behavioral', code: 'BEH' },
    { key: 'systemDesign', label: 'System Design', code: 'SYS' }
];

const EXPERIENCE_OPTIONS = ['Fresher', '1-3 Yrs', '3-5 Yrs', '5+ Yrs'];
const DIFFICULTY_OPTIONS = ['easy', 'medium', 'hard'];
const COUNT_OPTIONS = [5, 8, 10, 15, 20];

function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function Interview() {
    const [stage, setStage] = useState('setup');

    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [experience, setExperience] = useState('Fresher');
    const [type, setType] = useState('technical');
    const [difficulty, setDifficulty] = useState('easy');
    const [questionCount, setQuestionCount] = useState(5);

    const [questions, setQuestions] = useState([]);
    const [messages, setMessages] = useState([]);
    const [answer, setAnswer] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [scores, setScores] = useState(null);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isThinking]);

    useEffect(() => {
        if (stage !== 'interview') return;
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, [stage]);

    const activeType = TYPE_META.find((t) => t.key === type);
    const answeredCount = messages.filter((m) => m.role === 'user').length;

    function handleStart() {
        // TODO: Replace this with your API call or dynamic question generator
        // e.g., const qs = await fetchQuestions(type, difficulty, questionCount);

        const dummyQuestions = Array.from(
            { length: questionCount },
            (_, i) => `This is a dynamic placeholder question #${i + 1} for the ${type} round.`
        );

        setQuestions(dummyQuestions);
        setMessages([{ role: 'ai', text: dummyQuestions[0] }]);
        setSeconds(0);
        setScores(null);
        setStage('interview');
    }

    function computeScores() {
        const communication = 65 + Math.floor(Math.random() * 30);
        const technicalDepth = 60 + Math.floor(Math.random() * 35);
        const confidence = 60 + Math.floor(Math.random() * 35);
        const clarity = 65 + Math.floor(Math.random() * 30);
        const overall = Math.round((communication + technicalDepth + confidence + clarity) / 4);
        return { communication, technicalDepth, confidence, clarity, overall };
    }

    function handleSend() {
        if (!answer.trim() || isThinking) return;

        const nextMessages = [...messages, { role: 'user', text: answer.trim() }];
        setMessages(nextMessages);
        setAnswer('');

        const answeredSoFar = nextMessages.filter((m) => m.role === 'user').length;

        if (answeredSoFar < questions.length) {
            setIsThinking(true);
            setTimeout(() => {
                setIsThinking(false);
                setMessages((m) => [...m, { role: 'ai', text: questions[answeredSoFar] }]);
            }, 1100);
        } else {
            setIsThinking(true);
            setTimeout(() => {
                setIsThinking(false);
                setScores(computeScores());
                setStage('result');
            }, 1400);
        }
    }

    function handleEndEarly() {
        setScores(computeScores());
        setStage('result');
    }

    function handleRestart() {
        setStage('setup');
        setQuestions([]);
        setMessages([]);
        setAnswer('');
        setIsThinking(false);
        setSeconds(0);
        setScores(null);
    }

    const circumference = 2 * Math.PI * 52;

    return (
        <div className="iv-app">
            {stage === 'setup' && (
                <div className="iv-setup-wrap">
                    <div className="iv-setup-card">
                        <div className="iv-eyebrow">Session Brief</div>
                        <h1 className="iv-heading">Set up your mock interview</h1>
                        <p>Tell us the role and format. Your AI interviewer will handle the rest.</p>

                        <div className="iv-field">
                            <label className="iv-field-label">Role you're preparing for</label>
                            <input
                                type="text"
                                placeholder="e.g. Frontend Developer, Data Analyst"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>

                        <div className="iv-field">
                            <label className="iv-field-label">Target Company (Optional)</label>
                            <input
                                type="text"
                                placeholder="e.g. Google, Stripe, Startup"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>

                        <div className="iv-field">
                            <label className="iv-field-label">Experience level</label>
                            <div className="iv-pill-row">
                                {EXPERIENCE_OPTIONS.map((opt) => (
                                    <button
                                        key={opt}
                                        className={`iv-pill ${experience === opt ? 'iv-pill-active' : ''}`}
                                        onClick={() => setExperience(opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="iv-field">
                            <label className="iv-field-label">Round type</label>
                            <div className="iv-type-row">
                                {TYPE_META.map((opt) => (
                                    <button
                                        key={opt.key}
                                        className={`iv-type-tab ${type === opt.key ? 'iv-type-tab-active' : ''}`}
                                        onClick={() => setType(opt.key)}
                                    >
                                        <span className="iv-type-code">{opt.code}</span>
                                        <span>{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="iv-field">
                            <label className="iv-field-label">Difficulty</label>
                            <div className="iv-pill-row">
                                {DIFFICULTY_OPTIONS.map((opt) => (
                                    <button
                                        key={opt}
                                        className={`iv-pill ${difficulty === opt ? 'iv-pill-active' : ''}`}
                                        onClick={() => setDifficulty(opt)}
                                    >
                                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="iv-field">
                            <label className="iv-field-label">Number of questions</label>
                            <div className="iv-pill-row">
                                {COUNT_OPTIONS.map((opt) => (
                                    <button
                                        key={opt}
                                        className={`iv-pill ${questionCount === opt ? 'iv-pill-active' : ''}`}
                                        onClick={() => setQuestionCount(opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="iv-start-btn" disabled={!role.trim()} onClick={handleStart}>
                            Start the interview
                        </button>
                    </div>
                </div>
            )}

            {stage === 'interview' && (
                <div className="iv-interview-wrap">
                    <div className="iv-interview-header">
                        <div>
                            <h2 className="iv-heading">ROLE  ·  {role}</h2>
                            <span className="iv-header-tag">
                                {activeType.code} ROUND · {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} · {experience}
                            </span>
                        </div>
                        <div className="iv-header-right">
                            <div className="iv-rec">
                                <span className="iv-rec-dot"></span>
                                <span className="iv-mono">{formatTime(seconds)}</span>
                            </div>
                            <button className="iv-end-btn" onClick={handleEndEarly}>End Early</button>
                        </div>
                    </div>

                    <div className="iv-progress-track">
                        <div
                            className="iv-progress-fill"
                            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <div className="iv-progress-label">
                        Q{Math.min(answeredCount + 1, questions.length)} / {questions.length}
                    </div>

                    <div className="iv-chat">
                        {messages.map((m, i) =>
                            m.role === 'ai' ? (
                                <div className="iv-ai-row" key={i}>
                                    <div
                                        className="iv-card"
                                        style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
                                    >
                                        <div className="iv-card-tag">
                                            Q{Math.floor(i / 2) + 1} · {activeType.code}
                                        </div>
                                        {m.text}
                                    </div>
                                </div>
                            ) : (
                                <div className="iv-user-row" key={i}>
                                    <div className="iv-user-text">
                                        <span className="iv-user-tag">Your answer</span>
                                        {m.text}
                                    </div>
                                </div>
                            )
                        )}

                        {isThinking && (
                            <div className="iv-ai-row">
                                <div className="iv-thinking">
                                    <span className="iv-dot"></span>
                                    <span className="iv-dot"></span>
                                    <span className="iv-dot"></span>
                                </div>
                            </div>
                        )}

                        <div ref={chatEndRef}></div>
                    </div>

                    <div className="iv-input-row">
                        <textarea
                            placeholder="Type your answer here..."
                            value={answer}
                            disabled={isThinking}
                            onChange={(e) => setAnswer(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        ></textarea>
                        <button className="iv-send-btn" disabled={isThinking || !answer.trim()} onClick={handleSend}>
                            Send answer
                        </button>
                    </div>
                </div>
            )}

            {stage === 'result' && scores && (
                <div className="iv-result-wrap">
                    <div className="iv-result-card">
                        <div className="iv-eyebrow">Session Complete</div>
                        <h2 className="iv-heading">Here's your scorecard</h2>
                        <p className="iv-result-sub">{activeType.label} round · {role}</p>

                        <div className="iv-score-wrap">
                            <svg viewBox="0 0 120 120" className="iv-score-svg">
                                <circle cx="60" cy="60" r="52" className="iv-score-track"></circle>
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="52"
                                    className="iv-score-fill"
                                    style={{
                                        strokeDasharray: circumference,
                                        strokeDashoffset: circumference - (circumference * scores.overall) / 100
                                    }}
                                ></circle>
                            </svg>
                            <div className="iv-score-number">{scores.overall}%</div>
                        </div>

                        <div className="iv-receipt">
                            <div className="iv-receipt-title">Performance breakdown</div>
                            <div className="iv-receipt-row">
                                <span>Communication</span>
                                <span>{scores.communication}%</span>
                            </div>
                            <div className="iv-receipt-row">
                                <span>Technical depth</span>
                                <span>{scores.technicalDepth}%</span>
                            </div>
                            <div className="iv-receipt-row">
                                <span>Confidence</span>
                                <span>{scores.confidence}%</span>
                            </div>
                            <div className="iv-receipt-row">
                                <span>Clarity</span>
                                <span>{scores.clarity}%</span>
                            </div>
                        </div>

                        <button className="iv-restart-btn" onClick={handleRestart}>
                            Start another round
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}