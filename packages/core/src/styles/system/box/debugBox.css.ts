import { style } from '@vanilla-extract/css';
import { vars } from '../../variables/index.css';
import { parseColor } from '../colors';

export const debugBox = style({
  display: 'flex',
  width: '100%',
  height: 24,
  backgroundColor: parseColor(vars.colors.primary),
  borderRadius: vars.border.radius.md,
});
