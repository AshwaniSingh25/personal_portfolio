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

export const contactInfo = {
  email: "manavpal.contact@gmail.com",
  mobile: "+91 9899698835",
};

const techLogo = (fileName) => `/tech_logo/${fileName}`;
const companyLogo = (fileName) => `/company_logo/${fileName}`;
const educationLogo = (fileName) => `/education_logo/${fileName}`;
const workLogo = (fileName) => `/work_logo/${fileName}`;

// Frontend Section Logos
const reactjsLogo = techLogo("reactjs.webp");
const cssLogo = techLogo("css.webp");
const reduxLogo = techLogo("redux.webp");
const nextjsLogo = techLogo("nextjs.png");
const angular = techLogo("angular.webp");
const tailwindcssLogo = techLogo("tailwindcss.webp");
const gsapLogo = techLogo("gsap.webp");
const htmlLogo = techLogo("html.webp");

// Backend & Database Section Logos
const nodejsLogo = techLogo("nodejs.webp");
const expressjsLogo = techLogo("express.webp");
const mysqlLogo = techLogo("mysql.webp");
const mongodbLogo = techLogo("mongodb.webp");
const javascriptLogo = techLogo("javascript.webp");
const postgreLogo = techLogo("postgre.webp");

// Languages Section Logos
const cLogo = techLogo("c.webp");
const cppLogo = techLogo("cpp.webp");
const javaLogo = techLogo("java.webp");
const pythonLogo = techLogo("python.webp");
const typescriptLogo = techLogo("typescript.webp");

// Tools & Platforms Section Logos
const gitLogo = techLogo("git.webp");
const githubLogo = techLogo("github.webp");
const vscodeLogo = techLogo("vscode.webp");
const postmanLogo = techLogo("postman.webp");
const vercelLogo = techLogo("vercel.webp");

// Experience Section Logos
const jogazLogo = companyLogo("jogaz_logo.webp");
const concentrixLogo = companyLogo("concentrix_logo.webp");

// Education Section Logos
const ignou = educationLogo("ignou.webp");
const lbs = educationLogo("lbs.webp");

// Project Section Logos
const github_project_logo = workLogo("github_ss.webp");
const vastracraft = workLogo("vastracraft_project_ss.webp");
const quickblogLogo = workLogo("quickblog-project.webp");
const ignouLogo = workLogo("ignou-project.webp");
const auroraLogo = workLogo("aurora.png");

// Skills Section
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

// Experience Section
export const experiences = [
  {
    id: 0,
    img: "concentrixLogo",
    role: "Full Stack Developer",
    company: "Concentrix",
    date: "July 2025 - Present",
    points: [
      "Developed scalable full-stack web applications using Next.js, React.js, Angular, Node.js, and MongoDB for business clients across multiple domains.",
      "Engineered a real-time trading and portfolio risk management platform using Angular, Node.js, TypeScript, and Zerodha APIs, delivering live market insights, futures forecasting, and secure rate-limited data processing.",
      "Built and deployed portfolio websites and business platforms for CA and consultancy firms, enhancing digital presence and client engagement.",
      "Integrated AI-powered chatbots, authentication systems, and performance optimizations to improve user experience, scalability, and application reliability.",
    ],
    skills: [
      "Angular",
      "React.js",
      "Node.js",
      "AI Integration",
      "AI Chatbot",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Web Application Development",
      "Bug Fixing",
      "Feature Enhancement",
      "Maintenance & Support",
    ],
  },
  // {
  //   id: 1,
  //   img: jogazLogo,
  //   role: "Full Stack Developer",
  //   company: "Jogaz Info Pvt. Ltd.",
  //   date: "October 2025 - December 2025",
  //   points: [
  //     "Working on the development and maintenance of a web-based trading support platform.",
  //     "Building custom tools and strategy interfaces to help traders configure and manage their workflows.",
  //     "Developing the frontend using Angular and TypeScript for better structure and type safety.",
  //     "Integrating frontend components with backend services using REST APIs.",
  //     "Handling bug fixes, feature enhancements, and regular maintenance to ensure platform stability.",
  //   ],
  //   skills: [
  //     "Angular",
  //     "TypeScript",
  //     "REST APIs",
  //     "Web Application Development",
  //     "Bug Fixing",
  //     "Feature Enhancement",
  //     "Maintenance & Support",
  //   ],
  // },
];

