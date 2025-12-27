import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialMedia } from "../../constants";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    ["hero", "skills", "experience", "work", "education", "contact"].forEach(
      (id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    );

    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const yOffset = -100;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        isScrolled
          ? "bg-secondary-light/90 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-text-dark dark:text-text-light py-5 flex justify-between items-center">
          <button
            onClick={() => handleMenuItemClick("hero")}
            className="text-lg font-bold flex items-center group cursor-pointer"
          >
            <span className="text-accent group-hover:text-accent-dark transition-colors">
              &lt;
            </span>
            <span className="text-text-dark dark:text-text-light">Manav</span>
            <span className="text-accent group-hover:text-accent-dark transition-colors">
              /
            </span>
            <span className="text-text-dark dark:text-text-light">Pal</span>
            <span className="text-accent group-hover:text-accent-dark transition-colors">
              &gt;
            </span>
          </button>

          <ul className="hidden md:flex space-x-8 text-gray-500 dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer font-medium hover:text-accent transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-accent border-b-2 border-accent"
                    : "text-text-dark dark:text-gray-300"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)} className="py-1">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-5">
            <div className="flex space-x-4">
              <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={socialMedia.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href={socialMedia.twitter} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>

            <button onClick={toggleTheme} className="p-2 rounded-full">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-1 rounded-full">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            {isOpen ? (
              <X className="text-3xl text-accent" onClick={() => setIsOpen(false)} />
            ) : (
              <Menu className="text-3xl text-accent" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-primary-dark/95 shadow-lg md:hidden border-t dark:border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-6 text-text-dark dark:text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
