import { style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';

export const popover = {
  base: style({
    display: 'flex',
    gap: vars.spacing.md,
    flexDirection: 'column',
    maxWidth: 340,
    padding: `${vars.spacing.xl} ${vars.spacing.xxl}`,
  }),
  content: style({
    lineHeight: '150%',
  }),
};

export const tooltip = style({
  background: parseColor(vars.onColors.surface, 0.7),
  color: parseColor(vars.colors.surface, 1),
  padding: `${vars.spacing.xs} ${vars.spacing.lg}`,
});
