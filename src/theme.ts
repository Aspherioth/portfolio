import { createSystem, defaultBaseConfig, defineConfig } from '@chakra-ui/react'
import {
  animationStyles,
  breakpoints,
  cssVarsPrefix,
  cssVarsRoot,
  globalCss,
  headingRecipe,
  keyframes,
  layerStyles,
  linkRecipe,
  semanticTokens,
  textStyles,
  tokens,
} from '@chakra-ui/react/theme'

const chakraTheme = defineConfig({
  preflight: true,
  cssVarsPrefix,
  cssVarsRoot,
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens,
    semanticTokens,
    textStyles,
    layerStyles,
    animationStyles,
  },
})

const customConfig = defineConfig({
  globalCss: {
    // Font smoothing already comes from Chakra's preflight
    ':root': {
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      minWidth: '20rem',
    },
    html: {
      scrollBehavior: 'smooth',
      _motionReduce: { scrollBehavior: 'auto' },
    },
    body: { fontFamily: 'body' },
    'a:focus-visible, button:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary',
      outlineOffset: '3px',
    },
  },
  theme: {
    recipes: {
      heading: headingRecipe,
      link: linkRecipe,
    },
    keyframes: {
      fadeUp: {
        from: { opacity: 0, transform: 'translateY(16px)' },
        to: { opacity: 1, transform: 'none' },
      },
    },
    tokens: {
      fonts: {
        heading: { value: "'Newsreader Variable', Georgia, serif" },
        body: {
          value: "'Schibsted Grotesk Variable', system-ui, sans-serif",
        },
      },
      fontSizes: {
        // Role-based sizes that sit between Chakra's scale steps
        label: { value: '0.8125rem' }, // 13px, dates and tag lines
        body: { value: '0.9375rem' }, // 15px, card and row copy
        prose: { value: '1.03125rem' }, // 16.5px, About paragraphs
        lead: { value: '1.1875rem' }, // 19px, hero paragraph and row titles
        logo: { value: '1.5rem' }, // 24px
        cardTitle: { value: '1.875rem' }, // 30px
        // Fluid headings: clamp(min, preferred, max)
        intro: { value: 'clamp(1.625rem, 2.8vw, 2.125rem)' }, // 26-34px
        sectionTitle: { value: 'clamp(2rem, 4vw, 3rem)' }, // 32-48px
        cover: { value: 'clamp(2.5rem, 4.4vw, 3.625rem)' }, // 40-58px
        callout: { value: 'clamp(1.875rem, 5vw, 4rem)' }, // 30-64px
        display: { value: 'clamp(2.875rem, 7vw, 6.25rem)' }, // 46-100px
      },
      colors: {
        // "Ice & Chocolate" palette from design v5
        ice: {
          bg: { value: '#DCE5EA' },
          surface: { value: '#E9EFF2' },
          soft: { value: '#C8D5DC' },
          border: { value: '#AFC0CA' },
        },
        chocolate: {
          text: { value: '#2A1A12' },
          muted: { value: '#584A42' },
          bg: { value: '#1A120D' },
          surface: { value: '#241913' },
          soft: { value: '#2F221A' },
          border: { value: '#423226' },
          mutedLight: { value: '#AA9C92' },
        },
        olive: {
          dark: { value: '#4A6A0F' },
          light: { value: '#B9D66E' },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {
              _light: '{colors.ice.bg}',
              _dark: '{colors.chocolate.bg}',
            },
          },
          surface: {
            value: {
              _light: '{colors.ice.surface}',
              _dark: '{colors.chocolate.surface}',
            },
          },
          soft: {
            value: {
              _light: '{colors.ice.soft}',
              _dark: '{colors.chocolate.soft}',
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: '{colors.chocolate.text}',
              _dark: '{colors.ice.bg}',
            },
          },
          muted: {
            value: {
              _light: '{colors.chocolate.muted}',
              _dark: '{colors.chocolate.mutedLight}',
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              _light: '{colors.ice.border}',
              _dark: '{colors.chocolate.border}',
            },
          },
        },
        primary: {
          DEFAULT: {
            value: {
              _light: '{colors.olive.dark}',
              _dark: '{colors.olive.light}',
            },
          },
          contrast: {
            value: { _light: '#FFFFFF', _dark: '{colors.chocolate.bg}' },
          },
        },
      },
    },
  },
})

export default createSystem(defaultBaseConfig, chakraTheme, customConfig)
