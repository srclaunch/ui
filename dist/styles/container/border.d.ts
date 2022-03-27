import { SimpleInterpolation } from 'styled-components';
import { Border, BorderStyle, Color } from '../../types';
export declare function getBorderDirectionProperty(direction: 'all' | 'top' | 'right' | 'bottom' | 'left'): string;
export declare function getBorderColorStyle(color: Color, direction: 'all' | 'top' | 'right' | 'bottom' | 'left'): SimpleInterpolation;
export declare function getBorderStyleStyle(direction: 'all' | 'top' | 'right' | 'bottom' | 'left', style?: BorderStyle): SimpleInterpolation;
export declare function getBorderWidthStyle(width: string | number, direction: 'all' | 'top' | 'right' | 'bottom' | 'left'): import("styled-components").FlattenSimpleInterpolation;
export declare function getBorderStyle(border: Border['all'], direction?: 'all' | 'bottom' | 'left' | 'right' | 'top'): SimpleInterpolation;
export declare function getBorderStyles(border?: Border): SimpleInterpolation;
export declare const BorderStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    readonly border?: Border | undefined;
}, any>>;
//# sourceMappingURL=border.d.ts.map