import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

import {
  ChevronRight,
  Download,
} from "lucide-react";

import profileImage from "../../assets/profile_pic.webp";

import { cv } from "../../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-28
        pb-16
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/20 blur-[140px] rounded-full" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            
            {/* BADGE */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                backdrop-blur-xl
              "
            >
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-gray-300">
                Available for opportunities
              </span>
            </div>

            {/* SMALL TEXT */}
            <p
              className="
                mb-5
                text-sm
                font-medium
                uppercase
                tracking-[0.3em]
                text-violet-400
              "
            >
              Full Stack Developer
            </p>

            {/* HEADING */}
            <h1
              className="
                text-5xl
                font-black
                leading-[1]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Building
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-violet-400
                  via-cyan-400
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                modern digital
              </span>
              experiences.
            </h1>

            {/* TYPEWRITER */}
            <div className="mt-6 h-10">
              <span
                className="
                  text-xl
                  font-semibold
                  text-gray-300
                  sm:text-2xl
                "
              >
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Frontend Engineer",
                    "React & Next.js Developer",
                    "Backend Developer",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-400
                sm:text-lg
                lg:mx-0
              "
            >
              I build scalable and high-performance web
              applications with modern technologies like
              React, Next.js, Node.js, Express, and MongoDB.
              Passionate about crafting beautiful user
              experiences, writing clean code, and building
              products that solve real-world problems.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                lg:justify-start
              "
            >
              {/* PRIMARY BUTTON */}
              <a
                href="#work"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-500
                  to-cyan-500
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_0_40px_rgba(139,92,246,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                View Projects

                <ChevronRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* SECONDARY BUTTON */}
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* STATS */}
            <div
              className="
                mt-14
                grid
                grid-cols-3
                gap-6
                border-t
                border-white/10
                pt-8
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-white">
                  1+
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  10+
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  100%
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Learning Mindset
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* IMAGE GLOW */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              scale={1.02}
              transitionSpeed={1500}
              gyroscope={false}
              className="
                relative
                w-[280px]
                sm:w-[340px]
                lg:w-[420px]
              "
            >
              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/5
                  p-3
                  shadow-[0_8px_50px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                "
              >
                {/* IMAGE */}
                <img
                  src={profileImage}
                  alt="Manav Pal"
                  loading="eager"
                  className="
                    h-full
                    w-full
                    rounded-[1.5rem]
                    object-cover
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#030014]/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* FLOATING CARD */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <p className="text-sm font-medium text-white">
                    MERN Stack Developer
                  </p>

                  <p className="mt-1 text-xs text-gray-300">
                    React • Node • MongoDB
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;