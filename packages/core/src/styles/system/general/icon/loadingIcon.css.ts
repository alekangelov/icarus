import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';

export const loadingIconKeyframesSingleElement = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const loadingIconLine = style({
  animation: `${loadingIconKeyframesSingleElement} 1s infinite ${vars.transition.easing}`,
});
