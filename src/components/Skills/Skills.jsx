import React from "react";

import { SkillsInfo } from "../../constants";

import {
  Code2,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* SECTION HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          
          {/* BADGE */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm text-gray-300">
              Technical Expertise
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Technologies I use to
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
              build modern products.
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
            I work across frontend, backend, databases,
            and modern development tools to create
            scalable, performant, and user-focused
            digital experiences.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {SkillsInfo.map((category, index) => (
            <div
              key={category.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/20
                hover:bg-white/[0.07]
                hover:shadow-[0_10px_50px_rgba(0,0,0,0.35)]
              "
            >
              {/* CARD GLOW */}
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
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                
                {/* TOP */}
                <div className="mb-8 flex items-center gap-4">
                  
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-violet-500
                      to-cyan-500
                      shadow-lg
                    "
                  >
                    <Code2 className="h-7 w-7 text-white" />
                  </div>

                  {/* TITLE */}
                  <div>
                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Modern development technologies
                    </p>
                  </div>
                </div>

                {/* SKILLS GRID */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-4
                    sm:grid-cols-3
                  "
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        group/skill
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-5
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-white/10
                        hover:shadow-lg
                      "
                    >
                      {/* LOGO */}
                      <div
                        className="
                          mb-3
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-white/5
                          transition-all
                          duration-300
                          group-hover/skill:scale-110
                        "
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          loading="lazy"
                          className="
                            h-8
                            w-8
                            object-contain
                          "
                        />
                      </div>

                      {/* NAME */}
                      <span
                        className="
                          text-sm
                          font-medium
                          text-gray-300
                          transition-colors
                          duration-300
                          group-hover/skill:text-white
                        "
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD NUMBER */}
              <div
                className="
                  absolute
                  right-6
                  top-6
                  text-5xl
                  font-black
                  text-white/[0.03]
                "
              >
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;