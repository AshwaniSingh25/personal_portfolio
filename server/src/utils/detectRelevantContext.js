import { contextSections } from "../services/prompt/buildPortfolioContext.js";

const intentMap = {
  skills: [
    "skill",
    "skills",
    "technology",
    "technologies",
    "tech stack",
    "stack",
    "frontend",
    "backend",
    "react",
    "node",
    "mongodb",
    "postgresql",
    "javascript",
  ],

  projects: [
    "project",
    "projects",
    "application",
    "website",
    "app",
    "quickblog",
    "vastracraft",
    "github profile detective",
  ],

  experience: ["experience", "work", "company", "job", "internship", "career"],

  education: [
    "education",
    "college",
    "degree",
    "bca",
    "study",
    "university",
    "ignou",
  ],

  socials: ["resume", "cv", "linkedin", "github", "contact", "email", "social"],
};

export const detectRelevantContext = (userMessage) => {
  const message = userMessage.toLowerCase();

  // CHECK EACH CATEGORY
  for (const [section, keywords] of Object.entries(intentMap)) {
    const matched = keywords.some((keyword) => message.includes(keyword));

    if (matched) {
      return contextSections[section];
    }
  }

  // DEFAULT CONTEXT
  return `
${contextSections.skills}

${contextSections.projects}
`;
};
