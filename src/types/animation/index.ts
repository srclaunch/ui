import { AnimatedAppearanceProps } from './appearance';
import { AnimatedTextProps } from './text';
import { TransformProps } from './transform';

export type AnimationTiming = {
  /**
   * The duration of the animation.
   */
  readonly duration?: number;
  /**
   * The delay of the animation.
   */
  readonly delay?: number;
  /**
   * The easing of the animation.
   */
  readonly easing?: string;
};

export type AnimationTimingProps = {
  readonly timing?: AnimationTiming;
};

export type Animation = AnimatedTextProps &
  AnimationTimingProps &
  AnimatedAppearanceProps &
  TransformProps;

export type AnimationProps = {
  /**
   * The animation to apply to the component.
   */
  readonly animation?: Animation | readonly Animation[];
} & TransformProps;
