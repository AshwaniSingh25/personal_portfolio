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
  return (
    <div
      className="
      relative min-h-screen overflow-hidden
      bg-[#030014]
      text-white
      antialiased
      selection:bg-violet-500/30
      selection:text-white
    "
    >
      {/* Global Ambient Background */}
      <div className="absolute inset-0 -z-50">
        
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#030014_50%)]" />

        {/* Grid */}
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:40px_40px]" 
        />

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

        {/* Side Glow */}
        <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light">
          <img
            src="/noise.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Floating Blobs */}
      <BlurBlob
        position={{ top: "20%", left: "10%" }}
        size={{ width: "18rem", height: "18rem" }}
      />

      <BlurBlob
        position={{ bottom: "10%", right: "10%" }}
        size={{ width: "22rem", height: "22rem" }}
      />

      {/* Main Layout */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Hero */}
          <section id="home">
            <Hero />
          </section>

          {/* Skills */}
          <section className="py-32">
            <Skills />
          </section>

          {/* Experience */}
          <section className="py-32">
            <Experience />
          </section>

          {/* Work */}
          <section className="py-32">
            <Work />
          </section>

          {/* Education */}
          <section className="py-32">
            <Education />
          </section>

          {/* Contact */}
          <section className="py-32">
            <Contact />
          </section>

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;