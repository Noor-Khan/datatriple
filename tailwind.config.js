/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#0db1d1',
				appGray: '#ddd',
				black: '#6a6b6a',
				bgGray: '#eeeeee80'
			}
		}
	}
};
