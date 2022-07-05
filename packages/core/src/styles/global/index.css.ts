import { globalStyle } from '@vanilla-extract/css';
import { parseColor } from '../system/colors';
import { vars } from '../variables/index.css';
export { resets } from './reset.css';

export const globals = [
  globalStyle('*', {
    boxSizing: 'border-box',
  }),

  globalStyle('html', {
    fontSize: 14,
    background: parseColor(vars.colors.surface),
    color: parseColor(vars.onColors.surface),
    fontFamily:
      '--apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  }),
];
