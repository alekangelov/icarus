import { createId } from '../../../../helpers/createId';
import { buttonRipple } from './button.css';

const rippleId = createId('ripple');

const getRelativeMouseCoordinates = (event: MouseEvent) => {
  const rect = (event.target as HTMLButtonElement).getBoundingClientRect();
  const x = event.clientX - rect.left; //x position within the element.
  const y = event.clientY - rect.top; //y position within the element.
  return {
    x,
    y,
  };
};

export const createButtonRippleEvent = (
  element: keyof HTMLElementTagNameMap = 'button'
) => {
  let timeoutId: NodeJS.Timeout;
  let cleanup: VoidFunction;
  return {
    event: (event: MouseEvent) => {
      const { target } = event;
      if (!target) return;
      if (!document || typeof window === 'undefined') return;
      const htmlTarget = target as HTMLButtonElement;
      let realTarget: HTMLButtonElement = htmlTarget;

      if (htmlTarget.tagName !== 'BUTTON') {
        realTarget = htmlTarget.closest(element) as HTMLButtonElement;
      }
      const ripple = document.createElement('span');
      const { x: left, y: top } = getRelativeMouseCoordinates(event);
      ripple.className = buttonRipple;
      ripple.style.left = `${left}px`;
      ripple.style.top = `${top}px`;
      ripple.id = rippleId();
      realTarget?.appendChild(ripple);
      cleanup = () => {
        ripple.remove();
      };
      timeoutId = setTimeout(cleanup, 500);
    },
    cleanup: () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        cleanup?.();
      }
    },
  };
};
