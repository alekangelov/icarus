import { globalStyle } from '@vanilla-extract/css';
export { resets } from './reset.css';

export const globals = [
  globalStyle('*', {
    boxSizing: 'border-box',
  }),

  globalStyle('html', {
    fontSize: 14,
    fontFamily:
      '--apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  }),
];
