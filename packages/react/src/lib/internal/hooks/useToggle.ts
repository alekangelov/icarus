import { useCallback, useState } from 'react';

const opposite = (e: boolean) => !e;

export const useToggle = (initalValue = false) => {
  const [value, setValue] = useState(initalValue);
  const toggle = useCallback(() => setValue(opposite), [setValue]);
  const setTrue = useCallback(() => setValue(true), [setValue]);
  const setFalse = useCallback(() => setValue(false), [setValue]);
  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue,
  };
};
