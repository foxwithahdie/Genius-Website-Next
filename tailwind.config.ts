import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                // TODO: how do we host futura?
                futura: ["Futura", ...defaultTheme.fontFamily.sans],
                // TODO: is inter really the global default for sans?
                sans: [
                    "Inter Variable",
                    "Inter",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            supports: {
                dvw: "width: 100dvw",
                dvh: "height: 100dvh",
            },
            width: {
                dscreen: "100dvw",
            },
            minWidth: {
                dscreen: "100dvw",
            },
            maxWidth: {
                dscreen: "100dvw",
            },
            height: {
                dscreen: "100dvh",
            },
            minHeight: {
                dscreen: "100dvh",
            },
            maxHeight: {
                dscreen: "100dvh",
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
