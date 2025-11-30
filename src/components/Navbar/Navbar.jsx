import React, { useEffect, useState } from "react";
// Using lucide-react for cleaner, modern icons
import { Menu, X, Sun, Moon, Home } from "lucide-react"; 
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialMedia } from "../../constants";

// NOTE: You must create a custom React Hook (e.g., useTheme)
// and ThemeContext to manage the theme state across your application.
// For now, this component uses a local state and toggles the class on the <html> element
// to demonstrate the functionality.
const useTheme = () => {
  const [theme, setTheme] = useState('dark'); // Assuming 'dark' is the default
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Use the conceptual hook
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Default to hero/home
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Scroll Effect: check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Use a higher threshold for professional look
      setIsScrolled(window.scrollY > 80); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // *CRITICAL IMPROVEMENT: Intersection Observer for Active Section*
  // 2. Logic to set the active section based on view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '0px', 
        threshold: 0.5, // Highlight when 50% of section is visible
      }
    );

    // Observe all main sections
    ['hero', 'about', 'skills', 'experience', 'work', 'education', 'contact'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);


  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    // setActiveSection(sectionId); // Intersection Observer handles this now
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "hero", label: "Home" }, // Changed 'about' to 'hero' for consistency
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }, // Added contact link
  ];

  return (
    // 3. Apply semantic colors and the global max-width wrapper
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 
        ${
          isScrolled
            ? "bg-secondary-light/90 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
    >
      {/* Global content wrapper (max-w-7xl) for alignment with main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 

        <div className="text-text-dark dark:text-text-light py-5 flex justify-between items-center">
          
          {/* Logo (Now clickable and uses accent color) */}
          <button 
            onClick={() => handleMenuItemClick("hero")}
            className="text-lg font-bold flex items-center group cursor-pointer"
          >
            <span className="text-accent group-hover:text-accent-dark transition-colors">&lt;</span>
            <span className="text-text-dark dark:text-text-light">Manav</span>
            <span className="text-accent group-hover:text-accent-dark transition-colors">/</span>
            <span className="text-text-dark dark:text-text-light">Pal</span>
            <span className="text-accent group-hover:text-accent-dark transition-colors">&gt;</span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-500 dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer font-medium hover:text-accent transition-colors duration-200 
                  ${
                    activeSection === item.id 
                    ? "text-accent border-b-2 border-accent" 
                    : "text-text-dark dark:text-gray-300"
                  }`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className="py-1"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Side: Social Icons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-5">
            
            {/* Social Media Icons for Desktop*/}
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin size={20} />, link: socialMedia.linkedin, label: "LinkedIn" },
                { icon: <FaGithub size={20}/>, link: socialMedia.github, label: "GitHub" },
                { icon: <FaTwitter size={20}/>, link: socialMedia.twitter, label: "Twitter" },
              ].map((item,index)=>(
                <a key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  // Use accent color for hover
                  className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* 4. Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-dark dark:text-text-light hover:bg-gray-100 dark:hover:bg-accent/20 hover:text-accent transition duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex items-center space-x-4">
             {/* 4. Theme Toggle Button for Mobile */}
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-full text-text-dark dark:text-text-light hover:bg-gray-100 dark:hover:bg-accent/20 hover:text-accent transition duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            
            {isOpen ? (
              <X
                className="text-3xl text-accent cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            ) : (
              <Menu
                className="text-3xl text-accent cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-primary-dark/95 backdrop-blur-lg backdrop-filter z-50 shadow-lg md:hidden border-t dark:border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-6 text-text-dark dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-lg hover:text-accent transition-colors duration-200 
                  ${
                    activeSection === item.id 
                    ? "text-accent font-bold" 
                    : "text-text-dark dark:text-gray-300"
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Social Media Icons for Mobile*/}
            <div className="flex space-x-6 pt-4 border-t dark:border-gray-700 w-full justify-center mt-4">
              {[
                { icon: <FaLinkedin size={24} />, link: socialMedia.linkedin },
                { icon: <FaGithub size={24}/>, link: socialMedia.github },
                { icon: <FaTwitter size={24}/>, link: socialMedia.twitter },
              ].map((item,index)=>(
                <a key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;