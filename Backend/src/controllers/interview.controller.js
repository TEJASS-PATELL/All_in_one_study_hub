import { GoogleGenerativeAI } from "@google/generative-ai";

const QUESTION_COUNTS = new Set([5, 8, 10, 15, 20]);
const INTERVIEW_TYPES = new Set(["technical", "hr", "behavioral", "systemDesign"]);
const DIFFICULTIES = new Set(["easy", "medium", "hard"]);
const EXPERIENCE_LEVELS = new Set(["Fresher", "1-3 Yrs", "3-5 Yrs", "5+ Yrs"]);

const getModel = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  return new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: "gemini-1.5-flash" });
};

const parseJsonResponse = (text) => {
  const cleaned = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  return JSON.parse(cleaned);
};

const isStringWithin = (value, maxLength) =>
  typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;

const badRequest = (res, message) => res.status(400).json({ success: false, message });

export const generateInterviewQuestions = async (req, res) => {
  const { role, company = "", experience, type, difficulty, questionCount } = req.body ?? {};

  if (
    !isStringWithin(role, 120) ||
    (company && !isStringWithin(company, 120)) ||
    !EXPERIENCE_LEVELS.has(experience) ||
    !INTERVIEW_TYPES.has(type) ||
    !DIFFICULTIES.has(difficulty) ||
    !QUESTION_COUNTS.has(questionCount)
  ) {
    return badRequest(res, "Invalid interview setup.");
  }

  const model = getModel();
  if (!model) {
    return res.status(503).json({ success: false, message: "AI interview is not configured." });
  }

  try {
    const prompt = `Create ${questionCount} distinct interview questions for the role ${JSON.stringify(role)}.
Company: ${JSON.stringify(company || "Not specified")}
Experience level: ${experience}
Round: ${type}
Difficulty: ${difficulty}
Return only a JSON object in this exact shape: {"questions":["question 1", "..."]}.
Every question must be a non-empty string. Do not include answers, markdown, or commentary.`;
    const result = await model.generateContent(prompt);
    const parsed = parseJsonResponse(result.response.text());
    const questions = parsed?.questions;

    if (
      !Array.isArray(questions) ||
      questions.length !== questionCount ||
      questions.some((question) => !isStringWithin(question, 1000))
    ) {
      return res.status(502).json({ success: false, message: "AI returned an invalid question set. Please try again." });
    }

    return res.json({ success: true, questions: questions.map((question) => question.trim()) });
  } catch (error) {
    console.error("Interview question generation failed:", error);
    return res.status(502).json({ success: false, message: "Could not generate interview questions. Please try again." });
  }
};

export const evaluateInterviewAnswers = async (req, res) => {
  const { role, company = "", experience, type, questions, answers } = req.body ?? {};

  if (
    !isStringWithin(role, 120) ||
    (company && !isStringWithin(company, 120)) ||
    !EXPERIENCE_LEVELS.has(experience) ||
    !INTERVIEW_TYPES.has(type) ||
    !Array.isArray(questions) ||
    !Array.isArray(answers) ||
    !QUESTION_COUNTS.has(questions.length) ||
    answers.length === 0 ||
    answers.length > questions.length ||
    questions.some((question) => !isStringWithin(question, 1000)) ||
    answers.some((answer) => !isStringWithin(answer, 5000))
  ) {
    return badRequest(res, "Invalid interview answers.");
  }

  const model = getModel();
  if (!model) {
    return res.status(503).json({ success: false, message: "AI interview is not configured." });
  }

  try {
    const responseFormat = {
      communication: "integer from 0 to 100",
      technicalDepth: "integer from 0 to 100",
      confidence: "integer from 0 to 100",
      clarity: "integer from 0 to 100",
      feedback: "specific, constructive feedback in 2-4 sentences",
    };
    const qa = questions.slice(0, answers.length).map((question, index) => ({
      question,
      answer: answers[index],
    }));
    const prompt = `Assess this mock interview fairly. Score only the candidate's submitted answers, not their identity.
Role: ${JSON.stringify(role)}
Company: ${JSON.stringify(company || "Not specified")}
Experience: ${experience}
Round: ${type}
Question and answer pairs: ${JSON.stringify(qa)}
Return only a JSON object with these fields: ${JSON.stringify(responseFormat)}.
All scores must be integers between 0 and 100. Do not include markdown or commentary.`;
    const result = await model.generateContent(prompt);
    const parsed = parseJsonResponse(result.response.text());
    const scoreKeys = ["communication", "technicalDepth", "confidence", "clarity"];

    if (
      scoreKeys.some((key) => !Number.isInteger(parsed?.[key]) || parsed[key] < 0 || parsed[key] > 100) ||
      !isStringWithin(parsed?.feedback, 2000)
    ) {
      return res.status(502).json({ success: false, message: "AI returned invalid interview feedback. Please try again." });
    }

    const scores = Object.fromEntries(scoreKeys.map((key) => [key, parsed[key]]));
    scores.overall = Math.round(scoreKeys.reduce((total, key) => total + scores[key], 0) / scoreKeys.length);

    return res.json({ success: true, scores, feedback: parsed.feedback.trim() });
  } catch (error) {
    console.error("Interview evaluation failed:", error);
    return res.status(502).json({ success: false, message: "Could not evaluate interview answers. Please try again." });
  }
};
