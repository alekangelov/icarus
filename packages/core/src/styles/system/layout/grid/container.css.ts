import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { responsive } from '../../../variables/breakpoints';
import { createColumnVariations } from '../../factories/spacing';
import { createTransition } from '../../factories/transition';

export const gap = createVar();

export const gridContainer = recipe({
  base: {
    display: 'flex',
    rowGap: gap,
    marginLeft: `calc(0px - (${gap} / 2))`,
    marginRight: `calc(0px - (${gap} / 2))`,
    transition: createTransition('rowGap', 'marginLeft', 'marginRight'),
  },
  variants: {
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      noWrap: {
        flexWrap: 'nowrap',
      },
    },
  },
  defaultVariants: {
    wrap: 'wrap',
  },
});

export const gridColumn = recipe({
  base: {
    flex: '0 0 auto',
    paddingLeft: `calc(${gap} / 2)`,
    paddingRight: `calc(${gap} / 2)`,
    transition: createTransition('flex', 'paddingLeft', 'paddingRight'),
  },
  variants: {
    size: createColumnVariations((space) => ({
      flex: `0 0 ${space}`,
    })),
    tabletSize: createColumnVariations((space) => ({
      '@media': {
        [responsive.up('tablet')]: {
          flex: `0 0 ${space}`,
        },
      },
    })),
    laptopSize: createColumnVariations((space) => ({
      '@media': {
        [responsive.up('laptop')]: {
          flex: `0 0 ${space}`,
        },
      },
    })),
    desktopSize: createColumnVariations((space) => ({
      '@media': {
        [responsive.up('desktop')]: {
          flex: `0 0 ${space}`,
        },
      },
    })),
    offset: createColumnVariations((space) => ({
      marginLeft: space,
    })),
    tabletOffset: createColumnVariations((space) => ({
      '@media': {
        [responsive.up('tablet')]: {
          marginLeft: space,
        },
      },
    })),
    laptopOffset: createColumnVariations((space) => ({
      '@media': {
        [responsive.up('laptop')]: {
          marginLeft: space,
        },
      },
    })),
    desktopOffset: createColumnVariations((space) => ({
      '@media': {
        [responsive.up('desktop')]: {
          marginLeft: space,
        },
      },
    })),
  },
});

export type GridContainerProps = RecipeVariants<typeof gridContainer>;
export type GridColumnProps = RecipeVariants<typeof gridColumn>;
export type { ColType } from '../../factories/spacing';
