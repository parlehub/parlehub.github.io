// Shared Tailwind Play-CDN config, included on every page after the cdn.tailwindcss.com
// <script> tag. Edit here, not per-page — every .html file in this repo points at this file.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base — a control-room ink, not neutral black
        ink: "#0b0e17",
        "ink-raised": "#131826",
        "ink-line": "#232a3a",
        // Text — warm ledger-paper, not clinical white
        parchment: "#ede9dd",
        "parchment-dim": "#b7b2a6",
        // Primary accent — the actual app.parlehub.com brand blue (sampled from the
        // product's logo mark and UI, e.g. checkbox/avatar fill), not a guessed color.
        primary: "#4d8eff",
        "primary-bright": "#7fabff",
        "primary-dim": "#3e5f8f",
        // Secondary accent — verdigris, reserved for budget/ledger/audit contexts
        verdigris: "#4fa393",
        "verdigris-dim": "#2e5c54",
        "verdigris-bright": "#7fc4b6",
        // Status
        danger: "#d9634f",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      fontSize: {
        eyebrow: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.16em", fontWeight: "600" },
        ],
        "display-lg": [
          "56px",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-lg-mobile": [
          "38px",
          { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "display-md": [
          "34px",
          { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "display-sm": [
          "24px",
          { lineHeight: "1.3", letterSpacing: "-0.005em", fontWeight: "600" },
        ],
      },
      spacing: {
        "stack-lg": "32px",
        "margin-desktop": "40px",
        gutter: "24px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "margin-mobile": "16px",
        unit: "4px",
        "container-max": "1440px",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
