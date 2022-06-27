import {
  createGlobalThemeContract,
  createGlobalTheme
} from '@vanilla-extract/css';
import { baseTheme } from './base';
import { themeContact } from './contract';

export const vars = createGlobalThemeContract(themeContact);

console.log(vars);

createGlobalTheme(':root', vars, baseTheme);
