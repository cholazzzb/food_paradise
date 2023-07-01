import { defineRecipe } from '@pandacss/dev';

export const headingRecipe = defineRecipe({
  name: 'heading',
  description: 'The styles for the Heading component',
  base: {
    fontWeight: 'fontSemiBold',
  },
  variants: {
    size: {
      '7xl': { fontSize: '7xl', fontWeight: 'fontBold' },
      '6xl': { fontSize: '6xl', fontWeight: 'fontBold' },
      '5xl': { fontSize: '5xl', fontWeight: 'fontBold' },
      '4xl': { fontSize: '4xl', fontWeight: 'fontBold' },
      '3xl': { fontSize: '3xl', fontWeight: 'fontBold' },
      '2xl': { fontSize: '2xl', fontWeight: 'fontBold' },
      xl: { fontSize: 'xl', fontWeight: 'fontBold' },
      lg: { fontSize: 'lg', fontWeight: 'fontBold' },
      md: { fontSize: 'md', fontWeight: 'fontBold' },
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
