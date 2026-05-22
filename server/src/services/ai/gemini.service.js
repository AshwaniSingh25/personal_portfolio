import {
  SkillsInfo,
  experiences,
  education,
  projects,
} from "../../data/portfolio.data.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateAIResponse = async (userMessage, conversationHistory) => {
  try {
    // PROJECTS
    const projectContext = [...projects]
      .reverse()
      .slice(0, 5)
      .map(
        (project) =>
          `Title: ${project.title} Description: ${project.points.join(", ")} Tech Stack: ${project.tags.join(", ")} Live: ${project.webapp} Gtihub: ${project.github}`,
      )
      .join("\n\n");

    // SKILLS
    const skillsContext = SkillsInfo.flatMap((category) =>
      category.skills.map((skill) => skill.name),
    ).join(", ");

    // EXPERIENCE
    const experienceContext = [...experiences]
      .reverse()
      .map(
        (exp) =>
          `Role: ${exp.role} Company: ${exp.company} Duration: ${exp.date} Job Description: ${exp.points.join(", ")}  skills: ${exp.skills.join(", ")}`,
      )
      .join("\n\n");

    // EDUCATION
    const educationContext = [...education]
      .reverse()
      .map(
        (edu) =>
          `Degree: ${edu.degree} Institution: ${edu.school} Grade: ${edu.grade} About: ${edu.points.join(", ")} `,
      )
      .join("\n\n");

    // FINAL PROMPT
    const prompt = `
You are Manav's AI portfolio assistant.

Your purpose is to answer only questions related to:
- Manav's projects
- technical skills
- experience
- education
- technologies
- career goals
- development journey

Rules:
- Be concise and professional.
- Keep responses conversational.
- Answer only using the provided portfolio information.
- Do not invent fake experience or projects.
- If information is unavailable, politely say you do not know.
- If user asks unrelated questions, redirect them back to portfolio-related topics.

Formatting Rules:
- Use bullet points when listing items.
- Keep responses concise.
- Use markdown formatting.
- Use clickable links when available.
- Avoid large paragraphs.

======================================
MANAV'S PORTFOLIO DATA
======================================

Skills:
${skillsContext}

Experience:
${experienceContext}

Education:
${educationContext}

Projects:
${projectContext}

======================================
CONVERSATION HISTORY
======================================

${conversationHistory}

======================================
CURRENT USER QUESTION
======================================

${userMessage}
`;

    // GEMINI RESPONSE
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: prompt,

      // stream: true,
    });

    // RETURN CLEAN RESPONSE
    return {
      success: true,

      message: response.text?.trim() || "I couldn't generate a response.",
    };
  } catch (error) {
    console.error("AI Service Error:", error);

    return {
      success: false,

      message: "AI service is currently unavailable.",
    };
  }
};
