import { SimpleInterpolation } from 'styled-components';
import { Background, Color } from '../../types';
import { BackgroundRepeat } from '../../types/appearance/background';
export declare function getBackgroundColorStyle(color?: Color, opacity?: number): SimpleInterpolation;
export declare function getBackgroundImageRepeatStyle(repeat: BackgroundRepeat): SimpleInterpolation;
export declare function getBackgroundImageStyle(image: Background['image']): SimpleInterpolation;
export declare function getBackgroundStyles(background?: Background): SimpleInterpolation;
export declare const BackgroundStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    readonly background?: Background | undefined;
}, any>>;
//# sourceMappingURL=background.d.ts.map