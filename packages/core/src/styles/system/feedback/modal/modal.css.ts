import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';
import { createTransition } from '../../factories/transition';

const invisible = {
  opacity: 0,
  transform: `translate(0px, calc(${vars.spacing.md}))`,
};

const visible = {
  opacity: 1,
  transform: 'translate(0px,0px)',
};

const inAnim = keyframes({
  '0%': invisible,
  '100%': visible,
});

const outAnim = keyframes({
  '0%': visible,
  '100%': invisible,
});

const body = {
  base: style({
    minHeight: 'max-content',
    position: 'absolute',
    maxWidth: '640px',
    width: '90%',
    padding: vars.spacing.xxl,
    background: parseColor(vars.colors.surfaceMd),
    borderRadius: vars.border.radius.lg,
    boxShadow: `0 50px 60px -25px ${parseColor(vars.colors.shadow, 0.1)}`,
    selectors: {
      'html.dark &': {
        boxShadow: `0 50px 60px -25px ${parseColor(vars.colors.shadow, 0.5)}`,
      },
    },
    margin: `${vars.spacing.lg} auto`,
    zIndex: vars.zIndex.modal,
    overflow: 'hidden',
  }),
  maximized: style({
    overflow: 'auto',
    maxHeight: '100%',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    margin: 0,
  }),
};

const actions = {
  base: style({
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
  rule: style({
    width: '1px',
    height: '100%',
    background: parseColor(vars.colors.surfaceMd),
  }),
  button: style({
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0',
    border: 'none',
    background: parseColor(vars.colors.surfaceHv),
    cursor: 'pointer',
    transition: createTransition('background'),
    selectors: {
      '&:hover': {
        background: parseColor(vars.colors.surfaceHv, 0),
      },
      '& + &': {
        borderLeft: `1px solid ${parseColor(vars.onColors.surface, 0.1)}`,
      },
    },
  }),
};

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.xl,
  selectors: {
    [`${body.maximized} & `]: {
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
    },
  },
});

const mask = {
  base: style({
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: vars.zIndex.modal,
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
  }),
  maximized: style({
    overflow: 'hidden',
  }),
};

export const modal = {
  actions,
  mask: mask.base,
  maskMaximized: mask.maximized,
  body: body.base,
  bodyMaximized: body.maximized,
  content: style({}),
  header,
  footer: style({}),
  animation: {
    in: inAnim,
    out: outAnim,
  },
};
