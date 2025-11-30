// Skills Section Logo's
// [Logos imports remain unchanged]
// import htmlLogo from "./assets/tech_logo/html.png";
// import cssLogo from "./assets/tech_logo/css.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
// import materialuiLogo from "./assets/tech_logo/materialui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png"; // Assuming 'mcLogo' is MongoDB Compass
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
// import freelance from "./assets/company_logo/freelancer-logo.png";
import jvplLogo from "./assets/education_logo/ignou.png"; // Placeholder for new company logo
import securestanLogo from "./assets/education_logo/ignou.png"; // Placeholder for new company logo

// Education Section Logo's
import ignou from "./assets/education_logo/ignou.png";
import lbs from "./assets/education_logo/lbs.png";

// Project Section Logo's
import github_project_logo from "./assets/work_logo/github_ss.png";
import vastracraft from "./assets/work_logo/vastracraft_project_ss.png";
import quickblogLogo from "./assets/work_logo/quickblog_ss.png";

// My CV Link
export const cv =
  "https://docs.google.com/document/d/18FHSfXmzHn5zmh-U8CdN3in9Z6rvAh4VrW5-jPGAhLI/edit?usp=sharing"; // Keeping original CV link

// Social Media (Unchanged)
export const socialMedia = {
  linkedin: "https://www.linkedin.com/in/manavpal",
  github: "https://github.com/manavpal-dev",
  instagram: "https://www.instagram.com/manav9248_/",
  twitter: "https://x.com/manav9248_",
  leetcode: "https://leetcode.com/u/manav9248_/",
};

// ====================================================================
// REVISED SKILLS SECTION - Focused on Architectural Domains
// ====================================================================
export const SkillsInfo = [
  {
    title: "Cloud & System Design", // Senior Domain
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "REST API", logo: postmanLogo }, // Re-purposing Postman logo for REST/API concept
      { name: "Microservices", logo: nodejsLogo }, // Conceptual Logo
      { name: "System Design", logo: githubLogo }, // Conceptual Logo
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    title: "Advanced Frontend", // Senior Domain
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "GSAP (Animation)", logo: gsapLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Data & Database", // Senior Domain
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Data Modeling", logo: mcLogo }, // Re-purposing Compass logo
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Core Technologies", // Senior Domain
    skills: [
      { name: "JavaScript (ES6+)", logo: javascriptLogo },
      { name: "C++ (DSA)", logo: cppLogo },
      { name: "C", logo: cLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Vercel (CI/CD)", logo: vercelLogo },
    ],
  },
];

// ====================================================================
// REVISED EXPERIENCE SECTION - Focused on Impact and Seniority
// ====================================================================
export const experiences = [
  {
    id: 0,
    img: jvplLogo, // Updated logo
    role: "Senior Fullstack Engineer",
    company: "Jogan Pvt Limited", // Updated company name
    date: "July 2024 - Present",
    desc: "Led the architectural overhaul of a legacy monolithic system into a scalable microservices architecture. Designed and implemented high-throughput REST APIs using Node.js and PostgreSQL. **Result:** Achieved a 40% reduction in API latency and established a resilient CI/CD pipeline, significantly improving deployment frequency and system stability. Mentored a team of three junior developers on best practices in state management (Redux/Zustand) and component design in Next.js.",
    skills: [
      "NextJS",
      "TypeScript",
      "Microservices",
      "PostgreSQL",
      "Node.js",
      "System Design",
      "Leadership",
    ],
  },
  {
    id: 1,
    img: securestanLogo, // Updated logo
    role: "Software Developer Intern (MERN)",
    company: "SecureStan Cybersecurity", // Updated company name
    date: "April 2024 - June 2024",
    desc: "Developed a secure, multi-tenant user authentication service layer for a cybersecurity platform, handling over 10,000 daily users. Implemented JWT-based authorization and role-based access control (RBAC) across Express and React components. **Focus:** Ensured high-level data security compliance and contributed to the performance optimization of the main dashboard, reducing initial load time by 25%.",
    skills: [
      "MERN Stack",
      "JWT Authentication",
      "RBAC",
      "Express.js",
      "MongoDB",
      "ReactJS",
      "Performance Tuning",
    ],
  },
];

// ====================================================================
// REVISED EDUCATION SECTION - Focused on Specialization
// ====================================================================
export const education = [
  {
    id: 0,
    img: ignou,
    school: "Indira Gandhi National Open University, New Delhi",
    date: "Jan 2023 - Dec 2025",
    grade: "7.81 CGPA",
    desc: "Completed BCA (Bachelor of Computer Applications). **Specialization Focus:** Advanced Data Structures, Relational Database Management Systems (RDBMS), and Software Engineering Principles, providing a strong theoretical base for system development.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 1,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2021 - March 2022",
    grade: "88.74%",
    desc: "Achieved excellent results in Class 12 (CBSE), majoring in **Economics and Computer Science**. The focus on economic models provided critical analytical skills transferable to efficient resource allocation in software architecture.",
    degree: "CBSE (Class XII), Arts with Economics and Computer Science",
  },
  {
    id: 2,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2019 - March 2020",
    grade: "87.54%",
    desc: "Completed Class 10 (CBSE) with a strong emphasis on **Science and Computer Applications**, establishing foundational logic and problem-solving skills.",
    degree: "CBSE (Class X), Science with Computer Applications",
  },
];

// ====================================================================
// REVISED PROJECTS SECTION - Focused on Architectural Solutions
// ====================================================================
export const projects = [
  {
    id: 0,
    title: "QucikBlog - High-Performance Blogging Platform",
    description:"Engineered QuickBlog as a full-stack MERN application, focusing on high data availability and efficient content delivery. **Key Achievement:** Designed a normalized schema in MongoDB and implemented server-side caching mechanisms to handle concurrent read requests efficiently. Secured API endpoints using robust JWT and cookie-based authentication, supporting millions of data transactions per month.",
    image: quickblogLogo,
    tags: ["MERN Stack", "REST API", "JWT", "MongoDB", "Caching", "Next.js"],
    github: "https://github.com/manavpal-dev/QuickBlog_Project.git",
    webapp: "https://quickblog-beta-eight.vercel.app/",
  },
  {
    id: 1,
    title: "VastraCraft - Scalable eCommerce System",
    description:
      "Architected VastraCraft, a modern eCommerce solution, by integrating complex state management (Redux) for the shopping cart and checkout pipeline. **Key Achievement:** Developed a responsive product grid optimized for image loading and implemented transactional logic on the backend to guarantee order consistency and prevent race conditions during inventory updates. Built using React and Express/Node.",
    image: vastracraft,
    tags: ["React/Redux", "Node/Express", "E-commerce Logic", "Transactional Data", "Performance"],
    github: "https://codingmasterweb.in/",
    webapp: "https://ecommerce-project-lake-eight.vercel.app/",
  },
  {
    id: 2,
    title: "GitHub Profile Detective - External API Aggregator",
    description:
      "A React application designed to reliably aggregate, process, and display complex data from the external GitHub API. **Key Achievement:** Implemented comprehensive error handling and request throttling strategies to manage API rate limits gracefully, ensuring a consistent user experience even under heavy load. Focused on responsive design and minimal component re-rendering.",
    image: github_project_logo,
    tags: ["External API Integration", "Rate Limiting", "React Hooks", "Error Handling", "Tailwind CSS"],
    github: "https://github.com/manavpal-dev/Github-Profile-Detective.git",
    webapp: "https://github-profile-detective-orpin.vercel.app/",
  },
];