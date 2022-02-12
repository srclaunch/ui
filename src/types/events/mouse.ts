import { MouseEventHandler } from 'react';

export type MouseEventProps<E = HTMLElement> = {
  readonly onClick?: MouseEventHandler<E>;
  readonly onMouseEnter?: MouseEventHandler<E>;
  readonly onMouseLeave?: MouseEventHandler<E>;
  readonly onScroll?: MouseEventHandler<E>;
};
