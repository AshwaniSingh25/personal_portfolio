import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { ChevronRight, Download } from "lucide-react";
import profileImage from "../../assets/profile_pic.webp";
import { cv } from "../../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32"
    >
      {/* Optimized Background Glow - Fixed position and lower opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-violet-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-300">
                Available for opportunities
              </span>
            </div>

            <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
              Full Stack Developer
            </p>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Building <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                modern digital
              </span>
              <br />
              experiences.
            </h1>

            <div className="mt-6 h-8 sm:h-10">
              <span className="text-lg font-semibold text-gray-300 sm:text-2xl">
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Backend Engineer",
                    "Web Automation Specialist",
                    "Next.js Expert",
                  ]}
                  loop={0} // Changed to 0 for infinite
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                />
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-lg lg:mx-0">
              I build modern, scalable, and high-performance web applications
              using
              <span className="text-white">
                {" "}
                React, Next.js, Node.js, and MERN stack technologies
              </span>
              . I’m also exploring
              <span className="text-cyan-400">
                {" "}
                AI agents, automation systems,
              </span>
              and intelligent web solutions to create impactful digital
              experiences.
            </p>

            {/* BUTTONS - Improved mobile layout */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start">
              <a
                href="#work"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all"
              >
                View Projects
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all"
              >
                <Download size={18} />
                Get Resume
              </a>
            </div>

            {/* STATS - Responsive Grid */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <StatItem value="1+" label="Years Experience" />
              <StatItem value="10+" label="Projects Completed" />
              <StatItem
                value="24/7"
                label="Learning Mindset"
                className="col-span-2 md:col-span-1"
              />
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="absolute h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-full bg-cyan-500/10 blur-[100px]" />

            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1500}
              transitionSpeed={2000}
              className="relative w-[260px] sm:w-[320px] lg:w-[400px]"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
                <img
                  src={profileImage}
                  alt="Manav Pal - Full Stack Developer"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                  className="h-full w-full rounded-[2.2rem] object-cover"
                  width="400"
                  height="400"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, className = "" }) => (
  <div className={className}>
    <h3 className="text-2xl md:text-3xl font-black text-white">{value}</h3>
    <p className="mt-1 text-xs md:text-sm text-gray-500 font-medium">{label}</p>
  </div>
);

export default Hero;
