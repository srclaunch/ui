import { BackgroundColors } from './background';
import { BorderColors } from './border';
import { ForegroundColors } from './foreground';
export declare enum Colors {
    Black = "var(--color-black-rgb)",
    Default = "var(--color-default-rgb)",
    Error = "var(--color-error-rgb)",
    Info = "var(--color-info-rgb)",
    Inherit = "inherit",
    Primary = "var(--color-primary-rgb)",
    Secondary = "var(--color-secondary-rgb)",
    Success = "var(--color-success-rgb)",
    Transparent = "transparent",
    Warning = "var(--color-warning-rgb)",
    White = "var(--color-white-rgb)"
}
export declare enum ContrastColors {
    Black = "var(--color-black-contrast-rgb)",
    Default = "var(--color-default-contrast-rgb)",
    Error = "var(--color-error-contrast-rgb)",
    Info = "var(--color-info-contrast-rgb)",
    Primary = "var(--color-primary-contrast-rgb)",
    Secondary = "var(--color-secondary-contrast-rgb)",
    Success = "var(--color-success-contrast-rgb)",
    Warning = "var(--color-warning-contrast-rgb)",
    White = "var(--color-white-contrast-rgb)"
}
export declare type Color = BackgroundColors | BorderColors | Colors | ContrastColors | ForegroundColors | string;
//# sourceMappingURL=color.d.ts.map