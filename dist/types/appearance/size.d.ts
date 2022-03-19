export declare enum Amount {
    None = "var(--amount-none)",
    Least = "var(--amount-least)",
    Less = "var(--amount-less)",
    Default = "var(--amount-default)",
    More = "var(--amount-more)",
    Most = "var(--amount-most)",
    All = "var(--amount-all)"
}
export declare enum Sizes {
    Smallest = "var(--size-smallest)",
    Smaller = "var(--size-smaller)",
    Small = "var(--size-small)",
    Default = "var(--size-default)",
    Large = "var(--size-large)",
    Larger = "var(--size-larger)",
    Largest = "var(--size-largest)"
}
export declare type Size = {
    readonly height?: string | number;
    readonly maxHeight?: string | number;
    readonly maxWidth?: string | number;
    readonly minHeight?: string | number;
    readonly minWidth?: string | number;
    readonly width?: string | number;
};
//# sourceMappingURL=size.d.ts.map