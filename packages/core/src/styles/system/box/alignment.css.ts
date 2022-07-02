import { style } from '@vanilla-extract/css';
import { createAlignmentVariations } from '../factories/alignment';

export const alignmentStyles = createAlignmentVariations((alignment) => {
  return style({
    alignItems: alignment,
  });
});

export const justifyStyles = createAlignmentVariations((alignment) => {
  return style({
    justifyContent: alignment,
  });
});

export type AlignmentOptions = keyof typeof alignmentStyles;
