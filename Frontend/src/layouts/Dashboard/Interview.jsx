import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";
import "./Interview.css";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

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
    const isDemo = useAuthStore((state) => state.isDemo);
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
    const [isStarting, setIsStarting] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [scores, setScores] = useState(null);
    const [feedback, setFeedback] = useState("");

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

    async function handleStart() {
        setIsStarting(true);
        try {
            if (isDemo) {
                const questionSets = {
                    technical: [`What core skills are most important for a ${role.trim()}?`, "Describe a challenging problem you solved and how you approached it.", "How do you test your work and handle mistakes?"],
                    hr: ["Tell me about yourself and the experience most relevant to this role.", "What interests you about this role?", "Describe a time you worked through a difficult situation."],
                    behavioral: ["Tell me about a time you had to adapt to a change.", "Describe a goal you achieved through consistent effort.", "How do you respond to constructive feedback?"],
                    systemDesign: [`How would you clarify requirements before designing a system for ${role.trim()}?`, "How would you handle reliability and scaling?", "How would you evaluate trade-offs in your design?"],
                };
                const templates = questionSets[type];
                const demoQuestions = Array.from({ length: questionCount }, (_, index) => templates[index % templates.length]);
                setQuestions(demoQuestions);
                setMessages([{ role: 'ai', text: demoQuestions[0] }]);
                setSeconds(0);
                setScores(null);
                setFeedback("Offline demo questions are for practice and are not an AI evaluation.");
                setStage('interview');
                return;
            }

            const { data } = await axios.post("/api/interview/questions", {
                role: role.trim(),
                company: company.trim(),
                experience,
                type,
                difficulty,
                questionCount,
            });

            if (!data.success || !Array.isArray(data.questions) || data.questions.length !== questionCount) {
                throw new Error("The interview service returned an invalid question set.");
            }

            setQuestions(data.questions);
            setMessages([{ role: 'ai', text: data.questions[0] }]);
            setSeconds(0);
            setScores(null);
            setFeedback("");
            setStage('interview');
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Could not start the interview.");
        } finally {
            setIsStarting(false);
        }
    }

    async function finishInterview(answers) {
        if (answers.length === 0) {
            toast.error("Answer at least one question before ending the interview.");
            return;
        }

        if (isDemo) {
            const averageWords = answers.reduce((total, item) => total + item.trim().split(/\s+/).length, 0) / answers.length;
            const completion = Math.round((answers.length / questions.length) * 100);
            const answerDetail = Math.min(95, Math.round(45 + averageWords * 1.5));
            const clarity = Math.min(95, Math.round(50 + averageWords));
            const demoScores = {
                communication: Math.min(95, Math.round(55 + averageWords)),
                technicalDepth: answerDetail,
                confidence: Math.min(95, Math.round(50 + completion * 0.4)),
                clarity,
            };
            demoScores.overall = Math.round(
                (demoScores.communication + demoScores.technicalDepth + demoScores.confidence + demoScores.clarity) / 4
            );
            setScores(demoScores);
            setFeedback("Offline demo estimate based on answer length only; it is not an AI assessment.");
            setStage('result');
            return;
        }

        setIsThinking(true);
        try {
            const { data } = await axios.post("/api/interview/evaluate", {
                role: role.trim(),
                company: company.trim(),
                experience,
                type,
                questions,
                answers,
            });

            if (!data.success || !data.scores || typeof data.feedback !== "string") {
                throw new Error("The interview service returned invalid feedback.");
            }

            setScores(data.scores);
            setFeedback(data.feedback);
            setStage('result');
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Could not evaluate your answers.");
        } finally {
            setIsThinking(false);
        }
    }

    async function handleSend() {
        if (answeredCount >= questions.length) {
            await finishInterview(messages.filter((message) => message.role === 'user').map((message) => message.text));
            return;
        }
        if (!answer.trim() || isThinking) return;

        const nextMessages = [...messages, { role: 'user', text: answer.trim() }];
        setMessages(nextMessages);
        setAnswer('');

        const answeredSoFar = nextMessages.filter((m) => m.role === 'user').length;

        if (answeredSoFar < questions.length) {
            setMessages([...nextMessages, { role: 'ai', text: questions[answeredSoFar] }]);
        } else {
            await finishInterview(nextMessages.filter((message) => message.role === 'user').map((message) => message.text));
        }
    }

    async function handleEndEarly() {
        await finishInterview(messages.filter((message) => message.role === 'user').map((message) => message.text));
    }

    function handleRestart() {
        setStage('setup');
        setQuestions([]);
        setMessages([]);
        setAnswer('');
        setIsThinking(false);
        setSeconds(0);
        setScores(null);
        setFeedback("");
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

                        <button className="iv-start-btn" disabled={!role.trim() || isStarting} onClick={handleStart}>
                            {isStarting ? "Preparing interview..." : "Start the interview"}
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
                            <button className="iv-end-btn" disabled={isThinking} onClick={handleEndEarly}>End Early</button>
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
                            placeholder={answeredCount >= questions.length ? "Your answers are being evaluated..." : "Type your answer here..."}
                            value={answer}
                            disabled={isThinking || answeredCount >= questions.length}
                            onChange={(e) => setAnswer(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        ></textarea>
                        <button
                            className="iv-send-btn"
                            disabled={isThinking || (answeredCount < questions.length && !answer.trim())}
                            onClick={handleSend}
                        >
                            {isThinking ? "Evaluating..." : answeredCount >= questions.length ? "Retry evaluation" : "Send answer"}
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
                        <p className="iv-result-sub">{feedback}</p>

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