/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        minecraft: {
          grass: "#7CBB3F",
          grassDark: "#5A8F2F",
          dirt: "#8B5A2B",
          dirtDark: "#5D3A1C",
          stone: "#7D7D7D",
          stoneDark: "#4A4A4A",
          cobblestone: "#7A7A7A",
          bedrock: "#565656",

          oak: "#9C7B4F",
          birch: "#D7CA7F",
          spruce: "#654321",
          jungle: "#B4671F",
          acacia: "#BA6337",
          darkOak: "#4F2F0F",

          coal: "#373737",
          iron: "#D8AF93",
          gold: "#FCEE4B",
          goldDark: "#F1C40F",
          diamond: "#4FD0FF",
          diamondDark: "#2C93B8",
          emerald: "#17DD62",
          emeraldDark: "#00AA00",
          redstone: "#FF0000",
          redstoneDark: "#CC0000",
          lapis: "#1E6091",

          water: "#4F76FF",
          lava: "#FF6600",
          sand: "#F2E863",
          snow: "#FFFAFA",
          ice: "#7FB8DB",

          netherrack: "#723232",
          netherBrick: "#2D0A0A",
          glowstone: "#FFBC5A",
          obsidian: "#1A0B26",

          endStone: "#DDEAA4",
          purpur: "#A578A5",

          enchanted: "#AA00FF",
          xp: "#7FFF00",
          fire: "#FF4500",

          hotbar: "#8B8B8B",
          inventory: "#C6C6C6",
          health: "#FF0000",
          hunger: "#8B4513",
          armor: "#FFFFFF",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "Courier New", "monospace"],
        minecraft: [
          '"Minecraft"',
          '"Press Start 2P"',
          "Courier New",
          "monospace",
        ],
        minecraftBold: [
          '"Minecraft Bold"',
          '"Press Start 2P"',
          "Courier New",
          "monospace",
        ],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "pixel-xs": ["8px", "12px"],
        "pixel-sm": ["10px", "14px"],
        "pixel-base": ["12px", "16px"],
        "pixel-lg": ["14px", "20px"],
        "pixel-xl": ["16px", "24px"],
        "pixel-2xl": ["20px", "28px"],
        "pixel-3xl": ["24px", "32px"],
        "pixel-4xl": ["32px", "40px"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        minecraft: "0px",
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(0, 0, 0, 0.8)",
        "pixel-lg": "6px 6px 0px 0px rgba(0, 0, 0, 0.8)",
        "pixel-xl": "8px 8px 0px 0px rgba(0, 0, 0, 0.8)",
        "pixel-sm": "2px 2px 0px 0px rgba(0, 0, 0, 0.8)",
        "pixel-xs": "1px 1px 0px 0px rgba(0, 0, 0, 0.8)",

        "pixel-inset": "inset 2px 2px 0px 0px rgba(0, 0, 0, 0.5)",
        "pixel-inset-lg": "inset 4px 4px 0px 0px rgba(0, 0, 0, 0.5)",

        "pixel-glow":
          "0 0 10px rgba(79, 208, 255, 0.8), 4px 4px 0px 0px rgba(0, 0, 0, 0.8)",
        "pixel-enchanted":
          "0 0 15px rgba(170, 0, 255, 0.9), 4px 4px 0px 0px rgba(0, 0, 0, 0.8)",
        "pixel-fire":
          "0 0 12px rgba(255, 69, 0, 0.8), 4px 4px 0px 0px rgba(0, 0, 0, 0.8)",

        "block-3d":
          "2px 2px 0px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px 0px rgba(0, 0, 0, 0.2), 6px 6px 0px 0px rgba(0, 0, 0, 0.1)",
        "block-3d-pressed": "inset 2px 2px 0px 0px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 4s ease-in-out infinite",
        "float-fast": "float 2s ease-in-out infinite",
        bounce: "bounce 1s infinite",
        "bounce-slow": "bounce 2s infinite",
        "bounce-fast": "bounce 0.5s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "pulse-fast": "pulse 1s ease-in-out infinite",

        "block-break": "blockBreak 0.5s ease-in-out",
        "block-place": "blockPlace 0.3s ease-out",

        "item-pickup": "itemPickup 0.8s ease-out",

        "enchant-glint": "enchantGlint 2s linear infinite",

        "fire-flicker": "fireFlicker 1.5s ease-in-out infinite alternate",

        "xp-float": "xpFloat 2s ease-in-out infinite",

        "redstone-pulse": "redstonePulse 1s ease-in-out infinite",

        "screen-shake": "screenShake 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blockBreak: {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1.1) rotate(5deg)", opacity: "0.8" },
          "100%": { transform: "scale(0) rotate(15deg)", opacity: "0" },
        },
        blockPlace: {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        itemPickup: {
          "0%": { transform: "translateY(0px) scale(1)", opacity: "1" },
          "70%": { transform: "translateY(-30px) scale(0.8)", opacity: "0.8" },
          "100%": { transform: "translateY(-40px) scale(0.5)", opacity: "0" },
        },
        enchantGlint: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        fireFlicker: {
          "0%": { transform: "translateY(0px) scaleY(1)", opacity: "0.9" },
          "100%": { transform: "translateY(-2px) scaleY(1.1)", opacity: "1" },
        },
        xpFloat: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-4px) translateX(2px)" },
          "75%": { transform: "translateY(-2px) translateX(-1px)" },
        },
        redstonePulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        screenShake: {
          "0%, 100%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
      },
      backdropBlur: {
        pixel: "2px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      aspectRatio: {
        minecraft: "16 / 9",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".pixelated": {
          "image-rendering": "pixelated",
          "image-rendering": "-moz-crisp-edges",
          "image-rendering": "crisp-edges",
        },
        ".text-shadow-pixel": {
          "text-shadow": "2px 2px 0px rgba(0, 0, 0, 0.8)",
        },
        ".text-shadow-pixel-lg": {
          "text-shadow": "3px 3px 0px rgba(0, 0, 0, 0.8)",
        },
        ".minecraft-border": {
          "border-style": "solid",
          "border-image":
            "url(\"data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0h100v100H0z' fill='%23000'/%3e%3c/svg%3e\") 2",
        },
        ".minecraft-gradient": {
          background:
            "linear-gradient(45deg, #7CBB3F 0%, #5A8F2F 50%, #7CBB3F 100%)",
        },
        ".minecraft-stone-gradient": {
          background:
            "linear-gradient(45deg, #7D7D7D 0%, #4A4A4A 50%, #7D7D7D 100%)",
        },
        ".minecraft-gold-gradient": {
          background:
            "linear-gradient(45deg, #FCEE4B 0%, #F1C40F 50%, #FCEE4B 100%)",
        },
        ".minecraft-diamond-gradient": {
          background:
            "linear-gradient(45deg, #4FD0FF 0%, #2C93B8 50%, #4FD0FF 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

