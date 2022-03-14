import { Color } from './color';
export declare enum ElementBorderColors {
    InputControl = "var(--border-color-input-control-rgb)"
}
export declare enum BorderColorShade {
    Lightest = "var(--border-color-lightest-rgb)",
    Lighter = "var(--border-color-lighter-rgb)",
    Light = "var(--border-color-light-rgb)",
    Default = "var(--border-color-default-rgb)",
    Dark = "var(--border-color-dark-rgb)",
    Darker = "var(--border-color-darker-rgb)",
    Darkest = "var(--border-color-darkest-rgb)"
}
export declare enum BorderColors {
    InputControl = "var(--border-color-input-control-rgb)",
    Lightest = "var(--border-color-lightest-rgb)",
    Lighter = "var(--border-color-lighter-rgb)",
    Light = "var(--border-color-light-rgb)",
    Default = "var(--border-color-default-rgb)",
    Dark = "var(--border-color-dark-rgb)",
    Darker = "var(--border-color-darker-rgb)",
    Darkest = "var(--border-color-darkest-rgb)",
    Black = "var(--color-black-rgb)",
    BlackContrast = "var(--color-black-contrast-rgb)",
    Error = "var(--color-error-rgb)",
    ErrorContrast = "var(--color-error-contrast-rgb)",
    Info = "var(--color-info-rgb)",
    InfoContrast = "var(--color-info-contrast-rgb)",
    Primary = "var(--color-primary-rgb)",
    PrimaryContrast = "var(--color-primary-contrast-rgb)",
    Secondary = "var(--color-primary-rgb)",
    SecondaryContrast = "var(--color-secondary-contrast-rgb)",
    Success = "var(--color-success-rgb)",
    SuccessContrast = "var(--color-success-contrast-rgb)",
    Transparent = "transparent",
    Warning = "var(--color-warning-rgb)",
    WarningContrast = "var(--color-warning-contrast-rgb)",
    White = "var(--color-white-rgb)",
    WhiteContrast = "var(--color-white-contrast-rgb)"
}
export declare type BorderColor = BorderColors | Color;
export declare enum BorderStyle {
    Dashed = "dashed",
    Dotted = "dotted",
    Double = "double",
    Groove = "groove",
    Inset = "inset",
    None = "none",
    Outset = "outset",
    Ridge = "ridge",
    Solid = "solid",
    Wavy = "wavy"
}
export declare type Border = {
    readonly all?: {
        readonly color: BorderColor;
        readonly style?: BorderStyle;
        readonly width?: string | number;
    };
    readonly bottom?: {
        readonly color: BorderColor;
        readonly style?: BorderStyle;
        readonly width?: string | number;
    };
    readonly left?: {
        readonly color: BorderColor;
        readonly style?: BorderStyle;
        readonly width?: string | number;
    };
    readonly right?: {
        readonly color: BorderColor;
        readonly style?: BorderStyle;
        readonly width?: string | number;
    };
    readonly top?: {
        readonly color: BorderColor;
        readonly style?: BorderStyle;
        readonly width?: string | number;
    };
};
export declare type BorderRadius = {
    readonly all?: string | number;
    readonly bottomLeft?: string | number;
    readonly bottomRight?: string | number;
    readonly topLeft?: string | number;
    readonly topRight?: string | number;
};
//# sourceMappingURL=border.d.ts.map