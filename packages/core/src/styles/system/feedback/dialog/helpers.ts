import { vars } from '../../../variables/index.css';
import { dialogInAnimation, dialogOutAnimation } from './dialog.css';
import { DialogPositions } from './types';

type Position = {
  top: string;
  left: string;
};

export const DIALOG_ANIMATION_LENGTH = 0.26;

const makeAnimation = (keyframes: string) =>
  `${keyframes} ${DIALOG_ANIMATION_LENGTH}s ${vars.transition.easing}`;

export const getDialogAnimation = (isMounting: boolean) => {
  return makeAnimation(isMounting ? dialogInAnimation : dialogOutAnimation);
};

// const oposites = {
//   left: 'right',
//   right: 'left',
//   top: 'bottom',
//   bottom: 'top',
// } as const;

const getPositionForSide = (
  position: DialogPositions,
  dialog: DOMRect,
  element: DOMRect
): {
  left: number;
  top: number;
} => {
  const xCenter = element.left + (element.width / 2 - dialog.width / 2);
  const yCenter = element.top + (element.height / 2 - dialog.height / 2);
  let positionReturn = {
    left: 0,
    top: 0,
  };
  if (position === 'left') {
    const left = element.left - dialog.width;
    const top = yCenter;
    positionReturn = { left, top };
  }
  if (position === 'right') {
    const left = element.left + element.width;
    const top = yCenter;
    positionReturn = { left, top };
  }
  if (position === 'top') {
    const left = xCenter;
    const top = element.top - dialog.height;
    positionReturn = { left, top };
  }
  if (position === 'bottom') {
    const left = xCenter;
    const top = element.top + element.height;
    positionReturn = { left, top };
  }
  if (positionReturn.left <= 0) {
    positionReturn.left = element.left;
  }
  if (positionReturn.top <= 0) {
    positionReturn.top = element.top;
  }
  return positionReturn;
};

export const getDialogPosition = (
  position: DialogPositions,
  dialogRef: HTMLDivElement | null,
  elementRef: HTMLElement | null
): Position => {
  if (typeof window === 'undefined' || !dialogRef || !elementRef)
    return { top: '0px', left: '0px' };
  const defaultGutter = vars.spacing.md;
  const dialogRect = dialogRef.getBoundingClientRect();
  const { height: dialogHeight, width: dialogWidth } = dialogRect;
  const elementRect = elementRef.getBoundingClientRect();
  const {
    height: triggerHeight,
    width: triggerWidth,
    left: triggerOffsetX,
    top: triggeroffsetY,
  } = elementRect;
  if (position === 'left') {
    if (triggerOffsetX <= dialogWidth) {
      position = 'right';
    }
  }
  if (position === 'right') {
    if (triggerOffsetX + triggerWidth >= window.innerWidth - dialogWidth) {
      position = 'left';
    }
  }
  if (position === 'top') {
    if (triggeroffsetY <= dialogHeight) {
      position = 'bottom';
    }
  }
  if (position === 'bottom') {
    if (triggeroffsetY + triggerHeight >= window.innerHeight - dialogHeight) {
      position = 'top';
    }
  }

  const finalPosition = getPositionForSide(position, dialogRect, elementRect);
  const newPositions: Partial<Position> = {};
  if (position === 'left') {
    newPositions.left = `calc(${finalPosition.left}px - ${defaultGutter})`;
  }
  if (position === 'right') {
    newPositions.left = `calc(${finalPosition.left}px + ${defaultGutter})`;
  }
  if (position === 'top') {
    newPositions.top = `calc(${finalPosition.top}px - ${defaultGutter})`;
  }
  if (position === 'bottom') {
    newPositions.top = `calc(${finalPosition.top}px + ${defaultGutter})`;
  }
  return {
    top: `${finalPosition.top}px`,
    left: `${finalPosition.left}px`,
    ...newPositions,
  };
};

export const isClickOutside = <T extends HTMLElement>(
  event: MouseEvent,
  dialogRef: T | null,
  callback: () => void
) => {
  if (!dialogRef) return;

  // Do nothing if clicking ref's element or descendent elements
  if (!dialogRef || dialogRef.contains(event.target as Node)) {
    return;
  }
  callback();
};
