import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				['bottom-sheet-up']: {
					'0%': { transform: 'translateY(320px)' },
					'100%': { transform: 'translateY(0)' },
				},
				['bottom-sheet-down']: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(320px)' },
				},
			},
			animation: {
				sheetUp: 'bottom-sheet-up 200ms ease-in-out',
				sheetDown: 'bottom-sheet-down 200ms ease-in-out',
			},
		},
	},
	plugins: [],
};
export default config;
