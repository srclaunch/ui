import { ContainerProps } from '../../components/layout/Container';
import { Transform } from './transform';

export enum AnimationEasings {
  EaseInBack = 'ease-in-back',
  EaseOutBack = 'ease-out-back',
  EaseInOutBack = 'ease-in-out-back',

  EaseInBounce = 'ease-in-bounce',
  EaseOutBounce = 'ease-out-bounce',
  EaseInOutBounce = 'ease-in-out-bounce',

  EaseInCirc = 'ease-in-circ',
  EaseOutCirc = 'ease-out-circ',
  EaseInOutCirc = 'ease-in-out-circ',

  EaseInCubic = 'ease-in-cubic',
  EaseOutCubic = 'ease-out-cubic',
  EaseInOutCubic = 'ease-in-out-cubic',

  EaseInElastic = 'ease-in-elastic',
  EaseOutElastic = 'ease-out-elastic',
  EaseInOutElastic = 'ease-in-out-elastic',

  EaseInExpo = 'ease-in-expo',
  EaseOutExpo = 'ease-out-expo',
  EaseInOutExpo = 'ease-in-out-expo',

  EaseInQuad = 'ease-in-quad',
  EaseOutQuad = 'ease-out-quad',
  EaseInOutQuad = 'ease-in-out-quad',

  EaseInQuart = 'ease-in-quart',
  EaseOutQuart = 'ease-out-quart',
  EaseInOutQuart = 'ease-in-out-quart',

  EaseInQuint = 'ease-in-quint',
  EaseOutQuint = 'ease-out-quint',
  EaseInOutQuint = 'ease-in-out-quint',

  EaseInSine = 'ease-in-sine',
  EaseOutSine = 'ease-out-sine',
  EaseInOutSine = 'ease-in-out-sine',

  Linear = 'linear',
}

export enum Animations {
  FadeIn = 'fade-in',
  FadeOut = 'fade-out',
  SlideDown = 'slide-down',
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right',
  SlideUp = 'slide-up',
  Scale = 'scale',
  Skew = 'skew',
  Rotate = 'rotate',
  Opacity = 'opacity',
  None = 'none',
}

export enum AnimationIterations {
  Infinite = 'infinite',
}
export type AnimationTiming = {
  readonly duration?: number;
  readonly delay?: number;
  readonly easing?: AnimationEasings;
  readonly iterations?: number | string;
};

export type Animation = {
  readonly from?: ContainerProps;
  readonly name?: Animations;
  readonly paused?: boolean;
  readonly to?: ContainerProps;
  readonly timing?: AnimationTiming;
};
