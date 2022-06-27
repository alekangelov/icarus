import { ComplexStyleRule } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import {
  createColorVariants,
  createShapeVariants
} from '../../system/variants';
import { vars } from '../../theme/theme.css';

const shapeVariants = createShapeVariants((shape) => {
  return {
    borderRadius: shape
  } as ComplexStyleRule;
});

const colorVariants = createColorVariants((color) => {
  return {
    background: color[500],
    boxShadow: `0 0 10px 0px ${color[500]}`,
    selectors: {
      '&:hover': {
        background: color[600],
        boxShadow: `0 10 20px -5px ${color[600]}`
      },
      '&:active': {
        background: color[700]
      }
    }
  } as ComplexStyleRule;
});

console.log({ colorVariants, shapeVariants });

export const button = recipe({
  base: {
    transition: '0.2s background, 0.2s transform',
    border: 'none',
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
        padding: `${vars.spacing.small} ${vars.spacing.medium}`
      },
      medium: {
        padding: `${vars.spacing.medium} ${vars.spacing.large}`
      },
      large: {
        padding: `${vars.spacing.large} ${vars.spacing.xlarge}`
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
