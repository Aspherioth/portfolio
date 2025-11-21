import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: '\'Cinzel Decorative\', Georgia, serif' },
        body: {
          value: 'Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif',
        },
        mono: {
          value: '\'Fira Code\', ui-monospace, \'SFMono-Regular\', Menlo, monospace',
        },
      },
      colors: {
        brand: {
          primary: {
            light: { value: 'oklch(35.6% 0.165 298)' },
            dark: { value: 'oklch(38.2% 0.162 298)' },
          },
          secondary: {
            light: { value: 'oklch(69.8% 0.137 50)' },
            dark: { value: 'oklch(37.5% 0.12 50)' },
          },
          teal: {
            light: { value: 'oklch(70.2% 0.123 180)' },
            dark: { value: 'oklch(42.8% 0.086 180)' },
          },
          gold: {
            light: { value: 'oklch(57.4% 0.12 85)' },
            dark: { value: 'oklch(78.5% 0.125 85)' },
          },
        },
        bg: {
          light: { value: 'oklch(98% 0.01 270)' },
          dark: { value: 'oklch(21.2% 0 0)' },
        },
        card: {
          normal: {
            light: { value: 'oklch(100% 0 0)' },
            dark: { value: 'oklch(25.9% 0 0)' },
          },
          bold: {
            light: { value: 'oklch(90% 0 0)' },
            dark: { value: 'oklch(35.9% 0 0)' },
          },
        },
        border: {
          light: { value: 'oklch(91.2% 0.027 298)' },
          dark: { value: 'oklch(35.3% 0 0)' },
        },
        text: {
          primary: {
            light: { value: 'oklch(20% 0 0)' },
            dark: { value: 'oklch(90% 0 0)' },
          },
          secondary: {
            light: { value: 'oklch(24.2% 0.078 298)' },
            dark: { value: 'oklch(94.1% 0 0)' },
          },
          muted: {
            light: { value: 'oklch(42.8% 0.067 298)' },
            dark: { value: 'oklch(80.8% 0 0)' },
          },
        },
        feedback: {
          success: {
            light: { value: 'oklch(94.8% 0.043 142)' },
            dark: { value: 'oklch(52.8% 0.12 142)' },
          },
          warning: {
            light: { value: 'oklch(96.5% 0.056 85)' },
            dark: { value: 'oklch(61.2% 0.118 85)' },
          },
          error: {
            light: { value: 'oklch(89.2% 0.075 15)' },
            dark: { value: 'oklch(42.5% 0.18 15)' },
          },
          info: {
            light: { value: 'oklch(92.8% 0.065 230)' },
            dark: { value: 'oklch(54.8% 0.145 230)' },
          },
        },
      },
      shadows: {
        card: {
          light: { value: '0 8px 20px rgba(0, 0, 0, 0.07)' },
          dark: { value: '0 10px 25px rgba(0, 0, 0, 0.35)' },
        },
        glow: {
          primary: {
            light: { value: '0 0 10px oklch(35.6% 0.165 298 / 0.35)' },
            dark: { value: '0 0 16px oklch(38.2% 0.162 298 / 0.55)' },
          },
          secondary: {
            light: { value: '0 0 10px oklch(69.8% 0.137 50 / 0.35)' },
            dark: { value: '0 0 16px oklch(37.5% 0.12 50 / 0.55)' },
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { base: '{colors.bg.light}', _dark: '{colors.bg.dark}' },
          },
          nav: {
            value: { base: '{colors.brand.teal.light}', _dark: '{colors.brand.teal.dark}' },
          },
        },
        card: {
          DEFAULT: {
            value: { base: '{colors.card.normal.light}', _dark: '{colors.card.normal.dark}' },
          },
          bold: {
            value: { base: '{colors.card.bold.light}', _dark: '{colors.card.bold.dark}' },
          },
        },
        border: {
          value: {
            base: '{colors.border.light}',
            _dark: '{colors.border.dark}',
          },
        },
        text: {
          primary: {
            value: {
              base: '{colors.text.primary.light}',
              _dark: '{colors.text.primary.dark}',
            },
          },
          secondary: {
            value: {
              base: '{colors.text.secondary.light}',
              _dark: '{colors.text.secondary.dark}',
            },
          },
          muted: {
            value: {
              base: '{colors.text.muted.light}',
              _dark: '{colors.text.muted.dark}',
            },
          },
        },
      },
    },
  },
})

export default createSystem(defaultConfig, customConfig)
