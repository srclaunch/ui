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
export declare type AlignmentProps = {
    readonly alignContent?: Align;
    readonly alignItems?: Align;
    readonly alignSelf?: Align;
    readonly grow?: boolean;
    readonly lineWrap?: boolean;
    readonly shrink?: boolean;
    readonly orientation?: Orientation.Horizontal | Orientation.Vertical;
};
//# sourceMappingURL=alignment.d.ts.map