import { style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';

export const popover = {
  base: style({
    display: 'flex',
    gap: vars.spacing.md,
    flexDirection: 'column',
  }),
  title: style({
    fontSize: vars.font.size.md,
    fontWeight: vars.font.weight.bold,
    borderBottom: `1px solid ${parseColor(vars.onColors.surface, 0.1)}`,
    paddingBottom: vars.spacing.md,
  }),
  content: style({}),
};
