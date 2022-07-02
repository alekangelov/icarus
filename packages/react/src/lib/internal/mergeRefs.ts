/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ref } from 'react';

export function mergeRefs<T = any>(refs: Array<Ref<T>>): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref.current as any) = value;
      }
    });
  };
}
