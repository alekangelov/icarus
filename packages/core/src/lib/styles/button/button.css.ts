import { ComplexStyleRule } from '@vanilla-extract/css';
import {
  recipe,
  RecipeVariants
} from '@vanilla-extract/recipes';
import {
  createColorVariants,
  createShapeVariants
} from '../../system/variants/index.css';
import { vars } from '../../theme/theme.css';
import { parseColor } from '../../theme/colors';

const shapeVariants = createShapeVariants((shape) => {
  return {
    borderRadius: shape
  } as ComplexStyleRule;
});

const colorVariants = createColorVariants((color) => {
  return {
    background: parseColor(color[500]),
    boxShadow: `0px 5px 10px -10px ${parseColor(
      color[500]
    )}`,
    selectors: {
      '&:focus': {
        boxShadow: `0px 0px 0px ${parseColor(
          color[600]
        )}, 0px 0px 0px 3px ${parseColor(color[500], 0.2)}`
      },
      '&:hover': {
        background: parseColor(color[600]),
        boxShadow: `0px 10px 20px -10px ${parseColor(
          color[600]
        )}`
      },
      '&:active': {
        background: parseColor(color[700]),
        boxShadow: `0px 0px 0px ${parseColor(color[600])}`
      }
    }
  } as ComplexStyleRule;
});

export const button = recipe({
  base: {
    transition:
      '0.2s background, 0.2s transform, 0.2s box-shadow',
    border: 'none',
    outline: 'none',
    color: 'white',
    selectors: {
      '&:hover': {
        transform: 'translate(0, -2px)',
        cursor: 'pointer'
      },
      '&:active': {
        transition: '0s',
        transform: 'translate(0, 0px)'
      }
    }
  },
  variants: {
    size: {
      small: {
        padding: `${vars.spacing.small} ${vars.spacing.medium}`,
        fontSize: vars.text.size.small
      },
      medium: {
        padding: `${vars.spacing.medium} ${vars.spacing.large}`,
        fontSize: vars.text.size.medium
      },
      large: {
        padding: `${vars.spacing.large} ${vars.spacing.xlarge}`,
        fontSize: vars.text.size.large
      }
    },
    color: colorVariants,
    borderRadius: shapeVariants
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
    borderRadius: 'small'
  }
});

export type ButtonStyleProps = RecipeVariants<
  typeof button
>;
