import { PropsWithChildren } from 'react';
import { ESCAPE_HATCH_ID, GLOBAL_PORTAL_ID } from '../internal/containerIds';

export const IcarusProvider = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      <div id={GLOBAL_PORTAL_ID} />
      <div id={ESCAPE_HATCH_ID} />
      {children}
    </>
  );
};
