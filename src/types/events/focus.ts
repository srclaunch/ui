import { FocusEventHandler } from 'react';

export type FocusEventProps<E, P = {}> = {
  onBlur?: FocusEventHandler<E>;
  onFocus?: FocusEventHandler<E>;
} & P;
