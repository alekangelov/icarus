import { vars } from '../../../variables/index.css';
import { modal } from './modal.css';

export const MODAL_ANIMATION_TIMING = 260;

const makeAnimation = (animation: string) =>
  `${animation} ${MODAL_ANIMATION_TIMING}ms ${vars.transition.easing}`;

export const getModalAnimation = (visible?: boolean) => {
  if (visible) {
    return makeAnimation(modal.animation.in);
  }
  return makeAnimation(modal.animation.out);
};
