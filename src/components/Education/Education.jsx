import React from 'react'
import { education } from '../../constants'
import { GraduationCap } from 'lucide-react'; // Icon for title

const Education = () => {
  return (
    // 1. Remove custom BG and clip-path if App.jsx handles the global styling. 
    // Use standard padding for consistency.
    <section id="education" className="py-24 md:py-32">
        
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-dark dark:text-text-light">
            <GraduationCap className="inline w-8 h-8 mr-3 mb-1 text-accent" />
            Education & Certifications
          </h2>
          
          {/* Underline using accent color */}
          <div className="w-52 h-1 bg-accent mx-auto mt-2"></div>
          
          <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
            My foundational knowledge and advanced studies in software architecture and engineering methodologies.
          </p>
        </div>


        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto">
         
          {/* 2. Vertical Line - Using the accent color */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-accent/50 h-full"></div>
          
          {/* Education Entries */}
          {education.map((edu, index) => (
            
            <div key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>

              {/* 3. Timeline Circle - Styled with accent border */}
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white dark:bg-primary-dark border-4 border-accent w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 hide-circle:hidden">
                <img src={edu.img}
                alt={edu.school}
                loading="lazy"
                className="w-full h-full object-cover rounded-full" 
                />
              </div>

                {/* Content Section */}
                <div className={`w-full sm:max-w-md p-6 sm:p-8 rounded-xl 
                    bg-white dark:bg-primary-dark/80 
                    border border-gray-200 dark:border-accent/30 
                    shadow-xl dark:shadow-[0_0_25px_5px_rgba(0,191,255,0.15)] 
                    transform transition-transform duration-300 hover:scale-[1.02]
                    ${index % 2 === 0 ? "sm:mr-10" : "sm:ml-10"}` // Added margin for spacing
                    }>

                  {/* Flex container for image and text */}
                  <div className="flex items-center space-x-6">
                   
                    {/* School Logo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary-light dark:bg-primary-dark rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 flex-shrink-0">
                    <img src={edu.img}
                     alt={edu.school}
                     loading="lazy"
                     className="w-full h-full object-cover p-1" />
                    </div>

                    {/* Degree School name and Date */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-text-dark dark:text-text-light leading-snug">{edu.degree}</h3>
                        <h4 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">{edu.school}</h4>
                      </div>

                      {/* Date */}
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{edu.date}</p>
                    </div>
                  </div>
                        
                  {/* Grade and Description  */}
                  <p className="mt-6 text-text-dark dark:text-gray-200 font-bold border-t border-gray-200 dark:border-gray-700 pt-4">Grade/Score: <span className="text-accent">{edu.grade}</span></p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{edu.desc}</p>
                  
                </div>

              </div>
            ))}
          </div>
    </section>
  )
}

export default Education;