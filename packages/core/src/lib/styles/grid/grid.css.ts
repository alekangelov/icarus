import {
  ComplexStyleRule,
  createVar
} from '@vanilla-extract/css';
import {
  recipe,
  RecipeVariants
} from '@vanilla-extract/recipes';
import {
  createColumns,
  createPositioningVariants
} from '../../helpers/factories/positioning';
import { createSpaceVariants } from '../../system/variants/index.css';

const gapVariants = createSpaceVariants((space) => {
  return {
    rowGap: space,
    '--current-gap': space
  } as ComplexStyleRule;
});

const rowVariants = createSpaceVariants((space) => {
  return {
    rowGap: space
  } as ComplexStyleRule;
});

const columnVariants = createSpaceVariants((space) => {
  return {
    '--current-gap': space
  } as ComplexStyleRule;
});

const directionVariants = {
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  }
} as {
  row: ComplexStyleRule;
  column: ComplexStyleRule;
};

const justifyVariants = createPositioningVariants(
  'justifyContent'
);
const alignVariants =
  createPositioningVariants('alignItems');

const alignSelfVariants =
  createPositioningVariants('alignSelf');

const justifySelfVariants =
  createPositioningVariants('justifySelf');

export const orderVar = createVar('order');

export const gridContainer = recipe({
  base: {
    display: 'flex',
    marginLeft: `calc(0px - var(--current-gap) / 2)`,
    marginRight: `calc(0px - var(--current-gap) / 2)`
  },
  variants: {
    gap: gapVariants,
    rowGap: rowVariants,
    columnGap: columnVariants,
    direction: directionVariants,
    justify: justifyVariants,
    align: alignVariants,
    wrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      noWrap: {
        flexWrap: 'nowrap'
      }
    }
  },
  defaultVariants: {
    gap: 'medium'
  }
});

const calcPad = `calc(var(--current-gap) / 2)`;

export const gridItem = recipe({
  base: {
    order: orderVar,
    width: '100%'
  },
  variants: {
    alignSelf: alignSelfVariants,
    justifySelf: justifySelfVariants,
    size: createColumns((size) => {
      return {
        width: size,
        paddingLeft: calcPad,
        paddingRight: calcPad
      } as ComplexStyleRule;
    }),
    desktopSize: createColumns((size) => {
      return {
        '@media': {
          'screen and (min-width: 993px)': {
            width: size,
            paddingLeft: calcPad,
            paddingRight: calcPad
          }
        }
      } as ComplexStyleRule;
    }),
    tabletSize: createColumns((size) => {
      return {
        '@media': {
          'screen and (max-width: 992px)': {
            width: size,
            paddingLeft: calcPad,
            paddingRight: calcPad
          }
        }
      } as ComplexStyleRule;
    }),
    mobileSize: createColumns((size) => {
      return {
        '@media': {
          'screen and (max-width: 576px)': {
            width: size,
            paddingLeft: calcPad,
            paddingRight: calcPad
          }
        }
      } as ComplexStyleRule;
    })
  }
});

// export const assignOrder = (order: number) => ({
//   [orderVar]: order
// });

export type GridContainerProps = RecipeVariants<
  typeof gridContainer
>;
export type GridItemProps = RecipeVariants<
  typeof gridItem
> & {
  order?: number;
};
