export const cv = "mailto:asrajput2225@gmail.com?subject=Resume%20Request";

export const socialMedia = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://x.com/",
  leetcode: "https://www.behance.net/",
};

export const contactInfo = {
  email: "asrajput2225@gmail.com",
  mobile: "+91 9873276688",
};

const creativeLogo = () => "/creative_logo/creative.svg";
const portfolioArt = (name) => `/work_logo/${name}.svg`;

export const SkillsInfo = [
  {
    title: "Visual Design",
    skills: [
      { name: "Adobe Photoshop", logo: creativeLogo("photoshop") },
      { name: "Photo Retouching", logo: creativeLogo("retouching") },
      { name: "Brand Design", logo: creativeLogo("branding") },
      { name: "Social Creatives", logo: creativeLogo("social") },
      { name: "Typography", logo: creativeLogo("typography") },
      { name: "Composition", logo: creativeLogo("composition") },
    ],
  },
  {
    title: "Video & Motion",
    skills: [
      { name: "Adobe Premiere Pro", logo: creativeLogo("premiere") },
      { name: "After Effects", logo: creativeLogo("aftereffects") },
      { name: "Video Editing", logo: creativeLogo("video") },
      { name: "Motion Graphics", logo: creativeLogo("motion") },
      { name: "Color Grading", logo: creativeLogo("color") },
      { name: "Short-form Reels", logo: creativeLogo("reels") },
    ],
  },
  {
    title: "AI Creative Tools",
    skills: [
      { name: "AI Video", logo: creativeLogo("ai-video") },
      { name: "Generative Images", logo: creativeLogo("ai-image") },
      { name: "Prompt Design", logo: creativeLogo("prompt") },
      { name: "Smart Editing", logo: creativeLogo("smart-edit") },
      { name: "Concept Ideation", logo: creativeLogo("idea") },
      { name: "Content Repurposing", logo: creativeLogo("repurpose") },
    ],
  },
  {
    title: "Creative Workflow",
    skills: [
      { name: "Storyboarding", logo: creativeLogo("storyboard") },
      { name: "Visual Research", logo: creativeLogo("research") },
      { name: "Campaign Design", logo: creativeLogo("campaign") },
      { name: "Client Collaboration", logo: creativeLogo("collaboration") },
      { name: "Asset Management", logo: creativeLogo("assets") },
      { name: "Quality Control", logo: creativeLogo("quality") },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "/asr.jpeg",
    role: "Creative Designer & AI Video Editor",
    company: "Pyramid Timber Industries Pvt. Ltd.",
    date: "Jan 2025 – May 2026",
    points: [
      "Designed polished marketing creatives, product visuals, presentations, and social-media assets aligned with the brand’s visual language.",
      "Edited short-form videos and promotional content with strong pacing, transitions, captions, sound, and color treatment.",
      "Used generative AI tools to accelerate visual ideation, storyboarding, image creation, and video-production workflows.",
      "Retouched product photography in Adobe Photoshop, improving composition, consistency, and campaign readiness.",
      "Collaborated with stakeholders to translate briefs into clear, engaging visual communication across digital formats.",
    ],
    skills: ["Photoshop", "AI Video", "Video Editing", "Photo Retouching", "Brand Design", "Social Media Design"],
  },
];

export const education = [
  {
    id: 0,
    img: "/education_logo/ignou.webp",
    school: "Indira Gandhi National Open University (IGNOU)",
    date: "2023 – 2026",
    grade: "In progress",
    degree: "Bachelor of Computer Applications (BCA)",
    points: [
      "Building a broad digital foundation spanning computer applications, visual communication, and modern creative workflows.",
      "Combining technical confidence with a strong interest in design, editing, and AI-assisted content production.",
    ],
  },
  {
    id: 1,
    img: "/education_logo/lbs.webp",
    school: "Indian Institute of Computer Science (IICS)",
    date: "2023 – 2026",
    grade: "In progress",
    degree: "Master Diploma in Computer Engineering (MDCE)",
    points: [
      "Developing practical computer and software skills that support efficient creative production.",
      "Learning structured digital workflows, file management, and technology-assisted problem solving.",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Brand Campaign Visuals",
    image: portfolioArt("brand-campaign"),
    points: [
      "Created a cohesive campaign system across social posts, promotional banners, and product-led compositions.",
      "Used strong typography, color, and image treatment to keep every format recognisable and consistent.",
      "Prepared adaptable assets for fast publishing across multiple digital channels.",
    ],
    tags: ["Photoshop", "Brand Design", "Art Direction", "Social Media"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "AI Product Film",
    image: portfolioArt("ai-film"),
    points: [
      "Developed an AI-assisted product-film concept from moodboard and storyboard through final edit.",
      "Combined generated scenes, motion, sound design, captions, and color grading into a focused short-form narrative.",
      "Designed the workflow for quick creative exploration without losing visual consistency.",
    ],
    tags: ["AI Video", "Video Editing", "Storyboarding", "Color Grading"],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Surreal Photo Manipulation",
    image: portfolioArt("photo-art"),
    points: [
      "Built a cinematic composite from multiple image sources using masking, lighting, shadows, and atmospheric effects.",
      "Balanced technical retouching with imaginative visual storytelling for a striking final artwork.",
      "Created alternate crops and treatments for portfolio and social-media presentation.",
    ],
    tags: ["Photo Manipulation", "Retouching", "Compositing", "Photoshop"],
    github: "",
    webapp: "",
  },
];
