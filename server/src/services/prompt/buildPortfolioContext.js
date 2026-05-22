import {
  SkillsInfo,
  experiences,
  education,
  projects,
} from "../../data/portfolio.data.js";

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

export const portfolioContext = `
======================================
SKILLS
======================================

${skillsContext}

======================================
EXPERIENCE
======================================

${experienceContext}

======================================
EDUCATION
======================================

${educationContext}

======================================
PROJECTS
======================================

${projectContext}
`;
