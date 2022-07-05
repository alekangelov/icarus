import { PropsWithChildren } from 'react';
import { ESCAPE_HATCH_ID, GLOBAL_PORTAL_ID } from '../internal/containerIds';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IcarusProvider = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      <div id={GLOBAL_PORTAL_ID} />
      <div id={ESCAPE_HATCH_ID} />
      {children}
    </>
  );
};
