import { MouseEventProps } from '../events/mouse';

export type LinkProps = {
  readonly prefetch?: boolean;
  readonly rel?: string;
  readonly target?: '_blank';
  readonly to: string;
} & MouseEventProps<HTMLAnchorElement>;
