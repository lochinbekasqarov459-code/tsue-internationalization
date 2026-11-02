import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#10233F", midnight: "#091B31", gold: "#C8A66A", cloud: "#F3F6FA", muted: "#68778A" }, fontFamily: { display: ["Georgia", "Times New Roman", "serif"] } } },
  plugins: []
};
export default config;
