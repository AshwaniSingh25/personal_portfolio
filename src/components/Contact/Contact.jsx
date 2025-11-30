import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Send, Mail } from 'lucide-react'; // Icons for visual polish

const Contact = () => {
  const form = useRef();

  // Your email submission logic is clean and remains unchanged
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    // Note: Assuming VITE_WEB3_ACCESS_KEY is correctly configured
    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        // Using toast theme 'dark' works well with our dark mode background
      });
      form.current.reset();
    } else {
      toast.error("Failed to send message. ❌", {
        position: "top-right",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 flex flex-col items-center">
      <Toaster />

      {/* Section Title */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl text-text-light dark:text-white">
          <Mail className="inline w-8 h-8 mr-3 mb-1 text-accent" />
          Contact
        </h2>
        
        {/* Underline using accent color */}
        <div className="w-44 h-1 bg-accent mx-auto mt-2"></div> 
        
        <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
          I'm actively seeking challenging **Architect** or **Principal Engineer** opportunities. Let's discuss your distributed systems challenges or next big project!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-xl bg-secondary-light dark:bg-primary-dark/80 p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-accent/30 transition duration-300">
        <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light text-center mb-6">
          Connect With Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          
          {/* Email Input Group */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1">
              Your Email (Required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g., architect.manav@company.com"
              required
              // 5. Using professional form styling and accent focus ring
              className="w-full p-3 rounded-lg bg-white dark:bg-primary-dark border border-gray-300 dark:border-gray-700 text-text-dark dark:text-text-light
                         focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 shadow-sm"
            />
          </div>

          {/* Name Input Group */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-primary-dark border border-gray-300 dark:border-gray-700 text-text-dark dark:text-text-light
                         focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 shadow-sm"
            />
          </div>

          {/* Subject Input Group */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry, Job Opportunity, etc."
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-primary-dark border border-gray-300 dark:border-gray-700 text-text-dark dark:text-text-light
                         focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 shadow-sm"
            />
          </div>

          {/* Message Textarea Group */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-white dark:bg-primary-dark border border-gray-300 dark:border-gray-700 text-text-dark dark:text-text-light
                         focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 shadow-sm resize-none"
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark py-3 text-white font-bold rounded-lg transition duration-300 transform hover:scale-[1.01] focus:ring-4 focus:ring-accent/50 shadow-lg shadow-accent/30 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;