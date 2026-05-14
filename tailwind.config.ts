import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Aliases shadcn historiques
        heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        // Tokens Botami (hi-fi)
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "Menlo", "monospace"],
      },
      colors: {
        // tokens shadcn (conservés pour back-office, LPs, composants UI existants)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "section-alt": "hsl(var(--section-alt))",
        "section-dark": "hsl(var(--section-highlight))",
        "section-dark-fg": "hsl(var(--section-highlight-foreground))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        // === Tokens Botami (hi-fi, valeurs en dur — source de vérité) ===
        ambre: {
          DEFAULT: "#C4872C",
          dark: "#A06B1E",
          bg: "#FEF3E2",
        },
        ink: "#1A1A1A",
        cream: "#FAF7F2",
        n: {
          200: "#F0EBE3",
          300: "#E5E0D8",
          500: "#6B7280",
          700: "#4B4B4B",
        },
      },
      fontSize: {
        // Échelle hi-fi — desktop. Mobile géré via clamp() in-line ou utilities responsive.
        "display-1": ["104px", { lineHeight: "0.94", letterSpacing: "-0.04em" }],
        "display-2": ["72px", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-3": ["60px", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-4": ["54px", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "h-3": ["42px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "h-4l": ["30px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h-4": ["24px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h-5": ["21px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h-6": ["18px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        lead: ["17px", { lineHeight: "1.6" }],
        body: ["15px", { lineHeight: "1.55" }],
        small: ["13px", { lineHeight: "1.5" }],
        eyebrow: ["11px", { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Tokens Botami
        card: "14px",
        band: "18px",
      },
      borderWidth: {
        strong: "1.5px",
      },
      maxWidth: {
        wrap: "1240px",
      },
      spacing: {
        gutter: "64px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee-x": "marquee-x 42s linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
      boxShadow: {
        "focus-ambre": "0 0 0 3px rgba(196,135,44,0.25)",
        subtle: "0 1px 2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
