import {
  defineConfig,
  defineGlobalStyles,
  defineKeyframes,
  defineTokens,
} from '@pandacss/dev';

import { buttonRecipe } from '~/app/recipes/button';
import {
  captionRecipe,
  headingRecipe,
  textRecipe,
} from '~/app/recipes/typography';

const globalCss = defineGlobalStyles({
  html: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  body: {
    padding: 0,
    margin: 0,
    height: '100vh',
  },

  '*': {
    boxSizing: 'inherit',
    scrollbarWidth: 'thin',
    scrollbarColor: 'transparent transparent',
    '&::-webkit-scrollbar': {
      width: '0px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  },

  '*:before': {
    boxSizing: 'inherit',
  },

  '*:after': {
    boxSizing: 'inherit',
  },

  a: { color: 'inherit', textDecoration: 'none' },

  p: {
    margin: 0,
  },

  'input::placeholder': {
    color: 'white',
    opacity: 1,
  },
});

const tokens = defineTokens({
  colors: {
    // base light
    piccolo: { value: '#4E46B4' },
    hit: { value: '#40A69F' },
    beerus: { value: '#EBEBEB' },
    gohan: { value: '#FFFFFF' },
    goten: { value: '#FFFFFF' },
    goku: { value: '#F5F5F5' },
    bulma: { value: '#000000' },
    trunks: { value: '#999CA0' },
    popo: { value: '#000000' },
    // supportive
    krillin100: { value: '#FFB319' },
    krillin60: { value: '#FFC652' },
    krillin10: { value: '#FFD98D' },
    chiChi100: { value: '#FF4E64' },
    chiChi60: { value: '#FF7687' },
    chiChi10: { value: '#FF96A3' },
    roshi100: { value: '#0CD664' },
    roshi60: { value: '#64DC77' },
    roshi10: { value: '#7FF291' },
    dodoria100: { value: '#D33030' },
    dodoria60: { value: '#DB4E4E' },
    dodoria10: { value: '#F06767' },
    cell100: { value: '#95F1D5' },
    cell60: { value: '#A2FADF' },
    cell10: { value: '#BFFFEC' },
    raditz100: { value: '#B3804A' },
    raditz60: { value: '#C1915D' },
    raditz10: { value: '#D6A979' },
    whis100: { value: '#3448F0' },
    whis60: { value: '#6777F8' },
    whis10: { value: '#8490F9' },
    frieza100: { value: '#5C33CF' },
    frieza60: { value: '#734DDE' },
    frieza10: { value: '#9271EF' },
    nappa100: { value: '#725550' },
    nappa60: { value: '#856A66' },
    nappa10: { value: '#A18681' },
  },
  sizes: {
    '7xs': { value: '32px' },
    '6xs': { value: '40px' },
    '5xs': { value: '48px' },
    '4xs': { value: '56px' },
    '3xs': { value: '64px' },
    '2xs': { value: '72px' },
    xs: { value: '80px' },
    sm: { value: '88px' },
    md: { value: '96px' },
    lg: { value: '104px' },
    xl: { value: '112px' },
    '2xl': { value: '120px' },
  },
  spacing: {
    '6xs': { value: '2px' },
    '5xs': { value: '4px' },
    '4xs': { value: '8px' },
    '3xs': { value: '12px' },
    '2xs': { value: '16px' },
    xs: { value: '24px' },
    sm: { value: '32px' },
    md: { value: '40px' },
    lg: { value: '48px' },
    xl: { value: '56px' },
    '2xl': { value: '64px' },
  },
  fonts: {
    fs1: { value: '12px' },
    fs2: { value: '16px' },
    fs3: { value: '20px' },
    fs4: { value: '24px' },
  },
  fontSizes: {
    '3xs': { value: '9px' },
    '2xs': { value: '10px' },
    xs: { value: '12px' },
    sm: { value: '14px' },
    md: { value: '16px' },
    lg: { value: '18px' },
    xl: { value: '20px' },
    '2xl': { value: '24px' },
    '3xl': { value: '32px' },
    '4xl': { value: '48px' },
    '5xl': { value: '56px' },
    '6xl': { value: '64px' },
    '7xl': { value: '72px' },
  },
  fontWeights: {
    fontRegular: { value: '400' },
    fontSemiBold: { value: '500' },
    fontBold: { value: '700' },
  },
  radii: {
    xs: { value: '0.25rem' },
    sm: { value: '0.5rem' },
    md: { value: '0.75rem' },
    lg: { value: '1rem' },
  },
  borders: {
    default: { value: '1px solid' },
    interactive: { value: '2px solid' },
  },
  shadows: {
    // light theme
    sm: {
      value:
        '0px 6px 6px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
    },
    md: {
      value:
        '0px 12px 12px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
    },
    lg: {
      value:
        '0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
    },
    xl: {
      value:
        '0px 32px 32px -8px rgba(0, 0, 0, 0.08), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.2)',
    },
  },
  zIndices: {
    carouselControl: { value: 5 },
    dialog: { value: 10000 },
    toggle: { value: 1 },
  },
});

const keyframes = defineKeyframes({
  skeleton: {
    '0%': { backgroundColor: 'hsl(200, 20%, 80%)' },
    '100%': { backgroundColor: 'hsl(200, 20%, 95%)' },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/presentational/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],
  exclude: ['./src/presentational/components/**/*.{ts,tsx,js,jsx}'],

  jsxFramework: 'react',
  theme: {
    tokens,
    extend: {
      recipes: {
        button: buttonRecipe,
        heading: headingRecipe,
        text: textRecipe,
        caption: captionRecipe,
      },
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      keyframes,
    },
  },
  utilities: {
    extend: {
      px: {
        className: '',
        values: 'spacing',
        transform(value: string) {
          return { paddingInline: value };
        },
      },
      py: {
        className: '',
        values: 'spacing',
        transform(value: string) {
          return { paddingBlock: value };
        },
      },
      shadows: {
        className: '',
        values: 'shadows',
        transform(value: string) {
          return { boxShadow: value };
        },
      },
      fontWeight: {
        className: '',
        values: 'fontWeight',
        transform(value: string) {
          return { fontWeight: value };
        },
      },
    },
  },

  outdir: '/src/__generated__/panda-css',

  globalCss,
});
