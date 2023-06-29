import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

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

const tokens = {};

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens,
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },

  // The output directory for your css system
  outdir: '/src/__generated__/panda-css',

  jsxFramework: 'react',

  globalCss,
});
