import { education } from "../../constants";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      
      {/* Section Title */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-dark dark:text-text-light">
          <GraduationCap className="inline w-8 h-8 mr-3 mb-1 text-accent" />
          Education
        </h2>

        <div className="w-52 h-1 bg-accent mx-auto mt-2"></div>

        <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
          My educational journey and the foundational knowledge I have built in computer applications and software development.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
       
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-accent/50"></div>

        {/* Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle (hidden on mobile) */}
            <div className="hidden lg:flex absolute left-1/2 transform lg:-translate-x-1/2 bg-white dark:bg-primary-dark border-4 border-accent w-14 h-14 rounded-full justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-xl 
              bg-white dark:bg-primary-dark/80 
              border border-gray-200 dark:border-accent/30 
              shadow-xl dark:shadow-[0_0_25px_5px_rgba(0,191,255,0.15)] 
              transform transition-transform duration-300 hover:scale-[1.02]
              ${index % 2 === 0 ? "sm:mr-10" : "sm:ml-10"}`}
            >
              {/* Header */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary-light dark:bg-primary-dark rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    loading="lazy"
                    className="w-full h-full object-cover p-1"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-dark dark:text-text-light leading-snug">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-6 text-text-dark dark:text-gray-200 font-bold border-t border-gray-200 dark:border-gray-700 pt-4">
                Grade / Score: <span className="text-accent">{edu.grade}</span>
              </p>

              {/* Bullet points (if available) */}
              {edu.points && (
                <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {edu.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
