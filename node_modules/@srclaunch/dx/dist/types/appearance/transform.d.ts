export declare enum TransformOrigin {
    TopLeft = "top left",
    TopRight = "top right",
    Top = "top",
    BottomLeft = "bottom left",
    BottomRight = "bottom right",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
    Center = "center"
}
export declare type Rotate = {
    readonly angle: number | string;
    readonly x?: number | string;
    readonly y?: number | string;
    readonly z?: number | string;
};
export declare type Scale = {
    readonly x?: number | string;
    readonly y?: number | string;
    readonly z?: number | string;
};
export declare type Skew = {
    readonly x?: number | string;
    readonly y?: number | string;
};
export declare type Translate = {
    readonly x?: number | string;
    readonly y?: number | string;
};
export declare type Transform = {
    readonly origin?: TransformOrigin | number | string;
    readonly rotate?: Rotate;
    readonly scale?: Scale;
    readonly skew?: Skew;
    readonly translate?: Translate;
};
//# sourceMappingURL=transform.d.ts.map