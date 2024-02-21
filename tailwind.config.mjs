/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#0f70b7",
			},
			fontFamily: {
				hubot: ["HubotSans", "sans-serif"]
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
