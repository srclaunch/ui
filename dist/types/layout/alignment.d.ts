export declare enum Align {
    Bottom = "flex-end",
    Center = "center",
    Left = "flex-start",
    Right = "flex-end",
    SpaceAround = "space-around",
    SpaceBetween = "space-between",
    SpaceEvenly = "space-evenly",
    Stretch = "stretch",
    Top = "flex-start",
    Justify = "justify"
}
export declare enum Orientation {
    Diagonal = "diagonal",
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare type AlignmentProps<T = {}> = {
    alignContent?: Align;
    alignItems?: Align;
    alignSelf?: Align;
    orientation?: Orientation.Horizontal | Orientation.Vertical;
} & T;
//# sourceMappingURL=alignment.d.ts.map