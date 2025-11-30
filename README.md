Manav Pal: Full Stack Developer Portfolio

🚀 Overview

This is the official portfolio of Manav Pal, a Full Stack Developer specializing in high-performance web applications, primarily utilizing the MERN stack (MongoDB, Express, React, Node.js) and modern UI frameworks like Next.js and Tailwind CSS.

The site is designed to be a technical case study in itself, showcasing skills in component architecture, state management, and responsive, accessible design.

✨ Features

Modern UI/UX: Built with React and styled using Tailwind CSS for a fully responsive, dark-themed, and visually striking interface.

Performance: Optimized for speed and minimal Cumulative Layout Shift (CLS).

Custom Animations: Utilizes GSAP (GreenSock Animation Platform) and custom CSS animations for smooth, engaging transitions.

Typewriter Effect: Dynamic presentation of key roles using react-simple-typewriter in the Hero section.

Project Showcase: Interactive Project section with a modal viewer for detailed case studies (Work.jsx).

Component Architecture: Clean, modular structure using functional components and hooks.

🛠️ Tech Stack

This project is built using the following core technologies:

Category

Technology

Description

Frontend Framework

React.js

Library for building the user interface.

Styling

Tailwind CSS

Utility-first CSS framework for rapid, responsive styling.

Animation

GSAP

JavaScript library for high-performance animations.

UI Effects

React Parallax Tilt

Library used to create the 3D-tilt effect on the profile picture.

Deployment

Vercel / Netlify

Ideal platforms for deploying static React applications.

Development

JavaScript (ES6+)

Core language for the frontend logic.

📦 Project Structure

The key components that define the application's structure and data flow are:

portfolio-root/
├── public/
│   └── assets/           # Images, logos, and profile picture
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Hero.jsx      # Landing section (with Typewriter and Tilt)
│   │   ├── Work.jsx      # Project grid and modal logic
│   │   ├── Skills.jsx    # Technical skills showcase
│   │   └── ...
│   ├── constants/
│   │   └── constants.js  # Central source of all portfolio data (Skills, Projects, Experience)
│   ├── App.jsx           # Main application wrapper and routing structure
│   └── index.css         # Custom styling (for GSAP and Tailwind setup)
└── package.json          # Dependencies and scripts



⚙️ Setup and Installation

Follow these steps to get a local copy of the project up and running.

Prerequisites

Node.js (v14+)

npm or yarn

1. Clone the repository

git clone [https://github.com/manavpal-dev/portfolio.git](https://github.com/manavpal-dev/portfolio)
cd your-portfolio-repo



2. Install dependencies

npm install
# or
yarn install



3. Start the development server

npm run dev
# or
yarn dev



The application will now be running on http://localhost:5173 (or similar port).

📝 Customization

All personal and professional data is managed centrally in one file:

src/constants/constants.js: Update the SkillsInfo, experiences, projects, and socialMedia objects here. The component files will automatically reflect these changes.

🤝 Contribution

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvement!

Developed by Manav Pal | GitHub Profile