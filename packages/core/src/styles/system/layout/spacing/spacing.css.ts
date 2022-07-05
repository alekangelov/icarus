import { ComplexStyleRule } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { createAlignmentVariations } from '../../factories/alignment';
import { createSpaceVariations } from '../../factories/spacing';

const directions = ['row', 'column'];

export const spacing = recipe({
  base: {
    display: 'flex',
    width: '100%',
  },
  variants: {
    direction: directions.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: {
          flexDirection: curr,
        },
      }),
      {}
    ) as Record<'row' | 'column', ComplexStyleRule>,
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      noWrap: {
        flexWrap: 'nowrap',
      },
    },
    gap: createSpaceVariations((space) => {
      return {
        gap: space,
      };
    }),
    align: createAlignmentVariations((align) => ({
      alignItems: align,
    })),
    justify: createAlignmentVariations((justify) => ({
      justifyContent: justify,
    })),
  },
});

export type SpacingProps = RecipeVariants<typeof spacing>;
