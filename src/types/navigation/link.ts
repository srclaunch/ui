import { MouseEventProps } from '../events/mouse';
import { FocusEventProps } from '../events/focus';
import { FocusProps } from '../state/focus-props';

export type LinkProps<T = {}> = MouseEventProps<
  HTMLAnchorElement,
  FocusEventProps<
    HTMLAnchorElement,
    FocusProps<{
      prefetch?: boolean;
      rel?: string;
      target?: '_blank';
      to: string;
    }>
  >
> &
  T;
