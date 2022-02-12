import { ClipboardEventHandler } from 'react';

export type ClipboardEventProps<E> = {
  readonly onBlur?: ClipboardEventHandler<E>;
  readonly onFocus?: ClipboardEventHandler<E>;
};
