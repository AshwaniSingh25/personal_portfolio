import { useEffect, useState } from "react";

import Hero from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  // THEME STATE
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // APPLY THEME
  useEffect(() => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      theme
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  // TOGGLE THEME
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        antialiased
        transition-colors
        duration-500

        bg-[#f8fafc]
        text-slate-900

        dark:bg-[#030014]
        dark:text-white

        selection:bg-violet-500/30
        selection:text-white
      "
    >
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 -z-50">
        
        {/* MAIN BACKGROUND */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_35%,#eef2ff_100%)]

            dark:bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#030014_50%)]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),
            linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)]

            dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]

            bg-[size:40px_40px]
          "
        />

        {/* TOP GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[550px]
            w-[550px]
            -translate-x-1/2
            rounded-full

            bg-violet-400/20

            dark:bg-violet-600/20

            blur-[120px]
          "
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute
            left-0
            top-1/3
            h-[320px]
            w-[320px]
            rounded-full

            bg-cyan-400/15

            dark:bg-cyan-500/10

            blur-[100px]
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-[320px]
            w-[320px]
            rounded-full

            bg-indigo-400/15

            dark:bg-indigo-500/10

            blur-[100px]
          "
        />

        {/* NOISE TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-soft-light
          "
        >
          <img
            src="/noise.png"
            alt="This is a noise texture that adds a subtle grain effect to the background, enhancing the overall visual appeal of the website."
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>

      {/* FLOATING BLOBS */}
      <BlurBlob
        position={{
          top: "18%",
          left: "8%",
        }}
        size={{
          width: "18rem",
          height: "18rem",
        }}
      />

      <BlurBlob
        position={{
          bottom: "12%",
          right: "8%",
        }}
        size={{
          width: "22rem",
          height: "22rem",
        }}
        color="from-cyan-500/25 to-indigo-500/20"
        duration="24s"
      />

      {/* MAIN LAYOUT */}
      <div className="relative z-10">
        
        {/* NAVBAR */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* CONTENT */}
        <main
          className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-8
          "
        >
          {/* HERO */}
          <section id="hero">
            <Hero />
          </section>

          {/* SKILLS */}
<section id="skills" className="py-28">
  <Skills />
</section>

{/* EXPERIENCE */}
<section id="experience" className="py-28">
  <Experience />
</section>

{/* WORK */}
<section id="work" className="py-28">
  <Work />
</section>

{/* EDUCATION */}
<section id="education" className="py-28">
  <Education />
</section>

{/* CONTACT */}
<section id="contact" className="py-28">
  <Contact />
</section>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default App;