import { KeyboardEventHandler } from 'react';

export type KeyboardEventProps<E, P = {}> = {
  onKeyDown?: KeyboardEventHandler<E>;
  onKeyPress?: KeyboardEventHandler<E>;
  onKeyUp?: KeyboardEventHandler<E>;
} & P;
