import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { getInitialClass } from '../../../../helpers';
import { vars } from '../../../variables/index.css';
import { percentageString } from '../../box/helpers/calcPercentage';
import { parseColor } from '../../colors';
import { createStyleFactory } from '../../factories/generic';
import { createTransition } from '../../factories/transition';

const colorVar = '--button-color';
const textColorVar = '--button-text-color';
const hoverColorVar = '--button-hover-color';
const activeColorsVar = '--button-active-color';

export const button = recipe({
  base: {
    display: 'flex',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    fontWeight: vars.font.weight.bold,
    color: parseColor(`var(${textColorVar})`),
    backgroundColor: parseColor(`var(${colorVar})`),
    transition: createTransition(
      'color',
      'backgroundColor',
      'boxShadow',
      'transform',
      'filter',
      'opacity'
    ),
    selectors: {
      '&:hover': {
        background: parseColor(`var(${hoverColorVar})`),
        transform: `translate(0px, calc(0px - ${vars.spacing.xs}))`,
      },
      '&:active': {
        background: parseColor(`var(${activeColorsVar})`),
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
        [activeColorsVar]: vars.activeColors[key],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    }),
    size: {
      xSmall: {
        fontSize: vars.font.size.xs,
        padding: `${vars.spacing.xs} ${vars.spacing.xs}`,
      },
      xSmallSymmetric: {
        fontSize: vars.font.size.xs,
        padding: `${vars.spacing.xs} ${vars.spacing.xs}`,
      },
      small: {
        fontSize: vars.font.size.sm,
        letterSpacing: percentageString(-2, vars.font.size.sm),
        padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
      },
      medium: {
        fontSize: vars.font.size.md,
        letterSpacing: percentageString(2, vars.font.size.md),
        padding: `${vars.spacing.md} ${vars.spacing.xl}`,
      },
      large: {
        fontSize: vars.font.size.lg,
        letterSpacing: percentageString(2, vars.font.size.lg),
        padding: `${vars.spacing.lg} ${vars.spacing.xxl}`,
      },
      smallSymmetric: {
        fontSize: vars.font.size.sm,
        letterSpacing: percentageString(2, vars.font.size.sm),
        padding: `${vars.spacing.sm}`,
      },
      mediumSymmetric: {
        fontSize: vars.font.size.md,
        letterSpacing: percentageString(2, vars.font.size.md),
        padding: `${vars.spacing.md}`,
      },
      largeSymmetric: {
        fontSize: vars.font.size.lg,
        letterSpacing: percentageString(2, vars.font.size.lg),
        padding: `${vars.spacing.lg}`,
      },
    },
    elevation: createStyleFactory(vars.elevation, (value) => ({
      boxShadow: `0px 0px ${value} calc((0px - ${value}) / 1) ${parseColor(
        `var(${colorVar})`,
        0.2
      )}`,
      selectors: {
        '&:hover': {
          boxShadow: `0px ${value} ${value} calc((0px - ${value}) / 2)  ${parseColor(
            `var(${colorVar})`,
            0.3
          )}`,
        },
        '&:active': {
          boxShadow: `0px 0px 0px 0px ${parseColor(`var(${colorVar})`, 0)}`,
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
    radius: 'sm',
    floating: false,
    elevation: 'md',
    fullWidth: false,
  },
});

const rippleAnimation = keyframes({
  '0%': {
    opacity: 0.5,
    transform: 'translate(-50%,-50%) scale(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate(-50%,-50%) scale(2)',
  },
});

export const buttonRipple = style({
  position: 'absolute',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '100%',
  transformOrigin: 'center center',
  background: parseColor(vars.colors.surface),
  animation: `${rippleAnimation} 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)`,
});

export const globalButton = globalStyle(`${getInitialClass(button())} *`, {
  pointerEvents: 'none',
});

export type ButtonProps = Parameters<typeof button>[0];
