import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';
import { createStyleFactory } from '../../factories/generic';
import { createTransition } from '../../factories/transition';

const colorVar = '--button-color';
const textColorVar = '--button-text-color';
const hoverColorVar = '--button-hover-color';

export const button = recipe({
  base: {
    display: 'flex',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    color: parseColor(`var(${textColorVar})`),
    backgroundColor: parseColor(`var(${colorVar})`),
    transition: createTransition(
      'color',
      'backgroundColor',
      'boxShadow',
      'transform'
    ),
    selectors: {
      '&:hover': {
        background: parseColor(`var(${hoverColorVar})`),
        transform: `translate(0px, calc(0px - ${vars.spacing.xs}))`,
      },
      '&:active': {
        filter: 'brightness(0.8)',
        transform: `translate(0px, calc(${vars.spacing.none}))`,

        transition: 'none',
      },
    },
  },
  variants: {
    color: createStyleFactory(vars.colors, (value, key) => {
      return {
        [colorVar]: value,
        [textColorVar]: vars.onColors[key],
        [hoverColorVar]: vars.hoverColors[key],
      } as any;
    }),
    size: {
      small: {
        fontSize: vars.font.size.sm,
        padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
      },
      medium: {
        fontSize: vars.font.size.md,
        padding: `${vars.spacing.md} ${vars.spacing.xl}`,
      },
      large: {
        fontSize: vars.font.size.lg,
        padding: `${vars.spacing.lg} ${vars.spacing.xxl}`,
      },
      smallSymmetric: {
        fontSize: vars.font.size.sm,
        padding: `${vars.spacing.sm}`,
      },
      mediumSymmetric: {
        fontSize: vars.font.size.md,
        padding: `${vars.spacing.md}`,
      },
      largeSymmetric: {
        fontSize: vars.font.size.lg,
        padding: `${vars.spacing.lg}`,
      },
    },
    elevation: createStyleFactory(vars.elevation, (value) => ({
      boxShadow: `0px 0px ${value} calc((0px - ${value}) / 2) ${parseColor(
        `var(${colorVar})`,
        0.2
      )}`,
      selectors: {
        '&:hover': {
          boxShadow: `0px ${value} ${value} calc((0px - ${value}) / 1.5)  ${parseColor(
            `var(${colorVar})`,
            0.5
          )}`,
        },
        '&:active': {
          boxShadow: `0px 0px ${value} calc((0px - ${value}) / 1.5) ${parseColor(
            `var(${colorVar})`,
            0
          )}`,
        },
      },
    })),
    radius: createStyleFactory(vars.border.radius, (value) => {
      return {
        borderRadius: value,
      };
    }),
    floating: {
      true: {
        transform: `translate(0px, calc(0px - ${vars.spacing.xs}))`,
        '&:hover': {
          transform: `translate(0px, 0px) !important`,
        },
        '&:active': {
          transform: `translate(0px, calc(0px - ${vars.spacing.xs}))`,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    radius: 'md',
    floating: false,
    elevation: 'md',
    fullWidth: false,
  },
});

export type ButtonProps = Parameters<typeof button>[0];
