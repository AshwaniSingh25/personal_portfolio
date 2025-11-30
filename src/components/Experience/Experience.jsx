import React from "react";
// Assuming the data in 'experiences' has been updated for senior roles
import { experiences } from "../../constants"; 
import { Briefcase } from 'lucide-react'; // Icon for title

const Experience = () => {
  return ( 
    // 1. Remove custom BG and clip-path for consistency across sections
    <section id="experience" className="py-24 md:py-32">
        
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-dark dark:text-text-light">
            <Briefcase className="inline w-8 h-8 mr-3 mb-1 text-accent" />
            Professional Experience
          </h2>
          
          {/* Underline using accent color */}
          <div className="w-60 h-1 bg-accent mx-auto mt-2"></div>
          
          <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
            Showcasing significant contributions, technical leadership, and career growth over the past 20 years.
          </p>
        </div>


        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
         
          {/* 2. Vertical Line - Using the accent color */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-accent/50 h-full"></div>
          
          {/* Experience Entries */}
          {experiences.map((experience,index)=>(
            
            <div key={experience.id}
            // Use index to alternate position
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>

              {/* Timeline Circle */}
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white dark:bg-primary-dark border-4 border-accent w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 hide-circle:hidden">
                <img src={experience.img}
                alt={experience.company}
                loading="lazy"
                className="w-full h-full object-cover rounded-full" 
                />
              </div>

                {/* Content Section */}
                <div 
                    // Card Styling: Use semantic colors, subtle border, and shadow
                    className={`w-full sm:max-w-md p-6 sm:p-8 rounded-xl 
                                bg-white dark:bg-primary-dark/80 
                                border border-gray-200 dark:border-accent/30 
                                shadow-xl dark:shadow-[0_0_25px_5px_rgba(0,191,255,0.15)] 
                                transform transition-transform duration-300 hover:scale-[1.02] 
                                ${index % 2 === 0 ? "sm:ml-10" : "sm:mr-10"}` // Added margin for spacing
                    }>

                  {/* Role, Company and Date */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-dark dark:text-text-light leading-snug">{experience.role}</h3>
                    <h4 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">{experience.company}</h4>
                    {/* Date */}
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{experience.date}</p>
                  </div>
                      
                {/* Description - Highlight the impact (Assuming first sentence is the bold summary) */}
                <p className="text-gray-600 dark:text-gray-400 mt-5 border-t border-gray-200 dark:border-gray-700 pt-4">
                  {/* Find a way to bold the first line/Impact statement in the data */}
                  {experience.desc}
                </p>

                {/* Skills - Modern Badge Look */}
                <div className="mt-6">
                  <h5 className="font-medium text-text-dark dark:text-text-light mb-2">Key Technologies:</h5>
                  <ul className="flex flex-wrap">
                    {experience.skills.map((skill,index)=>(
                      <li key={index}
                      // 3. New Badge Styling: Subtle BG with Accent text
                      className="bg-accent/10 text-accent px-3 py-1 text-xs font-semibold rounded-full mr-2 mb-2 border border-accent/50 transition duration-150 hover:bg-accent/20">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>

            </div>
          ))}
        </div>
    </section>
  )
};

export default Experience;