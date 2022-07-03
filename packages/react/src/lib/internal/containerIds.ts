export const GLOBAL_PORTAL_ID = 'icarus-portal-id';
export const ESCAPE_HATCH_ID = 'icarus-escape-hatch-id';

export const getEscapeHatch = () =>
  document.querySelector(`#${ESCAPE_HATCH_ID}`) as HTMLDivElement;

export const getGlobalPortal = () =>
  document.querySelector(`#${GLOBAL_PORTAL_ID}`) as HTMLDivElement;
