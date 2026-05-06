import React, { useRef } from "react";

import toast, { Toaster } from "react-hot-toast";

import {
  Send,
  Mail,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const form = useRef();

  // SEND EMAIL
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3_ACCESS_KEY
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.success) {
      toast.success(
        "Message sent successfully 🚀",
        {
          position: "top-center",
        }
      );

      form.current.reset();
    } else {
      toast.error(
        "Failed to send message ❌",
        {
          position: "top-center",
        }
      );
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
    >
      <Toaster />

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
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Let's Connect
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
            Let's build
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
              something amazing.
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
            I'm actively looking for opportunities
            as a Full Stack Developer where I can
            contribute, grow, and build impactful
            digital experiences with modern technologies.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-black/10
            bg-white/70
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* HOVER GLOW */}
          <div
            className="
              absolute
              inset-0
              opacity-100
            "
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              grid
              gap-12
              p-6
              lg:grid-cols-2
              lg:p-10
            "
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center">
              
              {/* SMALL LABEL */}
              <div
                className="
                  mb-5
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-4
                  py-2
                "
              >
                <Mail className="h-4 w-4 text-cyan-400" />

                <span className="text-sm font-medium text-cyan-500">
                  Open for opportunities
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-gray-900
                  dark:text-white
                  sm:text-4xl
                "
              >
                Have a project,
                idea, or opportunity?
              </h3>

              {/* TEXT */}
              <p
                className="
                  mt-6
                  text-base
                  leading-relaxed
                  text-gray-600
                  dark:text-gray-400
                "
              >
                Whether it's a freelance project,
                collaboration, internship, or
                full-time opportunity — feel free
                to reach out. I'm always open to
                discussing exciting ideas and
                building modern web experiences.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-8 space-y-4">
                
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-black/10
                    bg-black/[0.03]
                    px-5
                    py-4

                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-500
                      text-white
                    "
                  >
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>

                    <p className="font-medium text-gray-900 dark:text-white">
                      manavpal.contact@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5"
              >
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-black/10
                      bg-black/[0.03]
                      px-5
                      py-4
                      text-gray-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-cyan-400
                      focus:ring-4
                      focus:ring-cyan-400/10

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                    "
                  />
                </div>

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-black/10
                      bg-black/[0.03]
                      px-5
                      py-4
                      text-gray-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-cyan-400
                      focus:ring-4
                      focus:ring-cyan-400/10

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                    "
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-black/10
                      bg-black/[0.03]
                      px-5
                      py-4
                      text-gray-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-cyan-400
                      focus:ring-4
                      focus:ring-cyan-400/10

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message..."
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-black/10
                      bg-black/[0.03]
                      px-5
                      py-4
                      text-gray-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-cyan-400
                      focus:ring-4
                      focus:ring-cyan-400/10

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                    "
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
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
                    hover:scale-[1.01]
                  "
                >
                  <Send
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;