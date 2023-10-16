module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700: "#ffffff",
          A700_72: "#ffffff72",
          A700_00: "#ffffff00",
        },
        blue_gray: {
          50: "#ebf0f0",
          100: "#cfdbd5",
          800: "#3f3d56",
          900: "#2f2e41",
          "100_26": "#cfdbd526",
          "100_1b": "#cfdbd51b",
          "100_75": "#cfdbd575",
          "50_63": "#ebf0f063",
          "50_99": "#ebf0f099",
          "100_43": "#cfdbd543",
          "100_b2": "#cfdbd5b2",
          "50_19": "#ebf0f019",
          "100_90": "#cfdbd590",
          "50_01": "#e8ebef",
          "50_b2": "#ebf0f0b2",
          "100_4c": "#cfdbd54c",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_0f": "#0d0a190f",
          "900_14": "#0d0a1914",
          "900_d8": "#000000d8",
          "900_a7": "#000000a7",
        },
        light_blue: {
          600: "#00a2e5",
          800: "#016fd0",
          900: "#005b9c",
          "900_01": "#00447c",
        },
        green: { A700: "#22e23d" },
        yellow: { 800: "#f79e1b", "800_01": "#f2ae14" },
        pink: { 300: "#ff6884", 500: "#f20089", "500_6c": "#f200896c" },
        red: { 700: "#e21836", A700: "#eb001b" },
        deep_orange: { 100: "#ffb6b6" },
        gray: {
          100: "#f2f2f2",
          300: "#e6e6e6",
          600: "#747a80",
          900: "#1e1e1e",
          "500_3f": "#999ba83f",
          "500_2d": "#999ba82d",
        },
        blue: { 900: "#0e4595", A700_99: "#0052ff99", A700: "#0052ff" },
        amber: { 300: "#f4c952", A400: "#ffbd00" },
        cyan: { 800: "#007b84" },
        orange: { A700: "#ff5f00" },
        indigo: { 300: "#7375cf", 500: "#473ecd" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(0deg ,#ffffff,#ffffff00)" },
      boxShadow: {
        bs1: "0px 3px  4px 0px #999ba83f",
        bs: "0px 20px  24px 0px #999ba82d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};