import { Fill } from './fill';
export declare enum AlignHorizontal {
    Baseline = "baseline",
    Center = "center",
    Default = "default",
    Left = "start",
    Right = "end",
    SpaceAround = "space-around",
    SpaceBetween = "space-between",
    SpaceEvenly = "space-evenly",
    Stretch = "stretch"
}
export declare enum AlignVertical {
    Baseline = "baseline",
    Bottom = "end",
    Center = "center",
    Default = "default",
    SpaceAround = "space-around",
    SpaceBetween = "space-between",
    SpaceEvenly = "space-evenly",
    Stretch = "stretch",
    Top = "start"
}
export declare enum Orientation {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum Overflow {
    ClipVertical = "clip-vertical",
    ClipHorizontal = "clip-horizontal",
    ClipBoth = "clip-both",
    Hidden = "hidden",
    ScrollVertical = "scroll-vertical",
    ScrollHorizontal = "scroll-horizontal",
    ScrollBoth = "scroll-both",
    Visible = "visible"
}
export declare type Alignment = {
    readonly fill?: Fill;
    readonly orientation?: Orientation;
    readonly overflow?: Overflow;
    readonly horizontal?: AlignHorizontal;
    readonly vertical?: AlignVertical;
};
//# sourceMappingURL=alignment.d.ts.map