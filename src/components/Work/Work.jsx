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
    <section
      id="work"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-2.5
              backdrop-blur-xl
            "
          >
            <FolderGit2 className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-medium text-gray-300">
              Featured Projects
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Projects &
            <span
              className="
                block
                bg-gradient-to-r
                from-violet-400
                via-cyan-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              case studies.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-400
              sm:text-lg
            "
          >
            A collection of projects focused on performance, scalability, user
            experience, and solving real-world problems using modern
            technologies.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModel(project)}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/20
                hover:bg-white/[0.06]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#030014]
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6">
                {/* TITLE */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  {project.title}
                </h3>

                {/* PREVIEW POINTS */}
                {project.points && (
                  <ul
                    className="
                      mt-4
                      space-y-2
                    "
                  >
                    {project.points.slice(0, 2).map((p, idx) => (
                      <li
                        key={idx}
                        className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            leading-relaxed
                            text-gray-400
                          "
                      >
                        <div
                          className="
                              mt-2
                              h-2
                              w-2
                              shrink-0
                              rounded-full
                              bg-cyan-400
                            "
                        />

                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-400/10
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          text-cyan-300
                          transition-all
                          duration-300
                          hover:bg-cyan-400/20
                        "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div
            className="
              fixed
              inset-0
              z-[60]
              flex
              items-center
              justify-center
              bg-black/90
              backdrop-blur-md
              p-4
            "
            onClick={handleCloseModel}
          >
            {/* MODAL CONTAINER */}
            <div
              className="
                relative
                max-h-[85vh]
                mt-20
                w-full
                max-w-5xl
                overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/20
                rounded-2xl
                border
                border-white/10
                bg-[#0b0718]
                backdrop-blur-2xl
                shadow-[0_10px_60px_rgba(0,0,0,0.45)]
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={handleCloseModel}
                className="
                  absolute
                  right-5
top-24
sm:top-5
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  text-gray-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                <X size={22} />
              </button>

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    sm:h-[400px]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#030014]
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* TITLE */}
                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  {selectedProject.title}
                </h3>

                {/* DESCRIPTION */}
                {selectedProject.points && (
                  <ul className="mt-8 space-y-4">
                    {selectedProject.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="
                            flex
                            items-start
                            gap-4
                          "
                      >
                        <div
                          className="
                              mt-2
                              h-2
                              w-2
                              shrink-0
                              rounded-full
                              bg-cyan-400
                            "
                        />

                        <p
                          className="
                              text-sm
                              leading-relaxed
                              text-gray-300
                              sm:text-base
                            "
                        >
                          {p}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-400/10
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-cyan-300
                        "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div
                  className="
                    mt-10
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                  "
                >
                  {/* LIVE BUTTON */}
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-500
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_0_30px_rgba(139,92,246,0.35)]
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                    "
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>

                  {/* GITHUB BUTTON */}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:bg-white/[0.06]
                    "
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
