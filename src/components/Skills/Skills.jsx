import React from "react";
// Assuming SkillsInfo now contains categories like "Cloud," "Architecture," etc.
import { SkillsInfo } from "../../constants";
import { Zap } from "lucide-react"; // Icon for section title

const Skills = () => {
  return (
    // 1. Remove custom BG and clip-path for consistency
    <section id="skills" className="py-24 md:py-32">
      {/* Section Title */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-dark dark:text-text-light">
          <Zap className="inline w-8 h-8 mr-3 mb-1 text-accent" />
          Technical Domains
        </h2>
        {/* underline using accent color */}
        <div className="w-60 h-1 bg-accent mx-auto mt-2"></div>

        <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
          Hands-on experience with modern web technologies, full-stack
          development, and building scalable web applications.
        </p>
      </div>

      {/* Skills Category Grid */}
      <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-6xl">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            // 2. Use semantic styling for the category card
            className="bg-white dark:bg-primary-dark/80 p-6 sm:p-8 w-full md:w-[48%] rounded-xl 
                       border border-gray-200 dark:border-accent/30 shadow-xl dark:shadow-[0_0_20px_5px_rgba(0,191,255,0.1)] 
                       transition duration-300 hover:shadow-2xl hover:dark:shadow-[0_0_30px_5px_rgba(0,191,255,0.2)]"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-3">
              {category.title}
            </h3>

            {/* 3. Skill Items Grid - Simple, clean presentation (Tilt wrapper removed) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  // 4. Clean Skill Badge Styling
                  className="flex flex-col items-center justify-center space-y-1 bg-secondary-light dark:bg-primary-dark/50 
                             border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-1 text-center 
                             transition duration-200 hover:border-accent/50 hover:shadow-md"
                >
                  {/* images */}
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className={`w-6 h-6 sm:w-8 sm:h-8 object-contain`}
                  />

                  <span className="text-xs sm:text-sm text-text-dark dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
