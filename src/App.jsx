// 1. Rename About to Hero (more semantic for the first component)
import Hero from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

// 2. Import a Context Provider (Highly recommended for managing Dark Mode)
// import { ThemeProvider } from './context/ThemeContext'; // Assuming you create this later

const App = () => {
  
  // 3. Dynamic Background based on Tailwind Config (using dark mode classes)
  // Ensure the body/html class is set via JavaScript for the theme to work.

  // The main container should use the semantic colors defined in tailwind.config.js
  // 'primary-dark' for dark mode BG and 'secondary-light' for light mode BG.
  // We'll apply the theme class to the <html> element for global control.

  // --- Theme Management Example (Conceptual) ---
  // const [theme, setTheme] = useState('dark'); // Initial state
  // useEffect(() => {
  //   document.documentElement.className = theme; // Apply 'dark' or 'light' class
  // }, [theme]);
  // ---------------------------------------------

  return (
    // <ThemeProvider> // Use a provider to pass theme down if implemented
    // 4. Use Semantic BG Colors & Accessibility Class
    <div className="min-h-screen font-sans bg-secondary-light text-text-dark 
                    dark:bg-primary-dark dark:text-text-light transition-colors duration-500">

      {/* 5. BlurBlob Placement (Good for visual interest) */}
      {/* Ensure BlurBlob uses absolute positioning and your theme colors for glow */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      {/* 6. Grid Overlay: Use a better color (less contrast in dark mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b72801a_1px,transparent_1px),linear-gradient(to_bottom,#6b72801a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* 7. Main Content Wrapper: Use max-w-7xl and mx-auto for professional centering */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navbar should typically be outside the pt-20 if it's sticky/fixed */}
        <Navbar />
        
        <main className="pt-20"> {/* main tag is good for SEO/semantics */}
          {/* 8. Use 'Hero' component first */}
          <Hero />
          
          {/* 9. Use Horizontal Rule for visual separation between major sections */}
          <hr className="my-16 border-accent dark:border-accent-dark opacity-20" /> 
          
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>

    </div>
    // </ThemeProvider>
  );
};

export default App;