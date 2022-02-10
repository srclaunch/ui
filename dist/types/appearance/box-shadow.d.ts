import { Color } from './color';
import { DepthShadow } from './depth';
export declare type BoxShadowDetails = {
    blurRadius?: number;
    color?: Color;
    offsetX?: number;
    offsetY?: number;
    opacity?: number;
    spreadRadius?: number;
};
export declare type BoxShadow = DepthShadow | BoxShadowDetails | BoxShadowDetails[];
export declare type BoxShadowProps<T = {}> = {
    boxShadow?: BoxShadow;
} & T;
//# sourceMappingURL=box-shadow.d.ts.map