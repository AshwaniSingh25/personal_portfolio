import React, { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { socialMedia } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("hero");

  const [isScrolled, setIsScrolled] =
    useState(false);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // SCROLL EFFECT
 // ACTIVE SECTION ON SCROLL
useEffect(() => {
  const handleActiveSection = () => {
    setIsScrolled(window.scrollY > 20);

    const sections = [
      "hero",
      "skills",
      "experience",
      "work",
      "education",
      "contact",
    ];

    const scrollPosition =
      window.scrollY + 150;

    sections.forEach((sectionId) => {
      const section =
        document.getElementById(sectionId);

      if (!section) return;

      const sectionTop =
        section.offsetTop;

      const sectionHeight =
        section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition <
          sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  window.addEventListener(
    "scroll",
    handleActiveSection
  );

  handleActiveSection();

  return () =>
    window.removeEventListener(
      "scroll",
      handleActiveSection
    );
}, []);

  // SCROLL TO SECTION
  const handleMenuItemClick = (sectionId) => {
  setIsOpen(false);

  const section =
    document.getElementById(sectionId);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });

  setActiveSection(sectionId);
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
              border-white/10
              px-8
              py-4
              backdrop-blur-2xl
              transition-all
              duration-500

              ${
                isScrolled
                  ? "bg-[#0b0718]/75 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
                  : "bg-white/[0.04]"
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
                  from-white
                  to-gray-400
                  bg-clip-text
                  text-transparent
                "
              >
                Ashwani
              </span>

              <span className="text-violet-500">
                /
              </span>

              <span
                className="
                  mx-1
                  bg-gradient-to-r
                  from-gray-300
                  to-white
                  bg-clip-text
                  text-transparent
                "
              >
                Singh
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
                          ? "bg-white text-black shadow-lg"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* SOCIALS */}
            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-4
              "
            >
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  text-gray-400
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:text-white
                "
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href={socialMedia.github}
                target="_blank"
                rel="noreferrer"
                className="
                  text-gray-400
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:text-white
                "
              >
                <FaGithub size={18} />
              </a>

              <a
                href={socialMedia.twitter}
                target="_blank"
                rel="noreferrer"
                className="
                  text-gray-400
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:text-white
                "
              >
                <FaTwitter size={18} />
              </a>
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
            border-white/10
            px-5
            py-4
            backdrop-blur-2xl
            transition-all
            duration-500

            ${
              isScrolled
                ? "bg-[#0b0718]/80 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
                : "bg-white/[0.04]"
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
              text-white
            "
          >
            Ashwani
          </button>

          {/* MENU BUTTON */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              relative
              z-10
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
              border-white/10
              bg-[#0b0718]/90
              p-4
              backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.35)]
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
                          ? "bg-white text-black"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
