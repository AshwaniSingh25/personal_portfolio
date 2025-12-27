//Frontend Section Logo's
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import angular from "./assets/tech_logo/angular.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
// import materialuiLogo from "./assets/tech_logo/materialui.png";


// Backend & Database Section Logo's
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Languages Section Logo's
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";

// Tools & Platforms Section Logo's
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png"; // Assuming 'mcLogo' is MongoDB Compass
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
// import freelance from "./assets/company_logo/freelancer-logo.png";
import jogazLogo from "./assets/company_logo/jogaz_logo.jpeg"; // Placeholder for new company logo
import concentrixLogo from "./assets/company_logo/concentrix_logo.jpeg"; // Placeholder for new company logo

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
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Angular", logo: angular },
      { name: "Redux", logo: reduxLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP (Animation)", logo: gsapLogo },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "REST APIs", logo: postmanLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];


// ====================================================================
// REVISED EXPERIENCE SECTION - Focused on Impact and Seniority
// ====================================================================
export const experiences = [
  {
    id: 0,
    img: jogazLogo,
    role: "Full Stack Developer",
    company: "Jogaz Info Pvt. Ltd.",
    date: "October 2025 - Present",
    points: [
      "Working on the development and maintenance of a web-based trading support platform.",
      "Building custom tools and strategy interfaces to help traders configure and manage their workflows.",
      "Developing the frontend using Angular and TypeScript for better structure and type safety.",
      "Integrating frontend components with backend services using REST APIs.",
      "Handling bug fixes, feature enhancements, and regular maintenance to ensure platform stability.",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "REST APIs",
      "Web Application Development",
      "Bug Fixing",
      "Feature Enhancement",
      "Maintenance & Support",
    ],
  },
  {
    id: 1,
    img: concentrixLogo,
    role: "Chat Support Advisor",
    company: "Concentrix",
    date: "September 2025 - October 2025",
    points: [
      "Worked on the Amazon customer support process, handling customer queries through live chat.",
      "Resolved order, account, and delivery-related issues while maintaining service quality standards.",
      "Used internal CRM and ticketing systems to document, track, and escalate customer issues.",
      "Maintained high customer satisfaction and SLA compliance in a fast-paced environment.",
      "Developed strong communication, problem-solving, and time-management skills.",
    ],
    skills: [
      "Customer Communication",
      "Problem Solving",
      "CRM Tools",
      "Ticketing Systems",
      "Time Management",
      "Professional Communication",
      "Cross-cultural Communication",
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
    degree: "Bachelor of Computer Applications (BCA)",
    points: [
      "Studied core subjects including Data Structures, Database Management Systems (RDBMS), and Software Engineering.",
      "Built a strong foundation in programming, data handling, and web application development.",
      "Applied theoretical concepts through practical projects and assignments.",
    ],
  },
  {
    id: 1,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2021 - March 2022",
    grade: "88.74%",
    degree: "CBSE (Class XII), Arts with Economics and Computer Science",
    points: [
      "Focused on Economics and Computer Science with an emphasis on analytical and logical thinking.",
      "Learned basic programming concepts and problem-solving techniques.",
    ],
  },
  {
    id: 2,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2019 - March 2020",
    grade: "87.54%",
    degree: "CBSE (Class X), Science with Computer Applications",
    points: [
      "Studied Science and Computer Applications with a focus on logic and mathematics.",
      "Developed a foundation in problem-solving and computational thinking.",
    ],
  },
];

// Project Section
export const projects = [
  {
    id: 0,
    title: "QuickBlog AI – High-Performance Blogging Platform",
    image: quickblogLogo,
    points: [
      "Built a full-stack blogging platform using the MERN stack with a focus on performance and scalability.",
      "Designed a normalized MongoDB schema to efficiently store and retrieve blog content and user data.",
      "Implemented server-side caching to improve response times for frequently accessed content.",
      "Secured API endpoints using JWT and cookie-based authentication.",
      "Integrated Gemini AI API to assist with content generation and enhancement.",
    ],
    tags: [
      "MERN Stack",
      "React.js",
      "REST API",
      "JWT",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Gemini AI Integration",
      "Tailwind CSS",
      "CRUD Operations",
    ],
    github: "https://github.com/manavpal-dev/QuickBlog_Project.git",
    webapp: "https://quickblog-beta-eight.vercel.app/",
  },
  {
    id: 1,
    title: "VastraCraft – eCommerce Web Application",
    image: vastracraft,
    points: [
      "Developed a modern eCommerce web application using React and Node.js.",
      "Implemented Redux for managing shopping cart and checkout state.",
      "Built a responsive product listing and detail pages optimized for different screen sizes.",
      "Added backend logic to handle order processing and maintain inventory consistency.",
      "Focused on performance optimization and clean component structure.",
    ],
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "E-commerce Logic",
      "State Management",
      "Performance Optimization",
    ],
    github: "https://codingmasterweb.in/",
    webapp: "https://ecommerce-project-lake-eight.vercel.app/",
  },
  {
    id: 2,
    title: "GitHub Profile Detective – API-Based Dashboard",
    image: github_project_logo,
    points: [
      "Built a React application to fetch and display GitHub user data using the GitHub public API.",
      "Handled API errors and edge cases such as invalid usernames and rate limits.",
      "Implemented loading and error states to improve user experience.",
      "Optimized component re-rendering using React hooks and state management best practices.",
      "Designed a clean and responsive UI using Tailwind CSS.",
    ],
    tags: [
      "React",
      "External API Integration",
      "Error Handling",
      "Rate Limiting",
      "React Hooks",
      "Tailwind CSS",
    ],
    github: "https://github.com/manavpal-dev/Github-Profile-Detective.git",
    webapp: "https://github-profile-detective-orpin.vercel.app/",
  },
];
