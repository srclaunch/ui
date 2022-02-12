import { AnimatedAppearanceProps } from './appearance';
import { AnimatedTextProps } from './text';
import { TransformProps } from './transform';
export declare type AnimationTiming = {
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
export declare type AnimationTimingProps = {
    readonly timing?: AnimationTiming;
};
export declare type Animation = AnimatedTextProps & AnimationTimingProps & AnimatedAppearanceProps & TransformProps;
export declare type AnimationProps = {
    /**
     * The animation to apply to the component.
     */
    readonly animation?: Animation | readonly Animation[];
} & TransformProps;
//# sourceMappingURL=index.d.ts.map