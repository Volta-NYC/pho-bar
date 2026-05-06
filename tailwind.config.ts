import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F0E8DA",
        "cream-soft": "#F8F2E7",
        tropical: {
          DEFAULT: "#2D5A3D",
          deep: "#1F4029",
        },
        coral: "#E87B6D",
        "amber-brand": "#D4A853",
        ink: "#1A1A1A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Bebas Neue", "Impact", "sans-serif"],
        serif: ["var(--font-serif)", "Lora", "Georgia", "serif"],
      },
      backgroundImage: {
        palm: "url('https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550682551335-Q65DESGHGNKCDKX17UGC/palm.jpg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "neon-flicker": "neon-flicker 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config
