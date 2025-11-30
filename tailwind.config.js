/** @type {import('tailwindcss').Config} */
export default {
  // 1. Content: Essential for Tailwind's JIT mode to scan your files for classes.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // 2. Dark Mode: Enables `dark:` utility prefix for theme switching.
  darkMode: 'class', 

  theme: {
    // Defines Poppins as the primary font stack for the 'font-sans' utility.
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      mono: ['Fira Code', 'monospace'],
    },
    
    extend: {
      // 3. Custom Color Palette: Professional and semantic colors.
      colors: {
        'primary-dark': '#0A192F',       // Deep Navy/Charcoal for Dark BG
        'secondary-light': '#F8F9FA',    // Off-White for Light BG
        'accent': '#00BFFF',             // Bright Blue/Sky Blue for CTAs/Highlights
        'accent-dark': '#009ACD',        // Darker shade for hover states
        'text-light': '#CCD6F6',         // Light text for dark backgrounds
        'text-dark': '#495670',          // Dark text for light backgrounds
      },
      
      // Screens: Added a common breakpoint for large screens and kept your custom one.
      screens:{
        'hide-circle' : {'min': '639px', 'max':'1350px'},
        '3xl': '1700px', // Extra large desktop monitors
      },
      
      // Keyframes: Definition of custom animations.
      keyframes:{
        blob:{
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      
      // Animation: Applying the keyframes to utility names.
      animation:{
        blob: 'blob 15s infinite ease-in-out', 
        'fade-down': 'fade-in-down 0.5s ease-out',
      },
      
      // Background Image: Your custom gradient and a radial utility.
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
        'radial-spotlight': 'radial-gradient(circle at center, var(--tw-color-accent-dark) 0%, transparent 50%)',
      },
      
      // Typography Size: Utility for extra-large headlines.
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      }
    },
  },
  
  // 4. Plugins: Include external packages (requires installation: npm install -D @tailwindcss/forms).
  plugins: [
    require('@tailwindcss/forms'),
  ],
}