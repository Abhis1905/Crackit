/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        brand: {
          50:  "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        neon: {
          orange: "#ff6b1a",
          yellow: "#ffd93d",
          green:  "#6bcb77",
          blue:   "#4d96ff",
          purple: "#c77dff",
          pink:   "#ff6b9d",
        },
        dark: {
          900: "#0a0a0f",
          800: "#0f0f1a",
          700: "#151520",
          600: "#1a1a2e",
          500: "#252540",
          400: "#333355",
        }
      },
      animation: {
        "float":     "float 6s ease-in-out infinite",
        "pulse-glow":"pulse-glow 2s ease-in-out infinite",
        "slide-up":  "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        "shimmer":   "shimmer 2s linear infinite",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        float:       { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" } },
        "pulse-glow":{ "0%,100%": { boxShadow: "0 0 20px rgba(255,107,26,0.3)" }, "50%": { boxShadow: "0 0 60px rgba(255,107,26,0.8), 0 0 100px rgba(255,107,26,0.4)" } },
        slideUp:     { "0%": { transform: "translateY(30px)", opacity: 0 }, "100%": { transform: "translateY(0)", opacity: 1 } },
        fadeIn:      { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        shimmer:     { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        bounceIn:    { "0%": { transform: "scale(0)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,107,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      }
    },
  },
  plugins: [],
}