// education Section
export const education = [
  {
    id: 0,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2019 - March 2020",
    grade: "72.84%",
    degree: "CBSE (Class X), Science with Computer Applications",
    points: [
      "Studied Science and Computer Applications with a focus on logic and mathematics.",
      "Developed a foundation in problem-solving and computational thinking.",
    ],
  },
  {
    id: 1,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2021 - March 2022",
    grade: "71.74%",
    degree: "CBSE (Class XII), Arts with Economics and Computer Science",
    points: [
      "Focused on Economics and Computer Science with an emphasis on analytical and logical thinking.",
      "Learned basic programming concepts and problem-solving techniques.",
    ],
  },

  {
    id: 2,
    img: ignou,
    school: "Indira Gandhi National Open University, New Delhi",
    date: "Jan 2023 - Dec 2025",
    grade: "70.82 %",
    degree: "Bachelor of Computer Applications (BCA)",
    points: [
      "Studied core subjects including Data Structures, Database Management Systems (RDBMS), and Software Engineering.",
      "Built a strong foundation in programming, data handling, and web application development.",
      "Applied theoretical concepts through practical projects and assignments.",
    ],
  },
];

// Project Section
export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective - API-Based Dashboard",
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
    github: "https://github.com/manavpal-dev/github-profile-finder",
    webapp: "https://github-profile-detective-orpin.vercel.app",
  },
  {
    id: 1,
    title: "VastraCraft - eCommerce Web Application",
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
    github: "https://github.com/manavpal-dev/Vastracraft",
    webapp: "https://ecommerce-project-lake-eight.vercel.app",
  },
  {
    id: 2,
    title: "QuickBlog AI - High-Performance Blogging Platform",
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
    github: "https://github.com/manavpal-dev/quickblog",
    webapp: "https://quickblog-beta-eight.vercel.app",
  },
  {
    id: 3,
    title: "Aurora Perfume - Luxury Fragrance Landing Page",
    image: auroraLogo,
    points: [
      "Designed and developed a modern single-page perfume landing page focused on luxury branding and premium user experience.",
      "Built the frontend using React.js and Tailwind CSS with a fully responsive layout across mobile, tablet, and desktop devices.",
      "Implemented reusable UI components and clean component-based architecture for better scalability and maintainability.",
      "Created visually appealing sections including hero banners, featured collections, testimonials, and product showcases.",
      "Optimized the application for performance with responsive images, smooth animations, and clean UI structure.",
      "Focused on modern design principles, spacing, typography, and user interaction to improve overall user engagement.",
    ],
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "Single Page Application",
      "UI/UX Design",
      "Component-Based Architecture",
      "Frontend Development",
      "Performance Optimization",
    ],
    github: "https://github.com/manavpal-dev/Aurora-Project",
    webapp: "https://aurora-project-one.vercel.app",
  },
  {
    id: 4,
    title: "IGNOU Grade Card Analyzer",
    image: ignouLogo,
    points: [
      "Built a full-stack platform to help IGNOU students analyze academic progress and calculate percentages automatically.",
      "Rebuilt the entire project from Angular to Next.js for improved scalability, SEO, and production-level architecture.",
      "Implemented real-time data scraping using Puppeteer because no official IGNOU API was available.",
      "Developed features to track completed and pending subjects across all IGNOU programs.",
      "Optimized backend performance using caching and efficient API handling.",
      "Deployed the frontend and backend using Vercel and Render.",
      "Focused on real-world debugging, API security, and server-client architecture during development.",
    ],
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Puppeteer",
      "Web Scraping",
      "SSR",
      "REST API",
      "Tailwind CSS",
      "Vercel",
      "Render",
      "Caching",
    ],
    github: "https://github.com/manavpal-dev/ignou-gradecard-analyzer",
    webapp: "https://ignou-gradecard-analyzer.vercel.app",
  },
];
