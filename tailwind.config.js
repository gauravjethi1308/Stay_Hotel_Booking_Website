module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        bgPrimary: "#ffedd5",
        primaryHover: "#f97316",
        primaryFont: "#ffffff",
        secondaryFont: "#66645e",
        Marcellus: ["Marcellus", "serif"],
      },

      screens: {
        xs: "200px",
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },

    

      fontFamily: {
        primaryType: ["Marcellus", "serif"],
        secondaryType: ["Iceland", "serif"],
      },
    },
  },
};
