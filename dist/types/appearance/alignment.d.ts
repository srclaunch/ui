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
export declare type Alignment = {
    fill?: Fill;
    orientation?: Orientation;
    horizontal?: AlignHorizontal;
    vertical?: AlignVertical;
};
//# sourceMappingURL=alignment.d.ts.map