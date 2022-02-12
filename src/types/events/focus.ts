import { FocusEventHandler } from 'react';

export type FocusEventProps<E> = {
  readonly onBlur?: FocusEventHandler<E>;
  readonly onFocus?: FocusEventHandler<E>;
};
