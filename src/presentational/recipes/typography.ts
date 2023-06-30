import { defineRecipe } from '@pandacss/dev';

export const headingRecipe = defineRecipe({
  name: 'heading',
  description: 'The styles for the Heading component',
  base: {
    fontWeight: 'fontRegular',
  },
  variants: {
    size: {
      '7xl': { fontSize: '7xl' },
      '6xl': { fontSize: '6xl' },
      '5xl': { fontSize: '5xl' },
      '4xl': { fontSize: '4xl' },
      '3xl': { fontSize: '3xl' },
      '2xl': { fontSize: '2xl' },
      xl: { fontSize: 'xl' },
      lg: { fontSize: 'lg' },
      md: { fontSize: 'md' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const textRecipe = defineRecipe({
  name: 'text',
  description: 'The styles for the Text component',
  base: { fontWeight: 'fontRegular', fontSize: 'md' },
});

export const captionRecipe = defineRecipe({
  name: 'caption',
  description: 'The styles for the Caption component',
  base: {
    fontWeight: 'fontRegular',
  },
  variants: {
    size: {
      '2xs': { fontSize: '2xs' },
      '3xs': { fontSize: '3xs' },
    },
  },
  defaultVariants: {
    size: '2xs',
  },
});
