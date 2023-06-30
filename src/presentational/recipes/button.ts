import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  name: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
  },
  variants: {
    visual: {
      primary: { bg: 'piccolo', color: 'goten' },
      secondary: { bg: 'hit', color: 'goten' },
      stroke: { bg: 'trunks', color: 'bulma' },
      ghost: { bg: 'transparent', color: 'trunks' },
    },
    size: {
      xs: { paddingInline: '4xs', paddingBlock: '5xs', fontSize: 'xs' },
      sm: { paddingInline: '3xs', paddingBlock: '5xs', fontSize: 'sm' },
      md: { paddingInline: '2xs', paddingBlock: '4xs', fontSize: 'sm' },
      lg: { paddingInline: '2xs', paddingBlock: '3xs', fontSize: 'md' },
      xl: { paddingInline: 'xs', paddingBlock: '2xs', fontSize: 'md' },
    },
    shape: {
      rectangle: { padding: 'sm' },
    },
  },
  defaultVariants: {
    visual: 'primary',
    size: 'sm',
  },
});
