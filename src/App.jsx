import React, { useEffect, useState, Suspense, lazy } from "react";

// Critical components (Load immediately for LCP)
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/About/About";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

// Lazy Loaded Sections (Keeps the initial bundle small)
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Work = lazy(() => import("./components/Work/Work"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen overflow-hidden antialiased transition-colors duration-500 bg-[#f8fafc] text-slate-900 dark:bg-[#030014] dark:text-white selection:bg-violet-500/30 selection:text-white">
      
      {/* GLOBAL BACKGROUND - Fixed for Performance */}
      <div className="absolute inset-0 -z-50 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_35%,#eef2ff_100%)] dark:bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#030014_50%)]" />
        
        {/* Optimized Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Glows - Using lower opacity to reduce paint cost */}
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-400/10 dark:bg-violet-600/10 blur-[120px]" />

        {/* Optimized Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light">
          <img
            src="/noise.webp" 
            alt=""
            className="h-full w-full object-cover"
            loading="eager" 
          />
        </div>
      </div>

      <BlurBlob position={{ top: "18%", left: "8%" }} size={{ width: "18rem", height: "18rem" }} />
      <BlurBlob position={{ bottom: "12%", right: "8%" }} size={{ width: "22rem", height: "22rem" }} color="from-cyan-500/25 to-indigo-500/20" duration="24s" />

      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="mx-auto max-w-7xl px-6 lg:px-8">
          <section id="hero">
            <Hero />
          </section>

          {/* Grouped Suspense for better UX */}
          <Suspense fallback={<div className="h-96 w-full animate-pulse bg-slate-200/20 dark:bg-slate-800/20 rounded-3xl" />}>
            <section id="skills" className="py-28"><Skills /></section>
            <section id="experience" className="py-28"><Experience /></section>
            <section id="work" className="py-28"><Work /></section>
            <section id="education" className="py-28"><Education /></section>
            <section id="contact" className="py-28"><Contact /></section>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;