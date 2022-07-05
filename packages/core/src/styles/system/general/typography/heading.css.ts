import { style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { percentageString } from '../../box/helpers/calcPercentage';
import { parseColor } from '../../colors';

export const hgroup = style({
  display: 'block',
  margin: '0',
  padding: '0',
});

export const heading = style({
  selectors: {
    'h1&': {
      fontSize: vars.font.size.xxxl,
      fontWeight: vars.font.weight.heavy,
      letterSpacing: percentageString(-2.5, vars.font.size.xxxl),
      lineHeight: '150%',
    },
    'h2&': {
      fontSize: vars.font.size.xxl,
      fontWeight: vars.font.weight.bold,
      letterSpacing: percentageString(-2.5, vars.font.size.xxl),
      lineHeight: '150%',
    },
    'h3&': {
      fontSize: vars.font.size.xl,
      fontWeight: vars.font.weight.bold,
      letterSpacing: percentageString(-2.5, vars.font.size.xl),
      lineHeight: '150%',
    },
    'h4&': {
      fontSize: vars.font.size.lg,
      fontWeight: vars.font.weight.medium,
      letterSpacing: percentageString(-2.5, vars.font.size.lg),
      lineHeight: '150%',
    },
    'h5&': {
      fontSize: vars.font.size.md,
      fontWeight: vars.font.weight.medium,
      letterSpacing: percentageString(-2.5, vars.font.size.md),
      lineHeight: '150%',
    },
    'h6&': {
      fontSize: vars.font.size.sm,
      fontWeight: vars.font.weight.light,
      letterSpacing: percentageString(-2.5, vars.font.size.sm),
      lineHeight: '150%',
    },
    'hgroup &:last-child': {
      marginTop: vars.spacing.sm,
      fontSize: vars.font.size.lg,
      letterSpacing: percentageString(-2.5, vars.font.size.lg),
      fontWeight: vars.font.weight.medium,
      color: parseColor(vars.onColors.surface, 0.4),
    },
  },
});
