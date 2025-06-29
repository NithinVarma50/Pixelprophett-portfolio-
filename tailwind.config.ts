
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-subtle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"wave": {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14.0deg)" },
					"20%": { transform: "rotate(-8.0deg)" },
					"30%": { transform: "rotate(14.0deg)" },
					"40%": { transform: "rotate(-4.0deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" }
				},
				"background-shine": {
					"from": { backgroundPosition: "200% 0" },
					"to": { backgroundPosition: "0% 0" }
				},
                "slide-up": {
                    "0%": { transform: "translateY(100px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" }
                },
                "slide-down": {
                    "0%": { transform: "translateY(-100px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" }
                },
                "slide-left": {
                    "0%": { transform: "translateX(100px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" }
                },
                "slide-right": {
                    "0%": { transform: "translateX(-100px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" }
                },
                "zoom-in": {
                    "0%": { transform: "scale(0.5)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" }
                },
                "bounce-light": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" }
                },
                "text-focus-in": {
                    "0%": { filter: "blur(12px)", opacity: "0" },
                    "100%": { filter: "blur(0px)", opacity: "1" }
                },
                "text-shimmer": {
                    "0%": { backgroundPosition: "200% 0" },
                    "100%": { backgroundPosition: "-200% 0" }
                },
                "spotlight": {
                    "0%": { opacity: "0", transform: "scale(0.8)" },
                    "100%": { opacity: "1", transform: "scale(1)" }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"float": "float 6s ease-in-out infinite",
				"pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
				"rotate-slow": "rotate-slow 8s linear infinite",
				"wave": "wave 2.5s ease-in-out infinite",
				"background-shine": "background-shine 8s linear infinite",
                "slide-up": "slide-up 0.6s ease-out",
                "slide-down": "slide-down 0.6s ease-out",
                "slide-left": "slide-left 0.6s ease-out",
                "slide-right": "slide-right 0.6s ease-out",
                "zoom-in": "zoom-in 0.7s ease-out",
                "bounce-light": "bounce-light 3s ease-in-out infinite",
                "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                "text-shimmer": "text-shimmer 3s infinite linear",
                "spotlight": "spotlight 2s ease-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
