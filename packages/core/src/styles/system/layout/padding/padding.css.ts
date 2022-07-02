import { style } from '@vanilla-extract/css';
import { vars } from '../../../variables/index.css';
import { createSpaceVariations } from '../../factories/spacing';

export const padding = {
  paddingX: createSpaceVariations((space) => {
    return style({
      paddingLeft: space,
      paddingRight: space,
    });
  }),
  paddingY: createSpaceVariations((space) => {
    return style({
      paddingTop: space,
      paddingBottom: space,
    });
  }),
  padding: createSpaceVariations((space) => {
    return style({
      padding: space,
    });
  }),
  paddingLeft: createSpaceVariations((space) => {
    return style({
      paddingLeft: space,
    });
  }),
  paddingRight: createSpaceVariations((space) => {
    return style({
      paddingRight: space,
    });
  }),
  paddingTop: createSpaceVariations((space) => {
    return style({
      paddingTop: space,
    });
  }),
  paddingBottom: createSpaceVariations((space) => {
    return style({
      paddingBottom: space,
    });
  }),
};

type PaddingType = keyof typeof padding;

export type PaddingProps = {
  [key in PaddingType]: keyof typeof vars.spacing;
};
