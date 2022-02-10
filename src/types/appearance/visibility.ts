import { AnimationProps } from './animation';

export type VisibilityProps<T = {}> = AnimationProps<{
  visible?: boolean;
}> &
  T;
