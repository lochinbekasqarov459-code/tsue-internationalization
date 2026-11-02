import type { Config } from 'tailwindcss';

const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#10233F', navy: '#0B1B32', gold: '#C9A66B', mist: '#F4F7FB' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] };
export default config;
