import type { Config } from "tailwindcss";

const config: Config = {
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {'red': "#fc0000"},
        },
    },
    plugins: [],
};

export default config;
