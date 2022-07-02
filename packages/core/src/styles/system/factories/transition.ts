import { CSSProperties } from '@vanilla-extract/css';
import { vars } from '../../variables/index.css';

const createSingletransition = (prop: keyof CSSProperties) => {
  return `${camelToKebab(prop)} ${vars.transition.speed} ${
    vars.transition.easing
  }`;
};

function camelToKebab(key: keyof CSSProperties) {
  const result = key.replace(/([A-Z])/g, ' $1');
  return result.split(' ').join('-').toLowerCase();
}

export const createTransition = (...props: (keyof CSSProperties)[]) => {
  return props.map(createSingletransition).join(', ');
};
