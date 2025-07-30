import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Design System Colors - Dark Purple Theme
				brand: {
					50: '#f8f7ff',
					100: '#f0eeff',
					200: '#e1dcff',
					300: '#c9bfff',
					400: '#ab94ff',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065'
				},
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0a0a0a'
				},
				success: {
					50: '#f0fdf4',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d'
				},
				warning: {
					50: '#fffbeb',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309'
				},
				error: {
					50: '#fef2f2',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c'
				},
				info: {
					50: '#eff6ff',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8'
				}
			},
			fontFamily: {
				'display': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace']
			},
			fontSize: {
				'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'display-xs': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'glow': '0 0 20px rgba(228, 85, 255, 0.3)',
				'glow-lg': '0 0 40px rgba(228, 85, 255, 0.4)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(228, 85, 255, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(228, 85, 255, 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			gridTemplateColumns: {
				'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
				'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
				'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
