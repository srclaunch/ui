import { TransformProps } from './transform';
import { AnimatedAppearanceProps } from './appearance';
import { AnimatedTextProps } from './text';
export declare type AnimationTiming = {
    /**
     * The duration of the animation.
     */
    duration?: number;
    /**
     * The delay of the animation.
     */
    delay?: number;
    /**
     * The easing of the animation.
     */
    easing?: string;
};
export declare type AnimationTimingProps<T = {}> = {
    timing?: AnimationTiming;
} & T;
export declare type Animation<T = {}> = AnimatedAppearanceProps<AnimatedTextProps<AnimationTimingProps<TransformProps<T>>>>;
export declare type AnimationProps<T = {}> = TransformProps<{
    /**
     * The animation to apply to the component.
     */
    animation?: Animation | Animation[];
}> & T;
//# sourceMappingURL=index.d.ts.map