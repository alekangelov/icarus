import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { breakpoints, responsive } from '../../../variables/breakpoints';
import { vars } from '../../../variables/index.css';

export const container = recipe({
  base: {
    maxWidth: '90%',
    margin: '0 auto',
    '@media': {
      [responsive.up('tablet')]: {
        width: breakpoints.tablet,
      },
      [responsive.up('laptop')]: {
        width: breakpoints.laptop,
      },
      [responsive.up('desktop')]: {
        width: breakpoints.desktop,
      },
    },
  },
  variants: {
    fluid: {
      true: {
        maxWidth: '100%',
        paddingLeft: vars.spacing.md,
        paddingRight: vars.spacing.md,
        width: '100% !important',
      },
    },
  },
});

export type ContainerProps = RecipeVariants<typeof container>;
