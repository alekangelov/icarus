import { html, events, rdf, svg } from './constants';

const allPropKeys = [...html, ...events, ...rdf, ...svg];

const DataRegex = /data-([a-zA-Z0-9-]*)/;
const AriaRegex = /aria-([a-zA-Z0-9-]*)/;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<any, any>;

export const cleanProps = <T extends AnyObject>(props: T) => {
  console.log({ props });
  const result: AnyObject = {};
  for (const key in props) {
    if (
      DataRegex.test(key) ||
      AriaRegex.test(key) ||
      allPropKeys.includes(key) ||
      key === 'children'
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[key] = props[key];
    }
  }
  console.log({ result });
  return result as T;
};
