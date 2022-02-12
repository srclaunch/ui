import { Color } from './color';
import { DepthShadow } from './depth';
export declare type BoxShadowDetails = {
    readonly blurRadius?: number;
    readonly color?: Color;
    readonly offsetX?: number;
    readonly offsetY?: number;
    readonly opacity?: number;
    readonly spreadRadius?: number;
};
export declare type BoxShadow = DepthShadow | BoxShadowDetails | readonly BoxShadowDetails[];
export declare type BoxShadowProps = {
    readonly boxShadow?: BoxShadow;
};
//# sourceMappingURL=box-shadow.d.ts.map