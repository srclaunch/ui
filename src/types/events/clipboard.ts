import { ClipboardEventHandler } from 'react';

export type ClipboardEventProps<E, P = {}> = {
  onBlur?: ClipboardEventHandler<E>;
  onFocus?: ClipboardEventHandler<E>;
} & P;
