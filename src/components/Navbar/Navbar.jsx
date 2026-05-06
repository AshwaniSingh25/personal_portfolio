import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { socialMedia } from "../../constants";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") || "dark";

    setTheme(storedTheme);

    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      storedTheme
    );
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      newTheme
    );

    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("hero");

  const [isScrolled, setIsScrolled] =
    useState(false);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // ACTIVE SECTION
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
        threshold: 0.25,
        rootMargin: "-100px 0px -40% 0px",
      }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(
        item.id
      );

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // SCROLL TO SECTION
  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const yOffset = -90;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="
          fixed
          top-5
          inset-x-0
          z-50
          hidden
          justify-center
          px-4
          md:flex
        "
      >
        <div className="w-full max-w-[1180px]">
          <div
            className={`
              relative
              flex
              items-center
              justify-between
              gap-8
              overflow-hidden
              rounded-[22px]
              border
              border-black/10
              dark:border-white/10
              px-8
              py-4
              backdrop-blur-2xl
              transition-all
              duration-500
              ${
                isScrolled
                  ? "bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:bg-[#0b0718]/75 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
                  : "bg-white/70 dark:bg-white/[0.04]"
              }
            `}
          >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-violet-500/10
                via-transparent
                to-cyan-500/10
              "
            />

            {/* LOGO */}
            <button
              onClick={() =>
                handleMenuItemClick("hero")
              }
              className="
                relative
                z-10
                group
                flex
                items-center
                text-2xl
                font-black
                tracking-tight
              "
            >
              <span
                className="
                  text-violet-500
                  transition-all
                  duration-300
                  group-hover:text-cyan-500
                "
              >
                &lt;
              </span>

              <span
                className="
                  mx-1
                  bg-gradient-to-r
                  from-gray-900
                  to-gray-600
                  dark:from-white
                  dark:to-gray-300
                  bg-clip-text
                  text-transparent
                "
              >
                Manav
              </span>

              <span className="text-violet-500">
                /
              </span>

              <span
                className="
                  mx-1
                  bg-gradient-to-r
                  from-gray-600
                  to-gray-900
                  dark:from-gray-300
                  dark:to-white
                  bg-clip-text
                  text-transparent
                "
              >
                Pal
              </span>

              <span
                className="
                  text-violet-500
                  transition-all
                  duration-300
                  group-hover:text-cyan-500
                "
              >
                &gt;
              </span>
            </button>

            {/* NAV ITEMS */}
            <ul
              className="
                relative
                z-10
                flex
                items-center
                gap-2
              "
            >
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      handleMenuItemClick(item.id)
                    }
                    className={`
                      rounded-full
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        activeSection === item.id
                          ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE */}
            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-5
              "
            >
              {/* SOCIALS */}
              <div className="flex items-center gap-4">
                <a
                  href={socialMedia.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-gray-500
                    dark:text-gray-400
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:text-black
                    dark:hover:text-white
                  "
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href={socialMedia.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-gray-500
                    dark:text-gray-400
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:text-black
                    dark:hover:text-white
                  "
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href={socialMedia.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-gray-500
                    dark:text-gray-400
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:text-black
                    dark:hover:text-white
                  "
                >
                  <FaTwitter size={18} />
                </a>
              </div>

              {/* THEME BUTTON */}
              <button
                onClick={toggleTheme}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  dark:border-white/10
                  bg-black/[0.04]
                  dark:bg-white/[0.05]
                  text-gray-700
                  dark:text-gray-300
                  transition-all
                  duration-300
                  hover:bg-black/5
                  dark:hover:bg-white/10
                  hover:text-black
                  dark:hover:text-white
                "
              >
                {theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <div
        className="
          fixed
          top-0
          z-50
          w-full
          px-4
          pt-4
          md:hidden
        "
      >
        <div
          className={`
            relative
            flex
            items-center
            justify-between
            overflow-hidden
            rounded-2xl
            border
            border-black/10
            dark:border-white/10
            px-5
            py-4
            backdrop-blur-2xl
            transition-all
            duration-500
            ${
              isScrolled
                ? "bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:bg-[#0b0718]/80 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
                : "bg-white/70 dark:bg-white/[0.04]"
            }
          `}
        >
          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-violet-500/10
              via-transparent
              to-cyan-500/10
            "
          />

          {/* MOBILE LOGO */}
          <button
            onClick={() =>
              handleMenuItemClick("hero")
            }
            className="
              relative
              z-10
              text-lg
              font-black
              tracking-tight
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-gray-900
                to-gray-600
                dark:from-white
                dark:to-gray-300
                bg-clip-text
                text-transparent
              "
            >
              Manav
            </span>
          </button>

          {/* ACTIONS */}
          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-3
            "
          >
            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                dark:border-white/10
                bg-black/[0.04]
                dark:bg-white/[0.05]
                text-gray-700
                dark:text-gray-300
              "
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-cyan-500
                text-white
                shadow-lg
              "
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ${
              isOpen
                ? "mt-3 max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-white/90
              dark:bg-[#0b0718]/90
              p-4
              backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.15)]
              dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]
            "
          >
            {/* MENU ITEMS */}
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      handleMenuItemClick(item.id)
                    }
                    className={`
                      w-full
                      rounded-xl
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        activeSection === item.id
                          ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                          : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* MOBILE SOCIALS */}
            <div
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-6
                border-t
                border-black/10
                dark:border-white/10
                pt-5
              "
            >
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  text-gray-500
                  dark:text-gray-400
                  transition
                  hover:text-black
                  dark:hover:text-white
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={socialMedia.github}
                target="_blank"
                rel="noreferrer"
                className="
                  text-gray-500
                  dark:text-gray-400
                  transition
                  hover:text-black
                  dark:hover:text-white
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href={socialMedia.twitter}
                target="_blank"
                rel="noreferrer"
                className="
                  text-gray-500
                  dark:text-gray-400
                  transition
                  hover:text-black
                  dark:hover:text-white
                "
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;