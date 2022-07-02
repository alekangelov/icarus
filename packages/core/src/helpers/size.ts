import { vars } from '../styles/variables/index.css';

export const getNextSize = (
  size: keyof typeof vars.font.size
): keyof typeof vars.font.size => {
  if (size === 'xs') return 'sm';
  if (size === 'sm') return 'md';
  if (size === 'md') return 'lg';
  if (size === 'lg') return 'xl';
  if (size === 'xl') return 'xxl';
  return 'xxxl';
};

export const getPreviousSize = (size: keyof typeof vars.font.size) => {
  if (size === 'xxxl') return 'xxl';
  if (size === 'xxl') return 'xl';
  if (size === 'xl') return 'lg';
  if (size === 'lg') return 'md';
  if (size === 'md') return 'sm';
  if (size === 'sm') return 'xs';
  return 'xs';
};
