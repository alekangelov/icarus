import { aspectRatioClasses } from './aspect.css';
import {
  backgroundAndTextColorClasses,
  backgroundsClasses,
  textColorClasses,
} from './colors.css';
import {
  borderColorClasses,
  borderRadiusClasses,
  borderSizeClasses,
} from './shape.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<any, any>;

const createProxy = <T extends AnyObject>(
  object: T,
  fallback: T[keyof T] | '' = ''
) => {
  return new Proxy(object, {
    get: (target, key) => {
      try {
        if (!key) throw new Error('key is required');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const final = (target as any)[key];
        if (final) return final;
        return fallback;
      } catch (e) {
        console.error(`Silencing error: ${e}`);
        return fallback;
      }
    },
  });
};

export const aspectRatio = createProxy(aspectRatioClasses, '');

export const backgrounds = createProxy(backgroundsClasses, '');

export const textColor = createProxy(textColorClasses, '');

export const backgroundAndTextColor = createProxy(
  backgroundAndTextColorClasses,
  ''
);

export const borderRadius = createProxy(borderRadiusClasses, '');
export const borderSize = createProxy(borderSizeClasses, '');

export const borderColor = createProxy(borderColorClasses, '');
