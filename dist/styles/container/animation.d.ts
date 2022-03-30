import { SimpleInterpolation } from 'styled-components';
import { Animation } from '../../types/index';
export declare function getAnimationKeyframes(animation: Animation, name: string): SimpleInterpolation;
export declare function getAnimationStyles(animations?: Animation[]): SimpleInterpolation;
export declare const AnimationStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    readonly animation?: Animation[] | undefined;
}, any>>;
//# sourceMappingURL=animation.d.ts.map