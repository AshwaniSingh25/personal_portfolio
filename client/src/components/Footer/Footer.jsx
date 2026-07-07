import React from "react";

import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { ArrowUpRight, Heart } from "lucide-react";

import { socialMedia } from "../../constants";

const Footer = () => {
  // SMOOTH SCROLL
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { id: "hero", name: "Home" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "work", name: "Work" },
    { id: "education", name: "Education" },
    { id: "contact", name: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: socialMedia.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: socialMedia.github,
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      link: socialMedia.twitter,
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      link: socialMedia.instagram,
      label: "Instagram",
    },
    {
      icon: <SiLeetcode />,
      link: socialMedia.leetcode,
      label: "LeetCode",
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-black/10
        py-16

        dark:border-white/10
      "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* MAIN CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-black/10
            bg-white/70
            p-8
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

            md:p-12
          "
        >
          {/* GLOW EFFECT */}
          <div
            className="
              absolute
              inset-0
              opacity-100
            "
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            {/* TOP SECTION */}
            <div
              className="
                flex
                flex-col
                gap-10
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* BRANDING */}
              <div className="max-w-xl">
                {/* LOGO */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/10
                    bg-black/[0.03]
                    px-5
                    py-2.5

                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Creative Designer · AI Video Editor
                  </span>
                </div>

                {/* NAME */}
                <h2
                  className="
                    mt-6
                    text-4xl
                    font-black
                    tracking-tight
                    text-gray-900
                    dark:text-white
                    sm:text-5xl
                  "
                >
                  Ashwani
                  <span
                    className="
                      bg-gradient-to-r
                      from-violet-500
                      via-cyan-500
                      to-blue-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {" "}
                    Singh
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    max-w-lg
                    text-base
                    leading-relaxed
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Creating expressive visuals, thoughtful edits, and AI-assisted
                  motion work that helps ideas earn attention.
                </p>
              </div>

              {/* CTA BUTTON */}
              <div>
                <button
                  onClick={() => handleScroll("contact")}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-500
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_0_30px_rgba(139,92,246,0.35)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Let's Connect
                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>

            {/* DIVIDER */}
            <div
              className="
                my-10
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-black/10
                to-transparent

                dark:via-white/10
              "
            />

            {/* BOTTOM SECTION */}
            <div
              className="
                flex
                flex-col
                gap-10

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* NAVIGATION */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  sm:gap-4
                "
              >
                {navLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="
                      rounded-full
                      border
                      border-black/10
                      bg-black/[0.03]
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-gray-700
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/10
                      hover:text-cyan-500

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-gray-300
                    "
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* SOCIALS */}
              <div className="flex items-center gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="
                        group
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-black/10
                        bg-black/[0.03]
                        text-lg
                        text-gray-600
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/10
                        hover:text-cyan-500

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-gray-400
                      "
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* COPYRIGHT */}
            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-between
                gap-4
                border-t
                border-black/10
                pt-8
                text-center

                dark:border-white/10

                md:flex-row
                md:text-left
              "
            >
              {/* LEFT */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} Ashwani Singh. All rights reserved.
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                  Built with React & Tailwind CSS
                </p>
              </div>

              {/* RIGHT */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-500
                  dark:text-gray-500
                "
              >
                Crafted with
                <Heart size={15} className="fill-red-500 text-red-500" />
                by Ashwani Singh
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
