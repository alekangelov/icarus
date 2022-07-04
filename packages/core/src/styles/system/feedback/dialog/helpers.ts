import { vars } from '../../../variables/index.css';
import { dialogInAnimation, dialogOutAnimation } from './dialog.css';
import { DialogPositions } from './types';

const makeAnimation = (keyframes: string) =>
  `${keyframes} 0.5s ${vars.transition.easing}`;

export const getDialogAnimation = (isMounting: boolean) => {
  return makeAnimation(isMounting ? dialogInAnimation : dialogOutAnimation);
};

const isOutOfBounds = (
  position: DialogPositions,
  element: { left: number; top: number }
) => {
  const { left, top } = element;
  console.log(`isOutOfBoundsInner: ${position}`, { left, top });

  if (typeof window === 'undefined') return false;
  // const { innerWidth, innerHeight } = window;
  if (top < 0) return true;
  if (left < 0) return true;
  return false;
};

const getOtherPosition = (position: DialogPositions) => {
  switch (position) {
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    case 'top':
      return 'bottom';
    case 'bottom':
      return 'top';
    default:
      return 'left';
  }
};

type Position = {
  left: number;
  top: number;
  position?: DialogPositions;
};

const addGutter = (
  positionType: DialogPositions,
  position: Position,
  gutter: string
) => {
  switch (positionType) {
    case 'left':
      return {
        top: `${position.top}px`,
        left: `calc(${position.left}px - ${gutter})`,
      };
    case 'right':
      return {
        top: `${position.top}px`,
        left: `calc(${position.left}px + ${gutter})`,
      };
    case 'top':
      return {
        left: `${position.left}px`,
        top: `calc(${position.top}px - ${gutter})`,
      };
    case 'bottom':
      return {
        left: `${position.left}px`,
        top: `calc(${position.top}px + ${gutter})`,
      };
    default:
      return position;
  }
};

export const getDialogPositionPrecursor = (
  position: DialogPositions,
  dialogRef: HTMLDivElement | null,
  elementRef: HTMLElement | null
) => {
  let finalPosition: Position = {
    top: 0,
    left: 0,
  };
  if (!dialogRef || !elementRef) return finalPosition;
  const dialogRect = dialogRef.getBoundingClientRect();
  const elementRect = elementRef.getBoundingClientRect();
  if (position === 'left') {
    finalPosition = {
      left: elementRect.left - dialogRect.width,
      top: elementRect.top + elementRect.height / 2 - dialogRect.height / 2,
    };
  }
  if (position === 'right') {
    finalPosition = {
      left: elementRect.left + elementRect.width,
      top: elementRect.top + elementRect.height / 2 - dialogRect.height / 2,
    };
  }
  if (position === 'top') {
    finalPosition = {
      left: elementRect.left + elementRect.width / 2 - dialogRect.width / 2,
      top: elementRect.top - dialogRect.height,
    };
  }
  if (position === 'bottom') {
    finalPosition = {
      left: elementRect.left + elementRect.width / 2 - dialogRect.width / 2,
      top: elementRect.top + elementRect.height,
    };
  }

  if (isOutOfBounds(position, finalPosition)) {
    finalPosition = getDialogPositionPrecursor(
      getOtherPosition(position),
      dialogRef,
      elementRef
    );
    finalPosition = {
      ...finalPosition,
      position: getOtherPosition(position),
    };
  }
  return finalPosition;
};

export const getDialogPosition = (
  position: DialogPositions,
  dialogRef: HTMLDivElement | null,
  elementRef: HTMLElement | null
): {
  top: string;
  left: string;
} => {
  const gutter = vars.spacing.md;
  const positionPrecursor = getDialogPositionPrecursor(
    position,
    dialogRef,
    elementRef
  );
  const calculatedPosition = addGutter(
    positionPrecursor.position || position,
    positionPrecursor,
    gutter
  );
  const finalPosition = {
    top:
      typeof calculatedPosition.top !== 'string'
        ? `${calculatedPosition.top}`
        : calculatedPosition.top,
    left:
      typeof calculatedPosition.left !== 'string'
        ? `${calculatedPosition.left}`
        : calculatedPosition.left,
  };
  console.log({ calculatedPosition, finalPosition });
  return finalPosition;
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
