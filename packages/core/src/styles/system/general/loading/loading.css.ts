import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';
import { createTransition } from '../../factories/transition';

export const loadingModal = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    background: parseColor(vars.colors.surface, 0.7),
    transition: createTransition('transform', 'opacity'),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: vars.spacing.xl,
    borderRadius: vars.spacing.xl,
    boxShadow: `0 20px 50px -20px ${parseColor(vars.onColors.surface, 0.2)}`,
    backdropFilter: 'blur(10px)',
  },
  variants: {
    fullscreen: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    fullscreen: false,
  },
});

export const loadingParent = {
  default: style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    background: 'transparent',
  }),
  fullscreen: style({
    background: parseColor(vars.onColors.surface, 0.1),
    backdropFilter: 'blur(25px)',
  }),
};

const loadingKeyframes = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

const loadingKeyframesOut = keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'scale(0.8)',
  },
});

export const loadingAnimations = {
  in: `${loadingKeyframes} 0.25s ${vars.transition.easing}`,
  out: `${loadingKeyframesOut} 0.25s ${vars.transition.easing}`,
};

export type LoadingProps = Parameters<typeof loadingModal>[0];
