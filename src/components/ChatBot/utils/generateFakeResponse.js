import {
  SkillsInfo,
  experiences,
  education,
  projects,
} from "../../../constants.js";

export const generateFakeResponse = (question) => {
  const lowerQuestion = question.toLowerCase();

  // PROJECTS
  if (lowerQuestion.includes("project")) {
    const projectNames = projects
      .slice(0, 3)
      .map((project) => project.title)
      .join(", ");

    return `Manav has built several projects including ${projectNames}. These projects focus on full-stack development, automation, and modern UI experiences.`;
  }

  // SKILLS / TECHNOLOGIES
  if (
    lowerQuestion.includes("skill") ||
    lowerQuestion.includes("technology") ||
    lowerQuestion.includes("stack")
  ) {
    const skills = SkillsInfo.flatMap((category) =>
      category.skills.map((skill) => skill.name),
    )
      .slice(0, 8)
      .join(", ");

    return `Manav works with technologies like ${skills}. He focuses mainly on MERN stack development, scalable frontend systems, backend APIs, and automation tools.`;
  }

  // EXPERIENCE
  if (lowerQuestion.includes("experience")) {
    const latestExperience = experiences.at(-1);

    return `Manav has experience working as ${latestExperience.role} at ${latestExperience.company}, where he worked on scalable applications, frontend systems, and backend integrations.`;
  }

  // EDUCATION
  if (lowerQuestion.includes("education") || lowerQuestion.includes("study")) {
    const latestEducation = education[0];

    return `Manav is pursuing ${latestEducation.degree} from ${latestEducation.school}. He has a strong interest in software engineering, full-stack development, and AI automation systems.`;
  }

  // BACKEND
  if (lowerQuestion.includes("backend")) {
    return `Yes — Manav works with backend technologies like Node.js, Express.js, MongoDB, REST APIs, authentication systems, and scalable server-side architectures.`;
  }

  // AI
  if (lowerQuestion.includes("ai") || lowerQuestion.includes("automation")) {
    return `Manav is currently exploring AI automation systems, browser automation, intelligent assistants, and scalable AI-integrated web applications.`;
  }

  // DEFAULT FALLBACK
  return `I'm still learning to answer that question 🚀`;
};
