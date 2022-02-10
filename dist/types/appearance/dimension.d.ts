import { Size } from './size';
export declare type DimensionValue = Size | string | number;
export declare type HeightProps<P = {}> = {
    height?: DimensionValue;
    maxHeight?: DimensionValue;
    minHeight?: DimensionValue;
} & P;
export declare type WidthProps<P = {}> = {
    maxWidth?: DimensionValue;
    minWidth?: DimensionValue;
    width?: DimensionValue;
} & P;
export declare type DimensionProps<P = {}> = HeightProps<WidthProps<{
    size?: Size;
}>> & P;
//# sourceMappingURL=dimension.d.ts.map