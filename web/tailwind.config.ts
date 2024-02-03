import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        categoryCard: {
          Web: "#6BD1FF",
          Back: "#00C86F",
          Mobile: "#7B71FF",
          DevOps: "#F16165",
        },
      },
    },
  },
  plugins: [],
};
export default config;
