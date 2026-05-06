import React from "react";

import { experiences } from "../../constants";

import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        pt-36 pb-24
        md:py-32
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
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
            <Briefcase className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-medium text-gray-300">
              Career Timeline
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
            Professional
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
              experience & growth.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6
max-w-xl
              text-base
              leading-relaxed
              text-gray-400
              sm:text-lg
            "
          >
            My professional journey building modern web applications, learning
            industry practices, and delivering scalable digital solutions.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-6xl">
          {/* CENTER LINE */}
          <div
            className="
              absolute
              left-[10px]
              top-0
              h-full
              w-[2px]
              bg-gradient-to-b
from-cyan-500/50
via-cyan-400/20
to-transparent
              lg:left-1/2
              lg:-translate-x-1/2
            "
          />

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-10 md:space-y-14">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`
                  relative
                  flex
                  w-full
                  ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}
                `}
              >
             {/* MOBILE TIMELINE LOGO */}
<div
  className="
    absolute
    left-[10px]
    top-8
    z-20
    flex
    h-10
    w-10
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border-2
    border-cyan-400/40
    bg-[#0b0718]
    shadow-[0_0_20px_rgba(34,211,238,0.25)]
    backdrop-blur-xl

    sm:h-12
    sm:w-12

    lg:hidden
  "
>
  <img
    src={experience.img}
    alt={experience.company}
    loading="lazy"
    className="
      h-full
      w-full
      object-cover
      rounded-full
    "
  />
</div>

{/* DESKTOP TIMELINE DOT */}
<div
  className="
    absolute
    left-1/2
    top-10
    z-20
    hidden
    h-3
    w-3
    -translate-x-1/2
    rounded-full
    bg-cyan-400
    shadow-[0_0_15px_rgba(34,211,238,0.7)]

    lg:block
  "
/>
                {/* CARD */}
                <div
                  className={`
                    group
                    relative
                    ml-14 sm:ml-16
                    w-full
                    max-w-full lg:max-w-2xl
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/30
                    hover:shadow-[0_15px_60px_rgba(0,0,0,0.45)]
                    lg:ml-0
                    ${index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"}
                  `}
                >
                  {/* GLOW EFFECT */}
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
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

                    <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-5 sm:p-7 lg:p-9">
                    {/* TOP SECTION */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-6
                        sm:flex-row
                        sm:items-start
                      "
                    >
                      {/* COMPANY LOGO */}
                      <div
                        className="
                          relative
                          flex
                          h-24
                          w-24
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-gradient-to-br
                          from-white/10
                          to-white/5
                          p-4
                          shadow-xl
                          backdrop-blur-xl
                        "
                      >
                        {/* INNER GLOW */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />

                        <img
                          src={experience.img}
                          alt={experience.company}
                          loading="lazy"
                          className="
                            relative
                            z-10
                            h-full
                            w-full
                            object-contain
                          "
                        />
                      </div>

                      {/* ROLE INFO */}
                      <div className="flex-1">
                        {/* ROLE */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3
                              className="
                                text-2xl
                                font-bold
                                text-white
                                sm:text-3xl
                              "
                            >
                              {experience.role}
                            </h3>

                            <p
                              className="
                                mt-2
                                text-lg
                                font-medium
                                text-cyan-400
                              "
                            >
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        {/* DATE */}
                        <div
                          className="
                            mt-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-black/20
                            px-4
                            py-2
                          "
                        >
                          <Calendar className="h-4 w-4 text-violet-400" />

                          <span className="text-sm text-gray-300">
                            {experience.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* POINTS */}
                    {experience.points && (
                      <ul className="mt-8 space-y-4">
                        {experience.points.map((point, idx) => (
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
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* TECH STACK */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {experience.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="
                              rounded-full
                              border
                              border-cyan-400/20
                              bg-cyan-400/10
                              px-4
                              py-2
                              text-xs
                              font-semibold
                              text-cyan-300
                              transition-all
                              duration-300
                              hover:scale-105
                              hover:bg-cyan-400/20
                            "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
