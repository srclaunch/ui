import { Amount } from '../proportion';
import { Color } from './color';
import { Size } from './size';
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
export declare type BorderColor = BorderColors | string;
export declare enum BorderStyle {
    Dotted = "dotted",
    Solid = "solid"
}
export declare type BorderStyleProps = {
    readonly color: Color;
    readonly style?: BorderStyle;
    readonly width?: Amount | Size | number;
};
export declare type BorderDirectionProps = {
    readonly bottom?: BorderStyleProps;
    readonly left?: BorderStyleProps;
    readonly right?: BorderStyleProps;
    readonly top?: BorderStyleProps;
};
export declare type BorderRadiusCornerProps = {
    readonly bottomLeft?: Amount | Size | number;
    readonly bottomRight?: Amount | Size | number;
    readonly topLeft?: Amount | Size | number;
    readonly topRight?: Amount | Size | number;
};
export declare type BorderProps = {
    readonly border?: BorderStyleProps | BorderDirectionProps;
    readonly borderRadius?: (Amount | Size | number) | BorderRadiusCornerProps;
};
//# sourceMappingURL=border.d.ts.map