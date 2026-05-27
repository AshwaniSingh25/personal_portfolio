import { contextSections } from "../services/prompt/buildPortfolioContext.js";

export const detectRelevantContext = (userMessage) => {
  const message = userMessage.toLowerCase();

  // Projects
  if (
    message.includes("project") ||
    message.includes("quickblog") ||
    message.includes("vastracraft") ||
    message.includes("ignou")
  ) {
    return contextSections.projects;
  }

  // Skills
  if (
    message.includes("skill") ||
    message.includes("technology") ||
    message.includes("stack") ||
    message.includes("full stack") ||
    message.includes("frontend")
  ) {
    return contextSections.skills;
  }

  // EXPERIENCE
  if (
    message.includes("experience") ||
    message.includes("work") ||
    message.includes("company")
  ) {
    return contextSections.experience;
  }

  // EDUCATION
  if (
    message.includes("education") ||
    message.includes("college") ||
    message.includes("degree") ||
    message.includes("bca")
  ) {
    return contextSections.education;
  }

  // CONTACTS
  if (
    message.includes("resume") ||
    message.includes("cv") ||
    message.includes("linkedin") ||
    message.includes("github") ||
    message.includes("contact")
  ) {
    return contextSections.socials;
  }
  // DEFAULT
  return `
${contextSections.skills}

${contextSections.projects}
`;
};
