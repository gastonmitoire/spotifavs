import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          colors: {
            primary: "#88c0d0", // Un tono pastel suave
            background: "#f4f4f4", // Un blanco suave y pastel
            text: "#2e3440", // Un gris oscuro para el texto
            border: "#e5e5e5", // Un gris claro para bordes
            shadow: "rgba(0, 0, 0, 0.1)", // Sombra ligera
          },
          layout: {
            borderRadius: "12px", // Radio de borde para elementos
            spacing: "16px", // Espaciado general
            fontFamily: "Inter, sans-serif", // Fuente general
          },
        },
        dark: {
          colors: {
            primary: "#1db954", // Color primario destacado
            background: "#191414", // Fondo basado en el color especificado
            text: "#ffffff", // Texto blanco
            border: "#333333", // Bordes gris oscuro
            shadow: "rgba(0, 0, 0, 0.5)", // Sombra más oscura
          },
          layout: {
            borderRadius: "12px", // Radio de borde para elementos
            spacing: "16px", // Espaciado general
            fontFamily: "Inter, sans-serif", // Fuente general
          },
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
