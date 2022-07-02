import { CSSProperties } from '@vanilla-extract/css';
import { vars } from '../../variables/index.css';

const createSingletransition = (prop: keyof CSSProperties) => {
  return `${prop} ${vars.transition.speed} ${vars.transition.easing}`;
};

export const createTransition = (...props: (keyof CSSProperties)[]) => {
  return props.map(createSingletransition).join(', ');
};
