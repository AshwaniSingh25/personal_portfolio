import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/About/About";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import PortfolioChatbotUI from "./components/ChatBot/PortfolioChatbotUI";

// Lazy load non-critical components for better performance
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Work = lazy(() => import("./components/Work/Work"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));

// Loading fallback component for better UX
const LoadingFallback = ({ height = "h-40" }) => (
  <div className={`${height} flex items-center justify-center`}>
    <div className="w-12 h-12 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030014] text-white antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* DIMENSIONAL BACKGROUND */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        {/* Core Depth Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#030014_70%)]" />

        {/* Animated Grid - Now with a fade-out mask for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Dynamic Light Source */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      {/* STRATEGIC BLOBS - Fewer, but larger for a cleaner look */}
      <BlurBlob
        position={{ top: "10%", left: "-5%" }}
        size={{ width: "35rem", height: "35rem" }}
        color="from-indigo-600/20 to-transparent"
        duration="25s"
      />
      <BlurBlob
        position={{ bottom: "5%", right: "-5%" }}
        size={{ width: "30rem", height: "30rem" }}
        color="from-cyan-500/15 to-transparent"
        duration="30s"
      />

      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-3 md:px-4 lg:px-8">
          <Hero />

          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Work />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Education />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />

        {/* PORTFOLIO CHATBOT */}
        <PortfolioChatbotUI />
      </div>
    </div>
  );
};

export default App;
