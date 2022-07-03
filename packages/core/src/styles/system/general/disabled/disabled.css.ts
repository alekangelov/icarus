import { style } from '@vanilla-extract/css';

export const disabled = style({
  opacity: 0.2,
  filter: 'grayscale(100%)',
  pointerEvents: 'none',
  selectors: {
    '&:hover': {
      filter: 'grayscale(100%)',
    },
    '&:active': {
      filter: 'grayscale(100%)',
    },
    '&:focus': {
      filter: 'grayscale(100%)',
    },
  },
});
