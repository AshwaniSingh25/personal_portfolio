import React, { useState } from "react";
import { projects } from "../../constants";
import { FolderGit2, X, Github, ExternalLink } from "lucide-react";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModel = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-dark dark:text-text-light">
          <FolderGit2 className="inline w-8 h-8 mr-3 mb-1 text-accent" />
          Key Projects & Case Studies
        </h2>

        <div className="w-72 h-1 bg-accent mx-auto mt-2"></div>

        <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
          Deep dives into complex systems I've architected, focusing on scalability,
          performance, and solution design.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className="bg-white dark:bg-primary-dark/80 rounded-xl shadow-xl overflow-hidden cursor-pointer 
                     border border-gray-200 dark:border-accent/30 
                     hover:shadow-accent/50 hover:dark:shadow-[0_15px_30px_rgba(0,191,255,0.25)] 
                     hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-700"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-text-dark dark:text-text-light">
                {project.title}
              </h3>

              {/* Show first 2 points as preview */}
              {project.points && (
                <ul className="text-gray-500 dark:text-gray-400 mb-4 pt-3 text-sm space-y-1">
                  {project.points.slice(0, 2).map((p, idx) => (
                    <li key={idx} className="list-disc ml-4">
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mb-2 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-accent/10 text-accent text-xs font-semibold rounded-full px-3 py-1 mr-1 mb-1 border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4"
          onClick={handleCloseModel}
        >
          <div
            className="bg-white dark:bg-primary-dark rounded-xl shadow-2xl lg:w-full w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModel}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-accent transition z-10 p-2 bg-white dark:bg-primary-dark rounded-full"
              aria-label="Close Project Details"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-white dark:bg-primary-dark/90 p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-text-dark dark:text-text-light mb-2">
                  {selectedProject.title}
                </h3>

                {selectedProject.points && (
                  <ul className="text-gray-500 dark:text-gray-400 mb-6 text-base space-y-2 list-disc ml-5">
                    {selectedProject.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-accent/10 text-accent text-sm font-semibold rounded-full px-3 py-1 border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 flex items-center justify-center bg-accent hover:bg-accent-dark text-white py-3 rounded-lg text-lg font-bold transition duration-300 shadow-lg shadow-accent/30"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 flex items-center justify-center border-2 border-gray-400 dark:border-gray-600 text-text-dark dark:text-gray-300 hover:border-accent hover:text-accent py-3 rounded-lg text-lg font-bold transition duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
