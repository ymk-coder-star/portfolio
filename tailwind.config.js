/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				bg: '#f8fafc',
				surface: '#ffffff',
				text: {
					DEFAULT: '#0f172a',
					muted: '#64748b',
					subtle: '#94a3b8',
				},
				border: {
					DEFAULT: '#e2e8f0',
					strong: '#cbd5e1',
				},
				accent: {
					DEFAULT: '#6366f1',
					hover: '#4f46e5',
					soft: 'rgba(99, 102, 241, 0.08)',
					glow: 'rgba(99, 102, 241, 0.25)',
					violet: '#8b5cf6',
					cyan: '#22d3ee',
				},
			},
			fontFamily: {
				sans: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
				],
				mono: [
					'JetBrains Mono',
					'Fira Code',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'monospace',
				],
			},
			maxWidth: {
				site: '1200px',
				prose: '42rem',
				copy: '36rem',
			},
			spacing: {
				navbar: '4rem',
			},
			boxShadow: {
				glow: '0 8px 32px rgba(99, 102, 241, 0.18)',
			},
			keyframes: {
				'nav-enter': {
					from: { opacity: '0', transform: 'translateY(-100%)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'page-enter': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'loader-spin': {
					to: { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'nav-enter': 'nav-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
				'page-enter': 'page-enter 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
				'loader-spin': 'loader-spin 0.7s linear infinite',
			},
			transitionDuration: {
				fast: '150ms',
				base: '250ms',
			},
		},
	},
	plugins: [],
};
