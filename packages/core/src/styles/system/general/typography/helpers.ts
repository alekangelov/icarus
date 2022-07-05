import { textSize, textWeight, textColor, TextProps } from './text.css';

export const getTextClasses = ({
  size = 'md',
  weight = 'regular',
  color,
}: TextProps) => {
  const styles = [
    textSize[size],
    textWeight[weight],
    color && textColor[color],
  ];
  return styles.filter(Boolean).join(' ');
};
