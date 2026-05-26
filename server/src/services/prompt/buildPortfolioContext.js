import {
  cv,
  contactInfo,
  socialMedia,
  SkillsInfo,
  experiences,
  education,
  projects,
} from "../../data/portfolio.data.js";

const formatList = (items) => items.map((item) => `- ${item}`).join("\n");

const formatLinks = (links) =>
  Object.entries(links)
    .map(([name, url]) => `- ${name}: ${url}`)
    .join("\n");

const formatSkills = (skillCategories) =>
  skillCategories
    .map(
      (category) =>
        `Category: ${category.title}\n${formatList(
          category.skills.map((skill) => skill.name),
        )}`,
    )
    .join("\n\n");

const formatExperience = (experienceItems) =>
  [...experienceItems]
    .reverse()
    .map(
      (experience) => `Role: ${experience.role}
Company: ${experience.company}
Duration: ${experience.date}
Responsibilities:
${formatList(experience.points)}
Skills Used:
${formatList(experience.skills)}`,
    )
    .join("\n\n");

const formatEducation = (educationItems) =>
  [...educationItems]
    .reverse()
    .map(
      (item) => `Institution: ${item.school}
Degree: ${item.degree}
Duration: ${item.date}
Grade: ${item.grade}
Details:
${formatList(item.points)}`,
    )
    .join("\n\n");

const formatProjects = (projectItems) =>
  [...projectItems]
    .reverse()
    .map(
      (project) => `Project: ${project.title}
Live URL: ${project.webapp}
GitHub URL: ${project.github}
Tech Stack:
${formatList(project.tags)}
Details:
${formatList(project.points)}`,
    )
    .join("\n\n");

export const portfolioContext = `
======================================
PROFILE LINKS
======================================

Resume/CV: ${cv}

Contact:
${formatLinks(contactInfo)}

Social Media:
${formatLinks(socialMedia)}

======================================
SKILLS
======================================

${formatSkills(SkillsInfo)}

======================================
EXPERIENCE
======================================

${formatExperience(experiences)}

======================================
EDUCATION
======================================

${formatEducation(education)}

======================================
PROJECTS
======================================

${formatProjects(projects)}
`.trim();
