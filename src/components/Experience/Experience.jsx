import { experiences } from "../../constants";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      {/* Section Title */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-dark dark:text-text-light">
          <Briefcase className="inline w-8 h-8 mr-3 mb-1 text-accent" />
          Professional Experience
        </h2>

        <div className="w-60 h-1 bg-accent mx-auto mt-2"></div>

        <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
          A snapshot of my professional experience, practical learning, and hands-on contributions.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-accent/50"></div>

        {/* Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle (hidden on mobile) */}
            <div className="hidden sm:flex absolute sm:left-1/2 transform -translate-x-1/2 bg-white dark:bg-primary-dark border-4 border-accent w-14 h-14 rounded-full justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
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
                ${index % 2 === 0 ? "sm:ml-10" : "sm:mr-10"}`}
            >
              {/* Header */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-text-dark dark:text-text-light leading-snug">
                  {experience.role}
                </h3>
                <h4 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                  {experience.company}
                </h4>
                <p className="text-xs text-gray-500 mt-2">{experience.date}</p>
              </div>

              {/* Bullet Points */}
              {experience.points && (
                <ul className="mt-5 border-t border-gray-200 dark:border-gray-700 pt-4 list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {experience.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Skills */}
              <div className="mt-6">
                <h5 className="font-medium text-text-dark dark:text-text-light mb-2">
                  Key Technologies:
                </h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-accent/10 text-accent px-3 py-1 text-xs font-semibold rounded-full mr-2 mb-2 border border-accent/50 transition duration-150 hover:bg-accent/20"
                    >
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
  );
};

export default Experience;
