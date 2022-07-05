import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { parseColor } from '../../colors';

export const dialog = style({
  position: 'absolute',
  top: 0,
  left: 0,
  background: parseColor(vars.colors.surface, 1),
  zIndex: vars.zIndex.overlay,
  padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  borderRadius: vars.border.radius.md,
  maxWidth: '90%',
  boxShadow: `0 20px ${vars.elevation.md} calc(
    0px - ${vars.elevation.md} / 2
  ) ${parseColor(vars.onColors.surface, 0.1)}`,
});

const invisible = {
  opacity: 0,
  transform: 'translate(0px,24px)',
};
const visible = {
  opacity: 1,
  transform: 'translate(0px,0px)',
};

export const dialogInAnimation = keyframes({
  '0%': invisible,
  '100%': visible,
});

export const dialogOutAnimation = keyframes({
  '0%': visible,
  '100%': invisible,
});
