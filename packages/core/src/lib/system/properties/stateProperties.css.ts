import { defineProperties } from '@vanilla-extract/sprinkles';

export const stateProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' }
  },
  defaultCondition: 'default',
  properties: {
    background: ['']
  }
} as const);
