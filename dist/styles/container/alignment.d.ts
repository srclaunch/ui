import { SimpleInterpolation } from 'styled-components';
import { Alignment, Overflow, Size } from '../../types';
export declare function getFillStyles(alignment?: Alignment, size?: Size): SimpleInterpolation;
export declare function getHorizontalAlignStyle(alignment?: Alignment, size?: Size): SimpleInterpolation;
export declare function getVerticalAlignStyle(alignment?: Alignment): SimpleInterpolation;
export declare function getOverflowStyle(overflow?: Overflow): SimpleInterpolation;
export declare const AlignmentStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    readonly alignment?: Alignment | undefined;
}, any>>;
//# sourceMappingURL=alignment.d.ts.map