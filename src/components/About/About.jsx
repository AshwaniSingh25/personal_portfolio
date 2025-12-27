import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { cv } from "../../constants"; 
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_pic.webp";
import { ChevronRight, FileText } from 'lucide-react'; 

const Hero = () => {
  return (
    // Ensure the section uses global padding and max width for responsiveness
    <section id="hero" className="py-20 md:py-32 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
      
      {/* Main Container */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          
          {/* Greeting */}
          <h1 className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-2 leading-snug animate-fade-down">
            Hi, my name is
          </h1>

          {/* Name */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-text-dark dark:text-text-light mb-4 leading-tight tracking-tight animate-fade-down animation-delay-200">
            Manav Pal
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-accent leading-tight animate-fade-down animation-delay-400">
            <Typewriter
              words={["Full Stack Developer", "Working at Jogaz Info Pvt. Ltd."]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              loop={true}
              cursor
              cursorStyle="_"
            />
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 mt-6 leading-relaxed max-w-xl animate-fade-down animation-delay-600">
              I am a full-stack developer with hands-on experience building and maintaining web applications, primarily using the MERN stack. I enjoy writing clean, maintainable code and turning real-world requirements into practical, user-friendly digital solutions while continuously learning and improving my skills.
          </p>

          {/* Two-Button CTA Group */}
          <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-down animation-delay-800">
            
            <a
              href="#work" 
              className="inline-flex items-center text-white py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105 shadow-xl bg-accent hover:bg-accent-dark focus:ring-4 focus:ring-accent/50"
            >
              View My Work
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-bold transition duration-300 border-2 border-accent text-accent hover:bg-accent/10 transform hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right side: Profile Image - NOW PORTRAIT/RECTANGULAR */}
        <div className="md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={false}
            // KEY CHANGE: Changed h-X to be taller than w-X for a portrait look (e.g., 3:4 aspect ratio)
            className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] overflow-hidden shadow-2xl dark:shadow-[0_10px_40px_rgba(0,191,255,0.4)] border-4 border-accent/50" 
          >
            <img
              src={profileImage}
              alt="Manav Pal -- Fullstack Developer"
              loading="eager"
              // Ensure the image covers the taller container
              className="w-full h-full object-cover" 
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Hero;