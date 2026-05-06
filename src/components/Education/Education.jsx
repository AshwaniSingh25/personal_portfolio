import React from "react";

import { education } from "../../constants";

import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

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
              border-black/10
              bg-white/70
              px-5
              py-2.5
              backdrop-blur-xl

              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <GraduationCap className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Academic Journey
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
              text-gray-900
              dark:text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Education &
            <span
              className="
                block
                bg-gradient-to-r
                from-violet-500
                via-cyan-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              learning foundation.
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
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
            My academic journey and the foundational knowledge I developed in
            computer applications, programming, and software development.
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
              w-[1px]
              bg-gradient-to-b
              from-cyan-500/60
              via-cyan-400/20
              to-transparent

              lg:left-1/2
              lg:-translate-x-1/2
            "
          />

          {/* EDUCATION ITEMS */}
          <div className="space-y-10 md:space-y-14">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`
                  relative
                  flex
                  w-full
                  ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}
                `}
              >
                {/* MOBILE LOGO */}
                <div
                  className="
                    absolute
                    left-[10px]
                    top-7
                    z-20
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border-2
                    border-cyan-400/30
                    bg-white
                    shadow-[0_0_20px_rgba(34,211,238,0.25)]

                    dark:bg-[#0b0718]

                    lg:hidden
                  "
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      rounded-full
                      object-cover
                    "
                  />
                </div>

                {/* DESKTOP DOT */}
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
                    ml-14
                    w-full
                    max-w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-black/10
                    bg-white/70
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-cyan-400/30
                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)]

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:hover:shadow-[0_10px_35px_rgba(0,0,0,0.35)]

                    sm:ml-16
                    lg:max-w-[46%]
                    lg:ml-0

                    ${index % 2 === 0 ? "lg:mr-20" : "lg:ml-20"}
                  `}
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
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-5 sm:p-6">
                    {/* TOP */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        sm:flex-row
                        sm:items-start
                      "
                    >
                      {/* LOGO */}
                      <div
                        className="
                          hidden
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-xl
                          border
                          border-black/10
                          bg-white
                          shadow-lg

                          dark:border-white/10
                          dark:bg-[#0b0718]

                          lg:flex
                        "
                      >
                        <img
                          src={edu.img}
                          alt={edu.school}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                          "
                        />
                      </div>

                      {/* INFO */}
                      <div className="flex-1">
                        {/* DEGREE */}
                        <h3
                          className="
                            text-xl
                            font-bold
                            leading-snug
                            text-gray-900
                            dark:text-white

                            sm:text-2xl
                          "
                        >
                          {edu.degree}
                        </h3>

                        {/* SCHOOL */}
                        <p
                          className="
                            mt-2
                            text-base
                            font-medium
                            text-cyan-500
                          "
                        >
                          {edu.school}
                        </p>

                        {/* DATE */}
                        <div
                          className="
                            mt-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-black/10
                            bg-black/[0.03]
                            px-4
                            py-2

                            dark:border-white/10
                            dark:bg-white/[0.04]
                          "
                        >
                          <Calendar className="h-4 w-4 text-violet-500" />

                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {edu.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* GRADE */}
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        px-4
                        py-3
                      "
                    >
                      <Award className="h-5 w-5 text-cyan-400" />

                      <p
                        className="
                          text-sm
                          font-medium
                          text-gray-800
                          dark:text-gray-200
                        "
                      >
                        Grade / Score:
                        <span className="ml-2 text-cyan-500 font-bold">
                          {edu.grade}
                        </span>
                      </p>
                    </div>

                    {/* POINTS */}
                    {edu.points && (
                      <ul className="mt-6 space-y-3">
                        {edu.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="
                                flex
                                items-start
                                gap-3
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

                            <span
                              className="
                                  text-sm
                                  leading-relaxed
                                  text-gray-600
                                  dark:text-gray-400
                                  sm:text-base
                                "
                            >
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default Education;
