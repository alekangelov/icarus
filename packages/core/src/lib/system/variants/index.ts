import { ColorType } from '../../theme/colors';
import { vars } from '../../theme/theme.css';

export const createColorVariants = <T>(
  fn: (colors: ColorType, name: string) => T
) => {
  const result: Record<string, T> = {};
  const { color: colorObject } = vars;
  Object.keys(colorObject).forEach((key) => {
    result[key as keyof typeof colorObject] = fn(
      colorObject[
        key as keyof typeof colorObject
      ] as unknown as ColorType,
      key
    );
  });
  console.log({ result });
  return result as {
    [K in keyof typeof colorObject]: T;
  };
};

export const createShapeVariants = <T>(
  fn: (shape: string, name: string) => T
) => {
  const result: Record<string, T> = {};
  const {
    shape: { radius }
  } = vars;
  Object.keys(radius).forEach((key) => {
    result[key as keyof typeof radius] = fn(
      radius[
        key as keyof typeof radius
      ] as unknown as string,
      key
    );
  });
  return result as {
    [key in keyof typeof radius]: T;
  };
};
