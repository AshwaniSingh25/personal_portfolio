/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],

      mono: [
        "Fira Code",
        "monospace",
      ],
    },

    extend: {
      colors: {
        brand: {
          primary: "#030014",
          secondary: "#0A192F",
          accent: "#00BFFF",
          hover: "#009ACD",
        },

        text: {
          light: "#FFFFFF",
          muted: "#94A3B8",
          dark: "#495670",
        },
      },

      screens: {
        xs: "480px",
        "3xl": "1800px",
      },

      keyframes: {
        blob: {
          "0%, 100%": {
            transform:
              "translate3d(0,0,0) scale(1)",
          },

          "50%": {
            transform:
              "translate3d(15px,-15px,0) scale(1.03)",
          },
        },

        fadeDown: {
          "0%": {
            opacity: "0",
            transform:
              "translateY(-8px)",
          },

          "100%": {
            opacity: "1",
            transform:
              "translateY(0)",
          },
        },
      },

      animation: {
        blob:
          "blob 18s infinite ease-in-out",

        fadeDown:
          "fadeDown 0.5s ease-out forwards",
      },

      boxShadow: {
        card:
          "0 10px 30px rgba(0,0,0,0.35)",

        glow:
          "0 0 25px rgba(0,191,255,0.15)",
      },

      backdropBlur: {
        xs: "2px",
      },

      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(204,0,187,0.12) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.12) 100%)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
  ],
};