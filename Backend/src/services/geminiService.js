import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateRoadmap(profileData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `
You are an expert career coach and industry mentor. Based on the user's profile below, create a **highly detailed, practical, and actionable preparation roadmap**.

User Preferences for Roadmap:
- Target Job Type: ${profileData.jobType}
- Interested Roles: ${profileData.jobRoles}
- Education: ${profileData.education}
- Skills: ${profileData.skills}
- Current Preparation Status: ${profileData.status}
- Desired Roadmap Duration: ${profileData.roadmapDuration}
- Additional Notes: ${profileData.notes}

Roadmap Requirements:
1. Create a **title** string that includes the job/exam role and the roadmap duration in a clear format, e.g., "Best Roadmap for SSC-CGL Exam in 6 Months".
2. Create a **description** string (~100 words) summarizing the roadmap’s preparation strategy, goals, and approach, specifically mentioning the duration (e.g., 6 months or 1 year) and how the plan is tailored to achieve the goal within that time.
3. Provide the **roadmap** as a JSON array of detailed steps, where each step includes:
   - Step number
   - Clear, practical title
   - Actionable description (50-60 words minimum)
   - Estimated timeframe (min–max duration)
   - Optional **tips** (practical advice for this step approx 30-35 words)
   - Optional **notes** (extra info or clarifications approx 30-35 words)
   - Optional **importantPoints** (key points or highlights approx 30-35 words)
4. Give priority to the user's additional notes and integrate them into relevant steps.
5. Include technical and soft skills relevant to the target job type.
6. Ensure all advice is realistic and achievable within the given timeframe.
7. The output must be a JSON object with exactly three keys: "title" and "steps" (the roadmap array).
8. Output ONLY this JSON object, with no extra text or commentary.

Example output format:

{
  "title": "Best Roadmap for SSC-CGL Exam in 6 Months",
  "steps": [
    {
      "step": 1,
      "title": "Understand Exam Pattern and Syllabus",
      "description": "Study the SSC-CGL exam structure, syllabus, and question types thoroughly. Identify strengths and weaknesses to prioritize your preparation accordingly.",
      "timeframe": "1-2 weeks",
      "tips": "Use official SSC resources and past papers.",
      "notes": "Pay special attention to sections with higher weightage.",
      "importantPoints": "Familiarize yourself with the exam format and timing."
    },
    {
      "step": 2,
      "title": "Build Core Skills in Quantitative Aptitude",
      "description": "Focus on arithmetic, algebra, and geometry basics. Practice with standard textbooks and online platforms to build speed and accuracy.",
      "timeframe": "2-3 months",
      "tips": "Solve daily practice problems and track progress.",
      "notes": "Include problem-solving sessions under timed conditions.",
      "importantPoints": "Consistency is key to improving accuracy."
    }
    // More steps...
  ]
}
    `;

    const result = await model.generateContent(prompt);
    let text = await result.response.text();

    text = text.trim();
    if (text.startsWith("```")) {
      text = text.replace(/^```json?\n?/, "").replace(/```$/, "").trim();
    }

    try {
      return JSON.parse(text);
    } catch (parseError) {
      console.error("JSON parse error:", parseError.message);
      console.error("Response text was:", text);
      throw new Error("Failed to parse JSON from AI response");
    }
  } catch (err) {
    console.error("Gemini Roadmap Generation Error:", err.message);
    return {
      title: "Error",
      description: "Could not generate roadmap due to an error.",
      steps: []
    };
  }
}

