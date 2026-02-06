import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      spacing: {
        "8": "0.5rem", // 8px
        "16": "1rem", // 16px
        "24": "1.5rem", // 24px
        "32": "2rem", // 32px
        "40": "2.5rem", // 40px
        "48": "3rem", // 48px
        "64": "4rem", // 64px
        "80": "5rem", // 80px
        "96": "6rem", // 96px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        paper: {
          50: "#faf9f6",
          100: "#f5f3ef",
          200: "#ebe8e1",
          300: "#ddd8cd",
          400: "#c9c1b3",
          500: "#b0a693",
          600: "#8f8574",
          700: "#6b6456",
          800: "#4a453c",
          900: "#2f2b24",
        },
        coffee: {
          50: "#f7f5f2",
          100: "#ede8e0",
          200: "#d9d0c2",
          300: "#bfb09a",
          400: "#9d8a6f",
          500: "#7d6b54",
          600: "#665544",
          700: "#524437",
          800: "#3d3329",
          900: "#2a221b",
        },
        clay: {
          50: "#faf7f3",
          100: "#f3ede4",
          200: "#e4d8c8",
          300: "#d0bda5",
          400: "#b89d7d",
          500: "#9d7f5c",
          600: "#82684a",
          700: "#6a543c",
          800: "#54432f",
          900: "#3d3021",
        },
        caramel: {
          50: "#faf7f3",
          100: "#f3ede4",
          200: "#e4d8c8",
          300: "#d0bda5",
          400: "#b89d7d",
          500: "#9d7f5c",
          600: "#82684a",
          700: "#6a543c",
          800: "#54432f",
          900: "#3d3021",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
