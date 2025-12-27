import React from "react";
// Import icons from lucide-react for a cleaner, modern look, 
// or stick with react-icons if preferred. I'll use the original ones.
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialMedia } from "../../constants";

const Footer = () => {

// Since we added scroll-behavior: smooth to html in app.css, 
// direct href links should handle the smooth scroll. 
// However, keeping the handleScroll function for robustness is fine.
const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({ behavior: "smooth" });
  }
}

  return (
    // 1. Add border-t for separation. Use background colors from config (dark:bg-primary-dark)
    // The background is usually inherited from App.jsx, but we ensure text contrast.
    <footer className="py-12 md:py-16 border-t border-gray-700 dark:border-accent/10 text-text-dark dark:text-text-light">
      
      {/* 2. Global Content Wrapper for alignment */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full">
        
        {/* Branding/Name - Use accent color */}
        <h2 className="text-2xl font-bold text-accent">Manav Pal</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Full Stack Developer</p>

        {/* Navigation Links - Now using <a> tags for semantic HTML */}
        <nav className="flex flex-wrap justify-center md:space-x-8 space-x-4 mt-8">
          {[
            { id: "hero", name: "Home" }, // Added Home link
            { id: "about", name: "About" },
            { id: "skills", name: "Skills" },
            { id: "experience", name: "Experience" },
            { id: "work", name: "Projects" },
            { id: "education", name: "Education" },
          ].map((item,index)=>(
            // Using <a> tags pointing to section IDs
            <a key={index}
            href={`#${item.id}`} 
            onClick={(e) => { e.preventDefault(); handleScroll(item.id); }} // Keep handleScroll for guaranteed smooth behavior
            className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-accent transition-colors duration-200 my-1">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social Media Icons - Increased size and used accent hover */}
        <div className="flex flex-wrap justify-center space-x-6 mt-8">
          {[
            {icon: <FaLinkedin />, link:socialMedia.linkedin},
            {icon: <FaTwitter />, link:socialMedia.twitter},
            {icon: <FaInstagram />, link:socialMedia.instagram},
            {icon: <FaGithub />, link:socialMedia.github},
            {icon: <SiLeetcode />, link:socialMedia.leetcode},
          ].map((item,index)=>(
            <a key={index} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            // Use larger icon size and strong accent hover
            className="text-2xl text-gray-500 dark:text-gray-400 hover:text-accent transition-transform transform hover:scale-110 duration-200"
            aria-label={`Link to my ${item.link.includes('linkedin') ? 'LinkedIn' : item.link.includes('github') ? 'GitHub' : 'Social Profile'}`}
            >
                  {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-10">
            Design & Developed by Manav Pal | Built with React & Tailwind CSS
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-600 mt-1">
            &#169; {new Date().getFullYear()} Manav Pal. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;