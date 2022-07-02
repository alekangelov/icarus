import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '../../../variables/index.css';
import { gap } from './container.css';

const { spacing: gaps } = vars;

type SpacingKeys = keyof typeof gaps;

export const assignGap = (gapValue?: SpacingKeys) => {
  if (!gapValue) {
    return {};
  }
  return assignInlineVars(
    {
      gap,
    },
    {
      gap: gaps[gapValue],
    }
  );
};
